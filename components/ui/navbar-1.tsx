"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const

const sectionIds = navItems.map((item) => item.href.slice(1))

const Navbar1 = () => {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isOpen, setIsOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState<string>(sectionIds[0])

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    /** Distance from top of viewport; section is "passed" when its top is at or above this line */
    const headerOffset = 110

    const scrollSpy = () => {
      if (typeof window === "undefined") return

      const doc = document.documentElement
      const scrollBottom = window.scrollY + window.innerHeight
      const docHeight = doc.scrollHeight
      if (scrollBottom >= docHeight - 8) {
        setActiveSectionId(sectionIds[sectionIds.length - 1] ?? sectionIds[0])
        return
      }

      const y = window.scrollY + headerOffset

      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const sectionTop = el.getBoundingClientRect().top + window.scrollY
        if (y + 1 >= sectionTop) {
          current = id
        }
      }
      setActiveSectionId(current)
    }

    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "")
      if (hash && sectionIds.includes(hash)) {
        setActiveSectionId(hash)
      }
    }

    const raf = () => requestAnimationFrame(scrollSpy)

    scrollSpy()
    syncFromHash()

    window.addEventListener("scroll", raf, { passive: true })
    window.addEventListener("resize", scrollSpy)
    window.addEventListener("hashchange", syncFromHash)
    return () => {
      window.removeEventListener("scroll", raf)
      window.removeEventListener("resize", scrollSpy)
      window.removeEventListener("hashchange", syncFromHash)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 z-50 flex justify-center w-full py-6 px-4">
      <div className="flex w-full max-w-3xl items-center justify-between overflow-visible rounded-full border border-[#EEEEEE]/14 bg-[#31363F] px-6 py-3 relative z-10 shadow-[0_16px_48px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(238,238,238,0.12)]">
        {/* Fixed-height slot keeps the nav pill from growing; logo is larger and overlaps outside */}
        <div className="relative h-10 w-[140px] shrink-0 overflow-visible sm:w-[160px]">
          <motion.div
            className="absolute -left-1 top-1/2 z-20 -translate-y-1/2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <a href="/" aria-label="Go to home page" className="inline-block">
              <img
                src="/Logo.svg"
                alt="Zynter AI"
                className="h-14 w-auto select-none sm:h-16"
                draggable={false}
              />
            </a>
          </motion.div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const id = item.href.slice(1)
            const isActive = activeSectionId === id
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={isHomePage ? item.href : `/${item.href}`}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                    (isHomePage && isActive) || (!isHomePage && item.label === "Home")
                      ? "bg-primary/18 text-primary shadow-sm ring-1 ring-primary/25"
                      : "text-foreground hover:bg-muted/60 hover:text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </motion.div>
            )
          })}
        </nav>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="/product"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Started
          </a>
        </motion.div>

        <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 text-foreground" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/80 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-foreground" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => {
                const id = item.href.slice(1)
                const isActive = activeSectionId === id
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <a
                      href={isHomePage ? item.href : `/${item.href}`}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "inline-block rounded-full px-4 py-2 text-base font-medium transition-colors",
                        (isHomePage && isActive) || (!isHomePage && item.label === "Home")
                          ? "bg-primary/18 text-primary ring-1 ring-primary/25"
                          : "text-foreground"
                      )}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <a
                  href="/product"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  onClick={toggleMenu}
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Navbar1 }
