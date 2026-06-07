import { motion } from 'framer-motion'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Booking', href: '#booking' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-purple-900/40 overflow-hidden">

      <div className="absolute inset-0 z-0 opacity-5">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${(i * 9) % 100}%`,
              top: `${(i * 17) % 100}%`,
              width: '60px',
              height: '42px',
              transform: `rotate(${i * 30}deg)`,
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12 mb-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#hero" className="flex flex-col leading-none mb-4">
              <span className="text-2xl font-bold tracking-widest text-white uppercase">
                Velour
              </span>
              <span className="text-xs tracking-[0.4em] text-purple-400 uppercase">
                Beauty
              </span>
            </a>

            <p className="text-gray-500 text-sm leading-relaxed">
              Premium lash and nail studio in Berlin. Crafted for the bold, the beautiful, the untamed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs uppercase tracking-[0.4em] text-purple-400 mb-6">
              Navigation
            </h4>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-400 tracking-widest uppercase transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs uppercase tracking-[0.4em] text-purple-400 mb-6">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>Berlin, Germany</li>
              <li>hello@velourbeauty.de</li>
              <li>+49 123 456789</li>
              <li>Mon–Sat: 10:00–20:00</li>
            </ul>

            <div className="flex gap-4 mt-6">
              {['Instagram', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs uppercase tracking-widest text-gray-500 hover:text-purple-400 transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        <div className="border-t border-purple-900/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 tracking-widest uppercase">
            © {new Date().getFullYear()} Velour Beauty. All rights reserved.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
          <p className="text-xs text-gray-600 tracking-widest uppercase">
            Berlin, Germany
          </p>
        </div>

      </div>
    </footer>
  )
}