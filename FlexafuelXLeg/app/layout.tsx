import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['800', '600', '500'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'flexafuel x leg',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
