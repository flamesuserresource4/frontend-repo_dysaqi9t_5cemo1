import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Download, Star, Hammer } from 'lucide-react'

const Chip = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur px-3 py-1 text-sm border border-gray-200 shadow-sm">
    {children}
  </span>
)

const Extras = () => {
  return (
    <section id="extras" className="py-20 bg-gradient-to-b from-white to-violet-50">
      <div className="mx-auto max-w-6xl px-6 space-y-20">
        {/* Skills & Roles */}
        <div id="skills">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold font-mono uppercase text-gray-900"
          >
            Skills & Roles
          </motion.h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl p-6 bg-white shadow border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2"><Star className="h-5 w-5 text-yellow-500" /> Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Chip>UI/UX Design</Chip>
                <Chip>Frontend Dev</Chip>
                <Chip>Animation</Chip>
                <Chip>Prototyping</Chip>
                <Chip>3D + Motion</Chip>
              </div>
            </div>
            <div className="rounded-3xl p-6 bg-white shadow border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2"><Hammer className="h-5 w-5 text-emerald-500" /> Favorite Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Chip>React</Chip>
                <Chip>Framer Motion</Chip>
                <Chip>Tailwind</Chip>
                <Chip>Figma</Chip>
                <Chip>Spline</Chip>
              </div>
            </div>
          </div>
        </div>

        {/* Resume */}
        <div id="resume">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold font-mono uppercase text-gray-900"
          >
            Resume
          </motion.h2>
          <div className="mt-6 rounded-3xl p-6 bg-white shadow border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-gray-700">Need the structured version? Grab a PDF of my latest resume.</p>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.print(); }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:opacity-90"
            >
              <Download className="h-5 w-5" /> Download PDF
            </a>
          </div>
        </div>

        {/* Contact */}
        <div id="contact">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold font-mono uppercase text-gray-900"
          >
            Contact Me
          </motion.h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <form
              className="md:col-span-2 rounded-3xl p-6 bg-white shadow border border-gray-100 space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                const data = new FormData(e.currentTarget)
                const subject = encodeURIComponent(`[Portfolio] Message from ${data.get('name')}`)
                const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`)
                window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" required placeholder="Your name" className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300" />
                <input name="email" type="email" required placeholder="Email" className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300" />
              </div>
              <textarea name="message" required placeholder="Write your whimsical message here..." rows={6} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300" />
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-pink-500 text-white font-semibold hover:brightness-105">
                <Mail className="h-5 w-5" /> Send
              </button>
            </form>
            <div className="rounded-3xl p-6 bg-white shadow border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Other places</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a className="underline hover:text-pink-600" href="#">Dribbble</a></li>
                <li><a className="underline hover:text-pink-600" href="#">GitHub</a></li>
                <li><a className="underline hover:text-pink-600" href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Extras
