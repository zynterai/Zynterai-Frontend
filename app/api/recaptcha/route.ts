import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) {
    return NextResponse.json(
      { success: false, error: 'Server reCAPTCHA secret key is not configured.' },
      { status: 500 }
    )
  }

  let token = ''
  try {
    const body = (await req.json()) as { token?: string }
    token = body.token ?? ''
  } catch {
    token = ''
  }

  if (!token) {
    return NextResponse.json({ success: false, error: 'Missing reCAPTCHA token.' }, { status: 400 })
  }

  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token }).toString(),
  })

  const verifyJson = (await verifyRes.json().catch(() => null)) as
    | null
    | {
        success?: boolean
        'error-codes'?: string[]
      }

  if (!verifyRes.ok || !verifyJson) {
    return NextResponse.json({ success: false, error: 'reCAPTCHA verification failed.' }, { status: 502 })
  }

  if (!verifyJson.success) {
    return NextResponse.json(
      { success: false, error: 'reCAPTCHA verification rejected.', codes: verifyJson['error-codes'] ?? [] },
      { status: 400 }
    )
  }

  return NextResponse.json({ success: true })
}

