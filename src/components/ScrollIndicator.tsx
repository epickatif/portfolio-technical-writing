'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator when user scrolls down more than 100px
      setIsVisible(window.scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative"
        >
      <motion.button
        onClick={scrollToPortfolio}
        className="flex flex-col items-center space-y-2 text-gray-500 hover:text-purple-600 transition-all duration-300 group cursor-pointer relative"
        whileHover={{ y: -4, scale: 1.05 }}
        whileTap={{ y: 0, scale: 0.95 }}
      >
        {/* Premium glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
        {/* Enhanced scroll text */}
        <span className="text-sm font-medium tracking-wide opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:text-purple-600">
          Scroll to explore
        </span>
        
        {/* Enhanced animated chevron */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
          <ChevronDownIcon className="w-6 h-6 relative z-10 group-hover:text-purple-600 transition-colors duration-300" />
        </motion.div>
        
        {/* Enhanced line indicator */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 24 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="w-px bg-gradient-to-b from-gray-300 via-purple-400/50 to-transparent opacity-50 group-hover:opacity-80 group-hover:from-purple-500 transition-all duration-300"
        />
      </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
