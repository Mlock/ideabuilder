'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import KeyBenefitsSection from './components/KeyBenefitsSection'
import TestimonialsSection from './components/TestimonialsSection'
import CallToActionSection from './components/CallToActionSection'
import Footer from './components/Footer'

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 text-gray-800">
      <HeroSection isVisible={isVisible} />
      <HowItWorksSection />
      <KeyBenefitsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  )
}