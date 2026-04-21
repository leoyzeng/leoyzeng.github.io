import { useState, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '../App'
import { experiences, projects, profile } from '../data/portfolioData'

// ─── Nav structure ────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  {
    label: 'Experience',
    path: '/experience',
    children: experiences.map(e => ({ label: e.company, sub: e.role, path: `/experience/${e.id}` })),
  },
  {
    label: 'Projects',
    path: '/projects',
    children: projects.map(p => ({ label: p.name, sub: p.tagline, path: `/projects/${p.id}` })),
  },
  { label: 'Resume', path: '/resume' },
  { label: 'GitHub', path: profile.github, external: true },
  { label: 'Other', path: '/other' },
]

// ─── Icons ───────────────────────────────────────────────
function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1"  x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  )
}
function HamburgerIcon({ open }) {
  return (
    <div className="flex flex-col justify-center items-center w-5 h-4 gap-1.5">
      <span className={`block h-px w-full bg-current transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
      <span className={`block h-px w-full bg-current transition-all duration-300 ${open ? 'opacity-0 w-0' : ''}`} />
      <span className={`block h-px w-full bg-current transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
    </div>
  )
}

// ─── Desktop nav item ─────────────────────────────────────
function NavItem({ item }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)
  const navigate = useNavigate()

  const handleEnter = () => { clearTimeout(closeTimer.current); setOpen(true) }
  const handleLeave = () => { closeTimer.current = setTimeout(() => setOpen(false), 120) }

  const baseCls = `text-[11px] tracking-[0.2em] uppercase font-mono transition-colors duration-150 pb-0.5`
  const activeCls = ({ isActive }) =>
    `${baseCls} ${isActive
      ? 'text-amber dark:text-amber-light border-b border-amber dark:border-amber-light'
      : 'text-warm-500 dark:text-warm-400 hover:text-ink dark:hover:text-warm-100 border-b border-transparent'
    }`

  // External link (GitHub)
  if (item.external) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseCls} text-warm-500 dark:text-warm-400 hover:text-amber dark:hover:text-amber-light border-b border-transparent hover:border-amber`}
      >
        {item.label} ↗
      </a>
    )
  }

  // No children — plain nav link
  if (!item.children) {
    return <NavLink to={item.path} className={activeCls}>{item.label}</NavLink>
  }

  // Has dropdown
  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        onClick={() => navigate(item.path)}
        className={`${baseCls} text-warm-500 dark:text-warm-400 hover:text-ink dark:hover:text-warm-100
          border-b border-transparent hover:border-ink dark:hover:border-warm-100
          flex items-center gap-1`}
      >
        {item.label}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <polyline points="2,3 5,7 8,3"/>
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-3 z-50 min-w-[200px] animate-slide-down">
          <div className="border border-warm-200 dark:border-warm-800 bg-cream dark:bg-warm-900 shadow-xl py-1
            border-t-2 border-t-amber dark:border-t-amber-light">
            {item.children.map(child => (
              <Link key={child.path} to={child.path} onClick={() => setOpen(false)}
                className="block px-4 py-2.5 group">
                <span className="block text-[11px] tracking-wide text-ink dark:text-warm-100
                  group-hover:text-amber dark:group-hover:text-amber-light transition-colors font-mono">
                  {child.label}
                </span>
                {child.sub && (
                  <span className="block text-[10px] tracking-wide text-warm-400 dark:text-warm-500
                    group-hover:text-warm-500 dark:group-hover:text-warm-400 transition-colors mt-0.5 truncate max-w-[180px]">
                    {child.sub}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────
export default function Navbar() {
  const { dark, setDark } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="
        flex items-center justify-between
        px-4 sm:px-6 md:px-12 h-16
        border-b border-warm-200 dark:border-warm-900
        bg-cream/90 dark:bg-noir/90 backdrop-blur-md
        transition-colors duration-300
      ">
        {/* Wordmark */}
        <Link to="/"
          className="font-display text-base sm:text-lg tracking-widest uppercase text-ink dark:text-warm-100
            hover:text-amber dark:hover:text-amber-light transition-colors duration-200">
          {profile.name}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map(item => <NavItem key={item.label} item={item} />)}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
            className="small-control p-2 text-warm-400 hover:text-amber dark:hover:text-amber-light transition-colors duration-200"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="md:hidden p-2 text-warm-400 hover:text-ink dark:hover:text-warm-100 transition-colors duration-200"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-warm-200 dark:border-warm-900
          bg-cream/95 dark:bg-noir/95 backdrop-blur-md animate-slide-down">
          {NAV_ITEMS.map(item => (
            <div key={item.label}>
              {item.external ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-6 py-4 text-[11px] tracking-widest uppercase
                    text-warm-500 dark:text-warm-400 hover:text-amber dark:hover:text-amber-light transition-colors"
                >
                  {item.label} ↗
                </a>
              ) : item.children ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(e => e === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-6 py-4
                      text-[11px] tracking-widest uppercase text-warm-500 dark:text-warm-400"
                  >
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"
                      className={`transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}>
                      <polyline points="2,3 5,7 8,3"/>
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="bg-paper dark:bg-warm-900 border-t border-warm-200 dark:border-warm-800">
                      {item.children.map(child => (
                        <Link key={child.path} to={child.path} onClick={() => setMobileOpen(false)}
                          className="flex items-center px-10 py-3 text-[11px] tracking-wide
                            text-warm-500 dark:text-warm-400 hover:text-amber dark:hover:text-amber-light transition-colors">
                          <span className="text-amber dark:text-amber-light mr-2 opacity-50">›</span>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.path} onClick={() => setMobileOpen(false)}
                  className="flex items-center px-6 py-4 text-[11px] tracking-widest uppercase
                    text-warm-500 dark:text-warm-400 hover:text-ink dark:hover:text-warm-100 transition-colors">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
