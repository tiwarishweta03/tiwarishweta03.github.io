import { AnimeReveal } from '@/components/AnimeReveal'
import { languages, profile } from '@/data/profile'
import { Heart } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20 md:px-8 md:py-28">
      <AnimeReveal>
        <p className="text-xs uppercase tracking-[0.22em] text-primary" data-anime-item>
          About
        </p>
        <h2
          className="mt-3 max-w-2xl font-harmond text-[clamp(2.2rem,6vw,3.6rem)] font-semibold leading-tight tracking-tight text-text"
          data-anime-item
        >
          Warm authority. Clear systems. Human outcomes.
        </h2>
      </AnimeReveal>

      <AnimeReveal className="mt-10" delay={80} staggerMs={110}>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className="glass-panel rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-6 md:p-8"
            data-anime-item
          >
            <p className="text-sm text-primary">{profile.title}</p>
            <p className="mt-5 text-sm leading-relaxed text-text-muted">
              Approachable in the room, rigorous in the system — the blend multinational teams
              trust when culture and performance have to move together.
            </p>
            <a
              href={profile.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-solid mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold transition hover:bg-primary-deep"
            >
              Send a message
            </a>
            <div className="mt-6">
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-text-muted">
                Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="rounded-full border border-glass-border bg-bg-elevated/80 px-3 py-1.5 text-sm text-text-muted"
                  >
                    {lang.name} · {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[1.5rem] bg-secondary p-5 text-white sm:rounded-[2rem] sm:p-6 md:p-8"
            data-anime-item
          >
            <div className="absolute right-5 top-5 text-white/80 sm:right-6 sm:top-6">
              <Heart className="h-5 w-5 fill-current" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">Philosophy</p>
            <p className="mt-5 font-harmond text-2xl leading-snug tracking-tight sm:text-3xl">
              Business goals meet human experience.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-[15px]">
              I design engagement systems, leadership pipelines, and learning journeys that
              stick — then measure what changed. At Indian Oil Adani Gas I partner with leaders on
              organizational development and talent management, building on HRBP foundations from
              Escorts Kubota. At XLRI I&apos;m sharpening digital HR transformation so people
              decisions stay both human and measurable.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-6 text-sm">
              <div>
                <p className="text-white/70">Focus</p>
                <p className="mt-1 font-medium">OD · Engagement · Talent</p>
              </div>
              <div>
                <p className="text-white/70">Mode</p>
                <p className="mt-1 font-medium">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </AnimeReveal>
    </section>
  )
}
