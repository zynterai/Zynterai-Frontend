"use client"

import { motion } from "framer-motion"
import { Brain } from "lucide-react"
import { usePathname } from "next/navigation"

const leftInputs = [
  { iconSrc: "/ERP%20%26%20Finance%20Systems.svg", label: "ERP & Finance Systems" },
  { iconSrc: "/CRM%20%26%20Customer%20Platforms.svg", label: "CRM & Customer Platforms" },
  { iconSrc: "/External%20APIs%20%26%20Events.svg", label: "External APIs & Events" },
]

const rightOutputs = [
  { iconSrc: "/Executive%20Insight%20Dashboards.svg", label: "Executive Insight Dashboards" },
  { iconSrc: "/Executive%20Insight%20Dashboards%20%282%29.svg", label: "Real-Time Risk & Intelligence Alerts" },
  { iconSrc: "/Strategic%20AI%20Reports.svg", label: "Strategic AI Reports" },
]

const stats = [
  { value: "12+", label: "SOURCES SYNCED" },
  { value: "< 5s", label: "ALERT LATENCY" },
  { value: "98.7%", label: "SIGNAL ACCURACY" },
  { value: "240", label: "REPORTS / DAY" },
]

export function TechnicalDiagramSection() {
  const pathname = usePathname()
  // Prevent the animated model from appearing on non-home routes (e.g. /product).
  if (pathname !== "/") return null

  return (
    <section
      id="architecture"
      className="relative isolate overflow-hidden bg-[#31363F] py-8 px-4 sm:py-10 sm:px-6 lg:px-8"
    >
      {/* Section-wide ambient (softer vignette) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(900px 520px at 15% 20%, rgba(118,171,174,0.12), transparent 58%), radial-gradient(720px 440px at 85% 75%, rgba(49,54,63,0.55), transparent 62%), radial-gradient(520px 360px at 50% 45%, rgba(118,171,174,0.05), transparent 72%)",
        }}
      />

      {/* Blueprint grid — finer, lower contrast */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.11] mix-blend-soft-light"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(118,171,174,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(118,171,174,0.14) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 72% 55% at 50% 42%, black 18%, transparent 74%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 72% 55% at 50% 42%, black 18%, transparent 74%)",
        }}
        animate={{ opacity: [0.07, 0.13, 0.07], rotate: [0, 1.25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hairline scan texture */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(238,238,238,0.06) 1px, transparent 1px)",
          backgroundSize: "100% 8px",
        }}
        animate={{ opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Full-section pulsing frame (same rhythm as node/stat ring animations) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-4 z-0 rounded-[28px] border border-[#76ABAE]/14 sm:-inset-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.55, 0] }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-4 z-0 rounded-[28px] border border-[#76ABAE]/08 sm:-inset-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 0.9,
          }}
        />

        <div className="relative z-10">
        <motion.div
          className="text-center mb-5 sm:mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.28em] text-[#76ABAE] mb-2 md:mb-3">
            Technical Diagram
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#EEEEEE]">
            Data Sources to Actionable Intelligence
          </h2>
          <p className="mt-2 text-base md:text-lg leading-relaxed text-[#a8b0b8] max-w-3xl mx-auto">
            A visual model of how Zynterai consolidates multiple business systems through an AI engine to
            deliver real-time, strategic insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-[#31363F] bg-gradient-to-b from-[#31363F] via-[#2b3038] to-[#222831] shadow-[0_28px_90px_-28px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(118,171,174,0.14)]"
        >
          <motion.div
            className="relative w-full overflow-hidden bg-[#222831] min-h-[460px] sm:h-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-95"
              style={{
                backgroundImage:
                  "radial-gradient(720px 420px at 22% 22%, rgba(118,171,174,0.14), transparent 62%), radial-gradient(640px 380px at 78% 68%, rgba(118,171,174,0.08), transparent 65%), radial-gradient(circle at 50% 40%, rgba(118,171,174,0.03) 0%, transparent 55%)",
              }}
            />

            {/* Micro-dot blueprint */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(118,171,174,0.09) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Scanlines */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.14] mix-blend-soft-light"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(238,238,238,0.05) 1px, transparent 1px)",
                backgroundSize: "100% 8px",
              }}
            />

            {/* Sweeping beam */}
            <motion.div
              aria-hidden
              className="absolute left-[-25%] top-0 h-full w-[50%]"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(118,171,174,0.16) 45%, rgba(118,171,174,0) 100%)",
              }}
              animate={{ x: ["0%", "165%"] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <svg
              aria-hidden
              className="absolute inset-0 hidden h-full w-full sm:block"
              viewBox="0 0 1000 560"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="tech-line-glow" x="-8%" y="-8%" width="116%" height="116%">
                  <feGaussianBlur stdDeviation="1.2" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Connectors left -> center */}
              <motion.path
                d="M200 170 C 360 150, 420 185, 500 210"
                stroke="rgba(118,171,174,0.62)"
                strokeWidth="1.75"
                strokeLinecap="round"
                filter="url(#tech-line-glow)"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              />
              <motion.path
                d="M200 270 C 360 250, 420 285, 500 210"
                stroke="rgba(118,171,174,0.42)"
                strokeWidth="1.75"
                strokeLinecap="round"
                filter="url(#tech-line-glow)"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
              />
              <motion.path
                d="M200 370 C 360 350, 420 385, 500 210"
                stroke="rgba(118,171,174,0.32)"
                strokeWidth="1.75"
                strokeLinecap="round"
                filter="url(#tech-line-glow)"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.26, ease: "easeOut" }}
              />

              {/* Connectors center -> right */}
              <motion.path
                d="M500 210 C 580 190, 650 170, 800 190"
                stroke="rgba(118,171,174,0.58)"
                strokeWidth="1.75"
                strokeLinecap="round"
                filter="url(#tech-line-glow)"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.34, ease: "easeOut" }}
              />
              <motion.path
                d="M500 210 C 585 245, 650 270, 800 285"
                stroke="rgba(118,171,174,0.4)"
                strokeWidth="1.75"
                strokeLinecap="round"
                filter="url(#tech-line-glow)"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.42, ease: "easeOut" }}
              />
              <motion.path
                d="M500 210 C 585 310, 650 340, 800 380"
                stroke="rgba(118,171,174,0.32)"
                strokeWidth="1.75"
                strokeLinecap="round"
                filter="url(#tech-line-glow)"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.50, ease: "easeOut" }}
              />

              {/* Dots */}
              <motion.circle
                cx="500"
                cy="210"
                r="4"
                fill="rgba(238,238,238,0.6)"
                initial={{ opacity: 0, scale: 0.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              />
              {[
                { cx: 200, cy: 170, r: 3, fill: "rgba(118,171,174,0.5)", delay: 0.18 },
                { cx: 200, cy: 270, r: 3, fill: "rgba(118,171,174,0.35)", delay: 0.26 },
                { cx: 200, cy: 370, r: 3, fill: "rgba(118,171,174,0.25)", delay: 0.34 },
                { cx: 800, cy: 190, r: 3, fill: "rgba(118,171,174,0.45)", delay: 0.42 },
                { cx: 800, cy: 285, r: 3, fill: "rgba(118,171,174,0.35)", delay: 0.50 },
                { cx: 800, cy: 380, r: 3, fill: "rgba(118,171,174,0.25)", delay: 0.58 },
              ].map((c) => (
                <motion.circle
                  key={`${c.cx}-${c.cy}`}
                  {...c}
                  initial={{ opacity: 0, scale: 0.2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: c.delay, ease: "easeOut" }}
                />
              ))}

              {/* Moving signal pulse through the center */}
              <motion.circle
                cx="500"
                cy="210"
                r="2.6"
                fill="rgba(118,171,174,0.9)"
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                animate={{
                  cx: [500, 590, 650, 720, 800],
                  cy: [210, 225, 245, 210, 190],
                  opacity: [0.85, 0.9, 0.85],
                }}
              />
            </svg>

            {/* Left input nodes */}
            {leftInputs.map((item, i) => {
              const top = 120 + i * 100
              return (
                <motion.div
                  key={item.label}
                  className="absolute left-[5%] hidden w-[320px] max-w-[min(320px,88vw)] rounded-xl border border-[#EEEEEE]/[0.09] bg-[#1a2029]/85 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md ring-1 ring-inset ring-white/[0.04] px-5 py-4 sm:block"
                  style={{ top }}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: 0.12 + i * 0.12, ease: "easeOut" }}
                >
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-[14px] border border-[#76ABAE]/22"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.9, 0] }}
                    transition={{
                      duration: 2.7,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: 0.35 + i * 0.16,
                    }}
                  />
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#76ABAE]/30 bg-[#76ABAE]/14 p-1.5 shadow-[0_0_20px_-6px_rgba(118,171,174,0.45)]">
                      <img src={item.iconSrc} alt="" className="h-full w-full object-contain opacity-95" aria-hidden />
                    </div>
                    <div className="text-[13px] font-semibold leading-snug tracking-tight text-[#EEEEEE]">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Center model */}
            <motion.div
              className="absolute left-1/2 top-[140px] hidden -translate-x-1/2 sm:block"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="absolute inset-[-44px] rounded-full bg-[#7fc3ca]/10 blur-2xl" />
                <div className="flex h-[158px] w-[158px] flex-col items-center justify-center gap-2 rounded-full border border-[#7fc3ca]/30 bg-[#0a161f]/90 px-4 text-center shadow-[0_0_46px_-14px_rgba(127,195,202,0.34),inset_0_1px_0_rgba(173,226,232,0.12),inset_0_-18px_36px_rgba(0,0,0,0.55)] backdrop-blur-md ring-2 ring-[#7fc3ca]/18">
                  <Brain className="h-6 w-6 text-[#8bcfd4]" strokeWidth={1.75} aria-hidden />
                  <div className="text-[10px] font-semibold leading-tight tracking-[0.2em] text-[#a8b0b8]">
                    CENTRAL INTELLIGENCE MODEL
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right output nodes */}
            {rightOutputs.map((item, i) => {
              const top = 120 + i * 100
              return (
                <motion.div
                  key={item.label}
                  className="absolute right-[5%] hidden w-[320px] max-w-[min(320px,88vw)] rounded-xl border border-[#EEEEEE]/[0.09] bg-[#1a2029]/85 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md ring-1 ring-inset ring-white/[0.04] px-5 py-4 sm:block"
                  style={{ top }}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: 0.16 + i * 0.12, ease: "easeOut" }}
                >
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-[14px] border border-[#76ABAE]/22"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.9, 0] }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: 0.4 + i * 0.14,
                    }}
                  />
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#76ABAE]/30 bg-[#76ABAE]/14 p-1.5 shadow-[0_0_20px_-6px_rgba(118,171,174,0.45)]">
                      <img src={item.iconSrc} alt="" className="h-full w-full object-contain opacity-95" aria-hidden />
                    </div>
                    <div className="text-[13px] font-semibold leading-snug tracking-tight text-[#EEEEEE]">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Mobile layout */}
            <div className="relative z-10 space-y-3 p-3 sm:hidden">
              {leftInputs.map((item, i) => (
                <motion.div
                  key={`mobile-left-${item.label}`}
                  className="rounded-xl border border-[#EEEEEE]/[0.09] bg-[#1a2029]/90 px-4 py-3 ring-1 ring-inset ring-white/[0.04]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: 0.06 + i * 0.08, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#76ABAE]/30 bg-[#76ABAE]/14 p-1.5 shadow-[0_0_20px_-6px_rgba(118,171,174,0.45)]">
                      <img src={item.iconSrc} alt="" className="h-full w-full object-contain opacity-95" aria-hidden />
                    </div>
                    <div className="text-[13px] font-semibold leading-snug tracking-tight text-[#EEEEEE]">{item.label}</div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="mx-auto py-1"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              >
                <div className="relative mx-auto w-fit">
                  <div className="absolute inset-[-28px] rounded-full bg-[#7fc3ca]/10 blur-2xl" />
                  <div className="flex h-[132px] w-[132px] flex-col items-center justify-center gap-2 rounded-full border border-[#7fc3ca]/30 bg-[#0a161f]/90 px-3 text-center shadow-[0_0_42px_-16px_rgba(127,195,202,0.34),inset_0_1px_0_rgba(173,226,232,0.12),inset_0_-18px_36px_rgba(0,0,0,0.55)] ring-2 ring-[#7fc3ca]/18">
                    <Brain className="h-5 w-5 text-[#8bcfd4]" strokeWidth={1.75} aria-hidden />
                    <div className="text-[9px] font-semibold leading-tight tracking-[0.18em] text-[#a8b0b8]">
                      CENTRAL INTELLIGENCE MODEL
                    </div>
                  </div>
                </div>
              </motion.div>

              {rightOutputs.map((item, i) => (
                <motion.div
                  key={`mobile-right-${item.label}`}
                  className="rounded-xl border border-[#EEEEEE]/[0.09] bg-[#1a2029]/90 px-4 py-3 ring-1 ring-inset ring-white/[0.04]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: 0.24 + i * 0.08, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#76ABAE]/30 bg-[#76ABAE]/14 p-1.5 shadow-[0_0_20px_-6px_rgba(118,171,174,0.45)]">
                      <img src={item.iconSrc} alt="" className="h-full w-full object-contain opacity-95" aria-hidden />
                    </div>
                    <div className="text-[13px] font-semibold leading-snug tracking-tight text-[#EEEEEE]">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Metrics strip — same panel as diagram (no floating gap) */}
          <div className="relative border-t border-[#2e3844] bg-gradient-to-b from-[#10151c] to-[#0b0f14]">
            <div
              aria-hidden
              className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#76ABAE]/45 to-transparent sm:inset-x-10"
            />
            <motion.div
              className="mx-auto grid max-w-[920px] grid-cols-2 divide-y divide-[#2a3139] sm:grid-cols-4 sm:divide-x sm:divide-y-0"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            >
              {stats.map((s, idx) => (
                <motion.div
                  key={s.label}
                  className="relative px-3 py-3 text-center sm:px-5 sm:py-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: 0.04 + idx * 0.06, ease: "easeOut" }}
                >
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-3 inset-y-2 rounded-lg border border-[#76ABAE]/10 sm:inset-x-4 sm:inset-y-2.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.45, 0] }}
                    transition={{
                      duration: 3.4,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: 0.25 + idx * 0.12,
                    }}
                  />
                  <div className="font-mono text-[25px] font-extrabold tabular-nums tracking-[-0.03em] text-[#EEEEEE] sm:text-[27px]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] font-medium tracking-[0.2em] text-[#8a939c]">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

