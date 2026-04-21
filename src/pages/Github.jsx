import { profile } from '../data/portfolioData'

function GithubIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

const highlights = [
  { label: 'Repositories',   value: '32' },
  { label: 'Contributions',  value: '1,240' },
  { label: 'Stars Earned',   value: '412' },
  { label: 'Pull Requests',  value: '180+' },
]

// Replace these with your actual pinned repos
const pinnedRepos = [
  { name: 'project-alpha',  desc: 'Real-time collaborative whiteboard',         lang: 'TypeScript', stars: 87,  forks: 12 },
  { name: 'project-gamma',  desc: 'SQLite migration toolkit',                   lang: 'TypeScript', stars: 412, forks: 38 },
  { name: 'project-beta',   desc: 'ML-powered code review bot',                 lang: 'Python',     stars: 54,  forks: 6  },
  { name: 'project-delta',  desc: 'Local-first encrypted note-taking app',      lang: 'JavaScript', stars: 108, forks: 14 },
]

const langColors = {
  TypeScript:  '#3178c6',
  JavaScript:  '#f1e05a',
  Python:      '#3572A5',
  Go:          '#00ADD8',
  Rust:        '#dea584',
}

export default function Github() {
  const username = profile.github.replace('https://github.com/', '')

  return (
    <div className="page-wrapper">
      <div className="max-w-3xl mx-auto stagger">

        {/* Header */}
        <p className="section-label mb-3">Open Source</p>
        <h1 className="page-title mb-2">GitHub</h1>
        <div className="divider" />

        {/* Profile card */}
        <div className="card p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-warm-200 dark:bg-warm-800 flex items-center justify-center text-warm-400 dark:text-warm-600 shrink-0">
            <GithubIcon />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="font-display text-3xl text-ink dark:text-warm-100">@{username}</h2>
            <p className="text-sm text-warm-400 dark:text-warm-500 mt-1 mb-4">{profile.title} · {profile.location}</p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Profile
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 2H2v8h8V7M7 2h3v3M10 2L6 6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {highlights.map(h => (
            <div key={h.label} className="card p-4 text-center">
              <div className="font-display text-3xl text-amber dark:text-amber-light">{h.value}</div>
              <div className="text-[10px] tracking-widest uppercase text-warm-400 dark:text-warm-500 mt-1">{h.label}</div>
            </div>
          ))}
        </div>

        {/* Pinned repos */}
        <p className="section-label mb-4">Pinned Repositories</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger">
          {pinnedRepos.map(repo => (
            <a
              key={repo.name}
              href={`${profile.github}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 hover:border-warm-300 dark:hover:border-warm-700 group transition-all duration-200 block"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-mono text-sm text-ink dark:text-warm-100 group-hover:text-amber dark:group-hover:text-amber-light transition-colors truncate">
                  {repo.name}
                </h3>
              </div>
              <p className="text-xs text-warm-400 dark:text-warm-500 leading-relaxed mb-4 min-h-[2.5rem]">
                {repo.desc}
              </p>
              <div className="flex items-center gap-4 text-[10px] text-warm-400 dark:text-warm-600">
                {/* Language dot */}
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: langColors[repo.lang] ?? '#888' }}
                  />
                  {repo.lang}
                </span>
                {/* Stars */}
                <span className="flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                  {repo.stars}
                </span>
                {/* Forks */}
                <span className="flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/>
                    <path d="M6 9v1a2 2 0 002 2h8a2 2 0 002-2V9"/>
                    <line x1="12" y1="12" x2="12" y2="15"/>
                  </svg>
                  {repo.forks}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Note */}
        <p className="text-[10px] tracking-wide text-warm-400 dark:text-warm-600 text-center mt-8">
          Update <code className="text-amber">pinnedRepos</code> in <code className="text-amber">Github.jsx</code> with your real repos.
        </p>

      </div>
    </div>
  )
}
