import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projectData = [
  {
    id: 'p1',
    title: 'Bubble Notes',
    blurb: 'Sticky thoughts that float around',
    color: 'from-pink-400 to-rose-400',
    details: `A playful note-taking experiment where ideas drift like bubbles.
- Drag, pop, and connect notes.
- Color-coded moods.
- Tiny confetti explosions when you finish a task.

Built with a focus on joyful micro-interactions and rapid ideation.`,
  },
  {
    id: 'p2',
    title: 'Snack Stack',
    blurb: 'Gamified habit tracker',
    color: 'from-yellow-300 to-orange-400',
    details: `Build stacks of tiny wins each day.
- Collect stickers for streaks.
- Whimsical charts.
- Progress feels like stacking snacks.`,
  },
  {
    id: 'p3',
    title: 'Wobble Web',
    blurb: 'A jiggly CSS playground',
    color: 'from-sky-400 to-indigo-400',
    details: `An interactive playground to learn CSS transforms and animations.
- Live presets.
- Shareable wobble links.
- Kid-friendly UI.`,
  },
  {
    id: 'p4',
    title: 'Kind Koala',
    blurb: 'Mindful micro-journal',
    color: 'from-emerald-300 to-teal-400',
    details: `A gentle space to jot down thoughts without pressure.
- Warm prompts.
- Cute emojis.
- Calming gradients and soft motion.`,
  },
]

const Projects = () => {
  const [open, setOpen] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold font-mono uppercase text-gray-900"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectData.map((p, idx) => (
            <motion.button
              key={p.id}
              onClick={() => setOpen(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`text-left rounded-2xl p-5 bg-white shadow hover:-translate-y-1 transition relative overflow-hidden border border-gray-100`}
            >
              <div className={`absolute inset-0 opacity-30 bg-gradient-to-br ${p.color}`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-extrabold text-gray-900 font-mono uppercase">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-gray-600" />
                </div>
                <p className="mt-2 text-sm text-gray-700">{p.blurb}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-gray-700 bg-white/70 backdrop-blur px-3 py-1 rounded-full border border-gray-200">
                  Click to open
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 110, damping: 18 }}
              className="ml-auto h-full w-full md:w-[70%] bg-white rounded-none md:rounded-l-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-44 w-full bg-gradient-to-br ${open.color}`} />
              <div className="p-6 md:p-10 h-[calc(100%-11rem)] overflow-y-auto scroll-smooth">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-extrabold font-mono uppercase text-gray-900">{open.title}</h3>
                    <p className="text-gray-600 mt-1">{open.blurb}</p>
                  </div>
                  <button
                    onClick={() => setOpen(null)}
                    className="rounded-xl px-4 py-2 bg-gray-900 text-white font-semibold hover:opacity-90"
                    aria-label="Close"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
                  {open.details.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-gray-200 p-4 bg-gradient-to-br from-white to-gray-50 shadow-sm">
                      <h4 className="font-semibold">What I learned</h4>
                      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                        <li>Balancing whimsy with usability</li>
                        <li>Designing satisfying micro-interactions</li>
                        <li>Keeping performance snappy</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-gray-200 p-4 bg-gradient-to-br from-white to-gray-50 shadow-sm">
                      <h4 className="font-semibold">Tech highlights</h4>
                      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                        <li>Flexible component patterns</li>
                        <li>Accessible motion primitives</li>
                        <li>Fun color systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
