import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createSessionToken } from '@/utils/auth'

export async function POST(request: Request) {
  try {
    const { username } = await request.json()

    // Create a session token
    const token = await createSessionToken(username)

    // Set the cookie
    cookies().set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 8 * 60 * 60, // 8 hours
      path: '/'
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 401 }
    )
  }
} 