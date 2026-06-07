import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Pricing from './components/Pricing'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ background: '#000', color: '#fff', overflowX: 'hidden', width: '100%' }}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Booking />
      <Contact />
      <Footer />
    </div>
  )
}

export default App