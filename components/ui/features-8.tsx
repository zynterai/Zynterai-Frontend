import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users } from 'lucide-react'

const featureCardClass =
  'relative w-full overflow-hidden text-[#EEEEEE] transition-shadow duration-300 hover:border-[#76ABAE]/40 hover:shadow-xl hover:shadow-black/35'

export function Features() {
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
    }),
  }

  return (
    <motion.section
      id="core-features"
      className="relative isolate overflow-x-hidden bg-[#222831]/55 py-16 text-[#EEEEEE] backdrop-blur-md md:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Core%20Feature%20Bg.svg')" }}
        />
        <div className="absolute inset-0 bg-[#222831]/58" />
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 75% 70% at 50% 40%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 50% 40%, black 20%, transparent 70%)',
          }}
        />
        <div className="absolute -left-[20%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#76ABAE]/14 blur-[100px]" />
        <div className="absolute -right-[15%] bottom-[5%] h-[480px] w-[480px] rounded-full bg-[#31363F]/80 blur-[110px]" />
        <div className="absolute left-1/2 top-0 h-px max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#76ABAE]/35 to-transparent sm:max-w-5xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#76ABAE] md:text-base">Core Features</p>
          <h2 className="text-4xl font-bold text-[#EEEEEE] md:text-5xl">Centralized AI Intelligence Capabilities</h2>
        </div>
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-full flex lg:col-span-2"
            >
              <Card className={featureCardClass}>
              <CardContent className="relative m-auto size-fit pt-6">
                <div className="relative flex h-24 w-56 items-center">
                  <svg
                    className="absolute inset-0 size-full text-[#a8b0b8]/45"
                    viewBox="0 0 254 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 80C40 20 95 10 130 30C160 48 195 70 249 20"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="mx-auto block w-fit text-5xl font-semibold">100%</span>
                </div>
                <h2 className="mt-6 text-center text-3xl font-semibold text-[#EEEEEE]">Unified Data Layer</h2>
              </CardContent>
              </Card>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-full sm:col-span-3 lg:col-span-2"
            >
              <Card className={featureCardClass}>
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-[#EEEEEE]/12 before:absolute before:-inset-2 before:rounded-full before:border before:border-[#EEEEEE]/08">
                  <svg className="m-auto h-fit w-24" viewBox="0 0 212 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="106" cy="72" r="48" className="text-[#222831]" fill="currentColor" />
                    <path d="M60 105C90 80 130 80 152 50" className="text-[#76ABAE]" stroke="currentColor" strokeWidth="8" />
                  </svg>
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-medium text-[#EEEEEE]">AI-Powered Consolidation</h2>
                  <p className="text-[#a8b0b8]">
                    Connect and normalize fragmented operational, financial, and performance datasets automatically.
                  </p>
                </div>
              </CardContent>
              </Card>
            </motion.div>

            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-full sm:col-span-3 lg:col-span-2"
            >
              <Card className={featureCardClass}>
              <CardContent className="pt-6">
                <div className="pt-6 lg:px-6">
                  <svg className="w-full text-[#a8b0b8]" viewBox="0 0 386 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="386" height="123" rx="10" className="fill-[#222831]" stroke="#EEEEEE" strokeOpacity="0.08" />
                    <path d="M10 98C60 55 90 72 130 60C175 44 200 80 240 64C280 48 315 80 376 56" className="text-[#76ABAE]" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </div>
                <div className="relative z-10 mt-14 space-y-2 text-center">
                  <h2 className="text-lg font-medium text-[#EEEEEE]">Strategic Report Generation</h2>
                  <p className="text-[#a8b0b8]">
                    Generate executive-ready intelligence reports and dashboards with AI-assisted interpretation.
                  </p>
                </div>
              </CardContent>
              </Card>
            </motion.div>

            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-full lg:col-span-3"
            >
              <Card className={featureCardClass}>
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border border-[#EEEEEE]/12 before:absolute before:-inset-2 before:rounded-full before:border before:border-[#EEEEEE]/08">
                    <Shield className="m-auto size-5 text-[#76ABAE]" strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium text-[#EEEEEE]">Real-Time Monitoring</h2>
                    <p className="text-[#a8b0b8]">Track business performance continuously with live intelligence alerts.</p>
                  </div>
                </div>
                <div className="relative mt-6 h-fit rounded-tl-(--radius) border-l border-t border-[#EEEEEE]/10 bg-[#222831]/40 p-6 py-6 sm:-my-6 sm:-mr-6 sm:ml-6">
                  <div className="absolute left-3 top-2 flex gap-1">
                    <span className="block size-2 rounded-full border border-[#EEEEEE]/15 bg-[#EEEEEE]/12" />
                    <span className="block size-2 rounded-full border border-[#EEEEEE]/15 bg-[#EEEEEE]/12" />
                    <span className="block size-2 rounded-full border border-[#EEEEEE]/15 bg-[#EEEEEE]/12" />
                  </div>
                  <svg className="w-full sm:w-[150%]" viewBox="0 0 366 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 200C40 140 70 160 110 145C150 130 190 165 225 148C260 131 295 158 365 120V231H0V200Z" className="fill-[#76ABAE]/18" />
                    <path d="M0 175C40 135 70 148 110 138C150 128 190 148 225 136C260 124 295 136 365 110" className="text-[#76ABAE]" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </CardContent>
              </Card>
            </motion.div>

            <motion.div
              custom={4}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-full lg:col-span-3"
            >
              <Card className={featureCardClass}>
              <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border border-[#EEEEEE]/12 before:absolute before:-inset-2 before:rounded-full before:border before:border-[#EEEEEE]/08">
                    <Users className="m-auto size-6 text-[#76ABAE]" strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium text-[#EEEEEE]">Scalable Enterprise Architecture</h2>
                    <p className="text-[#a8b0b8]">Built for growing SMEs and enterprise teams with flexible integration scale.</p>
                  </div>
                </div>
                <div className="relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px before:bg-[#EEEEEE]/12 sm:-my-6 sm:-mr-6">
                  <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                    <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                      <span className="block h-fit rounded border border-[#EEEEEE]/12 bg-[#222831]/50 px-2 py-1 text-xs text-[#a8b0b8] shadow-sm">Likeur</span>
                      <div className="size-7 ring-4 ring-[#31363F]">
                        <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/102558960?v=4" alt="" />
                      </div>
                    </div>
                    <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                      <div className="size-8 ring-4 ring-[#31363F]">
                        <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="" />
                      </div>
                      <span className="block h-fit rounded border border-[#EEEEEE]/12 bg-[#222831]/50 px-2 py-1 text-xs text-[#a8b0b8] shadow-sm">M. Irung</span>
                    </div>
                    <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                      <span className="block h-fit rounded border border-[#EEEEEE]/12 bg-[#222831]/50 px-2 py-1 text-xs text-[#a8b0b8] shadow-sm">B. Ng</span>
                      <div className="size-7 ring-4 ring-[#31363F]">
                        <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
