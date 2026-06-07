import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 800 800">
          {Array.from({ length: 40 }, (_, i) => {
            const x = (i % 8) * 100 + (Math.floor(i / 8) % 2 === 0 ? 0 : 50)
            const y = Math.floor(i / 8) * 100 + 20

            return (
              <g key={i} transform={`translate(${x}, ${y}) rotate(${i * 23})`}>
                <ellipse cx="0" cy="0" rx="22" ry="14" fill="#7c3aed" />
                <ellipse cx="0" cy="0" rx="13" ry="8" fill="#000" />
                <ellipse cx="-11" cy="-8" rx="6" ry="4" fill="#7c3aed" />
                <ellipse cx="11" cy="-8" rx="6" ry="4" fill="#7c3aed" />
                <ellipse cx="-10" cy="8" rx="5" ry="3" fill="#7c3aed" />
                <ellipse cx="10" cy="8" rx="5" ry="3" fill="#7c3aed" />
              </g>
            )
          })}
        </svg>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-purple-950/80 via-black/70 to-black/90" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-purple-400 text-xs uppercase tracking-[0.4em] mb-6"
        >
          Premium Beauty Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold uppercase tracking-widest text-white mb-6 leading-none"
        >
          Velour
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            Beauty
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-gray-300 text-lg md:text-xl tracking-wide max-w-xl mx-auto mb-10"
        >
          Lashes & Nails crafted for the bold, the beautiful, the untamed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#booking"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm uppercase tracking-widest transition-all duration-300"
          >
            Book Now
          </a>

          <a
            href="#services"
            className="px-8 py-3 border border-purple-500 text-purple-300 hover:bg-purple-900/30 text-sm uppercase tracking-widest transition-all duration-300"
          >
            Our Services
          </a>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-purple-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-purple-400 to-transparent"
        />
      </motion.div>

    </section>
  )
}