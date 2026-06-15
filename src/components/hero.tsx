'use client'

import { useEffect, useState } from 'react'
import type { GitHubUser } from '@/lib/github'
import { getUser } from '@/lib/github'

export default function Hero() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [error, setError] = useState(false)
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    getUser()
      .then(setUser)
      .catch(() => setError(true))
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 1800)
    return () => clearTimeout(t)
  }, [])

  if (!booted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <p className="text-white text-4xl tracking-widest animate-pulse font-bold text-retro-shadow-red" style={{ fontFamily: 'var(--font-pixel)' }}>
            RETRO ARCADE
          </p>
          <p className="text-[var(--retro-yellow)] text-xl mt-4 text-retro-shadow-dark" style={{ fontFamily: 'var(--font-pixel)' }}>
            ERYren
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {['var(--retro-red)', 'var(--retro-yellow)', 'var(--retro-green)', 'var(--retro-blue)'].map((color, i) => (
              <div
                key={i}
                className="w-4 h-4 border-2 border-black"
                style={{
                  backgroundColor: color,
                  animation: `bootPulse 0.5s ease-in-out ${i * 0.15}s infinite alternate`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[var(--retro-bg-body)] px-4">
        <div className="gameboy-frame p-8 max-w-lg w-full text-center">
          <div className="flex justify-center gap-2 mb-6">
            {['▲', '▼', '◄', '►'].map((dir, idx) => {
              const colors = ['text-[var(--retro-red)]', 'text-[var(--retro-yellow)]', 'text-[var(--retro-green)]', 'text-[var(--retro-blue)]'];
              return (
                <span key={dir} className={`text-2xl font-bold ${colors[idx]}`}>{dir}</span>
              )
            })}
          </div>
          <h1 className="text-3xl text-[var(--retro-border)] mb-4 text-retro-shadow-red" style={{ fontFamily: 'var(--font-pixel)', fontSize: '14px' }}>
            ERYren
          </h1>
          <p className="text-xl text-[var(--retro-text)] font-semibold">Developer & Builder</p>
        </div>
      </section>
    )
  }

  if (!user) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[var(--retro-bg-body)] px-4">
        <div className="gameboy-frame p-8 max-w-lg w-full">
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 bg-[var(--retro-bg-body)] border-3 border-[var(--retro-border)] animate-pulse" />
            <div className="h-4 w-48 bg-[var(--retro-bg-body)] animate-pulse" />
            <div className="h-4 w-32 bg-[var(--retro-bg-body)] animate-pulse" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--retro-bg-body)] px-4 relative">
      {/* D-pad decoration top-left */}
      <div className="fixed top-6 left-6 opacity-40 hidden sm:block">
        <div className="dpad">
          <div className="dpad-cell up" />
          <div className="dpad-cell down" />
          <div className="dpad-cell left" />
          <div className="dpad-cell right" />
          <div className="dpad-cell center" />
        </div>
      </div>

      {/* A/B buttons decoration top-right */}
      <div className="fixed top-6 right-6 opacity-40 hidden sm:block">
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-[var(--retro-blue)] border-3 border-[var(--retro-border)] shadow-[2px_2px_0_0_var(--retro-blue-shadow)]" />
          <div className="w-8 h-8 rounded-full bg-[var(--retro-red)] border-3 border-[var(--retro-border)] shadow-[2px_2px_0_0_var(--retro-red-shadow)]" />
        </div>
      </div>

      <div className="gameboy-frame p-6 sm:p-8 max-w-lg w-full">
        {/* Screen inner glow */}
        <div className="text-center">
          <img
            src={user.avatar_url}
            alt="ERYren"
            className="w-24 h-24 mx-auto mb-6 border-3 border-[var(--retro-border)] image-rendering-pixelated shadow-[4px_4px_0_0_var(--retro-bg-body)]"
            style={{ imageRendering: 'pixelated' }}
          />

          <h1
            className="text-2xl sm:text-3xl text-[var(--retro-text)] mb-2 typewriter inline-block font-bold text-retro-shadow-yellow"
            style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(12px, 3vw, 18px)' }}
          >
            ERYren
          </h1>

          <p className="text-xl text-[var(--retro-text)] mb-6 mt-4 font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>
            {user.bio || '> Developer & Builder'}
          </p>

          <div className="flex justify-center gap-6 text-base" style={{ fontFamily: 'var(--font-mono)' }}>
            <div className="bg-[var(--retro-screen-dim)] border-2 border-[var(--retro-border)] px-3 py-1 shadow-[2px_2px_0_0_var(--retro-border)]">
              <span className="text-[var(--retro-red)] font-bold text-lg">{user.public_repos}</span>
              <span className="text-[var(--retro-text)] font-bold ml-1 text-sm">REPOS</span>
            </div>
            <div className="bg-[var(--retro-screen-dim)] border-2 border-[var(--retro-border)] px-3 py-1 shadow-[2px_2px_0_0_var(--retro-border)]">
              <span className="text-[var(--retro-green)] font-bold text-lg">{user.followers}</span>
              <span className="text-[var(--retro-text)] font-bold ml-1 text-sm">FOLOW</span>
            </div>
            <div className="bg-[var(--retro-screen-dim)] border-2 border-[var(--retro-border)] px-3 py-1 shadow-[2px_2px_0_0_var(--retro-border)]">
              <span className="text-[var(--retro-blue)] font-bold text-lg">{user.following}</span>
              <span className="text-[var(--retro-text)] font-bold ml-1 text-sm">FOLNG</span>
            </div>
          </div>

          {/* Blinking cursor at bottom */}
          <div className="mt-6 text-left text-[var(--retro-text)] cursor-blink text-lg inline-block font-bold">
            &gt; READY
          </div>
        </div>
      </div>

      {/* Start/Select labels bottom */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-8 text-xs text-[var(--retro-text)] opacity-50 font-bold" style={{ fontFamily: 'var(--font-pixel)' }}>
        <span className="tracking-widest hover:text-[var(--retro-red)] cursor-pointer transition-colors">SELECT</span>
        <span className="tracking-widest hover:text-[var(--retro-blue)] cursor-pointer transition-colors">START</span>
      </div>
    </section>
  )
}
