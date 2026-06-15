export interface GitHubUser {
  login: string
  name: string
  avatar_url: string
  bio: string | null
  public_repos: number
  followers: number
  following: number
  html_url: string
}

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  fork: boolean
}

const GITHUB_USERNAME = 'OrenERY'

export async function getUser(): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
  if (!res.ok) throw new Error('Failed to fetch user')
  return res.json()
}

export async function getRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=30&sort=updated&type=public`
  )
  if (!res.ok) throw new Error('Failed to fetch repos')
  const repos: GitHubRepo[] = await res.json()
  return repos
    .filter((r) => !r.fork && r.name !== GITHUB_USERNAME)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
}

export function getLanguages(repos: GitHubRepo[]): string[] {
  const langs = new Set(repos.map((r) => r.language).filter(Boolean) as string[])
  return Array.from(langs).sort()
}
