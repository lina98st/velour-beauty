import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl z-0" />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative border border-purple-800/50 p-1">
            <div className="bg-purple-950/30 aspect-square flex items-center justify-center overflow-hidden">

              <svg className="w-full h-full opacity-30" viewBox="0 0 400 400">
                {Array.from({ length: 25 }, (_, i) => {
                  const x = (i % 5) * 80 + 40
                  const y = Math.floor(i / 5) * 80 + 40

                  return (
                    <g key={i} transform={`translate(${x}, ${y}) rotate(${i * 15})`}>
                      <ellipse cx="0" cy="0" rx="28" ry="18" fill="#7c3aed" />
                      <ellipse cx="0" cy="0" rx="18" ry="10" fill="#0a0a0a" />
                      <ellipse cx="-14" cy="-10" rx="7" ry="5" fill="#7c3aed" />
                      <ellipse cx="14" cy="-10" rx="7" ry="5" fill="#7c3aed" />
                      <ellipse cx="-12" cy="10" rx="6" ry="4" fill="#7c3aed" />
                      <ellipse cx="12" cy="10" rx="6" ry="4" fill="#7c3aed" />
                    </g>
                  )
                })}
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                <span className="text-6xl font-bold text-white/10 uppercase tracking-widest">Since</span>
                <span className="text-8xl font-bold text-purple-400 leading-none">2020</span>
                <span className="text-xs tracking-[0.4em] text-gray-400 uppercase mt-2">Est. Berlin</span>
              </div>

            </div>
          </div>

          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-purple-500" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-purple-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-purple-400 text-xs uppercase tracking-[0.4em] mb-4">Our Story</p>

          <h2 className="text-5xl font-bold uppercase tracking-widest text-white mb-8 leading-tight">
            About<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Velour Beauty
            </span>
          </h2>

          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p>
              Velour Beauty was born from a passion for precision and a love for the art of beauty.
            </p>
            <p>
              Specializing in lash extensions and nail artistry, our studio focuses on premium results.
            </p>
            <p>
              Located in Berlin, we welcome every client with care and attention to detail.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '5★', label: 'Rated Studio' },
              { number: '4+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="border-l border-purple-700 pl-4">
                <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
    </section>
  )
}