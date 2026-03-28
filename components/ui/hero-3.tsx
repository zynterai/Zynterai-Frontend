"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Cookie, MessageCircle, Shield, Sparkles, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PulseFitHero } from "@/components/ui/pulse-fit-hero"

const COOKIE_NOTICE_KEY = "zynterai-cookie-notice-v2"

function scrollToId(id: string) {
  return () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }
}

function goToProductPage() {
  if (typeof window !== "undefined") {
    window.location.href = "/product"
  }
}

function HeroRealtimeChatbot() {
  const [open, setOpen] = useState(false)

  return (
    <div className="pointer-events-auto fixed bottom-4 right-4 z-[130] sm:bottom-5 sm:right-5">
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="chat-open"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="w-[min(92vw,368px)] overflow-hidden rounded-2xl border border-[#76ABAE]/45 bg-[#18232d] shadow-[0_24px_70px_-24px_rgba(0,0,0,0.85),0_0_24px_rgba(118,171,174,0.22)]"
          >
            <div className="flex items-center justify-between border-b border-[#76ABAE]/20 bg-[#0f1822]/88 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-[#76ABAE]/35 bg-[#76ABAE]/12 text-[#9bd2d5]">
                  <Sparkles className="h-4.5 w-4.5" strokeWidth={2.1} aria-hidden />
                  <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.85)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight text-[#EEEEEE]">Zynterai Live Copilot</p>
                  <p className="text-[11px] text-[#93a8b9]">Real-time assistance active</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-transparent p-1.5 text-[#a8b0b8] transition hover:border-[#76ABAE]/30 hover:bg-[#76ABAE]/10 hover:text-[#d6eff0]"
                aria-label="Minimize chatbot"
              >
                <X className="h-4 w-4" strokeWidth={2.2} aria-hidden />
              </button>
            </div>

            <div className="space-y-3 bg-[radial-gradient(120%_110%_at_10%_0%,rgba(118,171,174,0.14),transparent_60%)] p-4">
              <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-[#76ABAE]/20 bg-[#24303a]/80 px-3.5 py-2.5 text-xs leading-relaxed text-[#d6dde3]">
                Hello! Ask about pricing, integrations, or implementation timelines.
              </div>
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#76ABAE] px-3.5 py-2.5 text-xs font-medium text-[#132127]">
                Can you summarize key insights from my connected data?
              </div>
              <div className="flex max-w-[80%] items-center gap-1.5 rounded-2xl rounded-bl-md border border-[#76ABAE]/20 bg-[#24303a]/75 px-3.5 py-2.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8dc6ca]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8dc6ca] [animation-delay:120ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8dc6ca] [animation-delay:240ms]" />
              </div>
            </div>

            <div className="border-t border-[#76ABAE]/20 bg-[#0f1822]/70 p-3">
              <label htmlFor="hero-chat-input" className="sr-only">
                Type your message
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-[#76ABAE]/28 bg-[#1a2630] p-2">
                <input
                  id="hero-chat-input"
                  type="text"
                  placeholder="Type your message..."
                  className="h-9 w-full bg-transparent px-2 text-sm text-[#e7ecef] placeholder:text-[#89a0b2] focus:outline-none"
                />
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#76ABAE] text-[#12222a] transition hover:brightness-110"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" strokeWidth={2.2} aria-hidden />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="chat-closed"
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="group flex items-center gap-2.5 rounded-full border border-[#76ABAE]/35 bg-[#182734] px-3.5 py-2.5 text-[#d8ecee] shadow-[0_16px_42px_-18px_rgba(0,0,0,0.88),0_0_18px_rgba(118,171,174,0.26)] sm:px-4"
            aria-label="Open chatbot"
          >
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#28475a]/55 text-[#a2d9dc]">
              <MessageCircle className="h-5 w-5" strokeWidth={2.1} aria-hidden />
              <span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export function HeroSection() {
  const [showCookieNotice, setShowCookieNotice] = useState(false)

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && !localStorage.getItem(COOKIE_NOTICE_KEY)) {
        setShowCookieNotice(true)
      }
    } catch {
      setShowCookieNotice(true)
    }
  }, [])

  const acceptCookies = () => {
    try {
      localStorage.setItem(COOKIE_NOTICE_KEY, "all")
    } catch {
      /* ignore */
    }
    setShowCookieNotice(false)
  }

  const essentialOnlyCookies = () => {
    try {
      localStorage.setItem(COOKIE_NOTICE_KEY, "essential")
    } catch {
      /* ignore */
    }
    setShowCookieNotice(false)
  }

  return (
    <div className="relative">
      <PulseFitHero
        showHeader={false}
        title={
          <>
            The Unified AI Platform for the{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#76ABAE] via-[#8ebfc2] to-[#a8dce0] bg-clip-text text-transparent">
                Digital
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full text-[#76ABAE]/55"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 C 50 2, 100 12, 198 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>{" "}
            Enterprise
            <motion.span
              aria-hidden
              className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-px rounded-sm bg-[#76ABAE] align-middle sm:ml-1.5"
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{ duration: 1.05, repeat: Infinity, ease: "easeInOut" }}
            />
            .
          </>
        }
        subtitle="Zynterai unifies your data into one intelligence layer—real-time dashboards, AI-generated reports, and alerts that keep leadership ahead of the curve."
        primaryAction={{
          label: "Try ZentrovAI Now",
          onClick: () => {
            if (typeof window !== "undefined") {
              window.location.href = "/zentrovai";
            }
          },
        }}
        socialProof={{
          avatars: [
            "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=150&h=150&fit=crop",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
          ],
          text: "Trusted by teams centralizing intelligence",
        }}
      />
      <HeroRealtimeChatbot />
      <AnimatePresence>
        {showCookieNotice ? (
          <motion.div
            role="dialog"
            aria-labelledby="cookie-notice-title"
            aria-describedby="cookie-notice-desc"
            className="pointer-events-auto fixed bottom-4 left-4 z-[120] w-[min(90vw,340px)] sm:bottom-5 sm:left-5"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="overflow-hidden rounded-xl border border-[#76ABAE]/30 bg-[linear-gradient(145deg,rgba(32,39,48,0.9),rgba(18,24,28,0.96))] p-3 shadow-[0_20px_52px_-32px_rgba(0,0,0,0.9),0_0_12px_rgba(118,171,174,0.18)]">
              <div className="mb-2 flex items-start justify-between gap-2.5">
                <div className="flex min-w-0 gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#76ABAE]/35 bg-[#76ABAE]/10 text-[#8fc5c8]">
                    <Shield className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p id="cookie-notice-title" className="text-base font-semibold leading-tight tracking-[-0.01em] text-[#EEEEEE]">
                      Your Privacy Matters
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={essentialOnlyCookies}
                  className="rounded-lg p-1.5 text-[#a8b0b8] transition hover:bg-[#76ABAE]/12 hover:text-[#d8eff0]"
                  aria-label="Close cookie notice"
                >
                  <X className="h-4 w-4" strokeWidth={2.2} aria-hidden />
                </button>
              </div>
              <p id="cookie-notice-desc" className="text-xs leading-relaxed text-[#c8d1d8]">
                We use cookies to personalize your experience, optimize performance, and analyze site traffic. By
                clicking Accept All, you agree to our Cookie Policy.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="h-8 rounded-md border-[#76ABAE]/35 bg-transparent text-[11px] font-semibold text-[#dce7e8] hover:bg-[#76ABAE]/12"
                  onClick={essentialOnlyCookies}
                >
                  Essential Only
                </Button>
                <Button
                  type="button"
                  className="h-8 rounded-md border border-[#76ABAE]/65 bg-[linear-gradient(135deg,#5f9ea2,#76ABAE)] text-[11px] font-bold text-[#0f1b21] shadow-[0_8px_20px_-10px_rgba(118,171,174,0.72)] hover:brightness-110"
                  onClick={acceptCookies}
                >
                  ACCEPT ALL
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
