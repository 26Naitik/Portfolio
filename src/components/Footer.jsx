import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 bg-black border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-gray-400 text-sm text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Naitik Tarkeshwar Gupta. All Rights Reserved.</p>
          <p className="text-xs mt-1 opacity-60">Designed & Built with React & Tailwind.</p>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="group-hover:-translate-y-1 transition-transform" />
        </button>
        
      </div>
    </footer>
  )
}

export default Footer
