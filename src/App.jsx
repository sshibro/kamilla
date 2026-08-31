import { useEffect } from 'react'
import HomePage from './HomePage.jsx'
import { NotFoundPage, PrivacyPage } from './SecondaryPages.jsx'

const normalizePath = (path) => path.replace(/\/+$/, '') || '/'

export default function App() {
  const path = normalizePath(window.location.pathname)
  const page = path === '/' ? 'home' : path === '/privacy' ? 'privacy' : 'not-found'

  useEffect(() => {
    document.body.className = `${page}-page`
    document.documentElement.style.removeProperty('--dock-h')
    return () => {
      document.body.className = ''
    }
  }, [page])

  if (page === 'privacy') return <PrivacyPage />
  if (page === 'not-found') return <NotFoundPage />
  return <HomePage />
}
