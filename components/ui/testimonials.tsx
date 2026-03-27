"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Quote, ChevronLeft } from "lucide-react"

interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  imageSrc: string
}

interface TestimonialSectionProps {
  title: string
  subtitle: string
  testimonials: Testimonial[]
}

export const TestimonialSection = ({ title, subtitle, testimonials }: TestimonialSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(3)
  const visibleTestimonials = testimonials.slice(0, visibleCount)
  const hasMore = visibleCount < testimonials.length

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="testimonials" className="w-full bg-background/50 py-16 backdrop-blur-sm sm:py-24">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>

        <div className="relative">
          {hasMore && (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 3, testimonials.length))}
              className="glass-surface absolute -left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-foreground shadow-md transition hover:bg-muted/25"
              aria-label="Show more testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          <motion.div
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {visibleTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="glass-surface relative overflow-hidden rounded-lg shadow-sm"
                variants={itemVariants}
              >
                <div className="relative">
                  <img src={testimonial.imageSrc} alt={testimonial.name} className="h-[30rem] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                  <Quote className="mb-4 h-8 w-8 text-white/40" aria-hidden="true" />
                  <blockquote className="min-h-[6rem] text-base font-medium leading-relaxed">{testimonial.quote}</blockquote>
                  <figcaption className="mt-4">
                    <p className="font-semibold">
                      &mdash; {testimonial.name},
                      <span className="ml-1 text-white/60">{testimonial.role}</span>
                    </p>
                  </figcaption>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
