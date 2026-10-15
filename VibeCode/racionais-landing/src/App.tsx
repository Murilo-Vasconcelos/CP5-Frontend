import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Numeros from './components/Numeros'
import Singles from './components/Singles'
import Importa from './components/Importa'
import Integrantes from './components/Integrantes'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Numeros />
        <Singles />
        <Importa />
        <Integrantes />
      </main>
    </>
  )
}
