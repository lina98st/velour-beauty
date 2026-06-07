import { motion } from 'framer-motion'

const pricing = [
  {
    category: 'Lashes',
    icon: '✦',
    items: [
      { name: 'Classic Full Set', price: '89' },
      { name: 'Classic Refill', price: '55' },
      { name: 'Volume Full Set', price: '119' },
      { name: 'Volume Refill', price: '75' },
      { name: 'Mega Volume Full Set', price: '149' },
      { name: 'Mega Volume Refill', price: '95' },
      { name: 'Lash Lift & Tint', price: '69' },
    ],
  },
  {
    category: 'Nails',
    icon: '◆',
    items: [
      { name: 'Gel Manicure', price: '45' },
      { name: 'Acrylic Full Set', price: '75' },
      { name: 'Acrylic Refill', price: '50' },
      { name: 'Nail Art (per nail)', price: '5' },
      { name: 'Gel Pedicure', price: '55' },
      { name: 'French Manicure', price: '55' },
    ],
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

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 bg-black overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 text-xs uppercase tracking-[0.4em] mb-4">
            Transparent Pricing
          </p>
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-widest text-white">
            Pricing
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pricing.map((category, i) => (
            <motion.div
              key={category.category}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative border border-purple-900/50 bg-purple-950/10 p-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-500" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500" />

              <div className="flex items-center gap-4 mb-8">
                <span className="text-purple-400 text-2xl">{category.icon}</span>
                <h3 className="text-2xl font-bold uppercase tracking-widest text-white">
                  {category.category}
                </h3>
              </div>

              <ul className="space-y-4">
                {category.items.map((item, j) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.07, duration: 0.4 }}
                    className="flex items-center justify-between border-b border-purple-900/30 pb-4"
                  >
                    <span className="text-gray-300 text-sm tracking-wide">
                      {item.name}
                    </span>
                    <span className="text-purple-400 font-bold tracking-widest">
                      €{item.price}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#booking"
                className="inline-block mt-8 text-xs uppercase tracking-widest text-purple-400 hover:text-white border-b border-purple-600 hover:border-white pb-0.5 transition-all duration-300"
              >
                Book Now →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
    </section>
  )
}