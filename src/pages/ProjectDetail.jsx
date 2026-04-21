import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/portfolioData'

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 2H2v8h8V7M7 2h3v3M10 2L6 6"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const proj = projects.find(p => p.id === id)
  if (!proj) return <Navigate to="/projects" replace />

  const idx  = projects.indexOf(proj)
  const prev = projects[idx - 1]
  const next = projects[idx + 1]

  return (
    <div className="page-wrapper">
      <div className="max-w-3xl mx-auto stagger">

        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-warm-400 hover:text-amber dark:hover:text-amber-light transition-colors mb-10"
        >
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="10" y1="6" x2="2" y2="6"/>
            <polyline points="5,3 2,6 5,9"/>
          </svg>
          All Projects
        </Link>

        {/* Hero image */}
        <div className="relative overflow-hidden mb-8 border border-warm-200 dark:border-warm-800">
          <img
            src={proj.image}
            alt={proj.name}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Title + links */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
          <div>
            <p className="section-label mb-2">Project</p>
            <h1 className="page-title leading-none">{proj.name}</h1>
            <p className="font-mono text-sm text-amber dark:text-amber-light mt-2">{proj.tagline}</p>
          </div>

          {/* External links */}
          <div className="flex flex-col gap-2 shrink-0">
            {proj.links.github && (
              <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-[10px]">
                <GithubIcon /> GitHub
              </a>
            )}
            {proj.links.live && (
              <a href={proj.links.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-[10px]">
                Live Demo <ExternalIcon />
              </a>
            )}
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-4 mb-8">
          {proj.tech.map(t => (
            <span key={t} className="text-[10px] tracking-widest uppercase px-2 py-1
              border border-warm-200 dark:border-warm-800 text-warm-500 dark:text-warm-500">
              {t}
            </span>
          ))}
        </div>

        <div className="divider" />

        {/* Description */}
        <div className="text-sm leading-8 text-warm-600 dark:text-warm-300 whitespace-pre-line mt-8 mb-16">
          {proj.description}
        </div>

        {/* Prev / Next */}
        <div className="border-t border-warm-200 dark:border-warm-900 pt-8 flex justify-between">
          {prev ? (
            <Link to={`/projects/${prev.id}`} className="group flex flex-col gap-1">
              <span className="text-[10px] tracking-widest uppercase text-warm-400 group-hover:text-amber transition-colors">← Previous</span>
              <span className="font-display text-lg text-ink dark:text-warm-100 group-hover:text-amber dark:group-hover:text-amber-light transition-colors">{prev.name}</span>
            </Link>
          ) : <span />}
          {next && (
            <Link to={`/projects/${next.id}`} className="group flex flex-col gap-1 text-right">
              <span className="text-[10px] tracking-widest uppercase text-warm-400 group-hover:text-amber transition-colors">Next →</span>
              <span className="font-display text-lg text-ink dark:text-warm-100 group-hover:text-amber dark:group-hover:text-amber-light transition-colors">{next.name}</span>
            </Link>
          )}
        </div>

      </div>
    </div>
  )
}
