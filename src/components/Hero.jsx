import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const Hero = () => {
  const containerRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useTransform(my, [-1, 1], [8, -8])
  const rotateY = useTransform(mx, [-1, 1], [-8, 8])
  const glowOpacity = useTransform(my, [-1, 0, 1], [0.4, 0.8, 0.4])

  const handlePointerMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mx.set(x * 2 - 1)
    my.set(y * 2 - 1)
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden" onPointerMove={handlePointerMove}>
      {/* Spline Cover Background */}
      <div className="absolute inset-0" ref={containerRef}>
        <Spline
          scene="https://prod.spline.design/hqXbe5uy0NxM7CDI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient vignettes that do not block the interactive canvas */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Centered Name */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center select-none"
        >
          {/* Glow behind text */}
          <motion.div
            style={{ opacity: glowOpacity }}
            className="pointer-events-none absolute -inset-10 blur-3xl"
            aria-hidden="true"
          >
            <div className="mx-auto h-full w-full bg-gradient-to-r from-fuchsia-500/50 via-pink-500/50 to-purple-500/50 rounded-full" />
          </motion.div>

          <h1 className="relative font-black tracking-tight leading-none">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 drop-shadow-[0_2px_0_rgba(255,255,255,0.2)]">
              Saanvi Tatipalli
            </span>
          </h1>

          {/* Subtle hint to interact/scroll */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 text-white/80"
          >
            <p className="text-sm sm:text-base">Move your cursor • Scroll to dive in</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80"
        aria-hidden="true"
      >
        <div className="h-10 w-6 rounded-full border border-white/60 flex items-start justify-center p-1">
          <div className="h-2 w-2 rounded-full bg-white/80" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
