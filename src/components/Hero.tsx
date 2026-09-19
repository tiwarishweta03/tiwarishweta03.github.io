import { profile } from '@/data/profile'
import { createTimeline, prefersReducedMotion, stagger } from '@/lib/anime'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

/**
 * Editorial HR hero — warm authority.
 * Portrait lives only as a ghost in SiteBackdrop; no framed photos here.
 */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const items = root.querySelectorAll<HTMLElement>('[data-hero-reveal]')

    const show = () => {
      items.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
        el.style.filter = 'none'
      })
    }

    if (prefersReducedMotion()) {
      show()
      return
    }

    items.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
    })

    const tl = createTimeline({
      defaults: { ease: 'out(4)' },
      onComplete: show,
    })

    tl.add(items, {
      opacity: [0, 1],
      y: [20, 0],
      duration: 650,
      delay: stagger(90),
    })

    // Safety: never leave CTAs invisible if timeline is interrupted (Strict Mode)
    const failsafe = window.setTimeout(show, 1600)

    return () => {
      window.clearTimeout(failsafe)
      tl.pause()
      show()
    }
  }, [])

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pb-20 pt-28 sm:px-5 md:px-8 md:pb-24 md:pt-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <p
          data-hero-reveal
          className="text-[11px] uppercase tracking-[0.28em] text-primary sm:text-xs"
        >
          People · Culture · Capability
        </p>

        <h1
          data-testid="hero-name"
          data-hero-reveal
          className="font-harmond mt-6 max-w-4xl text-[clamp(3.5rem,13vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.035em] text-text"
        >
          Shweta
          <br />
          Tiwari
        </h1>

        <div
          data-hero-reveal
          className="mt-8 flex max-w-2xl flex-col gap-4 border-l border-primary/50 pl-5 sm:mt-10 sm:pl-6"
        >
          <p className="font-display text-xl leading-snug text-text sm:text-2xl md:text-[1.75rem]">
            The kind of HR partner who makes leaders feel heard — and teams feel ready.
          </p>
          <p className="text-sm leading-relaxed text-text-muted sm:text-[15px]">
            {profile.title} at Indian Oil Adani Gas Pvt. Ltd. Designing organizational
            development, talent pipelines, and learning systems for organizations that measure
            culture as carefully as they measure growth.
          </p>
        </div>

        <div
          data-hero-reveal
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mt-12"
        >
          <a
            href={profile.emailHref}
            data-testid="hire-me"
            className="cta-solid group inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold shadow-sm transition hover:bg-primary-deep"
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Open to multinational HRBP roles
          </p>
        </div>

        <ul
          data-hero-reveal
          className="mt-14 grid grid-cols-2 gap-6 border-t border-glass-border pt-8 sm:grid-cols-4 sm:gap-4"
        >
          {[
            { k: '4+', v: 'Years HRBP' },
            { k: '1', v: 'Excellence Award' },
            { k: '3+', v: 'Flagship L&D' },
            { k: 'XLRI', v: 'Digital HR' },
          ].map((item) => (
            <li key={item.v}>
              <p className="font-harmond text-2xl text-primary sm:text-3xl">{item.k}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-text-muted">
                {item.v}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
