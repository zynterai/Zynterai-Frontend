"use client"

import { useRef, useState } from "react"
import { motion } from "motion/react"
import NumberFlow from "@number-flow/react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Sparkles as SparklesComp } from "@/components/ui/sparkles"
import { TimelineContent } from "@/components/ui/timeline-animation"
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "SaaS Subscription",
    description: "For SMEs centralizing core data and getting AI-generated performance insights.",
    price: 49,
    yearlyPrice: 499,
    monthlyCheckoutUrl: "https://buy.stripe.com/test_28EaEX8wu3SC7yUdg99R606",
    yearlyCheckoutUrl: "https://buy.stripe.com/test_5kQeVd7sq2Oyf1m1xr9R609",
    buttonText: "Start Subscription",
    buttonVariant: "outline" as const,
    includes: [
      "Includes:",
      "Unified data dashboards",
      "Automated insight summaries",
      "Real-time performance monitoring",
      "Email support",
    ],
  },
  {
    name: "Enterprise Analytics",
    description: "Advanced centralized intelligence for complex teams and strategic decision workflows.",
    price: 199,
    yearlyPrice: 1999,
    monthlyCheckoutUrl: "https://buy.stripe.com/test_bJe5kDfYWah01awa3X9R607",
    yearlyCheckoutUrl: "https://buy.stripe.com/test_eVq14n9Ay88S8CYfoh9R60a",
    buttonText: "Talk to Sales",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Everything in SaaS, plus:",
      "Executive strategy dashboards",
      "Cross-unit performance intelligence",
      "Priority support and onboarding",
      "Enterprise security controls",
    ],
  },
  {
    name: "API Insight Access",
    description: "Embed AI intelligence generation directly into your own products and workflows.",
    price: 299,
    yearlyPrice: 2999,
    monthlyCheckoutUrl: "https://buy.stripe.com/test_fZufZh7sqbl4g5q4JD9R608",
    yearlyCheckoutUrl: "https://buy.stripe.com/test_5kQ3cveUS60Kf1mfoh9R60b",
    buttonText: "Request API Access",
    buttonVariant: "outline" as const,
    includes: [
      "Includes:",
      "Insight generation API",
      "Programmatic data integration",
      "Custom workflow endpoints",
      "Developer enablement support",
    ],
  },
]

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0")

  const handleSwitch = (value: string) => {
    setSelected(value)
    onSwitch(value)
  }

  return (
    <div className="flex justify-center">
      <div className="glass-surface-muted relative z-10 mx-auto flex w-fit rounded-full p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 h-10 w-fit rounded-full px-3 py-1 font-medium transition-colors sm:px-6 sm:py-2",
            selected === "0" ? "text-primary-foreground" : "text-muted-foreground"
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-2 border-primary/40 bg-primary shadow-md shadow-primary/25"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 h-10 w-fit flex-shrink-0 rounded-full px-3 py-1 font-medium transition-colors sm:px-6 sm:py-2",
            selected === "1" ? "text-primary-foreground" : "text-muted-foreground"
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-2 border-primary/40 bg-primary shadow-md shadow-primary/25"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">Yearly</span>
        </button>
      </div>
    </div>
  )
}

export default function PricingSection4() {
  const [isYearly, setIsYearly] = useState(false)
  const pricingRef = useRef<HTMLDivElement>(null)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  }

  const togglePricingPeriod = (value: string) => setIsYearly(Number.parseInt(value) === 1)

  return (
    <section
      id="pricing"
      className="relative mx-auto min-h-screen overflow-x-hidden py-12 backdrop-blur-[2px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, color-mix(in srgb, #222831 72%, transparent) 0%, color-mix(in srgb, #28303a 64%, transparent) 55%, color-mix(in srgb, #222831 78%, transparent) 100%), url('/Pricing%20Bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      ref={pricingRef}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div
          className="absolute inset-0 bg-[size:70px_80px] [background-image:linear-gradient(to_right,rgba(118,171,174,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(118,171,174,0.14)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(238,238,238,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(238,238,238,0.05)_1px,transparent_1px)]"
        />
        <SparklesComp
          density={900}
          direction="bottom"
          speed={1}
          color="#76ABAE"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>

      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-[-114px] left-0 z-0 flex h-[113.625vh] w-full flex-col items-start justify-start gap-2.5 overflow-hidden p-0"
      >
        <div className="framer-1i5axl2">
          <div
            className="absolute top-0 left-[-568px] right-[-568px] h-[2053px] flex-none rounded-full"
            style={{ border: "200px solid rgba(118, 171, 174, 0.28)", filter: "blur(92px)", WebkitFilter: "blur(92px)" }}
            data-border="true"
            data-framer-name="Ellipse 1"
          ></div>
          <div
            className="absolute top-0 left-[-568px] right-[-568px] h-[2053px] flex-none rounded-full"
            style={{ border: "200px solid rgba(49, 54, 63, 0.55)", filter: "blur(92px)", WebkitFilter: "blur(92px)" }}
            data-border="true"
            data-framer-name="Ellipse 2"
          ></div>
        </div>
      </TimelineContent>

      <article className="relative z-50 mx-auto mb-6 max-w-3xl space-y-2 pt-32 text-center">
              <h2 className="text-4xl font-medium text-foreground">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{ type: "spring", stiffness: 250, damping: 40, delay: 0 }}
          >
            Monetization & Plans
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-muted-foreground"
        >
          Flexible pricing for SMEs, enterprise teams, and API-first products building on centralized intelligence.
        </TimelineContent>

        <TimelineContent as="div" animationNum={1} timelineRef={pricingRef} customVariants={revealVariants}>
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div
        className="absolute top-0 left-[10%] right-[10%] z-0 h-full w-[80%]"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(118, 171, 174, 0.38) 0%, transparent 70%)",
          opacity: 0.25,
          mixBlendMode: "normal",
        }}
      />

      <div className="mx-auto grid max-w-5xl gap-4 py-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative border-border text-foreground ${
                plan.popular
                  ? "z-20 shadow-[0px_-13px_120px_0px_rgba(118,171,174,0.38)]"
                  : "z-10"
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between">
                  <h3 className="mb-2 text-3xl">{plan.name}</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold">$</span>
                  <NumberFlow value={isYearly ? plan.yearlyPrice : plan.price} className="text-4xl font-semibold" />
                  <span className="ml-1 text-muted-foreground">/{isYearly ? "year" : "month"}</span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = isYearly ? plan.yearlyCheckoutUrl : plan.monthlyCheckoutUrl
                  }}
                  className={`mb-6 w-full rounded-xl p-4 text-xl ${
                    plan.popular
                      ? "border border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : plan.buttonVariant === "outline"
                        ? "border border-border bg-background text-foreground shadow-sm"
                        : ""
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 border-t border-border pt-4">
                  <h4 className="mb-3 text-base font-medium">{plan.includes[0]}</h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <span className="grid h-2.5 w-2.5 place-content-center rounded-full bg-foreground/40"></span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </section>
  )
}
