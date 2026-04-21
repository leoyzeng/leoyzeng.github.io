import { Link } from 'react-router-dom'
import { experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <div className="page-wrapper">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-16 stagger">
          <p className="section-label mb-3">Career</p>
          <h1 className="page-title">Experience</h1>
          <div className="divider" />
          <p className="text-sm text-warm-500 dark:text-warm-400 leading-relaxed max-w-lg">
            A timeline of roles, responsibilities, and the teams I've had the privilege to work with.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-warm-200 dark:bg-warm-800" />

          <div className="space-y-12 stagger">
            {experiences.map((exp, i) => (
              <div key={exp.id} className="relative pl-10 group">

                {/* Timeline dot */}
                <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2
                  ${i === 0
                    ? 'bg-amber border-amber dark:bg-amber-light dark:border-amber-light'
                    : 'bg-cream dark:bg-noir border-warm-300 dark:border-warm-700 group-hover:border-amber dark:group-hover:border-amber-light'
                  } transition-colors duration-300`}
                />

                {/* Content */}
                <div className="card p-6 group-hover:border-warm-300 dark:group-hover:border-warm-700 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl text-ink dark:text-warm-100 leading-tight">
                        {exp.company}
                      </h2>
                      <p className="text-xs tracking-wide text-amber dark:text-amber-light mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs tracking-widest text-warm-400 dark:text-warm-500 uppercase">
                        {exp.period}
                      </p>
                      <p className="text-[10px] tracking-wide text-warm-400 dark:text-warm-600 mt-0.5">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-warm-500 dark:text-warm-400 leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-[10px] tracking-widest uppercase px-2 py-1
                        border border-warm-200 dark:border-warm-800
                        text-warm-500 dark:text-warm-500">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to={`/experience/${exp.id}`} className="btn-primary text-[10px]">
                    Read more
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="2" y1="6" x2="10" y2="6"/>
                      <polyline points="7,3 10,6 7,9"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
