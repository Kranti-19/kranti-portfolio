import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const _jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })
const _mono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kranti Holkar — Full Stack Developer',
  description:
    'Portfolio of Kranti Holkar, a Full Stack Developer building fast, accessible web apps with React, Node.js, Express and MongoDB.',
  generator: 'v0.app',
  keywords: [
    'Kranti Holkar',
    'Full Stack Developer',
    'React Developer',
    'Node.js',
    'MERN Stack',
    'Portfolio',
  ],
  openGraph: {
    title: 'Kranti Holkar — Full Stack Developer',
    description:
      'Full Stack Developer specializing in the MERN stack, clean UI and solid CS fundamentals.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5ff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
