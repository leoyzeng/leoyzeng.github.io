import { profile } from '../data/portfolioData'

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
      <polyline points="7,10 12,15 17,10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
}

export default function Resume() {
  return (
    <div className="page-wrapper">
      <div className="max-w-xl mx-auto stagger">

        {/* Header */}
        <p className="section-label mb-3">Document</p>
        <h1 className="page-title mb-2">Résumé</h1>
        <div className="divider" />

        <p className="text-sm text-warm-500 dark:text-warm-400 leading-relaxed mb-12 max-w-sm">
          A one-page summary of my background, skills, and experience.
          Last updated 2024.
        </p>

        {/* Card */}
        <div className="card p-8 md:p-12 flex flex-col items-center text-center gap-6">

          {/* PDF icon */}
          <div className="w-20 h-24 border border-warm-200 dark:border-warm-800 flex flex-col items-center justify-center relative">
            <div className="absolute top-0 right-0 w-0 h-0"
              style={{ borderStyle:'solid', borderWidth:'0 12px 12px 0', borderColor:'transparent var(--tw-border-opacity) transparent transparent' }}
            />
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber dark:text-amber-light">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
            <span className="text-[9px] tracking-widest uppercase text-warm-400 mt-2">PDF</span>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink dark:text-warm-100">{profile.name}</h2>
            <p className="text-xs tracking-wide text-warm-400 dark:text-warm-500 mt-1">{profile.title} · {profile.location}</p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex-1 justify-center"
            >
              <EyeIcon /> View
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="btn-primary flex-1 justify-center"
            >
              <DownloadIcon /> Download
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="text-[10px] tracking-wide text-warm-400 dark:text-warm-600 text-center mt-6">
          Place your resume PDF at <code className="text-amber">/public/resume.pdf</code>
        </p>

      </div>
    </div>
  )
}
