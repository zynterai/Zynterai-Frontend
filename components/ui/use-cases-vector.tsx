"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

type UseCaseItem = {
  title: string
  description: string
}

const INDEX_TO_LABEL = (idx: number) => {
  switch (idx) {
    case 0:
      return "IDENTITY"
    case 1:
      return "DOMAIN"
    case 2:
      return "EMAIL"
    case 3:
      return "SMS"
    default:
      return "VECTOR"
  }
}

const INDEX_TO_TAGS: Record<number, string[]> = {
  0: ["BEHAVIORAL BIOMETRICS", "CREDENTIAL STUFFING", "SESSION HIJACK", "PRIVILEGE ESCALATION"],
  1: ["PHISHING PATTERNS", "DOMAIN SPOOFING", "LOOKALIKE DETECTION", "TAKEDOWN TRACKING"],
  2: ["INTENT CLASSIFICATION", "SOCIAL ENGINEERING", "RISK SCORING", "ANALYST PRIORITIZATION"],
  3: ["TELECOM SIGNALS", "CAMPAIGN DISCOVERY", "NUMBER BLOCKING", "INCIDENT COORDINATION"],
}

const INDEX_TO_CAPABILITIES: Record<number, { title: string; description: string }[]> = {
  0: [
    {
      title: "Behavioral Biometrics",
      description: "Spot anomalous interaction patterns that indicate takeover attempts—without adding friction.",
    },
    {
      title: "Credential Stuffing Detection",
      description: "Identify high-velocity login abuse and password replay campaigns across accounts and devices.",
    },
    {
      title: "Session Hijack Signals",
      description: "Detect token theft and suspicious session movement in real time to prevent escalation.",
    },
    {
      title: "Privilege Escalation Guardrails",
      description: "Flag abnormal role changes and admin actions before unauthorized access spreads.",
    },
  ],
  1: [
    {
      title: "Typosquat Surveillance",
      description: "Scan lookalike domains and DNS patterns to catch brand impersonation the moment it appears.",
    },
    {
      title: "SSL Certificate Scan",
      description: "Monitor certificate issuance and CT logs to detect fraudulent certificates tied to phishing.",
    },
    {
      title: "Automated Takedown Engine",
      description: "Escalate and coordinate takedown workflows fast—before campaigns reach users.",
    },
    {
      title: "Domain Risk Scoring API",
      description: "Score domains by similarity, infrastructure, and behavior to prioritize analyst action.",
    },
  ],
  2: [
    {
      title: "Intent Classification",
      description: "Classify message intent and urgency to separate noise from high-risk attack paths.",
    },
    {
      title: "Social Engineering Detection",
      description: "Detect persuasion patterns and impersonation cues that standard filters often miss.",
    },
    {
      title: "Risk Scoring & Triage",
      description: "Rank incidents with explainable scores so analysts focus on what matters first.",
    },
    {
      title: "Analyst Prioritization",
      description: "Route high-risk cases to the right owners and reduce response time across teams.",
    },
  ],
  3: [
    {
      title: "Telecom Signal Intelligence",
      description: "Ingest network-layer signals to detect malicious SMS and spoofing campaigns early.",
    },
    {
      title: "Campaign Discovery",
      description: "Cluster related numbers and infrastructure to map attacks and accelerate containment.",
    },
    {
      title: "Number Blocking Workflows",
      description: "Trigger coordinated blocks and carrier actions to disrupt campaigns at the source.",
    },
    {
      title: "Incident Coordination",
      description: "Unify response across security and operations with real-time status and handoffs.",
    },
  ],
}

type StatCardCopy = {
  row1: {
    left: { value: string; label: string }
    right: { value: string; label: string }
  }
  row2: { value: string; label: string }
  row3: {
    leftLabel: string
    status: string
    barPercent: number
    summary: string
  }
}

