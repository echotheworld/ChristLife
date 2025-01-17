import { cookies } from 'next/headers'
import { jwtVerify, SignJWT } from 'jose'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key-min-32-chars-long!!!')

export async function createSessionToken(username: string): Promise<string> {
  const token = await new SignJWT({ username })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('8h')
    .setIssuedAt()
    .sign(SECRET_KEY)
  
  return token
}

export async function verifySessionToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY)
    return payload
  } catch (error) {
    return null
  }
}

export function setSessionCookie(token: string) {
  cookies().set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 8 * 60 * 60, // 8 hours
    path: '/'
  })
}

export function clearSessionCookie() {
  cookies().delete('auth_token')
} 