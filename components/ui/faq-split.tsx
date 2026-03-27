"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bolt, Shield, CreditCard, Plug, Headset, ChevronDown, ChevronRight } from "lucide-react"

const categories = [
  { id: "all", name: "All Questions", icon: Bolt },
  { id: "integrations", name: "Integrations", icon: Plug },
  { id: "intelligence", name: "AI Intelligence", icon: CreditCard },
  { id: "security", name: "Security", icon: Shield },
]

type FaqItem = {
  question: string
  answer: string
  categories: string[]
}

const faqItems: FaqItem[] = [
  {
    question: "How does Zynterai integrate with existing business systems?",
    answer:
      "Zynterai is designed to seamlessly integrate with a wide range of business systems, including CRMs, financial software, analytics platforms, and operational databases. Through its centralized architecture, the platform consolidates data from multiple sources into a unified intelligence layer without disrupting existing workflows.",
    categories: ["integrations", "intelligence"],
  },
  {
    question: "What makes Zynterai different from traditional BI tools?",
    answer:
      "Unlike traditional business intelligence platforms that primarily visualize data, Zynterai leverages the ZentrovAI engine to automatically analyze, interpret, and generate actionable insights. It shifts the focus from passive reporting to proactive, AI-driven decision support.",
    categories: ["intelligence"],
  },
  {
    question: "Can Zynterai deliver real-time insights for decision-making?",
    answer:
      "Yes. Zynterai processes incoming data continuously, enabling real-time monitoring and instant insight generation. This allows decision-makers to respond quickly to performance changes, emerging trends, and operational risks.",
    categories: ["intelligence"],
  },
  {
    question: "Is Zynterai suitable for both SMEs and large enterprises?",
    answer:
      "Absolutely. Zynterai is built on a scalable architecture that supports growing SMEs as well as complex enterprise environments. Organizations can start with essential features and expand into advanced analytics and integrations as their needs evolve.",
    categories: ["intelligence", "integrations"],
  },
  {
    question: "How secure is business data within the platform?",
    answer:
      "Zynterai prioritizes data security through enterprise-grade protocols, including encryption, secure data handling, and controlled access management. The platform ensures that sensitive business information remains protected while enabling seamless data analysis.",
    categories: ["security"],
  },
  {
    question: "Does Zynterai require technical expertise to operate?",
    answer:
      "No. While the platform is powered by advanced AI technologies, it is designed with a user-friendly, command-center-style interface. Executives, managers, and teams can easily access insights and reports without requiring deep technical or data science expertise.",
    categories: ["intelligence"],
  },
]

export function FaqSplit() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const activeQuestions = useMemo(() => {
    if (activeCategory === "all") return faqItems
    return faqItems.filter((item) => item.categories.includes(activeCategory))
  }, [activeCategory])

  useEffect(() => {
    setOpenIndex(0)
  }, [activeCategory])

  return (
    <motion.section
      id="faq"
      className="bg-[radial-gradient(circle_at_center,rgba(118,171,174,0.22),transparent_65%)] py-20 px-4 backdrop-blur-[2px] sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl p-0 md:p-0">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            Understanding Zynterai
            <br />
            <span className="text-primary">Made Simple</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about centralized AI-driven business intelligence and insight generation.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="space-y-3">
            <p className="mb-2 text-lg font-semibold text-foreground">Browse by Category</p>
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className={`w-full rounded-xl border p-3 text-left transition ${
                  activeCategory === category.id
                    ? "border-primary/40 bg-primary/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                    : "glass-surface-muted border-border hover:bg-muted/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-background border border-border">
                      <category.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{category.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {category.id === "all"
                          ? `${faqItems.length} articles`
                          : `${faqItems.filter((item) => item.categories.includes(category.id)).length} articles`}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </motion.button>
            ))}

            <motion.div
              className="mt-4 rounded-xl bg-primary p-4 text-primary-foreground"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.35 }}
            >
              <p className="text-base font-semibold">Still have questions?</p>
              <p className="mt-1 text-sm text-primary-foreground/90">
                Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-background/90"
              >
                Contact Support
              </a>
            </motion.div>
          </aside>

          <div className="space-y-3">
            {activeQuestions.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={item.question}
                  className="glass-surface-muted rounded-xl border-border"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-lg font-medium text-foreground">{item.question}</span>
                    <ChevronDown className={`h-5 w-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border px-5 py-4 text-muted-foreground">{item.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
