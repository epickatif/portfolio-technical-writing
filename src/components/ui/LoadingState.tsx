'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LoadingStateProps {
  isLoading?: boolean
  children: React.ReactNode
  loadingText?: string
  variant?: 'skeleton' | 'spinner' | 'pulse'
}

export default function LoadingState({
  isLoading = false,
  children,
  loadingText = "Loading...",
  variant = 'skeleton'
}: LoadingStateProps) {
  const [showContent, setShowContent] = useState(!isLoading)
  
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowContent(true), 300)
      return () => clearTimeout(timer)
    } else {
      setShowContent(false)
    }
  }, [isLoading])
  
  if (variant === 'skeleton') {
    return (
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="animate-pulse">
              <div className="h-4 bg-gradient-to-r from-purple-200 to-fuchsia-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gradient-to-r from-purple-200 to-fuchsia-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gradient-to-r from-purple-200 to-fuchsia-200 rounded w-5/6"></div>
            </div>
          </motion.div>
        ) : showContent ? (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    )
  }
  
  if (variant === 'spinner') {
    return (
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="spinner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-purple-200 border-t-purple-600 rounded-full mb-4"
            />
            <p className="text-gray-600 text-sm">{loadingText}</p>
          </motion.div>
        ) : showContent ? (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    )
  }
  
  // Pulse variant
  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-purple-100 to-fuchsia-100 rounded-xl"
          />
          <div className="relative z-10 opacity-30">
            {children}
          </div>
        </motion.div>
      ) : showContent ? (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
