import Mailgun from 'mailgun.js';
import formData from 'form-data';

const {
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN,
  MAILGUN_FROM_EMAIL,
  CATERING_TO_EMAIL,
  MAILGUN_API_BASE
} = process.env;

function validateBody(body) {
  const required = ['name', 'email', 'phone', 'event_date', 'event_time'];
  for (const key of required) {
    if (!body[key] || String(body[key]).trim().length === 0) {
      return `Missing ${key}`;
    }
  }
  return null;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const error = validateBody(body);
  if (error) {
    return res.status(400).json({ error });
  }

  const emailConfigured = MAILGUN_API_KEY && MAILGUN_DOMAIN && MAILGUN_FROM_EMAIL && CATERING_TO_EMAIL;

  if (!emailConfigured) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const lines = [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Phone: ${body.phone}`,
    `Address: ${body.address || 'N/A'}`,
    `Event date: ${body.event_date}`,
    `Event time: ${body.event_time}`,
    `Guests: ${body.guests || 'N/A'}`,
    `Additional info: ${body.notes || 'N/A'}`
  ];

  const mailgun = new Mailgun(formData);
  const primaryBase = MAILGUN_API_BASE || 'https://api.mailgun.net';
  const fallbackBase = primaryBase === 'https://api.mailgun.net'
    ? 'https://api.eu.mailgun.net'
    : 'https://api.mailgun.net';

  const makeClient = (base) =>
    mailgun.client({
      username: 'api',
      key: MAILGUN_API_KEY,
      url: base
    });

  try {
    try {
      const mg = makeClient(primaryBase);
      await mg.messages.create(MAILGUN_DOMAIN, {
        to: CATERING_TO_EMAIL,
        from: MAILGUN_FROM_EMAIL,
        subject: `New Catering Request — ${body.name}`,
        text: lines.join('\n'),
        'h:Reply-To': body.email
      });
    } catch (err) {
      const status = err?.response?.status;
      const message = err?.response?.body?.message || err?.message || '';
      const isNotFound = status === 404 || /not found/i.test(message);
      if (!isNotFound) {
        throw err;
      }
      const mgFallback = makeClient(fallbackBase);
      await mgFallback.messages.create(MAILGUN_DOMAIN, {
        to: CATERING_TO_EMAIL,
        from: MAILGUN_FROM_EMAIL,
        subject: `New Catering Request — ${body.name}`,
        text: lines.join('\n'),
        'h:Reply-To': body.email
      });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Catering request failed:', err);
    const body = err?.response?.body;
    const detailed =
      body?.message ||
      body?.details ||
      body?.error ||
      err?.message ||
      (body ? JSON.stringify(body) : null);
    return res.status(500).json({
      error: detailed || 'Failed to send request',
      debug: {
        primaryBase,
        fallbackBase,
        status: err?.response?.status || null
      }
    });
  }
}
