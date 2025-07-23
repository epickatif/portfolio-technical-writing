import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SectionDivider variant="gradient" />
      <Portfolio />
      <SectionDivider variant="dots" />
      <Skills />
      <SectionDivider variant="gradient" />
      <Contact />
    </main>
  )
}