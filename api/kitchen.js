const { getSupabase } = require('./_supabase');

module.exports = async (req, res) => {
  const { client: supabase, error: supabaseError } = getSupabase();
  if (!supabase) {
    res.status(500).json({ error: supabaseError || 'Supabase not configured' });
    return;
  }

  if (req.method === 'GET') {
    const status = req.query.status;
    let query = supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query;
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(200).json({ orders: data || [] });
    return;
  }

  if (req.method === 'PATCH') {
    let body = req.body;
    if (!body || typeof body === 'string') {
      try {
        body = JSON.parse(body || '{}');
      } catch (err) {
        res.status(400).json({ error: 'Invalid JSON' });
        return;
      }
    }

    const { id, status } = body || {};
    if (!id || !status) {
      res.status(400).json({ error: 'Missing id or status' });
      return;
    }

    const { data, error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', id)
      .select('*')
      .single();

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json({ order: data });
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
};
