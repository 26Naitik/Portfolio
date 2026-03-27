import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-64 h-64 rounded-full bg-primary/20 blur-[80px] z-50 mix-blend-screen"
      animate={{
        x: mousePosition.x - 128,
        y: mousePosition.y - 128,
      }}
      transition={{
        type: 'spring',
        damping: 40,
        stiffness: 200,
        mass: 0.5
      }}
    />
  )
}

export default CursorGlow
