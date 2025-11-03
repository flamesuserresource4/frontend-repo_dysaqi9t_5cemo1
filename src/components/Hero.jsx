import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900 drop-shadow-[0_2px_0_rgba(255,255,255,0.7)]">
            <span className="block font-mono uppercase">Saanvi</span>
            <span className="block font-mono uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500">
              Tatipalli
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Playful. Curious. A joyful mess of ideas turned into delightful experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#about" className="px-5 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow hover:brightness-105 active:scale-[0.98] transition">
              About me
            </a>
            <a href="#projects" className="px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold shadow border border-gray-200 hover:-translate-y-0.5 transition">
              Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow hover:brightness-105 transition">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
