'use client'

import { useEffect, useState } from 'react'
import type { GitHubRepo } from '@/lib/github'
import { getRepos } from '@/lib/github'

function DPadArm({
  repo,
  direction,
  gridPos,
}: {
  repo: GitHubRepo
  direction: 'up' | 'down' | 'left' | 'right'
  gridPos: string
}) {
  const arrow = { up: '▲', down: '▼', left: '◄', right: '►' }[direction]
  const arrowColor = {
    up: 'text-[var(--retro-red)]',
    down: 'text-[var(--retro-blue)]',
    left: 'text-[var(--retro-green)]',
    right: 'text-[var(--retro-yellow)]',
  }[direction]

  const borderRemove = {
    up: 'border-b-0',
    down: 'border-t-0',
    left: 'border-r-0',
    right: 'border-l-0',
  }[direction]

  return (
    <div className={gridPos}>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block h-full w-full bg-[var(--retro-screen)] border-3 border-[var(--retro-border)] ${borderRemove} p-2 sm:p-3 cursor-pointer
          shadow-[3px_3px_0_0_var(--retro-border),inset_-2px_-2px_0_0_var(--retro-bg-body),inset_2px_2px_0_0_#fff]
          hover:shadow-[1px_1px_0_0_var(--retro-border),inset_2px_2px_0_0_var(--retro-bg-body),inset_-2px_-2px_0_0_#fff]
          hover:translate-x-[2px] hover:translate-y-[2px]
          transition-all duration-75`}
      >
        <div className="flex flex-col h-full justify-between">
          <span
            className="text-[var(--retro-text)] font-bold leading-tight group-hover:text-retro-shadow-dark"
            style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}
          >
            {repo.name.length > 10 ? repo.name.slice(0, 10) + '…' : repo.name}
          </span>
          {repo.language && (
            <span className="text-xs text-[var(--retro-text)] opacity-70 mt-0.5" style={{ fontFamily: 'var(--font-mono)' }}>
              {repo.language}
            </span>
          )}
          <div className="flex items-center justify-between text-xs text-[var(--retro-text)] opacity-85 mt-1" style={{ fontFamily: 'var(--font-mono)' }}>
            <span>★{repo.stargazers_count}</span>
            <span className={`font-bold text-base ${arrowColor}`}>{arrow}</span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    getRepos()
      .then((data: GitHubRepo[]) => {
        setRepos(data)
        setLoaded(true)
      })
      .catch(() => setLoaded(true))
  }, [])

  if (!loaded) {
    return (
      <section className="bg-[var(--retro-bg-body)] px-4 py-16 border-t-4 border-[var(--retro-border)]">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-lg text-[var(--retro-text)] font-bold text-retro-shadow-red mb-10 tracking-wider text-center"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            &gt; PROJECTS.DPAD
          </h2>
          <div className="hidden sm:flex items-start justify-start pl-6 gap-8 lg:gap-20">
            <div className="shrink-0">
              <div className="p-[10px] rounded-lg border-4 border-[var(--retro-border)]" style={{ background: '#334155', boxShadow: 'inset 4px 4px 10px rgba(0,0,0,0.6), inset -2px -2px 5px rgba(255,255,255,0.1)' }}>
                <div className="grid grid-cols-3 grid-rows-3 w-[270px] h-[270px]">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`bg-[var(--retro-screen)] border-3 border-[var(--retro-border)] p-3 ${['col-start-2 row-start-1', 'col-start-1 row-start-2', 'col-start-3 row-start-2', 'col-start-2 row-start-3'][i]}`}>
                      <div className="h-full flex flex-col justify-between">
                        <div className="h-3 w-3/4 bg-slate-300 animate-pulse" />
                        <div className="h-3 w-1/2 bg-slate-300 animate-pulse" />
                      </div>
                    </div>
                  ))}
                  <div className="col-start-2 row-start-2 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--retro-bg-body)] border-3 border-[var(--retro-border)]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 mt-8">
              <div className="w-28 h-28 rounded-full bg-[var(--retro-blue)] border-3 border-[var(--retro-border)] opacity-50 animate-pulse" />
              <div className="w-28 h-28 rounded-full bg-[var(--retro-red)] border-3 border-[var(--retro-border)] opacity-50 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[var(--retro-bg-body)] px-4 py-16 border-t-4 border-[var(--retro-border)]">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-lg text-[var(--retro-text)] font-bold text-retro-shadow-red mb-10 tracking-wider text-center"
          style={{ fontFamily: 'var(--font-pixel)' }}
        >
          &gt; PROJECTS.DPAD
        </h2>

        {/* Desktop */}
        <div className="hidden sm:flex items-center justify-center gap-8 lg:gap-16">
          {/* ===== D-PAD ===== */}
          <div className="shrink-0">
            <div className="p-[10px] rounded-lg border-4 border-[var(--retro-border)]" style={{ background: '#334155', boxShadow: 'inset 4px 4px 10px rgba(0,0,0,0.6), inset -2px -2px 5px rgba(255,255,255,0.1)' }}>
              <div className="relative">
                {/* Pointy tips */}
                <div className="absolute w-3 h-3 z-10" style={{ background: '#334155', top: 'calc(33.33% - 1px)', left: 'calc(66.66% - 1px)', clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
                <div className="absolute w-3 h-3 z-10" style={{ background: '#334155', top: 'calc(66.66% - 1px)', left: 'calc(66.66% - 1px)', clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
                <div className="absolute w-3 h-3 z-10" style={{ background: '#334155', top: 'calc(66.66% - 1px)', left: 'calc(33.33% - 1px)', clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
                <div className="absolute w-3 h-3 z-10" style={{ background: '#334155', top: 'calc(33.33% - 1px)', left: 'calc(33.33% - 1px)', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />

                <div className="grid grid-cols-3 grid-rows-3 w-[270px] h-[270px] relative z-20">
                  {repos[0] && <DPadArm repo={repos[0]} direction="up" gridPos="col-start-2 row-start-1" />}
                  {repos[1] && <DPadArm repo={repos[1]} direction="left" gridPos="col-start-1 row-start-2" />}

                  <div className="col-start-2 row-start-2 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--retro-bg-body)] border-3 border-[var(--retro-border)] flex items-center justify-center
                      shadow-[3px_3px_0_0_var(--retro-border),inset_-2px_-2px_0_0_var(--retro-bg-dark),inset_2px_2px_0_0_#fff]"
                    >
                      <span className="text-[var(--retro-text)] font-bold text-center leading-none text-retro-shadow-red" style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}>
                        ERY
                      </span>
                    </div>
                  </div>

                  {repos[2] && <DPadArm repo={repos[2]} direction="right" gridPos="col-start-3 row-start-2" />}
                  {repos[3] && <DPadArm repo={repos[3]} direction="down" gridPos="col-start-2 row-start-3" />}
                </div>
              </div>
            </div>
          </div>

          {/* ===== A/B BUTTONS ===== */}
          <div className="shrink-0 flex flex-col items-center justify-center mt-12">
            <div className="flex flex-row items-center gap-5">
              {/* B — left */}
              {repos[5] && (
                <a
                  href={repos[5].html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-28 h-28 rounded-full bg-[var(--retro-blue)] border-3 border-[var(--retro-border)] flex items-center justify-center p-3 text-center cursor-pointer
                    shadow-[5px_5px_0_0_var(--retro-blue-shadow),inset_-3px_-3px_0_0_var(--retro-blue-hover),inset_3px_3px_0_0_#60a5fa]
                    hover:shadow-[1px_1px_0_0_var(--retro-blue-shadow),inset_3px_3px_0_0_var(--retro-blue-hover),inset_-3px_-3px_0_0_#60a5fa]
                    hover:translate-x-[4px] hover:translate-y-[4px]
                    transition-all duration-75"
                >
                  <div>
                    <span className="text-lg text-white font-bold block text-retro-shadow-blue" style={{ fontFamily: 'var(--font-pixel)', fontSize: '14px' }}>
                      B
                    </span>
                    <p className="text-xs text-[var(--retro-text-light)] mt-1 leading-tight" style={{ fontFamily: 'var(--font-mono)' }}>
                      {repos[5].name.length > 14 ? repos[5].name.slice(0, 12) + '…' : repos[5].name}
                    </p>
                    <p className="text-[10px] text-[#bfdbfe] mt-0.5 font-bold" style={{ fontFamily: 'var(--font-mono)' }}>
                      ★{repos[5].stargazers_count}
                    </p>
                  </div>
                </a>
              )}

              {/* A — right */}
              {repos[4] && (
                <a
                  href={repos[4].html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-28 h-28 rounded-full bg-[var(--retro-red)] border-3 border-[var(--retro-border)] flex items-center justify-center p-3 text-center cursor-pointer
                    shadow-[5px_5px_0_0_var(--retro-red-shadow),inset_-3px_-3px_0_0_var(--retro-red-hover),inset_3px_3px_0_0_#fca5a5]
                    hover:shadow-[1px_1px_0_0_var(--retro-red-shadow),inset_3px_3px_0_0_var(--retro-red-hover),inset_-3px_-3px_0_0_#fca5a5]
                    hover:translate-x-[4px] hover:translate-y-[4px]
                    transition-all duration-75"
                >
                  <div>
                    <span className="text-lg text-white font-bold block text-retro-shadow-red" style={{ fontFamily: 'var(--font-pixel)', fontSize: '14px' }}>
                      A
                    </span>
                    <p className="text-xs text-[var(--retro-text-light)] mt-1 leading-tight" style={{ fontFamily: 'var(--font-mono)' }}>
                      {repos[4].name.length > 14 ? repos[4].name.slice(0, 12) + '…' : repos[4].name}
                    </p>
                    <p className="text-[10px] text-[#fecaca] mt-0.5 font-bold" style={{ fontFamily: 'var(--font-mono)' }}>
                      ★{repos[4].stargazers_count}
                    </p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="sm:hidden grid gap-3">
          {repos.map((repo, idx) => {
            const borderColors = ['border-[var(--retro-red)]', 'border-[var(--retro-yellow)]', 'border-[var(--retro-green)]', 'border-[var(--retro-blue)]'];
            const borderColor = borderColors[idx % 4];
            return (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-4 border-3 ${borderColor} bg-[var(--retro-screen)] shadow-[3px_3px_0_0_var(--retro-border)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_var(--retro-border)] transition-all`}
              >
                <h3
                  className="text-sm text-[var(--retro-text)] font-bold mb-1"
                  style={{ fontFamily: 'var(--font-pixel)', fontSize: '9px' }}
                >
                  {repo.name}
                </h3>
                {repo.description && (
                  <p className="text-xs text-[var(--retro-text)] opacity-70 mb-2 line-clamp-1" style={{ fontFamily: 'var(--font-mono)' }}>
                    {repo.description}
                  </p>
                )}
                <div className="text-xs text-[var(--retro-text)] opacity-85" style={{ fontFamily: 'var(--font-mono)' }}>
                  {repo.language && <span>{repo.language} · </span>}
                  ★{repo.stargazers_count}
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
