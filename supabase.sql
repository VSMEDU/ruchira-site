create table if not exists public.orders (
  id text primary key,
  created_at timestamptz default now(),
  status text not null default 'new',
  source text not null default 'stripe',
  customer jsonb,
  items jsonb,
  subtotal integer,
  tax integer,
  total integer,
  currency text,
  payment_intent text,
  raw jsonb
);

create index if not exists orders_status_created_at_idx on public.orders (status, created_at desc);
