import { motion } from 'framer-motion'

const leopardSpots = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 60 + 20,
  rotation: Math.random() * 360,
  opacity: Math.random() * 0.15 + 0.05,
}))

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      <div className="absolute inset-0 z-0">
        {leopardSpots.map((spot) => (
          <div
            key={spot.id}
            className="absolute"
            style={{
              left: `${spot.x}%`,
              top: `${spot.y}%`,
              width: `${spot.size}px`,
              height: `${spot.size * 0.7}px`,
              transform: `rotate(${spot.rotation}deg)`,
              opacity: spot.opacity,
            }}
          >
            <svg viewBox="0 0 100 70" className="w-full h-full">
              <ellipse cx="50" cy="35" rx="45" ry="30" fill="#7c3aed" />
              <ellipse cx="50" cy="35" rx="30" ry="18" fill="black" />
              <ellipse cx="25" cy="15" rx="12" ry="8" fill="#7c3aed" />
              <ellipse cx="75" cy="15" rx="12" ry="8" fill="#7c3aed" />
              <ellipse cx="20" cy="55" rx="10" ry="7" fill="#7c3aed" />
              <ellipse cx="80" cy="55" rx="10" ry="7" fill="#7c3aed" />
            </svg>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-purple-950/80 via-black/60 to-black/90" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
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
        <span className="text-xs tracking-widest uppercase text-purple-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-purple-400 to-transparent"
        />
      </motion.div>

    </section>
  )
}