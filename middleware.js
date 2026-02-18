import { NextResponse } from 'next/server';

export const config = {
  matcher: '/((?!api/|assets/|_next/|favicon.ico).*)'
};

export function middleware(request) {
  const pinCookie = request.cookies.get('site_pin_ok');
  const path = request.nextUrl.pathname;

  if (path === '/lock.html') {
    return NextResponse.next();
  }

  if (pinCookie && pinCookie.value === '1') {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = '/lock.html';
  url.searchParams.set('redirect', path);
  return NextResponse.redirect(url);
}
