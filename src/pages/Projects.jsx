import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/portfolioData'

// ─── Arrow icons ──────────────────────────────────────────
function ChevronLeft()  { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15,18 9,12 15,6"/></svg> }
function ChevronRight() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9,18 15,12 9,6"/></svg> }

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused]   = useState(false)
  const [direction, setDir]   = useState(1) // 1=forward, -1=back (for potential animation)

  const total = projects.length

  const goTo = useCallback((idx) => {
    setCurrent((idx + total) % total)
  }, [total])

  const prev = () => { setDir(-1); goTo(current - 1) }
  const next = () => { setDir(1);  goTo(current + 1) }

  // Auto-advance every 5s unless paused
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => { setDir(1); goTo(current + 1) }, 5000)
    return () => clearInterval(t)
  }, [current, paused, goTo])

  const proj = projects[current]

  return (
    <div className="page-wrapper">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12 stagger">
          <p className="section-label mb-3">Work</p>
          <h1 className="page-title">Projects</h1>
          <div className="divider" />
        </div>

        {/* ── Slideshow ──────────────────────────────────── */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slide */}
          <div key={proj.id} className="animate-fade-in">
            <div className="card overflow-hidden">

              {/* Image */}
              <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />

                {/* Slide counter */}
                <div className="absolute top-4 right-4 text-[10px] tracking-widest text-warm-100/70">
                  {String(current + 1).padStart(2,'0')} / {String(total).padStart(2,'0')}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-warm-100 leading-tight">
                      {proj.name}
                    </h2>
                    <p className="text-xs tracking-wide text-amber dark:text-amber-light mt-1">
                      {proj.tagline}
                    </p>
                  </div>

                  {/* More Info button */}
                  <Link to={`/projects/${proj.id}`} className="btn-primary shrink-0">
                    More Info
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="2" y1="6" x2="10" y2="6"/>
                      <polyline points="7,3 10,6 7,9"/>
                    </svg>
                  </Link>
                </div>

                <p className="text-sm text-warm-500 dark:text-warm-400 leading-relaxed mb-5 max-w-lg">
                  {proj.summary}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[10px] tracking-widest uppercase px-2 py-1
                      border border-warm-200 dark:border-warm-800 text-warm-500 dark:text-warm-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Controls ───────────────────────────────── */}
          <div className="flex items-center justify-between mt-5">

            {/* Dot indicators */}
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > current ? 1 : -1); goTo(i) }}
                  className={`transition-all duration-300 rounded-full
                    ${i === current
                      ? 'w-6 h-1.5 bg-amber dark:bg-amber-light'
                      : 'w-1.5 h-1.5 bg-warm-300 dark:bg-warm-700 hover:bg-warm-400 dark:hover:bg-warm-600'
                    }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 border border-warm-200 dark:border-warm-800
                  text-warm-400 hover:border-amber hover:text-amber
                  dark:text-warm-500 dark:hover:border-amber-light dark:hover:text-amber-light
                  transition-all duration-200 flex items-center justify-center"
                aria-label="Previous project"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 border border-warm-200 dark:border-warm-800
                  text-warm-400 hover:border-amber hover:text-amber
                  dark:text-warm-500 dark:hover:border-amber-light dark:hover:text-amber-light
                  transition-all duration-200 flex items-center justify-center"
                aria-label="Next project"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* ── Project grid (below slider) ─────────────── */}
        <div className="mt-16">
          <p className="section-label mb-6">All Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger">
            {projects.map((p, i) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className={`card p-5 flex gap-4 hover:border-warm-300 dark:hover:border-warm-700 group
                  ${i === current ? 'border-amber dark:border-amber' : ''}`}
              >
                <div className="w-16 h-16 overflow-hidden shrink-0 bg-warm-100 dark:bg-warm-800">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-lg text-ink dark:text-warm-100 group-hover:text-amber dark:group-hover:text-amber-light transition-colors leading-tight">
                    {p.name}
                  </p>
                  <p className="text-[10px] tracking-wide text-warm-400 dark:text-warm-500 mt-0.5 truncate">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
