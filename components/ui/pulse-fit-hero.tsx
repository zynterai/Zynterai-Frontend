"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface PulseFitNavigationItem {
  label: string
  hasDropdown?: boolean
  onClick?: () => void
}

export interface PulseFitProgramCard {
  image: string
  category: string
  title: string
  onClick?: () => void
}

export interface PulseFitHeroProps {
  logo?: React.ReactNode
  navigation?: PulseFitNavigationItem[]
  ctaButton?: {
    label: string
    onClick: () => void
  }
  title: React.ReactNode
  subtitle: React.ReactNode
  primaryAction?: {
    label: string
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
  disclaimer?: React.ReactNode
  socialProof?: {
    avatars: string[]
    text: string
  }
  programs?: PulseFitProgramCard[]
  sectionId?: string
  /** When false, hides the built-in hero header (e.g. when using a global `Navbar1`). */
  showHeader?: boolean
  className?: string
  children?: React.ReactNode
}

const CARD_W = 356
const CARD_GAP = 24
const STRIDE = CARD_W + CARD_GAP

export function PulseFitHero({
  logo = "Zynterai",
  navigation = [
    { label: "Features" },
    { label: "Programs", hasDropdown: true },
    { label: "Testimonials" },
    { label: "Pricing" },
    { label: "Contact" },
  ],
  ctaButton,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  disclaimer,
  socialProof,
  programs = [],
  sectionId = "hero",
  showHeader = true,
  className,
  children,
}: PulseFitHeroProps) {
  const loopDistance = programs.length > 0 ? programs.length * STRIDE : 0
  const scrollToTestimonials = () => {
    document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id={sectionId}
      className={cn(
        "relative isolate flex min-h-screen w-full flex-col overflow-hidden text-[#EEEEEE] backdrop-blur-sm",
        !showHeader && "pt-24 sm:pt-28 lg:pt-32",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(180deg, color-mix(in srgb, #222831 82%, transparent) 0%, color-mix(in srgb, #28303a 78%, transparent) 45%, color-mix(in srgb, #222831 82%, transparent) 100%), url('/Hero%20Bannar.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      role="banner"
      aria-label="Hero section"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.4]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 75% 70% at 50% 35%, black 15%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 50% 35%, black 15%, transparent 70%)",
          }}
        />
        <div className="absolute -left-[18%] top-[8%] h-[380px] w-[380px] rounded-full bg-[#76ABAE]/14 blur-[100px]" />
        <div className="absolute -right-[12%] bottom-[10%] h-[440px] w-[440px] rounded-full bg-[#31363F]/85 blur-[110px]" />
        <div className="absolute left-1/2 top-0 h-px max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#76ABAE]/35 to-transparent sm:max-w-5xl" />
      </div>

      {showHeader ? (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex flex-row items-center justify-between px-8 lg:px-16"
          style={{
            paddingTop: "32px",
            paddingBottom: "32px",
          }}
        >
          <div className="font-sans text-2xl font-bold text-[#EEEEEE]">{logo}</div>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navigation.map((item, index) => (
              <button
                key={`${item.label}-${index}`}
                type="button"
                onClick={item.onClick}
                className="flex flex-row items-center gap-1 font-sans text-base font-normal text-[#a8b0b8] transition-opacity hover:opacity-80"
              >
                {item.label}
                {item.hasDropdown ? (
                  <ChevronDown className="size-4 shrink-0 opacity-80" strokeWidth={2} aria-hidden />
                ) : null}
              </button>
            ))}
          </nav>

          {ctaButton ? (
            <button
              type="button"
              onClick={ctaButton.onClick}
              className="rounded-full border border-[#EEEEEE]/12 bg-[#31363F] px-6 py-3 font-sans text-base font-medium text-[#EEEEEE] shadow-[0_2px_12px_rgba(0,0,0,0.35)] transition-all hover:scale-105 hover:border-[#76ABAE]/35"
            >
              {ctaButton.label}
            </button>
          ) : null}
        </motion.header>
      ) : null}

      {/* Main Content */}
      {children ? (
        <div className="relative z-10 flex w-full flex-1 items-center justify-center">{children}</div>
      ) : (
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex w-full max-w-[1400px] flex-col items-center text-center"
            style={{ gap: "32px" }}
          >
            <h1 className="w-full max-w-none text-pretty font-sans text-[clamp(2rem,7.5vw,5.75rem)] font-bold leading-[1.08] tracking-[-0.025em] text-[#EEEEEE] sm:text-[clamp(2.25rem,8vw,6.25rem)]">
              {title}
            </h1>

            <div className="max-w-[600px] font-sans text-[clamp(16px,2vw,20px)] font-normal leading-relaxed text-[#a8b0b8]">
              {subtitle}
            </div>

            {(primaryAction || secondaryAction) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center gap-4 sm:flex-row"
              >
                {primaryAction ? (
                  <button
                    type="button"
                    onClick={primaryAction.onClick}
                    className="flex flex-row items-center gap-2 rounded-full bg-[#76ABAE] px-8 py-4 font-sans text-lg font-medium text-[#222831] shadow-[0_4px_20px_rgba(118,171,174,0.35)] transition-all hover:scale-105 hover:brightness-110"
                  >
                    {primaryAction.label}
                    <ArrowRight className="size-5 shrink-0" strokeWidth={2} aria-hidden />
                  </button>
                ) : null}

                {secondaryAction ? (
                  <button
                    type="button"
                    onClick={secondaryAction.onClick}
                    className="rounded-lg border border-[#76ABAE]/45 bg-[#76ABAE]/24 px-6 py-2.5 font-sans text-base font-medium text-[#d9eff0] shadow-[0_6px_24px_rgba(118,171,174,0.35),inset_0_1px_0_rgba(238,238,238,0.18)] backdrop-blur-md transition-all hover:scale-105 hover:bg-[#76ABAE]/30"
                  >
                    {secondaryAction.label}
                  </button>
                ) : null}
              </motion.div>
            )}

            {disclaimer ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-sans text-[13px] font-normal italic text-[#a8b0b8]"
              >
                {disclaimer}
              </motion.p>
            ) : null}

            {socialProof ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-4 flex flex-row items-center gap-3"
              >
                <button
                  type="button"
                  onClick={scrollToTestimonials}
                  className="flex flex-row -space-x-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  aria-label="Go to testimonials"
                >
                  {socialProof.avatars.map((avatar, index) => (
                    <img
                      key={`${avatar}-${index}`}
                      src={avatar}
                      alt=""
                      className="size-10 rounded-full border-2 border-[#31363F] object-cover"
                    />
                  ))}
                </button>
                <span className="font-sans text-[15px] font-medium leading-tight text-[#c2ccd3] sm:text-base">
                  {socialProof.text}
                </span>
              </motion.div>
            ) : null}
          </motion.div>
        </div>
      )}

      {/* Program Cards Carousel */}
      {programs.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 w-full overflow-hidden"
          style={{
            paddingTop: "60px",
            paddingBottom: "60px",
          }}
        >
          <div
            className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-[150px]"
            style={{
              background: "linear-gradient(90deg, #222831 0%, rgba(34, 40, 49, 0) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[150px]"
            style={{
              background: "linear-gradient(270deg, #222831 0%, rgba(34, 40, 49, 0) 100%)",
            }}
          />

          <motion.div
            className="flex items-center"
            animate={loopDistance > 0 ? { x: [0, -loopDistance] } : { x: 0 }}
            transition={
              loopDistance > 0
                ? {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: programs.length * 3,
                      ease: "linear",
                    },
                  }
                : undefined
            }
            style={{
              gap: `${CARD_GAP}px`,
              paddingLeft: `${CARD_GAP}px`,
            }}
          >
            {[...programs, ...programs].map((program, index) => (
              <motion.div
                key={`${program.title}-${index}`}
                role="button"
                tabIndex={0}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={program.onClick}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    program.onClick?.()
                  }
                }}
                className="relative w-[356px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
                style={{
                  height: "480px",
                }}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="size-full object-cover"
                  width={356}
                  height={480}
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(34, 40, 49, 0.82) 100%)",
                  }}
                />

                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-[#EEEEEE]/85">
                    {program.category}
                  </span>
                  <h3 className="font-sans text-2xl font-semibold leading-snug text-[#EEEEEE]">
                    {program.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ) : null}
    </section>
  )
}
