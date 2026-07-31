import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { education } from '@/lib/site-data'

export function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-24 py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 size-[22rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education"
          title="Academic Journey"
          description="My educational background in Information Technology and Computer Science."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal
              key={item.degree}
              delay={index * 80}
              className="glass flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                  {item.period}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {item.degree}
              </h3>

              <p className="mt-2 text-sm font-medium text-primary">
                {item.institute}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.score}
              </p>

              <div className="mt-5">
                <p className="mb-3 text-sm font-semibold">
                  Relevant Coursework
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}