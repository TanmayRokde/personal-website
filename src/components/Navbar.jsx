import React from 'react'
import { NavLink } from 'react-router-dom'
import BrandSpark from './BrandSpark'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Tech Stack', to: '/tech-stack' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-center px-6 pt-6">
      <nav className="flex w-full max-w-6xl items-center justify-between gap-6 rounded-full border border-white/10 bg-gray-950/80 px-6 py-3 shadow-[0_0_25px_rgba(15,23,42,0.45)] backdrop-blur">
        <NavLink to="/" className="transition hover:opacity-90">
          <BrandSpark />
        </NavLink>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-white/60">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                [
                  'rounded-full px-4 py-2 transition',
                  isActive
                    ? 'bg-cyan-500 text-gray-950 shadow-[0_0_25px_rgba(6,182,212,0.55)]'
                    : 'text-white/70 hover:text-white hover:bg-white/10',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 text-sm">
          <span className="hidden text-white/50 sm:inline">
            Remote-first · Based in India
          </span>
          <a
            href="mailto:tanmayrokde@gmail.com"
            className="rounded-full border border-cyan-400/60 px-5 py-2 font-semibold text-cyan-200 transition hover:bg-cyan-500 hover:text-gray-950"
          >
            Let's talk
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
