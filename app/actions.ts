'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Partial<Record<'name' | 'email' | 'message', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const errors: ContactState['errors'] = {}

  if (name.length < 2)
    errors.name = 'Please enter your name.'

  if (!EMAIL_RE.test(email))
    errors.email = 'Please enter a valid email address.'

  if (message.length < 10)
    errors.message = 'Tell me a little more (at least 10 characters).'

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please fix the highlighted fields and try again.',
      errors,
    }
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'krantimholkar@gmail.com',
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return {
      status: 'success',
      message: `Thanks ${name.split(' ')[0]} — your message has been sent successfully. I'll get back to you soon.`,
    }
  } catch (error) {
    console.error(error)

    return {
      status: 'error',
      message: 'Something went wrong. Please try again later.',
    }
  }
}