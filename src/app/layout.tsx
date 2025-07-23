import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Armando Salazar | Senior Technical Writer',
  description: 'Senior Technical Writer and API Documentation Specialist with 7+ years of experience creating developer-focused documentation.',
  keywords: ['technical writer', 'API documentation', 'developer docs', 'documentation'],
  authors: [{ name: 'Armando Salazar' }],
  creator: 'Armando Salazar',
  openGraph: {
    title: 'Armando Salazar | Senior Technical Writer',
    description: 'Senior Technical Writer and API Documentation Specialist with 7+ years of experience creating developer-focused documentation.',
    url: 'https://armando-salazar.dev',
    siteName: 'Armando Salazar Portfolio',
    images: [
      {
        url: '/images/profile.png',
        width: 1200,
        height: 630,
        alt: 'Armando Salazar - Senior Technical Writer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armando Salazar | Senior Technical Writer',
    description: 'Senior Technical Writer and API Documentation Specialist with 7+ years of experience creating developer-focused documentation.',
    images: ['/images/profile.png'],
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}