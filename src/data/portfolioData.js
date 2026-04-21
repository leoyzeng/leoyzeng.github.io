// ─────────────────────────────────────────────────────────
// portfolioData.js — Edit this file to populate your portfolio
// ─────────────────────────────────────────────────────────

export const profile = {
  name: 'Your Name',
  title: 'Software Engineer',
  location: 'Waterloo, ON',
  bio: `I build things for the web — sometimes elegantly,
        always deliberately. I care about the details that
        most people skip and the systems that hold everything together.`,
  avatar: 'https://picsum.photos/seed/portrait/400/400',
  github: 'https://github.com/yourusername',
  resumeUrl: '/resume.pdf',
}

// ─── Experience ───────────────────────────────────────────
export const experiences = [
  {
    id: 'acme-corp',
    company: 'Acme Corp',
    role: 'Senior Software Engineer',
    period: '2022 — Present',
    location: 'Waterloo, ON',
    tags: ['React', 'Node.js', 'AWS', 'TypeScript'],
    summary: 'Led platform team building real-time data pipelines and developer tooling.',
    description: `As a Senior Software Engineer at Acme Corp, I led the platform team in
building high-throughput real-time data pipelines processing over 10M events per day.

I architected a new developer tooling suite that reduced onboarding time from two weeks
to two days. I drove the migration from a monolithic Rails application to a set of
Node.js microservices, improving deployment frequency by 4×.

Key contributions:
— Designed the event-streaming architecture using Kafka and AWS Kinesis
— Established frontend architecture standards adopted across 6 product teams
— Mentored 3 junior engineers through their first production deployments
— Reduced AWS infrastructure costs by 32% through right-sizing and spot instances`,
  },
  {
    id: 'beta-studios',
    company: 'Beta Studios',
    role: 'Full Stack Developer',
    period: '2020 — 2022',
    location: 'Toronto, ON',
    tags: ['Python', 'Django', 'PostgreSQL', 'React'],
    summary: 'Built backend services and customer-facing features for a B2B SaaS product.',
    description: `At Beta Studios I owned the backend for a B2B SaaS product serving 200+
enterprise clients. I built a Django REST API that became the backbone of three product lines.

Key contributions:
— Built a real-time reporting dashboard used by clients daily
— Reduced API p95 latency from 800ms to under 120ms through query optimization
— Implemented an automated billing integration with Stripe
— Wrote comprehensive test coverage bringing the codebase from 40% to 86%`,
  },
  {
    id: 'gamma-labs',
    company: 'Gamma Labs',
    role: 'Junior Developer (Intern)',
    period: '2019 — 2020',
    location: 'Remote',
    tags: ['JavaScript', 'Vue.js', 'Firebase'],
    summary: 'Frontend intern building features for a consumer mobile-web application.',
    description: `My first professional role — a remote internship at Gamma Labs where I
built frontend features for a Vue.js consumer app with 50K monthly active users.

Key contributions:
— Built the onboarding flow that improved new-user activation by 18%
— Maintained and extended the component library used across the product
— Wrote documentation that reduced team question-answering overhead`,
  },
]

// ─── Projects ─────────────────────────────────────────────
export const projects = [
  {
    id: 'project-alpha',
    name: 'Project Alpha',
    tagline: 'Real-time collaborative whiteboarding',
    tech: ['React', 'WebSockets', 'Canvas API', 'Node.js'],
    image: 'https://picsum.photos/seed/alpha/900/560',
    summary: 'A low-latency collaborative canvas for distributed teams.',
    description: `Project Alpha is a real-time collaborative whiteboard built for
distributed engineering teams. It supports simultaneous editing with sub-100ms sync
latency via a custom CRDT-based conflict resolution layer.

Features include: freehand drawing, shapes, sticky notes, multiplayer cursors,
export to PNG/SVG, and a structured undo/redo history.`,
    links: {
      github: 'https://github.com/yourusername/project-alpha',
      live: 'https://project-alpha.example.com',
    },
  },
  {
    id: 'project-beta',
    name: 'Project Beta',
    tagline: 'ML-powered code review assistant',
    tech: ['Python', 'FastAPI', 'OpenAI API', 'GitHub Actions'],
    image: 'https://picsum.photos/seed/beta/900/560',
    summary: 'A GitHub bot that leaves structured, consistent code review comments.',
    description: `Project Beta is a GitHub Actions bot that integrates into pull request
workflows to provide automated, context-aware code review feedback.

The system processes diffs in under 4 seconds per file and achieves an 87% acceptance
rate on its suggestions.`,
    links: {
      github: 'https://github.com/yourusername/project-beta',
      live: null,
    },
  },
  {
    id: 'project-gamma',
    name: 'Project Gamma',
    tagline: 'Open-source SQLite migration toolkit',
    tech: ['TypeScript', 'SQLite', 'Node.js', 'CLI'],
    image: 'https://picsum.photos/seed/gamma/900/560',
    summary: 'A developer tool for safely managing SQLite schema migrations.',
    description: `Project Gamma is an open-source CLI toolkit for managing SQLite schema
migrations. It provides a Rails-inspired migration DSL, dry-run mode, and rollback
support with full transactional safety.

The project has 400+ GitHub stars and is used in several open-source projects.`,
    links: {
      github: 'https://github.com/yourusername/project-gamma',
      live: null,
    },
  },
  {
    id: 'project-delta',
    name: 'Project Delta',
    tagline: 'Privacy-first local-first note-taking app',
    tech: ['Electron', 'React', 'SQLite', 'CRDTs'],
    image: 'https://picsum.photos/seed/delta/900/560',
    summary: 'A local-first markdown notes app with optional encrypted sync.',
    description: `Project Delta is a desktop note-taking application built with Electron
and React. All notes are stored locally in SQLite, with optional end-to-end encrypted
sync via a minimal self-hostable backend.`,
    links: {
      github: 'https://github.com/yourusername/project-delta',
      live: 'https://delta-app.example.com',
    },
  },
]

// ─── Photos (Other page) ──────────────────────────────────
// Each photo can have an optional `caption` field.
// Omit `caption` (or set it to null) to show no caption.
// `span` controls grid sizing: 'wide' = 2 columns, default = 1 column
export const photos = [
  {
    src: 'https://picsum.photos/seed/photo1/800/600',
    alt: 'Photo 1',
    span: 'wide',
    caption: 'Somewhere in the mountains, late autumn.',
  },
  {
    src: 'https://picsum.photos/seed/photo2/600/700',
    alt: 'Photo 2',
    span: 'default',
    // no caption
  },
  {
    src: 'https://picsum.photos/seed/photo3/600/700',
    alt: 'Photo 3',
    span: 'default',
    caption: 'Corner of a favourite café.',
  },
  {
    src: 'https://picsum.photos/seed/photo4/800/600',
    alt: 'Photo 4',
    span: 'wide',
    caption: 'Aerial view, taken from the 40th floor.',
  },
  {
    src: 'https://picsum.photos/seed/photo5/600/700',
    alt: 'Photo 5',
    span: 'default',
  },
  {
    src: 'https://picsum.photos/seed/photo6/600/700',
    alt: 'Photo 6',
    span: 'default',
    caption: 'Golden hour.',
  },
  {
    src: 'https://picsum.photos/seed/photo7/800/600',
    alt: 'Photo 7',
    span: 'wide',
  },
  {
    src: 'https://picsum.photos/seed/photo8/600/700',
    alt: 'Photo 8',
    span: 'default',
    caption: 'Detail shot.',
  },
]
