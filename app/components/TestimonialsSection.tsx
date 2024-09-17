import { motion } from 'framer-motion'
import { fadeIn } from '../utils/animations'

export default function TestimonialsSection() {
  const testimonials = [
    { name: "Sarah L.", quote: "betterMe has been a game-changer for my mental health journey." },
    { name: "Michael R.", quote: "The personalized AI coaching feels like having a therapist in my pocket." },
    { name: "Emily T.", quote: "I've seen significant improvement in my mood and overall well-being." }
  ]

  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}