import Image from 'next/image'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { profile, stats } from '@/lib/site-data'

const marqueeItems = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'Java',
  'JavaScript',
  'Python',
  'Git',
  'Postman',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 size-[26rem] rounded-full bg-primary/25 blur-3xl animate-blob" />
        <div className="absolute -top-16 right-[-6rem] size-[22rem] rounded-full bg-accent/25 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,var(--background)_70%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to full stack developer roles
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I&apos;m {profile.name}. <span className="text-gradient">{profile.role}</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              I design and ship end-to-end web applications with the MERN stack — clean interfaces on
              the front, dependable APIs and data models behind them.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              <Download className="size-4" aria-hidden="true" />
              Download résumé
            </a>
            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-xl border border-border bg-card/70 text-foreground transition-colors hover:bg-secondary"
              >
                <span className="sr-only">GitHub profile</span>
                <GithubIcon className="size-5" aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-xl border border-border bg-card/70 text-foreground transition-colors hover:bg-secondary"
              >
                <span className="sr-only">LinkedIn profile</span>
                <LinkedinIcon className="size-5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320} className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-4 py-4">
                <div className="text-xl font-bold text-gradient sm:text-2xl">{stat.value}</div>
                <div className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-[340px]">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" />
          <div className="glass animate-float rounded-[2rem] p-3">
            <Image
              src="/kranti-portrait.png"
              alt="Portrait of Kranti Holkar"
              width={640}
              height={640}
              priority
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />
            <div className="flex items-center justify-between gap-2 px-2 pt-3 pb-1">
              <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <MapPin className="size-3.5" aria-hidden="true" />
                {profile.location}
              </div>
              <div className="font-mono text-xs text-primary">{'{ MERN }'}</div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-3">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
