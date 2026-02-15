const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
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

  const { client: supabase, error: supabaseError } = getSupabase();
  if (!supabase) {
    res.status(500).send(supabaseError || 'Supabase not configured');
    return;
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 100 });

    const items = (lineItems.data || []).map((item) => ({
      name: item.description,
      quantity: item.quantity,
      unit_amount: item.price?.unit_amount || 0,
      amount_total: item.amount_total || 0
    }));

    const order = {
      id: session.id,
      status: 'new',
      source: 'stripe',
      customer: {
        name: session.metadata?.name || '',
        phone: session.metadata?.phone || '',
        address: session.metadata?.address || '',
        timePref: session.metadata?.timePref || '',
        notes: session.metadata?.notes || '',
        orderType: session.metadata?.orderType || ''
      },
      items,
      subtotal: session.amount_subtotal || null,
      tax: session.total_details?.amount_tax || null,
      total: session.amount_total || null,
      currency: session.currency || 'usd',
      payment_intent: session.payment_intent || null,
      raw: session
    };

    const { error } = await supabase.from('orders').upsert(order, { onConflict: 'id' });
    if (error) {
      res.status(500).send(`Supabase error: ${error.message}`);
      return;
    }

    res.status(200).json({ received: true });
    return;
  }

  if (event.type === 'charge.refunded') {
    const charge = event.data.object;
    const paymentIntent = charge.payment_intent;
    if (paymentIntent) {
      await supabase
        .from('orders')
        .update({ status: 'refunded' })
        .eq('payment_intent', paymentIntent);
    }
    res.status(200).json({ received: true });
    return;
  }

  res.status(200).json({ received: true });
};

module.exports.config = {
  api: {
    bodyParser: false
  }
};
