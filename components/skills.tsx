import { Braces, LayoutTemplate, Server, Database, Brain, Wrench } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/site-data'

const icons = {
  Languages: Braces,
  Frontend: LayoutTemplate,
  Backend: Server,
  Databases: Database,
  'Core CS Fundamentals': Brain,
  Tools: Wrench,
} as const

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title="The technologies I work with."
          description="A curated toolkit of technologies I use to build modern, scalable web applications."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.title as keyof typeof icons] ?? Braces

            return (
              <Reveal
                key={group.title}
                delay={index * 80}
                className="group glass relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="text-base font-semibold">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}