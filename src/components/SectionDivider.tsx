'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'wave' | 'gradient' | 'dots'
  className?: string
}

export default function SectionDivider({ variant = 'gradient', className = '' }: SectionDividerProps) {
  if (variant === 'wave') {
    return (
      <div className={`relative h-24 overflow-hidden ${className}`}>
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            className="text-purple-50/30"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'dots') {
    return (
      <div className={`flex justify-center py-8 ${className}`}>
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-purple-400/30 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    )
  }

  // Default gradient variant
  return (
    <div className={`relative h-16 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200/20 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-100/30 to-transparent"></div>
    </div>
  )
}
