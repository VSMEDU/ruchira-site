const { createClient } = require('@supabase/supabase-js');

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return { client: null, error: 'Supabase env not configured' };
  }

  const client = createClient(url, key, {
    auth: { persistSession: false }
  });

  return { client, error: null };
}

module.exports = { getSupabase };
