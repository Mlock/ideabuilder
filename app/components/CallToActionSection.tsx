import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { fadeIn } from '../utils/animations'

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Start Your Journey to Better Mental Health Today
        </motion.h2>
        <motion.p
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Download betterMe now and take the first step towards a happier, healthier you.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full flex items-center">
            <Download className="mr-2" size={20} />
            App Store
          </button>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full flex items-center">
            <Download className="mr-2" size={20} />
            Google Play
          </button>
        </motion.div>
      </div>
    </section>
  )
}