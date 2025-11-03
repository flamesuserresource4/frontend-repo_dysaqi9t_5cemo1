import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Extras from './components/Extras'

function App() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-50 via-white to-white text-gray-900 scroll-smooth">
      <main>
        <Hero />
        <About />
        <Projects />
        <Extras />
      </main>

      <footer className="py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Saanvi Tatipalli
      </footer>
    </div>
  )
}

export default App
