import { profile } from '@/data/profile'

/**
 * Whisper portrait — so faint visitors wonder if the page has a photo at all.
 * Slow opacity drift keeps it alive without competing with content.
 */
export function SiteBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden>
      <img
        src={profile.portraitClose}
        alt=""
        className="site-backdrop__img site-backdrop__img--a"
      />
      <img
        src={profile.portraitFull}
        alt=""
        className="site-backdrop__img site-backdrop__img--b"
      />
      <div className="site-backdrop__veil" />
    </div>
  )
}
