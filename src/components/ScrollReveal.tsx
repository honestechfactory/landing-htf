'use client'

import { useEffect, useRef, CSSProperties } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  immediate?: boolean
  className?: string
  style?: CSSProperties
}

export default function ScrollReveal({
  children,
  delay,
  immediate = false,
  className = '',
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (immediate) {
      const timer = setTimeout(() => el.classList.add('visible'), 100)
      return () => clearTimeout(timer)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate])

  const combinedStyle: CSSProperties = {
    ...(delay ? { transitionDelay: `${delay}s` } : {}),
    ...style,
  }

  return (
    <div
      ref={ref}
      className={`reveal${className ? ` ${className}` : ''}`}
      style={Object.keys(combinedStyle).length > 0 ? combinedStyle : undefined}
    >
      {children}
    </div>
  )
}
