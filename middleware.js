import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const hasPin = request.cookies.get('site_pin_ok')?.value === '1';

  if (hasPin) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/api/')) {
    return new NextResponse(JSON.stringify({ error: 'Locked' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const redirectUrl = new URL('/lock.html', request.url);
  redirectUrl.searchParams.set('redirect', pathname);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: []
};
