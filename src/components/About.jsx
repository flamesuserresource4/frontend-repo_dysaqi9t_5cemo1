import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40])
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, 20])

  return (
    <section id="about" ref={ref} className="relative py-24 bg-white">
      {/* Parallax backdrop accents */}
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-rose-100 blur-3xl opacity-60" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-rose-50 blur-2xl opacity-80" />

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
            <div className="aspect-square rounded-3xl bg-gradient-to-tr from-rose-400 to-rose-500 p-1 shadow-xl">
              <div className="h-full w-full rounded-[1.3rem] bg-white flex items-center justify-center">
                <div className="h-48 w-48 rounded-2xl bg-gradient-to-br from-rose-300 to-rose-400 flex items-center justify-center shadow-inner">
                  <span className="text-5xl font-black text-white drop-shadow">S</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur rounded-2xl px-4 py-2 shadow border border-rose-100">
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
              I’m Saanvi — I craft immersive, interactive experiences that feel alive. I love turning
              ideas into elegant interfaces with motion that guides and delights.
            </p>
            <p className="leading-relaxed">
              My approach is minimalist yet expressive: clean layouts, focused color, and meaningful motion.
              Accessibility and performance are always part of the design.
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li className="bg-white/80 backdrop-blur rounded-xl px-4 py-2 shadow border border-rose-100">Design + Code</li>
              <li className="bg-white/80 backdrop-blur rounded-xl px-4 py-2 shadow border border-rose-100">Rapid Prototyping</li>
              <li className="bg-white/80 backdrop-blur rounded-xl px-4 py-2 shadow border border-rose-100">3D & Motion</li>
              <li className="bg-white/80 backdrop-blur rounded-xl px-4 py-2 shadow border border-rose-100">Web Experiments</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
