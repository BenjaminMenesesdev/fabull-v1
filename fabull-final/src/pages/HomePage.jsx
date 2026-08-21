import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import Services from '../components/Services'
import About from '../components/About'
import Fleet from '../components/Fleet'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Services />
      <About />
      <Fleet />
      <Reviews />
      <Contact />
    </main>
  )
}
