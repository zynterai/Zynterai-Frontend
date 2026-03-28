"use client";

import { Navbar1 } from '@/components/ui/navbar-1';
import { SiteFooter } from '@/components/ui/site-footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Shield, Brain, BarChart3, Sparkles, Zap, ArrowRight, ChevronRight } from 'lucide-react';

export default function ZentrovAIPage() {
  return (
    <div className="min-h-screen bg-[#181c22] text-foreground overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      

      <Navbar1 />

      <main className="pt-24">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative grid-bg min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background orbs */}
          <div className="glow-orb absolute top-[-120px] left-[10%] w-[600px] h-[400px] animate-shimmer" />
          <div className="glow-orb absolute bottom-[-80px] right-[5%] w-[500px] h-[350px] animate-shimmer" style={{ animationDelay: '1.5s' }} />

          <div className="relative mx-auto max-w-6xl w-full py-20">
            {/* Asymmetric two-column hero */}
            <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
              {/* Left: Copy */}
              <div>
                <span className="badge-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-[#76ABAE] mb-6 animate-fade-up">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#76ABAE] animate-pulse inline-block" />
                  ZentrovAI — Now Live
                </span>

                <h1 className="font-display text-5xl lg:text-[3.8rem] xl:text-[4.4rem] font-bold leading-[1.08] tracking-tight text-[#EEEEEE] mb-6 animate-fade-up-delay-1">
                  Unified AI<br />
                  <span className="text-[#76ABAE]">Security &</span><br />
                  Intelligence
                </h1>

                <p className="text-[#d6dde3] text-lg leading-relaxed mb-8 max-w-xl animate-fade-up-delay-2">
                  Real-time threat detection, deep analytics, and actionable insights—powered by state-of-the-art NVIDIA AI frameworks. Sub-2s detection. Predictive intelligence. Board-ready reporting.
                </p>

                <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
                  <Button asChild size="lg" className="px-8 py-4 text-base font-semibold bg-[#76ABAE] hover:bg-[#5f9ea2] text-[#181c22] rounded-xl transition-all duration-200 hover:scale-105">
                    <a href="https://app.zynterai.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Try ZentrovAI Live <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-4 text-base font-semibold rounded-xl border-[#76ABAE]/30 text-[#76ABAE] hover:bg-[#76ABAE]/10 transition-all duration-200">
                    See How It Works
                  </Button>
                </div>
              </div>

              {/* Right: Stats card stack */}
              <div className="flex flex-col gap-4 animate-fade-up-delay-2 animate-float">
                {[
                  { value: "< 2s", label: "Threat detection latency", icon: <Zap className="h-5 w-5 text-[#76ABAE]" /> },
                  { value: "99.9%", label: "Platform uptime SLA", icon: <Shield className="h-5 w-5 text-[#76ABAE]" /> },
                  { value: "10×", label: "Faster analyst response", icon: <Brain className="h-5 w-5 text-[#76ABAE]" /> },
                  { value: "4 SDKs", label: "NVIDIA-powered pipeline", icon: <Sparkles className="h-5 w-5 text-[#76ABAE]" /> },
                ].map((s, i) => (
                  <div key={i} className="stat-card card-hover rounded-xl px-6 py-4 flex items-center gap-4 border border-transparent">
                    <div className="p-2.5 rounded-lg bg-[#76ABAE]/10 shrink-0">{s.icon}</div>
                    <div>
                      <div className="font-display text-2xl font-bold text-[#EEEEEE]">{s.value}</div>
                      <div className="text-[#d6dde3]/70 text-sm">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY ZENTROVAI — Bento Grid ─────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#1a1f25] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="section-label mb-3">Why ZentrovAI</p>
              <h2 className="font-display text-4xl font-bold text-[#EEEEEE] max-w-xl">
                Everything your team needs, nothing it doesn't.
              </h2>
            </div>

            {/* Bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Large feature tile */}
              <div className="md:col-span-7 bg-gradient-to-br from-[#23272f] to-[#1e2229] border border-[#76ABAE]/15 rounded-2xl p-8 card-hover relative overflow-hidden">
                <div className="glow-orb absolute -bottom-16 -right-16 w-64 h-64 opacity-60" />
                <Shield className="h-10 w-10 text-[#76ABAE] mb-5" />
                <h3 className="font-display text-2xl font-bold text-[#EEEEEE] mb-3">Instant Threat Response</h3>
                <p className="text-[#d6dde3] text-base leading-relaxed max-w-md">
                  Detect and neutralize attacks before they impact your organization. ZentrovAI monitors your entire digital footprint around the clock—phishing, impersonation, domain squatting, and beyond.
                </p>
                <div className="mt-6 flex gap-2 flex-wrap">
                  {['Phishing Detection', 'Domain Monitoring', '24/7 Watch'].map(tag => (
                    <span key={tag} className="badge-pill text-xs px-3 py-1 rounded-full text-[#76ABAE]">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Tall narrow tile */}
              <div className="md:col-span-5 bg-gradient-to-br from-[#23272f] to-[#1e2229] border border-[#76ABAE]/15 rounded-2xl p-8 card-hover">
                <Sparkles className="h-10 w-10 text-[#76ABAE] mb-5" />
                <h3 className="font-display text-2xl font-bold text-[#EEEEEE] mb-3">Clarity for Every Team</h3>
                <p className="text-[#d6dde3] leading-relaxed">
                  From security analysts to executives, everyone gets the insights they need—no technical expertise required. One platform, every stakeholder.
                </p>
              </div>

              {/* Bottom left */}
              <div className="md:col-span-5 bg-gradient-to-br from-[#23272f] to-[#1e2229] border border-[#76ABAE]/15 rounded-2xl p-8 card-hover">
                <Brain className="h-10 w-10 text-[#76ABAE] mb-5" />
                <h3 className="font-display text-2xl font-bold text-[#EEEEEE] mb-3">Smarter Decisions, Faster</h3>
                <p className="text-[#d6dde3] leading-relaxed">
                  AI-driven recommendations help you prioritize risks and respond with confidence—every single time.
                </p>
              </div>

              {/* Bottom right wide */}
              <div className="md:col-span-7 bg-gradient-to-br from-[#76ABAE]/10 to-[#23272f] border border-[#76ABAE]/25 rounded-2xl p-8 card-hover relative overflow-hidden">
                <Zap className="h-10 w-10 text-[#76ABAE] mb-5" />
                <h3 className="font-display text-2xl font-bold text-[#EEEEEE] mb-3">Unified, Effortless Experience</h3>
                <p className="text-[#d6dde3] leading-relaxed max-w-md">
                  All your security, analytics, and reporting in one place. No more context-switching, no more fragmented tools, no more missing the signal in the noise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── USE CASES — Alternating list ───────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#181c22] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[340px_1fr] gap-16 items-start">
              {/* Sticky label side */}
              <div className="lg:sticky lg:top-28">
                <p className="section-label mb-3">Use Cases</p>
                <h2 className="font-display text-4xl font-bold text-[#EEEEEE] mb-4">
                  What can ZentrovAI do for you?
                </h2>
                <p className="text-[#d6dde3] leading-relaxed">
                  Purpose-built capabilities that map directly to your team's day-to-day challenges.
                </p>
              </div>

              {/* Use case list */}
              <div className="space-y-3">
                {[
                  {
                    num: "01",
                    title: "Stop Threats Before They Spread",
                    desc: "Detect phishing, impersonation, and domain attacks the moment they appear—no more waiting for manual reviews or after-the-fact forensics.",
                  },
                  {
                    num: "02",
                    title: "See the Big Picture",
                    desc: "Unify signals from email, SMS, domains, social, and more. ZentrovAI connects the dots across every vector so you always have full situational awareness.",
                  },
                  {
                    num: "03",
                    title: "Empower Your Team",
                    desc: "Give every stakeholder—from analysts to executives—tailored, actionable insights that drive better security decisions and measurable outcomes.",
                  },
                  {
                    num: "04",
                    title: "Automate the Mundane",
                    desc: "Let AI handle the noise. ZentrovAI automates triage, reporting, and response so your top experts can focus on the threats that actually matter.",
                  },
                ].map((item) => (
                  <div key={item.num} className="group card-hover bg-[#23272f]/50 border border-[#76ABAE]/10 rounded-2xl p-6 flex gap-6 items-start cursor-default">
                    <span className="font-display text-5xl font-bold text-[#76ABAE]/20 group-hover:text-[#76ABAE]/40 transition-colors leading-none shrink-0">{item.num}</span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#76ABAE] mb-2">{item.title}</h3>
                      <p className="text-[#d6dde3] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS — Pipeline ────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#1a1f25] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="section-label mb-3">The Pipeline</p>
              <h2 className="font-display text-4xl font-bold text-[#EEEEEE] mb-4">How ZentrovAI Works</h2>
              <p className="text-[#d6dde3] max-w-2xl mx-auto text-lg">
                From ingesting global DNS feeds to delivering board-ready insights—every layer optimized for speed, accuracy, and clarity.
              </p>
            </div>

            {/* Three-step pipeline */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-[#76ABAE]" />,
                  step: "01",
                  title: "Ingest & Detect",
                  desc: "Live data streams analyzed in real-time with NVIDIA Morpheus. Every packet, every domain, every signal—evaluated instantly.",
                  sdk: "Morpheus",
                },
                {
                  icon: <Brain className="h-8 w-8 text-[#76ABAE]" />,
                  step: "02",
                  title: "Analyze & Predict",
                  desc: "Historical data processed and predictive models trained at GPU speed with NVIDIA RAPIDS. Know what's coming before it arrives.",
                  sdk: "RAPIDS",
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-[#76ABAE]" />,
                  step: "03",
                  title: "Explain & Report",
                  desc: "LLM-powered summaries and board-ready reports generated via NVIDIA NeMo. Clarity for every stakeholder, automatically.",
                  sdk: "NeMo",
                },
              ].map((step, i) => (
                <div key={i} className={`pipeline-connector relative bg-gradient-to-b from-[#23272f] to-[#1e2229] border border-[#76ABAE]/15 rounded-2xl p-8 card-hover ${i < 2 ? 'pipeline-connector' : ''}`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#76ABAE]/10">{step.icon}</div>
                    <span className="font-display text-5xl font-bold text-[#76ABAE]/15">{step.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#EEEEEE] mb-3">{step.title}</h3>
                  <p className="text-[#d6dde3] leading-relaxed mb-4 text-sm">{step.desc}</p>
                  <span className="badge-pill inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full text-[#76ABAE] font-semibold">
                    <span className="w-1 h-1 rounded-full bg-[#76ABAE] inline-block" />
                    {step.sdk}
                  </span>
                </div>
              ))}
            </div>

            {/* SDK table */}
            <div className="bg-[#23272f]/50 border border-[#76ABAE]/10 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#76ABAE]/10">
                <p className="section-label">NVIDIA SDK Mapping</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#76ABAE]/10">
                      <th className="text-left py-3 px-6 text-[#76ABAE] font-semibold">Feature Group</th>
                      <th className="text-left py-3 px-6 text-[#76ABAE] font-semibold">NVIDIA SDK</th>
                      <th className="text-left py-3 px-6 text-[#76ABAE] font-semibold">Primary Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { group: "Real-Time Monitoring & Security", sdk: "Morpheus", benefit: "Sub-2s threat detection at scale" },
                      { group: "Analytics & AI Model Training", sdk: "RAPIDS", benefit: "GPU-accelerated data processing" },
                      { group: "AI-Generated Reports & Insights", sdk: "NeMo", benefit: "Natural language summaries & reports" },
                      { group: "Unified Deployment", sdk: "Triton, TensorRT", benefit: "Optimized inference infrastructure" },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-[#76ABAE]/05 ${i % 2 === 0 ? 'bg-[#23272f]/30' : 'bg-transparent'} hover:bg-[#76ABAE]/05 transition-colors`}>
                        <td className="py-3.5 px-6 text-[#EEEEEE] font-medium">{row.group}</td>
                        <td className="py-3.5 px-6">
                          <span className="badge-pill inline-flex px-2.5 py-0.5 rounded text-[#76ABAE] text-xs font-semibold">{row.sdk}</span>
                        </td>
                        <td className="py-3.5 px-6 text-[#d6dde3]/70">{row.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#181c22] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="section-label mb-3">Customer Stories</p>
              <h2 className="font-display text-4xl font-bold text-[#EEEEEE]">
                Trusted by teams that can't afford to miss a threat
              </h2>
            </div>

            {/* Asymmetric testimonial grid */}
            <div className="grid md:grid-cols-12 gap-5">
              {/* Large quote */}
              <div className="md:col-span-5 quote-card card-hover p-8 flex flex-col justify-between min-h-[240px]">
                <p className="text-[#d6dde3] text-lg leading-relaxed pt-6">
                  ZentrovAI gave us the confidence to act on threats in real time. Our response time dropped from hours to seconds.
                </p>
                <div className="mt-6 pt-5 border-t border-[#76ABAE]/15">
                  <span className="font-display font-semibold text-[#76ABAE]">— CISO, Financial Services</span>
                </div>
              </div>

              {/* Two stacked quotes */}
              <div className="md:col-span-7 flex flex-col gap-5">
                <div className="quote-card card-hover p-7 flex flex-col justify-between flex-1">
                  <p className="text-[#d6dde3] leading-relaxed pt-4">
                    The unified dashboard means our teams finally speak the same language. We make decisions faster, together.
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#76ABAE]/15">
                    <span className="font-display font-semibold text-[#76ABAE]">— Head of IT, Retail</span>
                  </div>
                </div>
                <div className="quote-card card-hover p-7 flex flex-col justify-between flex-1">
                  <p className="text-[#d6dde3] leading-relaxed pt-4">
                    Automated reports save us hours every week. Leadership gets the insights they need, instantly.
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#76ABAE]/15">
                    <span className="font-display font-semibold text-[#76ABAE]">— COO, Healthcare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ─────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1f25]">
          <div className="mx-auto max-w-4xl">
            <div className="relative bg-gradient-to-br from-[#76ABAE]/15 via-[#23272f] to-[#181c22] border border-[#76ABAE]/25 rounded-3xl px-10 py-16 text-center overflow-hidden">
              <div className="glow-orb absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-48 animate-shimmer" />
              <p className="section-label mb-4">Get Started Today</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EEEEEE] mb-5">
                See ZentrovAI in action
              </h2>
              <p className="text-[#d6dde3] text-lg max-w-xl mx-auto mb-8">
                Join security teams that have already cut their response times by 10× with ZentrovAI's unified intelligence platform.
              </p>
              <Button asChild size="lg" className="px-10 py-4 text-base font-semibold bg-[#76ABAE] hover:bg-[#5f9ea2] text-[#181c22] rounded-xl transition-all duration-200 hover:scale-105">
                <a href="https://app.zynterai.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Try ZentrovAI Live <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}