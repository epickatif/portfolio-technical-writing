'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import Card from '@/components/ui/Card'

const portfolioItems = [
  {
    title: 'Napster Corp. (Infinite Reality)',
    role: 'Senior Technical Writer and Inaugural Technical Writing Lead',
    period: 'December 2022 - July 2025',
    description: 'Established the company\'s first technical writing practice, creating unified documentation portal for metaverse creators and developers.',
    links: [
      { label: 'Architecture Docs', url: 'https://docs.ir.world/architecture-docs' },
      { label: 'Creator Docs', url: 'https://docs.ir.world/' }
    ],
    technologies: ['OpenAPI/Swagger', 'Docs-as-Code', 'CI/CD', 'Information Architecture'],
    highlights: [
      'Implemented Docs-as-Code methodologies and CI/CD workflows',
      'Created comprehensive API documentation and SDK guides',
      'Designed scalable information architecture'
    ]
  },
  {
    title: 'Rappi Developer Portal and API Docs',
    role: 'Senior Technical Writer',
    period: 'August 2020 - June 2022',
    description: 'Led documentation initiatives for Latin America\'s leading super-app, creating comprehensive developer resources.',
    links: [
      { label: 'Developer Portal', url: 'https://dev-portal.rappi.com/' },
      { label: 'API Reference', url: 'https://dev-portal.rappi.com/en/api-reference/' }
    ],
    technologies: ['RESTful APIs', 'Developer Portals', 'Docs-as-Code'],
    highlights: [
      'Launched developer portal increasing API adoption',
      'Created extensive RESTful API documentation',
      'Established documentation best practices'
    ]
  },
  {
    title: 'Argyle Documentation',
    role: 'Technical Writer',
    period: 'June 2022 - December 2022',
    description: 'Authored developer guides and API documentation for fintech platform, improving developer onboarding experience.',
    links: [
      { label: 'User Guides', url: 'https://docs.argyle.com/legacy/guides/getting-started/how-argyle-works' },
      { label: 'API Docs', url: 'https://docs.argyle.com/api-reference/' }
    ],
    technologies: ['Fintech APIs', 'Developer Guides', 'Style Guides'],
    highlights: [
      'Significantly improved developer onboarding experience',
      'Implemented comprehensive style guide',
      'Reduced developer friction and support overhead'
    ]
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-fuchsia-50/20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-fuchsia-200/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-16 w-80 h-80 bg-gradient-to-tr from-fuchsia-200/20 to-pink-200/30 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>

        {/* Geometric accents */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-fuchsia-400/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 left-1/5 w-1.5 h-1.5 bg-purple-500/35 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-xl shadow-lg">
              <BriefcaseIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Portfolio Highlights
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive documentation projects that demonstrate expertise in API documentation, 
            developer portals, and technical communication.
          </p>
        </motion.div>

        <div className="space-y-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" hover="lift" className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-purple-600 font-medium mb-2">
                    {item.role}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {item.period}
                  </p>
                  <p className="text-gray-700 mb-6">
                    {item.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Live Documentation:</h4>
                    <div className="space-y-2">
                      {item.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-purple-600 hover:text-fuchsia-600 transition-colors"
                        >
                          <span>{link.label}</span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}