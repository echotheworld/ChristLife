import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth_token')?.value
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = request.nextUrl.pathname === '/admin'

  // If trying to access admin routes without auth token
  if (isAdminRoute && !authToken && !isLoginPage) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  // If trying to access login page with valid auth token
  if (isLoginPage && authToken) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*'
} 