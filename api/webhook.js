const { WebhooksHelper } = require('square');
const { getSupabase } = require('./_supabase');

async function readRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = Buffer.alloc(0);
    req.on('data', (chunk) => {
      data = Buffer.concat([data, chunk]);
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed');
    return;
  }

  const signatureKey = process.env.SQUARE_WEBHOOK_SIGNATURE_KEY;
  const notificationUrl = process.env.SQUARE_WEBHOOK_URL;

  if (!signatureKey) {
    res.status(500).send('Webhook signature key not configured');
    return;
  }
  if (!notificationUrl) {
    res.status(500).send('Webhook notification URL not configured');
    return;
  }

  // Read raw body before any parsing
  const rawBody = await readRawBody(req);
  const requestBody = rawBody.toString('utf8');
  const signatureHeader = req.headers['x-square-hmacsha256-signature'] || '';

  // Verify Square webhook signature
  let isValid = false;
  try {
    isValid = await WebhooksHelper.verifySignature({
      requestBody,
      signatureHeader,
      signatureKey,
      notificationUrl
    });
  } catch (err) {
    res.status(400).send(`Signature verification error: ${err.message}`);
    return;
  }

  if (!isValid) {
    res.status(400).send('Invalid webhook signature');
    return;
  }

  // Parse event
  let event;
  try {
    event = JSON.parse(requestBody);
  } catch (_) {
    res.status(400).send('Invalid JSON body');
    return;
  }

  // Only process payment.updated events
  if (event.type !== 'payment.updated') {
    res.status(200).json({ received: true });
    return;
  }

  const payment = event.data?.object?.payment;
  if (!payment) {
    res.status(200).json({ received: true });
    return;
  }

  // Only act on COMPLETED payments
  if (payment.status !== 'COMPLETED') {
    res.status(200).json({ received: true });
    return;
  }

  // Upsert confirmed order to Supabase
  const { client: supabase, error: supabaseError } = getSupabase();
  if (!supabase) {
    res.status(500).send(supabaseError || 'Supabase not configured');
    return;
  }

  const order = {
    id: payment.id,
    status: 'new',
    source: 'square',
    total: payment.amount_money?.amount || null,
    currency: (payment.amount_money?.currency || 'USD').toLowerCase(),
    payment_intent: payment.id,
    raw: payment
  };

  const { error: dbError } = await supabase.from('orders').upsert(order, { onConflict: 'id' });
  if (dbError) {
    res.status(500).send(`Supabase error: ${dbError.message}`);
    return;
  }

  res.status(200).json({ received: true });
};

module.exports.config = {
  api: {
    bodyParser: false
  }
};

