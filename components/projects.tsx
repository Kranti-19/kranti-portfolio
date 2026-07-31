import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/site-data'

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -left-32 -z-10 size-[22rem] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="A collection of full-stack and frontend applications showcasing my development skills."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 80}
              className="glass flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {project.blurb}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 pt-6">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl border border-border py-3 text-center text-sm font-semibold transition-all hover:bg-secondary"
                >
                  <div className="flex items-center justify-center gap-2">
                    <GithubIcon className="size-4" />
                    View Source
                  </div>
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl bg-primary py-3 text-center text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  Live Demo
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}