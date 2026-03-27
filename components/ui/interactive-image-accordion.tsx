"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, Play } from "lucide-react"

export type AccordionImageItem = {
  id: number
  title: string
  imageUrl: string
}

/** Default Unsplash-backed items — swap via `items` prop if needed */
export const DEFAULT_IMAGE_ACCORDION_ITEMS: AccordionImageItem[] = [
  {
    id: 1,
    title: "Voice Assistant",
    imageUrl:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "AI Image Generation",
    imageUrl:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "AI Chatbot + Local RAG",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "AI Agent",
    imageUrl:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Visual Understanding",
    imageUrl:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop",
  },
]

const FALLBACK_IMG =
  "https://placehold.co/400x450/31363F/EEEEEE?text=Image+unavailable"

export type AccordionVisualVariant = "warm" | "cursor"

type AccordionItemProps = {
  item: AccordionImageItem
  isActive: boolean
  onActivate: () => void
  compact?: boolean
  visualVariant?: AccordionVisualVariant
}

function AccordionImagePanel({ item, isActive, onActivate, compact, visualVariant = "warm" }: AccordionItemProps) {
  const studio = visualVariant === "cursor"

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-label={item.title}
      className={cn(
        "relative overflow-hidden cursor-pointer rounded-2xl transition-all duration-700 ease-in-out outline-none sm:rounded-3xl",
        studio
          ? cn(
              "focus-visible:ring-2 focus-visible:ring-[#76ABAE]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#222831]",
              isActive
                ? "z-[1] shadow-[0_0_0_1px_rgba(118,171,174,0.35),0_24px_64px_-12px_rgba(0,0,0,0.75),0_0_80px_-20px_rgba(118,171,174,0.18)] ring-2 ring-[#76ABAE]/45"
                : "border border-[#EEEEEE]/10 opacity-[0.92] shadow-[0_12px_40px_-20px_rgba(0,0,0,0.75)] hover:border-[#76ABAE]/25 hover:opacity-100"
            )
          : cn(
              "focus-visible:ring-2 focus-visible:ring-[#76ABAE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222831]",
              isActive
                ? "z-[1] shadow-[0_20px_48px_-18px_rgba(0,0,0,0.5),0_0_0_1px_rgba(238,238,238,0.15)] ring-2 ring-[#76ABAE]/50 brightness-[1.02]"
                : "opacity-[0.96] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)] hover:opacity-100 hover:brightness-[1.03]"
            ),
        compact
          ? "h-[300px] sm:h-[380px] md:h-[440px] lg:h-[min(52dvh,560px)]"
          : "h-[360px] sm:h-[460px] md:h-[540px]",
        isActive ? "w-[min(85vw,400px)] flex-shrink-0 sm:w-[420px]" : "w-10 flex-shrink-0 sm:w-[60px]"
      )}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onActivate()
        }
      }}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 size-full object-cover"
        onError={(e) => {
          const el = e.currentTarget
          el.onerror = null
          el.src = FALLBACK_IMG
        }}
      />
      {studio ? (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#222831] via-black/60 to-[#76ABAE]/10"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(118,171,174,0.2),transparent_55%)]"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(238,238,238,0.04)_50%,transparent_60%)]" aria-hidden />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#222831]/95 via-[#31363F]/55 to-[#31363F]/15"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,rgba(118,171,174,0.12),transparent_55%)] mix-blend-soft-light"
            aria-hidden
          />
        </>
      )}

      <span
        className={cn(
          "absolute whitespace-nowrap text-base font-semibold tracking-wide transition-all duration-300 ease-in-out sm:text-lg",
          studio
            ? cn(
                "font-medium tracking-tight text-[#EEEEEE] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]",
                isActive && "text-[#EEEEEE]"
              )
            : "text-[#EEEEEE] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-wide",
          isActive
            ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
            : "bottom-24 left-1/2 w-auto -translate-x-1/2 rotate-90 text-left"
        )}
      >
        {item.title}
      </span>
    </div>
  )
}

export type InteractiveImageAccordionProps = {
  className?: string
  items?: AccordionImageItem[]
  defaultActiveIndex?: number
  /** Smaller panels for nested hero / tight viewports */
  compact?: boolean
  /** `"cursor"` = dark editor with teal accent (#76ABAE) */
  visualVariant?: AccordionVisualVariant
}

/** Horizontal hover/click accordion strip — uses project palette on overlay & focus rings */
export function InteractiveImageAccordion({
  className,
  items = DEFAULT_IMAGE_ACCORDION_ITEMS,
  defaultActiveIndex = 4,
  compact = false,
  visualVariant = "warm",
}: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.min(Math.max(0, defaultActiveIndex), items.length - 1)
  )

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center gap-2 overflow-x-auto overflow-y-hidden scroll-smooth py-1 [scrollbar-width:thin] sm:gap-3 sm:py-2 sm:pl-1 sm:pr-2 md:justify-center",
        visualVariant === "cursor"
          ? "[scrollbar-color:rgba(118,171,174,0.45)_transparent]"
          : "[scrollbar-color:rgba(118,171,174,0.35)_transparent]",
        className
      )}
    >
      {items.map((item, index) => (
        <AccordionImagePanel
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onActivate={() => setActiveIndex(index)}
          compact={compact}
          visualVariant={visualVariant}
        />
      ))}
    </div>
  )
}

/**
 * Standalone section: left column matches site hero copy & colors; right column is the accordion.
 * Use on a demo route, or compose manually with `InteractiveImageAccordion` inside `HeroSection`.
 */
export function LandingAccordionItem() {
  return (
    <div className="bg-[#222831] font-sans text-[#EEEEEE]">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              The Unified AI Platform for the{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#76ABAE] to-[#a8dce0] bg-clip-text text-transparent">Digital</span>
                <svg
                  className="absolute -bottom-0.5 left-0 w-full text-[#76ABAE]"
                  viewBox="0 0 200 12"
                  fill="none"
                  aria-hidden
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 C 50 2, 100 12, 198 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>{" "}
              Enterprise.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#a8b0b8] md:mx-0">
              Zynterai unifies your data into one intelligence layer—real-time dashboards, AI-generated reports, and
              alerts that keep leadership ahead of the curve.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
              <a
                href="#contact"
                className={cn(
                  "group inline-flex h-14 shrink-0 items-center justify-between gap-4 rounded-full bg-[#76ABAE] py-2 pl-8 pr-2 text-[0.95rem] font-semibold text-[#222831]",
                  "shadow-[0_14px_40px_-16px_rgba(118,171,174,0.45)] transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-[0_18px_44px_-14px_rgba(118,171,174,0.4)] sm:h-[3.75rem] sm:pl-9 sm:text-base"
                )}
              >
                <span className="pr-1">Get Started</span>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#222831] text-[#76ABAE] transition-transform duration-300 group-hover:translate-x-0.5 sm:size-12">
                  <ArrowRightIcon className="size-5 sm:size-[1.35rem]" strokeWidth={2.25} />
                </span>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-2 border-[#EEEEEE]/20 bg-[#31363F]/50 px-7 text-sm font-semibold text-[#EEEEEE] sm:h-14 sm:px-8 sm:text-base"
                asChild
              >
                <a href="#core-features">
                  <Play className="mr-2 size-4 shrink-0 fill-[#76ABAE]" />
                  Watch demo
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full min-w-0 md:w-1/2">
            <InteractiveImageAccordion visualVariant="cursor" />
          </div>
        </div>
      </section>
    </div>
  )
}
