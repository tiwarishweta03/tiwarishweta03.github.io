import { About } from '@/components/About'
import { Connect } from '@/components/Connect'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Impact } from '@/components/Impact'
import { Nav } from '@/components/Nav'
import { ResumePage } from '@/components/ResumePage'
import { SiteBackdrop } from '@/components/SiteBackdrop'
import { useAnimeHover } from '@/hooks/useAnimeHover'
import { useRef } from 'react'

function isResumeRoute(): boolean {
  return window.location.pathname.replace(/\/+$/, '') === '/resume'
}

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null)
  useAnimeHover(rootRef)

  if (isResumeRoute()) {
    return <ResumePage />
  }

  return (
    <div ref={rootRef} className="relative min-h-screen bg-bg text-text">
      <SiteBackdrop />
      <div className="relative z-10">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <Hero />
          <About />
          <Impact />
          <Experience />
          <Connect />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