/** Right-hand metrics card: updates for each vector (identity / domain / email / sms). */
const INDEX_TO_STAT_CARD: Record<number, StatCardCopy> = {
  0: {
    row1: {
      left: { value: "<2s", label: "DETECTION TIME" },
      right: { value: "99.3%", label: "ACCURACY" },
    },
    row2: { value: "0", label: "FALSE REVOCATIONS" },
    row3: {
      leftLabel: "THREAT LEVEL",
      status: "ACTIVE",
      barPercent: 78,
      summary:
        "Vector response escalates and isolates unauthorized identity signals in real-time.",
    },
  },
  1: {
    row1: {
      left: { value: "<45m", label: "MEDIAN TAKEDOWN" },
      right: { value: "12M+", label: "DOMAINS SCANNED / DAY" },
    },
    row2: { value: "0", label: "ERRONEOUS BLOCKS" },
    row3: {
      leftLabel: "INFRASTRUCTURE RISK",
      status: "ELEVATED",
      barPercent: 82,
      summary:
        "Registration and certificate feeds feed continuous scoring — lookalikes and squatters are isolated before phishing pages go live.",
    },
  },
  2: {
    row1: {
      left: { value: "<8s", label: "CLASSIFICATION TIME" },
      right: { value: "97.8%", label: "TRIAGE PRECISION" },
    },
    row2: { value: "0", label: "MISROUTED INCIDENTS" },
    row3: {
      leftLabel: "INBOX THREAT LOAD",
      status: "ACTIVE",
      barPercent: 74,
      summary:
        "Message-level models rank BEC and credential-lure noise so analysts clear the queue without missing high-risk threads.",
    },
  },
  3: {
    row1: {
      left: { value: "<15s", label: "BLOCK LATENCY" },
      right: { value: "240K+", label: "NUMBERS SCORED / DAY" },
    },
    row2: { value: "0", label: "FALSE CARRIER BLOCKS" },
    row3: {
      leftLabel: "CAMPAIGN PRESSURE",
      status: "MONITORING",
      barPercent: 71,
      summary:
        "Burst patterns and sender reputation tie to landing pivots so smishing rings are disrupted before payout links propagate.",
    },
  },
}

