const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    res.status(500).send('Webhook secret not configured');
    return;
  }

  const sig = req.headers['stripe-signature'];
  const rawBody = await readRawBody(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, secret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  if (event.type === 'checkout.session.completed') {
    res.status(200).json({ received: true });
    return;
  }

  if (event.type === 'payment_intent.succeeded') {
    res.status(200).json({ received: true });
    return;
  }

  if (event.type === 'charge.refunded') {
    res.status(200).json({ received: true });
    return;
  }

  res.status(200).json({ received: true });
};
