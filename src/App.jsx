import { HashRouter as BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect, createContext, useContext } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import ExperienceDetail from './pages/ExperienceDetail'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Resume from './pages/Resume'
import Github from './pages/Github'
import Other from './pages/Other'

// ─── Theme Context ────────────────────────────────────────
export const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="noise" />
      <Navbar />
      <Routes>
        <Route path="/"                    element={<Home />} />
        <Route path="/experience"          element={<Experience />} />
        <Route path="/experience/:id"      element={<ExperienceDetail />} />
        <Route path="/projects"            element={<Projects />} />
        <Route path="/projects/:id"        element={<ProjectDetail />} />
        <Route path="/resume"              element={<Resume />} />
        <Route path="/github"              element={<Github />} />
        <Route path="/other"               element={<Other />} />
      </Routes>
    </>
  )
}

export default function App() {
  // Default to dark theme; persist to localStorage
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
    }
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <BrowserRouter>
        <div className="min-h-screen bg-cream dark:bg-noir text-ink dark:text-warm-100 transition-colors duration-300 font-mono">
          <Layout />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}
