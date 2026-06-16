'use client'

import { useEffect, useState } from 'react'
import { Lock } from 'lucide-react'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors duration-300 ${
        scrolled
          ? 'border-border bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/55'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-[var(--g3)]">
        <a
          href="#top"
          className="font-serif text-xl italic tracking-tight text-foreground"
        >
          Athenaeum
        </a>
        <div className="flex items-center gap-[var(--g3)]">
          <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            MMXXVI
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-sm bg-band px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-band-foreground transition-opacity duration-200 hover:opacity-85"
          >
            <Lock className="size-3.5" aria-hidden="true" />
            Authenticate
          </button>
        </div>
      </div>
    </header>
  )
}
