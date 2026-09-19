import {
  achievements,
  education,
  experiences,
  languages,
  profile,
  skills,
} from '@/data/profile'
import { ArrowLeft, Download, Mail, Phone } from 'lucide-react'

export function ResumePage() {
  return (
    <div className="min-h-screen bg-[#fbfbf9] text-[#1a1a1a]">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14 print:px-0 print:py-0">
        <div className="mb-8 flex items-center justify-between print:hidden">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2d8b8b] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </a>
          <a
            href={profile.resumeUrl}
            download
            data-testid="resume-download"
            className="inline-flex items-center gap-2 rounded-full bg-[#2d8b8b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#246f6f]"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>

        <header className="border-b border-[#e2e2df] pb-6">
          <h1 className="font-harmond text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-[#2d8b8b]">
            {profile.title} · {profile.subtitle}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#4a4a4a]">
            <a href={profile.emailHref} className="inline-flex items-center gap-1.5 hover:underline">
              <Mail className="h-3.5 w-3.5" />
              {profile.email}
            </a>
            <a href={profile.phoneHref} className="inline-flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5" />
              {profile.phone}
            </a>
            <span>{profile.location}</span>
          </div>
        </header>

        <section className="mt-6">
          <p className="text-sm leading-relaxed text-[#333]">{profile.summary}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2d8b8b]">
            Experience
          </h2>
          <div className="mt-4 space-y-6">
            {experiences.map((job) => (
              <div key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-harmond text-xl font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <span className="text-sm text-[#666]">{job.period}</span>
                </div>
                <p className="text-sm font-medium text-[#2d8b8b]">{job.company}</p>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-[#333]">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#999]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2d8b8b]">
            Education
          </h2>
          <div className="mt-4 space-y-3">
            {education.map((ed) => (
              <div key={ed.school + ed.degree} className="flex flex-wrap justify-between gap-x-4">
                <div>
                  <h3 className="font-harmond text-base font-semibold tracking-tight">
                    {ed.school}
                  </h3>
                  <p className="text-sm text-[#333]">{ed.degree}</p>
                </div>
                <span className="text-sm text-[#666]">{ed.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2d8b8b]">
            Core Skills
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#333]">{skills.join(' · ')}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2d8b8b]">
            Achievements
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#333]">
            {achievements.map((a) => (
              <li key={a.title} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#999]" />
                <span>
                  <span className="font-semibold">{a.title}</span> — {a.body}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 pb-10 print:pb-0">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2d8b8b]">
            Languages
          </h2>
          <p className="mt-3 text-sm text-[#333]">
            {languages.map((l) => `${l.name} (${l.level})`).join(' · ')}
          </p>
        </section>
      </div>
    </div>
  )
}
