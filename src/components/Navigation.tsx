'use client'

import Link from 'next/link'
import Image from 'next/image'

const navigationItems = [
  { name: 'Home', href: '#' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-900/5"
    >
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="#" className="flex items-center space-x-3 group">
                <div className="relative w-10 h-10 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  <Image
                    src="/images/logo.png"
                    alt="Armando Salazar Logo"
                    fill
                    className="rounded-full object-cover relative z-10"
                  />
                </div>
                <span className="font-semibold text-gray-900 hidden sm:block group-hover:text-purple-600 transition-colors duration-300">
                  Armando Salazar
                </span>
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium text-sm group px-3 py-2 rounded-lg hover:bg-purple-50/50"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ))}
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm"
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
    </nav>
  )
}
