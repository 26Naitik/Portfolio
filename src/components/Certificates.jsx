import { motion } from 'framer-motion'
import { FiArrowUpRight, FiAward } from 'react-icons/fi'

const certificates = [
  {
    id: 1,
    title: 'Introduction to Programming Using HTML and CSS',
    issuer: 'Certiport - A Pearson VUE Business',
    date: 'Issued Mar 2025',
    link: 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&format=pdf&id=468'
  },
  {
    id: 2,
    title: 'JavaScript Specialist Certification',
    issuer: 'Certiport - A Pearson VUE Business',
    date: 'Issued May 2025',
    link: 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&format=pdf&id=469'
  },
  {
  id: 3,
  title: 'AZ-900: Complete Course - Microsoft Azure Fundamentals - 2025',
  issuer: 'Udemy',
  date: 'March 2025',
  link: 'https://ude.my/UC-28f98f30-1979-4cb5-8739-6233c2f56026'
  },
  {
  id: 4,
  title: 'Vadodara Hackathon 6.0 - Certificate of Participation',
  issuer: 'Parul University (PERC)',
  date: 'September 2025',
  link: '#'
  },
  {
  id: 5,
  title: 'AWS Students Community Day 2025 - Certificate of Participation',
  issuer: 'AWS Cloud Club Parul University',
  date: 'December 2025',
  link: '#'
}
]

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Certificates & <span className="text-primary">Achievements.</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -8 }}
              className="glass p-6 rounded-2xl border border-gray-800 hover:border-primary/40 transition-all duration-300 relative group overflow-hidden block"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FiAward size={80} className="text-primary" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                  <FiAward size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
                  <span className="font-medium text-gray-300">{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-primary/40 text-primary hover:bg-primary/15 transition-colors"
                >
                  View Certificate <FiArrowUpRight />
                </button>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
