import { motion } from 'framer-motion'
import { Smartphone, Brain, Heart } from 'lucide-react'
import { fadeIn } from '../utils/animations'

export default function HowItWorksSection() {
  const steps = [
    { icon: Smartphone, title: "Download & Sign Up", description: "Get started with our easy-to-use app" },
    { icon: Brain, title: "AI Analysis", description: "Our AI assesses your mental health needs" },
    { icon: Heart, title: "Personalized Coaching", description: "Receive tailored guidance and support" }
  ]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">How betterMe Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <step.icon className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}