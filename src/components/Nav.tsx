'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  const navClass = [scrolled ? 'scrolled' : '', mobileOpen ? 'mobile-open' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <nav id="main-nav" className={navClass || undefined}>
      <a href="#" className="nav-logo">
        honest tech factory<span className="dot">.</span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#servicios" onClick={closeMobile}>Servicios</a>
        </li>
        <li>
          <a href="#proceso" onClick={closeMobile}>Proceso</a>
        </li>
        <li>
          <a href="#portfolio" onClick={closeMobile}>Trabajo</a>
        </li>
        <li>
          <a href="#manifesto" onClick={closeMobile}>Nosotros</a>
        </li>
        {mobileOpen && (
          <li>
            <a
              href="https://wa.me/34660104026"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
              onClick={closeMobile}
            >
              Hablamos →
            </a>
          </li>
        )}
      </ul>
      <a
        href="https://wa.me/34660104026"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
      >
        Hablamos →
      </a>
      <button
        className="nav-mobile-toggle"
        onClick={() => setMobileOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? 'cerrar' : 'menú'}
      </button>
    </nav>
  )
}
