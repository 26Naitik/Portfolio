import { motion } from 'framer-motion'
import { FiArrowUpRight, FiLinkedin } from 'react-icons/fi'

const linkedinUrl = 'https://www.linkedin.com/in/naitik-tarkeshwar-gupta-b46763328/'

const LinkedInSection = () => {
  return (
    <section id="linkedin" className="py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s Connect on <span className="text-primary">LinkedIn.</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full md:mx-auto" />
        </motion.div>

        <motion.a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -6 }}
          className="group block glass rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-7 justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 text-primary">
                <FiLinkedin size={28} />
                <span className="font-semibold tracking-wide">Professional Updates</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Follow my learning journey and latest projects.
              </h3>
              <p className="text-gray-400 max-w-3xl">
                Click to view my profile. You can later replace this with dynamic post previews if needed.
              </p>
            </div>

            <div className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-primary/40 text-primary group-hover:bg-primary/15 transition-colors">
              Open LinkedIn <FiArrowUpRight />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  )
}

export default LinkedInSection
