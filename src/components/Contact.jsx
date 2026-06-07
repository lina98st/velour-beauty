import { motion } from 'framer-motion'

const details = [
  { label: 'Location', value: 'Berlin, Germany', icon: '◎' },
  { label: 'Email', value: 'hello@velourbeauty.de', icon: '✉' },
  { label: 'Phone', value: '+49 123 456789', icon: '◈' },
  { label: 'Hours', value: 'Mon–Sat: 10:00–20:00', icon: '◷' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 text-xs uppercase tracking-[0.4em] mb-4">
            Get In Touch
          </p>
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-widest text-white">
            Contact
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-gray-400 leading-relaxed text-lg">
              Ready to elevate your look? Reach out and we will respond quickly.
            </p>

            <div className="space-y-6">
              {details.map((detail, i) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 border border-purple-800 flex items-center justify-center text-purple-400 text-lg group-hover:bg-purple-900/30 transition-colors duration-300 shrink-0">
                    {detail.icon}
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-widest text-purple-400 mb-1">
                      {detail.label}
                    </div>
                    <div className="text-white text-sm tracking-wide">
                      {detail.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {['Instagram', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs uppercase tracking-widest text-gray-400 hover:text-purple-400 border border-purple-900/50 hover:border-purple-500 px-5 py-2 transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative border border-purple-800/50 p-1 hidden md:block"
          >
            <div className="bg-purple-950/20 aspect-square flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
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

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white/10 uppercase tracking-widest">
                    Velour
                  </div>
                  <div className="text-xs tracking-[0.4em] text-purple-400 uppercase mt-2">
                    Beauty Studio
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-purple-500" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-purple-500" />
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
    </section>
  )
}