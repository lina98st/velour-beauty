import { motion } from 'framer-motion'

const services = [
  {
    title: 'Lash Extensions',
    description:
      'From natural to dramatic, our lash extensions are applied with precision and care. Wake up every morning looking effortlessly stunning.',
    features: ['Classic Lashes', 'Volume Lashes', 'Mega Volume', 'Lash Lift & Tint'],
    icon: '✦',
  },
  {
    title: 'Nail Art & Care',
    description:
      'Express yourself through your nails. From minimalist elegance to bold artistic designs, we bring your vision to life.',
    features: ['Gel Manicure', 'Acrylic Nails', 'Nail Art', 'Pedicure'],
    icon: '◆',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: 'easeOut' },
  }),
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 13) % 100}%`,
              width: '80px',
              height: '56px',
              transform: `rotate(${i * 25}deg)`,
            }}
          >
            <svg viewBox="0 0 100 70" className="w-full h-full">
              <ellipse cx="50" cy="35" rx="45" ry="30" fill="#7c3aed" />
              <ellipse cx="50" cy="35" rx="30" ry="18" fill="black" />
              <ellipse cx="25" cy="15" rx="12" ry="8" fill="#7c3aed" />
              <ellipse cx="75" cy="15" rx="12" ry="8" fill="#7c3aed" />
            </svg>
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 text-xs uppercase tracking-[0.4em] mb-4">
            What We Offer
          </p>
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-widest text-white">
            Our Services
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="relative border border-purple-900/50 bg-purple-950/10 p-10 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-500" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500" />

              <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="text-purple-400 text-3xl mb-6 block">{service.icon}</span>
              <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-300 tracking-wide"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#pricing"
                className="inline-block mt-8 text-xs uppercase tracking-widest text-purple-400 hover:text-white border-b border-purple-600 hover:border-white pb-0.5 transition-all duration-300"
              >
                View Pricing →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
    </section>
  )
}