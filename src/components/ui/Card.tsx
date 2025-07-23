'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'glass' | 'elevated'
  hover?: 'lift' | 'glow' | 'scale' | 'none'
  className?: string
}

export default function Card({
  children,
  variant = 'glass',
  hover = 'lift',
  className = ''
}: CardProps) {
  const baseClasses = "relative overflow-hidden transition-all duration-500 group"
  
  const variantClasses = {
    default: "bg-white border border-gray-200 rounded-xl shadow-sm",
    glass: "bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl shadow-lg",
    elevated: "bg-white rounded-xl shadow-xl border border-gray-100"
  }
  
  const hoverClasses = {
    lift: "hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]",
    glow: "hover:shadow-2xl hover:shadow-purple-500/20",
    scale: "hover:scale-105",
    none: ""
  }
  
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${hoverClasses[hover]} ${className}`
  
  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Subtle gradient overlay for glass effect */}
      {variant === 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      )}
      
      {/* Glow effect on hover */}
      {hover === 'glow' && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-fuchsia-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-fuchsia-500/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-xl" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
