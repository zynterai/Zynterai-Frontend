"use client"

import { motion } from "motion/react"
import { ElementType, ReactNode } from "react"

type VariantSet = {
  visible?: ((i: number) => Record<string, unknown>) | Record<string, unknown>
  hidden?: Record<string, unknown>
}

type TimelineContentProps = {
  children: ReactNode
  as?: ElementType
  animationNum?: number
  customVariants?: VariantSet
  className?: string
  timelineRef?: React.RefObject<HTMLElement | null>
}

const defaultVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
}

export function TimelineContent({
  children,
  as: Component = "div",
  animationNum = 0,
  customVariants,
  className,
}: TimelineContentProps) {
  const variants = customVariants ?? defaultVariants

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={animationNum}
      variants={variants}
      className={className}
    >
      <Component>{children}</Component>
    </motion.div>
  )
}
