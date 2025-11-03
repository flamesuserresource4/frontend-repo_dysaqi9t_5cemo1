import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-rose-50 via-violet-50 to-sky-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold font-mono uppercase text-gray-900"
        >
          About
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-tr from-pink-400 to-blue-400 p-1 shadow-xl">
              <div className="h-full w-full rounded-[1.3rem] bg-white flex items-center justify-center">
                <div className="h-48 w-48 rounded-2xl bg-gradient-to-br from-fuchsia-300 to-sky-300 flex items-center justify-center shadow-inner">
                  <span className="text-5xl font-black text-white drop-shadow">S</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur rounded-2xl px-4 py-2 shadow border border-gray-100">
              <span className="text-sm font-semibold text-gray-700">It me! 👋</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-gray-700"
          >
            <p className="text-lg leading-relaxed">
              I’m Saanvi — a playful explorer of pixels and prototypes. I love turning
              messy sketches and half-baked ideas into colorful, interactive things that make people smile.
            </p>
            <p className="leading-relaxed">
              My vibe is whimsical and a tiny bit chaotic: bright colors, blocky shapes, and silly details.
              Underneath that, I’m serious about craft — clean code, accessible design, and delightful micro-interactions.
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li className="bg-white/80 backdrop-blur rounded-xl px-4 py-2 shadow border border-gray-100">Design + Code</li>
              <li className="bg-white/80 backdrop-blur rounded-xl px-4 py-2 shadow border border-gray-100">Rapid Prototyping</li>
              <li className="bg-white/80 backdrop-blur rounded-xl px-4 py-2 shadow border border-gray-100">3D & Motion</li>
              <li className="bg-white/80 backdrop-blur rounded-xl px-4 py-2 shadow border border-gray-100">Web Experiments</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
