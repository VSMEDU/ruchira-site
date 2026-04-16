import nodemailer from 'nodemailer';

const {
  MAILGUN_SMTP_USER,
  MAILGUN_SMTP_PASSWORD,
  CATERING_TO_EMAIL
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
  const validationError = validateBody(body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  if (!MAILGUN_SMTP_USER || !MAILGUN_SMTP_PASSWORD || !CATERING_TO_EMAIL) {
    console.error('Missing env vars:', { MAILGUN_SMTP_USER: !!MAILGUN_SMTP_USER, MAILGUN_SMTP_PASSWORD: !!MAILGUN_SMTP_PASSWORD, CATERING_TO_EMAIL: !!CATERING_TO_EMAIL });
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const text = [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Phone: ${body.phone}`,
    `Address: ${body.address || 'N/A'}`,
    `Event date: ${body.event_date}`,
    `Event time: ${body.event_time}`,
    `Guests: ${body.guests || 'N/A'}`,
    `Additional info: ${body.notes || 'N/A'}`
  ].join('\n');

  const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false,
    auth: {
      user: MAILGUN_SMTP_USER,
      pass: MAILGUN_SMTP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: MAILGUN_SMTP_USER,
      to: CATERING_TO_EMAIL,
      subject: `New Catering Request — ${body.name} | ${body.event_date}`,
      text,
      replyTo: body.email
    });

    console.log('Catering email sent successfully to', CATERING_TO_EMAIL);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Catering SMTP error:', err.message, err.code);
    return res.status(500).json({
      error: err.message || 'Failed to send email',
      debug: { code: err.code || null }
    });
  }
}
