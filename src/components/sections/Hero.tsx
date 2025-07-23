'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ScrollIndicator from '@/components/ScrollIndicator'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50/60 via-white via-fuchsia-50/40 to-pink-50/30">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-400 to-fuchsia-400 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-tl from-fuchsia-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-40 w-80 h-80 bg-gradient-to-tr from-pink-400 to-rose-400 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400/20 rounded-full"></div>
        <div className="absolute top-1/3 right-16 w-1 h-1 bg-fuchsia-400/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-500/25 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700 -z-10"></div>

                {/* Image container with premium border */}
                <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-700">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <Image
                      src="/images/profile.png"
                      alt="Armando Salazar - Senior Technical Writer"
                      fill
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Premium floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-fuchsia-400/20 rounded-full -z-10 backdrop-blur-sm"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-fuchsia-400/20 to-pink-400/30 rounded-full -z-10 backdrop-blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-bl from-pink-400/25 to-rose-400/15 rounded-full -z-10 backdrop-blur-sm"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center order-1 lg:order-2"
          >
            {/* Logo above name - subtle branding */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <div className="w-16 h-16 relative">
                <Image
                  src="/images/logo.png"
                  alt="Armando Salazar Logo"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Armando Salazar
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-purple-600 mb-8">
              Senior Technical Writer and API Documentation Specialist
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              7+ years creating high-quality developer documentation, API references,
              and documentation platforms. Proven success implementing Docs-as-Code
              methodologies and simplifying complex technical concepts.
            </p>

            {/* LinkedIn Quick Access */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center justify-center mb-8"
            >
              <a
                href="https://www.linkedin.com/in/armando-slzr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors group"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm font-medium">Connect on LinkedIn</span>
              </a>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="#portfolio"
              >
                <span>View My Work</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download Resume</span>
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  ↓
                </motion.span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - positioned relative to content container */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-6 flex justify-center">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  )
}


