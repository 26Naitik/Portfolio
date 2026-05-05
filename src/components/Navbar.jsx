import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'LeetCode', href: '#leetcode' },
  { name: 'LinkedIn', href: '#linkedin' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  whileHover={{ scale: 1.05 }}
  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-cyan-300 tracking-wider drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] cursor-pointer"
>
  NG<span className="text-blue-500">.</span>
</motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1 }}
            className="px-4 py-2 text-sm font-medium text-white bg-primary/80 hover:bg-primary border border-primary/50 shadow-lg shadow-primary/20 rounded-lg transition-all"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass border-t border-gray-800 mt-4"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="text-primary font-medium hover:text-blue-400 py-2 border-t border-gray-800 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
