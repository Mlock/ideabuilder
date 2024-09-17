import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { fadeIn } from '../utils/animations'

export default function KeyBenefitsSection() {
  const benefits = [
    "24/7 AI-powered support",
    "Personalized mental health exercises",
    "Progress tracking and insights",
    "Mood journaling with sentiment analysis",
    "Guided meditation and mindfulness sessions",
    "Confidential and secure platform"
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Star className="text-yellow-400 mb-2" size={24} />
              <p>{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}