export function UseCasesVector({ items }: { items: UseCaseItem[] }) {
  const [index, setIndex] = useState(0)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const active = items[index] ?? items[0]
  const label = INDEX_TO_LABEL(index)
  const tags = INDEX_TO_TAGS[index] ?? []
  const capabilities = INDEX_TO_CAPABILITIES[index] ?? []
  const statCard = INDEX_TO_STAT_CARD[index] ?? INDEX_TO_STAT_CARD[0]

  const vectorId = useMemo(() => {
    // Matches the screenshot pattern: identity vector shows as "VECTOR 02 - IDENTITY"
    return (index + 1).toString().padStart(2, "0")
  }, [index])

  const slideText = `${(index + 1).toString().padStart(2, "0")} / ${items.length.toString().padStart(2, "0")}`

  return (
    <section id="use-cases" className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      {/* Section heading */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="font-mono text-xs tracking-[0.25em] text-[#76ABAE] opacity-90">
          USE CASES
        </div>
        <h2 className="mt-5 text-[2.3rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-[#EEEEEE] sm:text-[3.1rem]">
          Built for Every <span className="text-[#76ABAE]">Business Function</span>
        </h2>
      </motion.div>

      <div className="relative isolate overflow-hidden rounded-2xl border border-[#1f2b36] bg-[#222831]/60 backdrop-blur-sm min-h-[560px] sm:min-h-[620px]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(900px 520px at 18% 25%, rgba(118,171,174,0.22), transparent 62%), radial-gradient(700px 420px at 78% 62%, rgba(118,171,174,0.14), transparent 60%)",
          }}
        />

        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(118,171,174,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(118,171,174,0.08) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage: "radial-gradient(ellipse 75% 60% at 50% 55%, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 50% 55%, black 30%, transparent 75%)",
          }}
        />

        <div className="relative z-10 flex h-full flex-col">
          {/* Top row */}
          <div className="flex items-start justify-between px-4 sm:px-10 pt-6 sm:pt-8">
            <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.22em] text-[#76ABAE] opacity-80">
              VECTOR {vectorId} - {label}
            </div>
            <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.14em] text-[#a8b0b8] opacity-80">
              {slideText}
            </div>
          </div>

          {/* Main content */}
            <div className="flex flex-1 flex-col gap-8 lg:flex-row lg:gap-8 px-5 sm:px-10 mt-3 lg:mt-0">
            {/* Left */}
            <div className="flex-1 pt-6 sm:pt-10">
              <div className="space-y-4">
                <motion.div
                  key={vectorId}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="space-y-2"
                >
                  <div className="leading-none">
                    <h1 className="text-[clamp(2.4rem,6vw,3.6rem)] sm:text-[clamp(2.8rem,5.4vw,4rem)] font-extrabold tracking-[-0.04em]">
                      <span className="text-[#EEEEEE]">{label} </span>
                      <span className="block text-[#76ABAE] ml-[28px]">ATTACKS</span>
                    </h1>
                  </div>

                  <p className="mt-2 max-w-xl rounded-lg border border-[#76ABAE]/20 bg-[#050b12]/30 px-4 py-2 text-sm sm:text-base text-[#a8b0b8]/85 shadow-[inset_0_0_0_1px_rgba(118,171,174,0.08),0_0_22px_rgba(118,171,174,0.10)] backdrop-blur-sm">
                    {active?.description}
                  </p>
                </motion.div>
              </div>

              {/* Tag chips */}
              <div className="mt-6 sm:mt-8 max-w-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {tags.map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: "easeOut" }}
                      className="inline-flex w-fit border border-[#76ABAE]/35 bg-[#050b12]/20 px-4 py-2 text-[11px] font-semibold tracking-[0.12em] text-[#a8b0b8] opacity-95 shadow-[0_0_0_1px_rgba(118,171,174,0.06),0_0_18px_rgba(118,171,174,0.07)] backdrop-blur-sm"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bottom actions */}
              <motion.div
                className="mt-6 lg:mt-auto pt-6 sm:pt-7 pb-2 flex flex-col gap-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                {/* Primary actions (like screenshot) */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <motion.button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#76ABAE] px-7 py-4 text-sm font-semibold tracking-[0.12em] text-[#0b1118] shadow-[0_18px_60px_-26px_rgba(118,171,174,0.55)] hover:brightness-105 sm:w-auto"
                    onClick={() => setIsPopupOpen(true)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>EXPLORE VECTOR</span>
                    <span aria-hidden>→</span>
                  </motion.button>

                  <motion.button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md border border-[#76ABAE]/25 bg-transparent px-7 py-4 text-sm font-semibold tracking-[0.12em] text-[#a8b0b8] hover:border-[#76ABAE]/45 hover:text-[#EEEEEE] sm:w-auto"
                    onClick={() => setIndex((p) => (p + 1) % items.length)}
                    aria-label="Next threat"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    NEXT THREAT
                  </motion.button>
                </div>

                {/* Vector navigation controls (bottom-left) */}
                <div className="flex items-center gap-3">
                  <motion.button
                    type="button"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-[#76ABAE]/18 bg-transparent text-[#a8b0b8] hover:border-[#76ABAE]/35 hover:text-[#EEEEEE]"
                    onClick={() => setIndex((p) => (p - 1 + items.length) % items.length)}
                    aria-label="Previous vector"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ChevronLeft className="size-5" />
                  </motion.button>
                  <motion.button
                    type="button"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-[#76ABAE]/18 bg-transparent text-[#a8b0b8] hover:border-[#76ABAE]/35 hover:text-[#EEEEEE]"
                    onClick={() => setIndex((p) => (p + 1) % items.length)}
                    aria-label="Next vector"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ChevronRight className="size-5" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right (stats) */}
            <div className="relative flex-1 lg:flex-none pt-6 pb-8 sm:pt-10 sm:pb-10">
              <div className="absolute right-0 top-20 hidden lg:flex flex-col gap-3 pr-2">
                {items.map((_, i) => (
                  <span
                    key={i}
                    className={`h-[9px] w-[9px] rounded-full border ${
                      i === index ? "border-[#76ABAE]" : "border-[#76ABAE]/25"
                    }`}
                    style={{
                      background: i === index ? "#76ABAE" : "transparent",
                    }}
                    aria-hidden
                  />
                ))}
              </div>

              <motion.div
                key={vectorId}
                className="rounded-2xl border border-[#76ABAE]/12 bg-transparent overflow-hidden"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="px-6 py-5">
                    <div className="text-[38px] font-extrabold tracking-[-0.03em] text-[#76ABAE]">
                      {statCard.row1.left.value}
                    </div>
                    <div className="mt-1 font-mono text-[11px] tracking-[0.18em] text-[#a8b0b8] opacity-80">
                      {statCard.row1.left.label}
                    </div>
                  </div>
                  <div className="px-6 py-5 sm:border-l sm:border-[#76ABAE]/12">
                    <div className="text-[38px] font-extrabold tracking-[-0.03em] text-[#EEEEEE]">
                      {statCard.row1.right.value}
                    </div>
                    <div className="mt-1 font-mono text-[11px] tracking-[0.18em] text-[#a8b0b8] opacity-80">
                      {statCard.row1.right.label}
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="border-t border-[#76ABAE]/12 px-6 py-6">
                  <div className="flex items-end gap-5 justify-between">
                    <div>
                      <div className="text-[48px] font-extrabold tracking-[-0.03em] text-[#76ABAE]">
                        {statCard.row2.value}
                      </div>
                      <div className="mt-1 font-mono text-[11px] tracking-[0.18em] text-[#a8b0b8] opacity-80">
                        {statCard.row2.label}
                      </div>
                    </div>
                    <div className="h-[46px] w-[46px] rounded-full border border-[#76ABAE]/20" />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="border-t border-[#76ABAE]/12 px-6 py-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-mono text-[11px] tracking-[0.18em] text-[#a8b0b8] opacity-80">
                      {statCard.row3.leftLabel}
                    </div>
                    <div className="font-mono text-[11px] tracking-[0.18em] text-[#76ABAE] opacity-90">
                      {statCard.row3.status}
                    </div>
                  </div>
                  <div className="mt-4 h-3 rounded-full border border-[#76ABAE]/20 bg-transparent">
                    <div
                      className="h-full rounded-full bg-[#76ABAE]"
                      style={{
                        width: `${statCard.row3.barPercent}%`,
                        boxShadow: "0 0 22px rgba(118,171,174,0.35)",
                      }}
                    />
                  </div>
                  <div className="mt-3 text-xs text-[#a8b0b8]/75">{statCard.row3.summary}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isPopupOpen ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-stretch justify-end bg-black/70"
            role="dialog"
            aria-modal="true"
            aria-label="Vector details"
            onClick={() => setIsPopupOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative h-full w-full max-w-[560px] border-l border-[#1f2b36] bg-[#0b0f14]/92 backdrop-blur-md shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Top chrome */}
              <div className="sticky top-0 z-10 border-b border-[#1f2b36] bg-[#0b0f14]/80 backdrop-blur-md">
                <div className="flex items-start justify-between gap-4 px-5 py-5">
                  <div className="space-y-2">
                    <div className="font-mono text-[11px] tracking-[0.22em] text-[#76ABAE] opacity-85">
                      VECTOR {vectorId} - {label} THREAT
                    </div>
                    <h3 className="text-[22px] sm:text-[26px] font-extrabold tracking-[-0.03em] text-[#EEEEEE]">
                      {active?.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#76ABAE]/20 bg-transparent text-[#a8b0b8] hover:border-[#76ABAE]/35 hover:text-[#EEEEEE]"
                    onClick={() => setIsPopupOpen(false)}
                    aria-label="Close popup"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="px-5 pb-10 pt-6">
                <p className="text-sm leading-relaxed text-[#a8b0b8]">{active?.description}</p>

                <div className="mt-8 border-t border-[#1f2b36] pt-6">
                  <div className="font-mono text-[11px] tracking-[0.18em] text-[#a8b0b8]/70">
                    THREAT CAPABILITIES
                  </div>
                  <div className="mt-4">
                    {capabilities.map((c, i) => (
                      <div key={c.title} className="border-b border-[#1f2b36] py-4">
                        <div className="flex items-start gap-4">
                          <div className="mt-0.5 font-mono text-[11px] tracking-[0.18em] text-[#76ABAE] opacity-90">
                            {(i + 1).toString().padStart(2, "0")}
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-[#EEEEEE]">{c.title}</div>
                            <div className="mt-1 text-xs leading-relaxed text-[#a8b0b8]/85">
                              {c.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {tags.length ? (
                  <div className="mt-8">
                    <div className="font-mono text-[11px] tracking-[0.18em] text-[#a8b0b8]/70">
                      SIGNALS
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex border border-[#76ABAE]/25 bg-transparent px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-[#a8b0b8]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-8 border-t border-[#1f2b36] pt-6">
                  <div className="font-mono text-[11px] tracking-[0.18em] text-[#a8b0b8]/70">
                    PERFORMANCE METRICS
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-md border border-[#1f2b36] bg-white/[0.02] px-4 py-3">
                      <div className="text-lg font-extrabold text-[#EEEEEE]">{"<2s"}</div>
                      <div className="mt-1 font-mono text-[10px] tracking-[0.18em] text-[#a8b0b8]/75">
                        DETECTION TIME
                      </div>
                    </div>
                    <div className="rounded-md border border-[#1f2b36] bg-white/[0.02] px-4 py-3">
                      <div className="text-lg font-extrabold text-[#76ABAE]">99.3%</div>
                      <div className="mt-1 font-mono text-[10px] tracking-[0.18em] text-[#a8b0b8]/75">
                        ACCURACY
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

