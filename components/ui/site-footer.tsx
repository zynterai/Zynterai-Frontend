'use client'

import { motion } from 'framer-motion'
import { Facebook, Linkedin, Mail, Youtube } from 'lucide-react'
import { usePathname } from 'next/navigation'

function XBrandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.9 2H22l-6.76 7.74L23.2 22h-6.25l-4.9-6.93L5.98 22H2.87l7.22-8.26L1 2h6.4l4.43 6.26L18.9 2Zm-1.1 18h1.72L6.48 3.9H4.64L17.8 20Z" />
    </svg>
  )
}

function PinterestBrandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2C6.49 2 2 6.49 2 12c0 4.41 2.87 8.17 6.84 9.47-.06-.8-.12-2.02.02-2.9.16-.88 1.03-3.73 1.03-3.73s-.26-.52-.26-1.3c0-1.22.71-2.13 1.6-2.13.75 0 1.11.56 1.11 1.23 0 .75-.48 1.87-.74 2.91-.21.87.43 1.58 1.28 1.58 1.53 0 2.7-1.62 2.7-3.97 0-2.08-1.49-3.53-3.62-3.53-2.47 0-3.92 1.85-3.92 3.76 0 .74.29 1.54.64 2-.08.17-.22.56-.24.7-.04.18-.14.22-.32.13-1.2-.5-1.98-2.06-1.98-3.32 0-2.7 1.96-5.18 5.64-5.18 2.96 0 5.26 2.11 5.26 4.93 0 2.94-1.85 5.31-4.42 5.31-.86 0-1.68-.45-1.96-.99l-.53 2.02c-.19.73-.7 1.65-1.04 2.2.79.24 1.63.37 2.5.37 5.51 0 10-4.49 10-10S17.51 2 12 2Z" />
    </svg>
  )
}

export function SiteFooter() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`)

  return (
    <footer className="glass-footer relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="mb-14 grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <a
                href={sectionHref('#hero')}
                className="shrink-0 rounded-lg p-1.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--logo-foot-frame)] sm:p-2"
                aria-label="Zynterai — back to top"
              >
                <img
                  src="/Logo.svg"
                  alt="Zynterai"
                  className="h-12 w-auto max-w-[200px] select-none object-contain object-left sm:h-14 sm:max-w-[240px] md:h-16 md:max-w-[280px]"
                  draggable={false}
                />
              </a>
              <div>
                <p className="text-lg font-bold tracking-tight text-foreground">Zynter AI</p>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/45">Intelligence platform</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/75">
              AI centralized business intelligence-unified data, live monitoring, and strategic reporting for modern teams.
            </p>
            <a
              href="mailto:info@zynterai.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              <Mail className="h-4 w-4 opacity-80" aria-hidden />
              info@zynterai.com
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-10 sm:gap-12 lg:col-span-7 lg:grid-cols-3">
            <div>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/50">Product</h4>
              <ul className="space-y-3 text-sm text-foreground/78">
                <li><a href={sectionHref('#core-features')} className="transition-colors hover:text-foreground">Features</a></li>
                <li><a href={sectionHref('#how-it-works')} className="transition-colors hover:text-foreground">How It Works</a></li>
                <li><a href={sectionHref('#architecture')} className="transition-colors hover:text-foreground">Architecture</a></li>
                <li><a href={sectionHref('#use-cases')} className="transition-colors hover:text-foreground">Use Cases</a></li>
                <li><a href={sectionHref('#pricing')} className="transition-colors hover:text-foreground">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/50">Company</h4>
              <ul className="space-y-3 text-sm text-foreground/78">
                <li><a href={sectionHref('#testimonials')} className="transition-colors hover:text-foreground">Testimonials</a></li>
                <li><a href={sectionHref('#faq')} className="transition-colors hover:text-foreground">FAQ</a></li>
                <li><a href={sectionHref('#contact')} className="transition-colors hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/50">Legal</h4>
              <ul className="space-y-3 text-sm text-foreground/78">
                <li><a href="/privacy" className="transition-colors hover:text-foreground">Privacy</a></li>
                <li><a href="/terms" className="transition-colors hover:text-foreground">Terms</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-foreground/60 sm:text-sm">© 2026 Zynter AI. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { href: 'https://x.com/zynterai', label: 'X', icon: XBrandIcon },
              { href: '#', label: 'Facebook', icon: Facebook },
              { href: '#', label: 'LinkedIn', icon: Linkedin },
              { href: 'https://www.pinterest.com/ZynterAi', label: 'Pinterest', icon: PinterestBrandIcon },
              { href: 'https://www.youtube.com/@Zynterai', label: 'YouTube', icon: Youtube },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-foreground/85 transition-colors hover:border-primary/45 hover:bg-primary/10 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

