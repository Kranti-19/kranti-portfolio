import { Briefcase } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/lib/site-data'

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I have put the stack to work."
          description="Hands-on product work, shipped and deployed—not just coursework."
        />

        <ol className="relative mt-8 flex flex-col gap-5 border-l border-border pl-6 sm:pl-8">
          {experience.map((job, index) => (
            <li key={job.company} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-6 -left-[1.8rem] grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20 sm:-left-[2.3rem]"
              >
                <Briefcase className="h-4 w-4" />
              </span>

              <Reveal
                delay={index * 80}
                className="glass rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold">
                    {job.role}
                  </h3>

                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                    {job.period}
                  </span>
                </div>

                <p className="mt-2 text-sm font-semibold text-primary">
                  {job.company}
                </p>

                <ul className="mt-4 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-7 text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}