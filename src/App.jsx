import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Extras from './components/Extras'

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 scroll-smooth">
      {/* Simple playful nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold font-mono uppercase text-lg">ST</a>
          <nav className="flex items-center gap-2">
            <a href="#about" className="px-3 py-2 rounded-lg hover:bg-gray-100">About</a>
            <a href="#projects" className="px-3 py-2 rounded-lg hover:bg-gray-100">Projects</a>
            <a href="#skills" className="px-3 py-2 rounded-lg hover:bg-gray-100">Skills</a>
            <a href="#resume" className="px-3 py-2 rounded-lg hover:bg-gray-100">Resume</a>
            <a href="#contact" className="px-3 py-2 rounded-lg bg-pink-500 text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Extras />
      </main>

      <footer className="py-10 text-center text-sm text-gray-600">
        Crafted with whimsy and caffeine • © {new Date().getFullYear()} Saanvi Tatipalli
      </footer>
    </div>
  )
}

export default App
