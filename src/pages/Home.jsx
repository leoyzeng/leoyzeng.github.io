import { Link } from 'react-router-dom'
import { profile } from '../data/portfolioData'

export default function Home() {
  return (
    <div className="min-h-screen bg-cream dark:bg-noir transition-colors duration-300">
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">

        {/* Decorative background lines */}
        <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-[0.07]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, currentColor, currentColor 1px, transparent 1px, transparent 80px)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center stagger max-w-2xl">

          {/* Avatar */}
          <div className="relative mb-8">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-amber/40 ring-4 ring-cream dark:ring-noir shadow-2xl">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-warm-200 dark:border-warm-800 pointer-events-none" />
          </div>

          {/* Name */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-ink dark:text-warm-100 leading-none mb-3">
            {profile.name}
          </h1>

          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-amber" />
            <span className="section-label">{profile.title}</span>
            <span className="h-px w-8 bg-amber" />
          </div>

          {/* Location */}
          <p className="text-xs tracking-widest text-warm-400 dark:text-warm-500 uppercase mb-8">
            {profile.location}
          </p>

          {/* Bio */}
          <p className="font-mono text-sm font-light leading-relaxed text-warm-600 dark:text-warm-300 max-w-md whitespace-pre-line">
            {profile.bio}
          </p>

          {/* CTA links */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/experience" className="btn-primary">
              View Experience
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="2" y1="6" x2="10" y2="6"/>
                <polyline points="7,3 10,6 7,9"/>
              </svg>
            </Link>
            <Link to="/projects" className="btn-ghost">
              See Projects
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-current animate-pulse" />
        </div>
      </section>

      {/* ── Quick stats strip ────────────────────────────── */}
      <section className="border-t border-warm-200 dark:border-warm-900 px-6 md:px-24 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Projects Shipped', value: '20+' },
            { label: 'GitHub Stars',     value: '400+' },
            { label: 'Cups of Coffee',   value: '∞' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="font-display text-4xl text-amber dark:text-amber-light mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] tracking-widest uppercase text-warm-400 dark:text-warm-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
