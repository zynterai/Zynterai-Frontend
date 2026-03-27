import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export type LegalPageVariant = 'terms' | 'privacy'

type LegalPageShellProps = {
  variant: LegalPageVariant
  children: ReactNode
}

export function LegalPageShell({ variant, children }: LegalPageShellProps) {
  const isTerms = variant === 'terms'
  const accentClass = isTerms ? 'text-primary' : 'text-[#a5c9ca]'
  const accentLineClass = isTerms ? 'from-transparent via-primary/40 to-transparent' : 'from-transparent via-[#a5c9ca]/35 to-transparent'

  return (
    <div
      data-legal={variant}
      className={cn(
        'legal-page-root min-h-screen bg-[#0a0c0f] text-foreground antialiased',
        isTerms ? 'legal-page--terms' : 'legal-page--privacy'
      )}
    >
      <header className="relative border-b border-white/[0.06] bg-[#0a0c0f]">
        <div
          aria-hidden
          className={cn('pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r', accentLineClass)}
        />
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-5 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="text-sm text-foreground/55 transition-colors hover:text-foreground"
            >
              ← zynterai.com
            </Link>
            <nav className="flex items-center gap-1 text-sm text-foreground/50" aria-label="Legal documents">
              <Link
                href="/terms"
                className={cn(
                  'px-0 py-1 transition-colors',
                  isTerms
                    ? 'font-medium text-foreground underline decoration-primary/45 decoration-1 underline-offset-4'
                    : 'hover:text-foreground'
                )}
              >
                Terms
              </Link>
              <span className="select-none px-1 text-foreground/25" aria-hidden>
                ·
              </span>
              <Link
                href="/privacy"
                className={cn(
                  'px-0 py-1 transition-colors',
                  !isTerms
                    ? 'font-medium text-foreground underline decoration-[#7a9b9d]/45 decoration-1 underline-offset-4'
                    : 'hover:text-foreground'
                )}
              >
                Privacy
              </Link>
            </nav>
          </div>
          <p
            className={cn(
              'text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/35'
            )}
          >
            <span className={cn('font-semibold', accentClass)}>{isTerms ? 'Terms' : 'Privacy'}</span>
            <span className="text-foreground/25"> — </span>
            <span>{isTerms ? 'Terms of use' : 'Privacy policy'}</span>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 pb-24 pt-6 sm:px-8 sm:pb-32">{children}</div>
    </div>
  )
}
