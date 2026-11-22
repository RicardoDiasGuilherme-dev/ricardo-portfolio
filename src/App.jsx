import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import VideoPitch from './sections/VideoPitch'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <VideoPitch />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
