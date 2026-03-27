'use client'

import { ArrowRight, BarChart3, Brain, CheckCircle2, Shield } from 'lucide-react'
import { Navbar1 } from '@/components/ui/navbar-1'
import { SiteFooter } from '@/components/ui/site-footer'

const productHighlights = [
  {
    icon: Brain,
    title: 'AI Threat Intelligence',
    description: 'Correlates identity, domain, email, and SMS attack signals into actionable incidents.',
  },
  {
    icon: Shield,
    title: 'Automated Response',
    description: 'Runs repeatable workflows for triage, verification, and response with analyst oversight.',
  },
  {
    icon: BarChart3,
    title: 'Executive Visibility',
    description: 'Provides real-time dashboards and strategic reporting for leadership and operations.',
  },
]

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar1 />

      <main className="pt-32">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Product
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Unified protection against modern digital threats
            </h1>
            <p className="mt-4 max-w-2xl text-foreground/70">
              Zynterai combines machine intelligence and response automation to detect impersonation, phishing, and abuse
              campaigns before they impact your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Demo <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/#pricing"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground/85 transition-colors hover:bg-white/5 hover:text-foreground"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {productHighlights.map(({ icon: Icon, title, description }) => (
              <article key={title} className="glass-surface rounded-2xl p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/72">{description}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-6xl glass-surface rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold">What&apos;s included</h3>
            <ul className="mt-5 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
              {[
                '24/7 threat telemetry coverage',
                'Brand and domain abuse monitoring',
                'Email and SMS campaign detection',
                'Analyst-friendly case timelines',
                'Automated takedown workflows',
                'Executive reporting exports',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

