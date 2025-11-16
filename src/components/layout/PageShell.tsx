import type { ReactNode } from 'react'

type PageShellProps = {
  sidebar: ReactNode
  children: ReactNode
}

export const PageShell = ({ sidebar, children }: PageShellProps) => (
  <div className="page-shell">
    <div className="page-shell__glow" aria-hidden />
    <div className="page-shell__grid">
      <aside className="page-shell__sidebar">{sidebar}</aside>
      <main className="page-shell__content">{children}</main>
    </div>
  </div>
)

