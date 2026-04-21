import { useParams, Link, Navigate } from 'react-router-dom'
import { experiences } from '../data/portfolioData'

export default function ExperienceDetail() {
  const { id } = useParams()
  const exp = experiences.find(e => e.id === id)
  if (!exp) return <Navigate to="/experience" replace />

  const idx    = experiences.indexOf(exp)
  const prev   = experiences[idx - 1]
  const next   = experiences[idx + 1]

  return (
    <div className="page-wrapper">
      <div className="max-w-2xl mx-auto stagger">

        {/* Back */}
        <Link
          to="/experience"
          className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-warm-400 hover:text-amber dark:hover:text-amber-light transition-colors mb-10"
        >
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="10" y1="6" x2="2" y2="6"/>
            <polyline points="5,3 2,6 5,9"/>
          </svg>
          Experience
        </Link>

        {/* Header */}
        <p className="section-label mb-2">{exp.period}</p>
        <h1 className="page-title mb-1">{exp.company}</h1>
        <p className="font-mono text-sm text-amber dark:text-amber-light mb-1">{exp.role}</p>
        <p className="text-xs tracking-wide text-warm-400 dark:text-warm-600 mb-6">{exp.location}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {exp.tags.map(tag => (
            <span key={tag} className="text-[10px] tracking-widest uppercase px-2 py-1
              border border-warm-200 dark:border-warm-800 text-warm-500 dark:text-warm-500">
              {tag}
            </span>
          ))}
        </div>

        <div className="divider" />

        {/* Description */}
        <div className="text-sm leading-8 text-warm-600 dark:text-warm-300 whitespace-pre-line mt-8 mb-16">
          {exp.description}
        </div>

        {/* Prev / Next navigation */}
        <div className="border-t border-warm-200 dark:border-warm-900 pt-8 flex justify-between">
          {prev ? (
            <Link to={`/experience/${prev.id}`} className="group flex flex-col gap-1">
              <span className="text-[10px] tracking-widest uppercase text-warm-400 group-hover:text-amber transition-colors">← Previous</span>
              <span className="font-display text-lg text-ink dark:text-warm-100 group-hover:text-amber dark:group-hover:text-amber-light transition-colors">{prev.company}</span>
            </Link>
          ) : <span />}
          {next && (
            <Link to={`/experience/${next.id}`} className="group flex flex-col gap-1 text-right">
              <span className="text-[10px] tracking-widest uppercase text-warm-400 group-hover:text-amber transition-colors">Next →</span>
              <span className="font-display text-lg text-ink dark:text-warm-100 group-hover:text-amber dark:group-hover:text-amber-light transition-colors">{next.company}</span>
            </Link>
          )}
        </div>

      </div>
    </div>
  )
}
