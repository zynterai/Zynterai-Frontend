"use client"

import { motion } from "framer-motion"

const workCards = [
  {
    number: "01",
    kicker: "INGESTION LAYER",
    title: "CONNECT DATA SOURCES",
    description:
      "Integrate CRM, ERP, finance, operations, and external tools into one centralized data layer — no manual exports, no silos, no friction.",
    tags: ["CRM", "ERP", "Finance", "Operations", "30+ Connectors"],
  },
  {
    number: "02",
    kicker: "AI PROCESSING",
    title: "AI CONSOLIDATION ENGINE",
    description:
      "Zynter AI automatically cleans, maps, and analyzes fragmented datasets in real time — surfacing patterns humans would miss.",
    tags: ["Auto-clean", "Smart Mapping", "Real-time", "Sub-5ms"],
  },
  {
    number: "03",
    kicker: "DELIVERY",
    title: "ACTIONABLE INTELLIGENCE",
    description:
      "Generate strategic reports, visual dashboards, and smart alerts that support faster, more confident decisions across every team.",
    tags: ["Dashboards", "Reports", "Alerts", "Board-ready"],
  },
]

export function HowItWorksVisual() {
  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden bg-[#222831]/35 px-4 py-12 backdrop-blur-sm sm:px-6 sm:py-14 lg:px-8"
    >
      {/* Ambient grid + glows */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(118,171,174,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(118,171,174,0.14) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 35%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 35%, black 20%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -z-10 h-[280px] w-[520px] -translate-x-1/2 rounded-full bg-[#76ABAE]/18 blur-3xl"
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-primary mb-5">How It Works</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground max-w-7xl mx-auto leading-[1.05] tracking-tight">
            From Data to <span className="text-primary">Clear Intelligence</span>
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-6 bg-primary/15 blur-3xl rounded-3xl" />
            <motion.div
              className="glass-surface relative overflow-hidden rounded-3xl shadow-xl"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              whileHover={{ y: -6 }}
            >
              <video
                className="h-[360px] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/Hero%20Bannar.svg"
                aria-label="How it works visual"
              >
                <source src="/Zynterai%20Graphics.mp4" type="video/mp4" />
                <source src="/How%20to%20works.mp4" type="video/mp4" />
                <source src="/How-to-works.mp4" type="video/mp4" />
              </video>
              {/* Scanline shimmer */}
              <motion.div
                aria-hidden
                className="absolute inset-0 opacity-20 mix-blend-screen rounded-3xl"
                style={{
                  backgroundImage: "linear-gradient(to bottom, rgba(118,171,174,0.9) 1px, transparent 1px)",
                  backgroundSize: "100% 10px",
                }}
                animate={{ opacity: [0.1, 0.28, 0.1] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Sweeping beam */}
              <motion.div
                aria-hidden
                className="absolute left-[-30%] top-0 h-full w-[55%]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(118,171,174,0.14) 45%, rgba(118,171,174,0) 100%)",
                }}
                animate={{ x: ["0%", "165%"] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute left-1/2 bottom-4 -translate-x-1/2 rounded-full bg-primary/20 px-4 py-2 text-xs font-medium text-foreground shadow-md backdrop-blur">
                Unified Data Flow
              </div>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative divider line between cards */}
            <div
              aria-hidden
              className="absolute left-7 top-6 bottom-6 w-px bg-[#76ABAE]/15"
            />
            <div className="space-y-6 sm:space-y-8">
              {workCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                  whileHover={{ y: -4 }}
                  className="relative flex gap-5 rounded-3xl border border-[#76ABAE]/12 bg-[#222831]/35 px-5 py-6 shadow-[0_18px_60px_-26px_rgba(118,171,174,0.25)] backdrop-blur-md"
                >
                  <motion.div
                    aria-hidden
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#76ABAE]/25 bg-[#76ABAE]/15 shadow-[0_0_0_1px_rgba(118,171,174,0.12)]"
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 2.8 + index,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  >
                    <span className="font-mono text-[16px] font-extrabold tracking-[0.02em] text-[#76ABAE]">
                      {card.number}
                    </span>
                  </motion.div>

                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[11px] tracking-[0.22em] text-[#76ABAE] opacity-85">
                      {card.kicker}
                    </div>
                    <div className="mt-1 text-[24px] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#EEEEEE]">
                      {card.title}
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#a8b0b8]/80">
                      {card.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {card.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-[#76ABAE]/25 bg-[#050b12]/20 px-3 py-1 text-[11px] font-semibold tracking-[0.02em] text-[#a8b0b8]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
