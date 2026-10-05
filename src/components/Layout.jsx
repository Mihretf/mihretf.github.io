import { Link, NavLink } from 'react-router-dom'
import { MoonStar, SunMedium } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Research', href: '/research' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/contact' },
]

export default function Layout({ theme, onToggleTheme, children }) {
  return (
    <div className="portfolio-app" data-theme={theme}>
      <header className="site-header">
        <Link to="/" className="brand-wrap" aria-label="Go to homepage">
          <span className="brand-mark">MF</span>
          <span className="brand-name">Mihret Fekadu</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

      </header>

      <main className="page-shell">{children}</main>
    </div>
  )
}
