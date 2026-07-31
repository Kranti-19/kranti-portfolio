import { Code, Database, Layers, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { profile } from '@/lib/site-data'

const pillars = [
  {
    icon: Layers,
    title: 'End-to-end thinking',
    body: 'Comfortable owning a feature from database schema through API design to the final interaction on screen.',
  },
  {
    icon: Code,
    title: 'Strong fundamentals',
    body: 'Data structures, algorithms and OOP are the tools I reach for when a problem needs a real solution, not a patch.',
  },
  {
    icon: Database,
    title: 'Data-first design',
    body: 'I model data before writing endpoints, using MongoDB or MySQL depending on what the problem actually needs.',
  },
  {
    icon: Sparkles,
    title: 'Detail on the surface',
    body: 'Responsive layouts, accessible markup and smooth motion—the small things people feel but never mention.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 size-[26rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who enjoys building complete web applications."
          description="I enjoy solving real-world problems by building responsive, scalable, and user-friendly applications using modern web technologies."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Reveal className="glass flex flex-col justify-center gap-4 rounded-3xl p-6">
            {profile.bio.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-7 text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}

            <p className="font-mono text-sm text-primary">
              {'// currently: building, learning, and improving every day.'}
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={index * 80}
                className="glass rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <pillar.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-base font-semibold">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {pillar.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}