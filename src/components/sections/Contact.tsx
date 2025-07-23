'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-pink-50/30 via-rose-50/20 to-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-rose-200/15 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-16 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-200/15 to-fuchsia-200/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl shadow-lg">
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Let's Work Together
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to create exceptional documentation that empowers developers 
            and drives product adoption? Let's discuss your next project.
          </p>
          
          <div className="grid md:grid-cols-[1fr_1.5fr_1fr] gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" hover="glow" className="p-6 h-24 flex flex-col justify-center items-center text-center">
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <Link
                  href="https://wa.me/523331665661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-fuchsia-600 transition-colors"
                >
                  +52 333 166 5661
                </Link>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" hover="glow" className="p-6 h-24 flex flex-col justify-center items-center text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <Link
                href="mailto:armando.salazar.andrade@gmail.com"
                className="text-purple-600 hover:text-fuchsia-600 transition-colors text-sm leading-tight whitespace-nowrap"
              >
                armando.salazar.andrade@gmail.com
              </Link>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" hover="glow" className="p-6 h-24 flex flex-col justify-center items-center text-center">
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <Link
                  href="https://www.linkedin.com/in/armando-slzr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-fuchsia-600 transition-colors"
                >
                  /in/armando-slzr
                </Link>
              </Card>
            </motion.div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download Resume</span>
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </Button>
            <Link
              href="mailto:armando.salazar.andrade@gmail.com"
              className="btn-secondary flex items-center justify-center"
            >
              Send Email
            </Link>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}