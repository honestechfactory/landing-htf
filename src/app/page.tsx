import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Servicios from '@/components/Servicios'
import Proceso from '@/components/Proceso'
import Portfolio from '@/components/Portfolio'
import Manifesto from '@/components/Manifesto'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Servicios />
        <Proceso />
        <Portfolio />
        <Manifesto />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
