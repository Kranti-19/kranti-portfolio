'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { CircleCheck, LoaderCircle, Mail, Send, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { submitContact, type ContactState } from '@/app/actions'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { profile } from '@/lib/site-data'

const initialState: ContactState = { status: 'idle', message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-70"
    >
      {pending ? (
        <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        <Send className="size-4" aria-hidden="true" />
      )}
      {pending ? 'Sending…' : 'Send message'}
    </button>
  )
}

const fieldClass =
  'w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-4 focus:ring-primary/15'

export function Contact() {
  const [state, formAction] = useActionState(submitContact, initialState)

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-primary/10 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Whether it is a role, a freelance project or a question about my work — my inbox is open."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass flex flex-col gap-4 rounded-3xl p-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-4 transition-colors hover:bg-secondary"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Email</span>
                <span className="block truncate text-sm font-semibold">{profile.email}</span>
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-4 transition-colors hover:bg-secondary"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <GithubIcon className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">GitHub</span>
                <span className="block text-sm font-semibold">@krantiholkar</span>
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-4 transition-colors hover:bg-secondary"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                <LinkedinIcon className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">LinkedIn</span>
                <span className="block text-sm font-semibold">in/krantiholkar</span>
              </span>
            </a>
            <a
              href={profile.resume}
              download
              className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-4 transition-colors hover:bg-secondary"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <Download className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Résumé</span>
                <span className="block text-sm font-semibold">Download PDF</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={120} className="glass rounded-3xl p-7">
            {state.status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
                <CircleCheck className="size-12 text-primary" aria-hidden="true" />
                <p className="text-lg font-bold">Message sent</p>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {state.message}
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      aria-invalid={Boolean(state.errors?.name)}
                      aria-describedby={state.errors?.name ? 'name-error' : undefined}
                      className={fieldClass}
                    />
                    {state.errors?.name ? (
                      <p id="name-error" className="text-xs text-destructive">
                        {state.errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      aria-invalid={Boolean(state.errors?.email)}
                      aria-describedby={state.errors?.email ? 'email-error' : undefined}
                      className={fieldClass}
                    />
                    {state.errors?.email ? (
                      <p id="email-error" className="text-xs text-destructive">
                        {state.errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about the role, project or idea…"
                    aria-invalid={Boolean(state.errors?.message)}
                    aria-describedby={state.errors?.message ? 'message-error' : undefined}
                    className={`${fieldClass} resize-y`}
                  />
                  {state.errors?.message ? (
                    <p id="message-error" className="text-xs text-destructive">
                      {state.errors.message}
                    </p>
                  ) : null}
                </div>

                {state.status === 'error' ? (
                  <p role="status" className="text-sm text-destructive">
                    {state.message}
                  </p>
                ) : null}

                <SubmitButton />
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
