'use client'

import { motion } from 'framer-motion'
import { CogIcon } from '@heroicons/react/24/outline'
import Card from '@/components/ui/Card'

const skillCategories = [
  {
    title: 'Technical Writing and Documentation',
    skills: [
      'API Documentation (RESTful and GraphQL)',
      'Developer Portals and Documentation Platforms',
      'Technical Training and Mentorship',
      'UX Writing and Usability Enhancement',
      'SEO Principles for Documentation Sites'
    ]
  },
  {
    title: 'Docs-as-Code and Development',
    skills: [
      'Git, GitHub, GitLab, Perforce',
      'Markdown, HTML, DITA, reStructuredText',
      'Static Site Generators (MkDocs, Gatsby, Docusaurus)',
      'CI/CD Workflows',
      'Information Architecture and Content Strategy'
    ]
  },
  {
    title: 'API and Testing Tools',
    skills: [
      'Postman, Readme.io',
      'OpenAPI/Swagger, YAML, JSON, XML',
      'REST and GraphQL APIs',
      'API Integration Documentation'
    ]
  },
  {
    title: 'Content Management and Collaboration',
    skills: [
      'Confluence, Zendesk',
      'WalkMe, Aha!, Figma',
      'Project and Release Management',
      'Cross-Functional Collaboration',
      'Bilingual Communication (English and Spanish)'
    ]
  }
]

const certifications = [
  'Unity Certified Junior Programmer',
  'Unity Essentials Pathway Certification',
  'Wizeline Academy (Technical Writing Fundamentals)'
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-fuchsia-50/30 via-purple-50/40 to-pink-50/30 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-fuchsia-200/25 to-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-tl from-pink-200/30 to-rose-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>

        {/* Enhanced geometric accents */}
        <div className="absolute top-16 left-16 w-2 h-2 bg-purple-500/25 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-fuchsia-500/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-pink-500/25 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-rose-500/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
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
            <div className="p-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-xl shadow-lg">
              <CogIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Skills and Expertise
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical writing skills spanning documentation platforms, 
            development tools, and collaborative workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" hover="scale" className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3 relative z-10">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Certifications and Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Certifications</h4>
              <ul className="space-y-2">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">🏆</span>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Web Systems Development</p>
                  <p className="text-gray-600">Universidad de Guadalajara (In Progress)</p>
                  <p className="text-sm text-gray-500">Angular, React, Node.js, Laravel</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">IT Technical Career Studies</p>
                  <p className="text-gray-600">Center for Technological, Industrial, and Service Studies</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}