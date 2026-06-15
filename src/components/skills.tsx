'use client'

import { useEffect, useState } from 'react'
import type { GitHubRepo } from '@/lib/github'
import { getRepos, getLanguages } from '@/lib/github'

const languageColors: Record<string, string> = {
  Python: 'var(--retro-blue)',
  TypeScript: 'var(--retro-red)',
  JavaScript: 'var(--retro-yellow)',
  Blade: 'var(--retro-green)',
  HTML: 'var(--retro-red)',
  CSS: 'var(--retro-blue)',
}

const languageTextColors: Record<string, string> = {
  JavaScript: 'var(--retro-text)',
  Python: '#ffffff',
  TypeScript: '#ffffff',
  Blade: '#ffffff',
  HTML: '#ffffff',
  CSS: '#ffffff',
}

export default function Skills() {
  const [languages, setLanguages] = useState<string[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    getRepos()
      .then((repos: GitHubRepo[]) => {
        setLanguages(getLanguages(repos))
        setLoaded(true)
      })
      .catch(() => setLoaded(true))
  }, [])

  return (
    <section className="bg-[var(--retro-screen-dim)] px-4 py-16 border-t-4 border-[var(--retro-border)]">
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-lg text-[var(--retro-text)] font-bold text-retro-shadow-blue mb-6 tracking-wider text-center"
          style={{ fontFamily: 'var(--font-pixel)' }}
        >
          &gt; SKILLS.LANG
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {!loaded ? (
            <>
              <div className="h-8 w-24 bg-[var(--retro-bg-body)] border-2 border-[var(--retro-border)] animate-pulse" />
              <div className="h-8 w-28 bg-[var(--retro-bg-body)] border-2 border-[var(--retro-border)] animate-pulse" />
              <div className="h-8 w-20 bg-[var(--retro-bg-body)] border-2 border-[var(--retro-border)] animate-pulse" />
            </>
          ) : (
            languages.map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 text-sm font-bold pixel-border shadow-[3px_3px_0_0_var(--retro-border)] transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-default"
                style={{
                  background: languageColors[lang] || 'var(--retro-border)',
                  color: languageTextColors[lang] || 'var(--retro-text-light)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {lang}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
