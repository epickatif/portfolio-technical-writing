'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  onClick,
  className = ''
}: ButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 overflow-hidden group"
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl"
  }
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40",
    secondary: "bg-white/90 backdrop-blur-sm text-gray-700 border border-gray-200 shadow-lg hover:bg-white hover:border-purple-200 hover:shadow-xl",
    ghost: "text-purple-600 hover:text-fuchsia-600 hover:bg-purple-50/50"
  }
  
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`
  
  const ButtonContent = () => (
    <>
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Glow effect for primary variant */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm -z-10" />
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center space-x-2">
        {children}
      </span>
    </>
  )
  
  const motionProps = {
    whileHover: { 
      scale: 1.02,
      y: -2
    },
    whileTap: { 
      scale: 0.98,
      y: 0
    },
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 17 
    }
  }
  
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        {...motionProps}
      >
        <ButtonContent />
      </motion.a>
    )
  }
  
  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      {...motionProps}
    >
      <ButtonContent />
    </motion.button>
  )
}
