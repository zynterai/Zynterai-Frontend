import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

export const metadata: Metadata = {
  title: 'Zynter AI - Unified AI Intelligence Platform',
  description: 'Connect all your business data sources and turn them into actionable insights with AI-powered intelligence.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/Favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sans antialiased glass-site`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
