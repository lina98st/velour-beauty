import { motion } from 'framer-motion'
import { useState } from 'react'

const services = [
  'Classic Lashes Full Set',
  'Classic Lashes Refill',
  'Volume Lashes Full Set',
  'Volume Lashes Refill',
  'Mega Volume Full Set',
  'Mega Volume Refill',
  'Lash Lift & Tint',
  'Gel Manicure',
  'Acrylic Full Set',
  'Acrylic Refill',
  'Nail Art',
  'Gel Pedicure',
  'French Manicure',
]

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will confirm your booking shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: '',
    })
  }

  return (
    <section id="booking" className="relative py-32 bg-black overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-xs uppercase tracking-[0.4em] mb-4">
            Reserve Your Spot
          </p>
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-widest text-white">
            Book Now
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative border border-purple-900/50 bg-purple-950/10 p-10"
        >
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-500" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500" />

          <div className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-purple-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-purple-900/50 text-white px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-purple-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-purple-900/50 text-white px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors duration-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-purple-400 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-purple-900/50 text-white px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-purple-400 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-purple-900/50 text-white px-4 py-3 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-purple-400 mb-2">
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-black/50 border border-purple-900/50 text-white px-4 py-3 text-sm"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-purple-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black/50 border border-purple-900/50 text-white px-4 py-3 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white text-sm uppercase tracking-widest transition-all duration-300"
            >
              Request Appointment
            </button>
          </div>
        </motion.form>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
    </section>
  )
}