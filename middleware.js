export function middleware(request) {
  const { pathname } = new URL(request.url);
  const cookies = request.headers.get('cookie') || '';
  const hasPin = cookies.split(';').some(c => c.trim() === 'site_pin_ok=1');

  if (hasPin) return;

  if (pathname.startsWith('/api/')) {
    return new Response(JSON.stringify({ error: 'Locked' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const redirectUrl = new URL('/lock.html', request.url);
  redirectUrl.searchParams.set('redirect', pathname);
  return Response.redirect(redirectUrl.toString());
}

export const config = {
  matcher: []
};
