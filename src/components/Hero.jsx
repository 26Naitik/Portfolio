import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { useState, useEffect } from "react"
import profileImg from "../assets/image2.png"

const Hero = () => {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 140, damping: 18 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 140, damping: 18 })

  // 🔥 TEXTS
  const texts = [
    "Building modern full-stack products.",
    "React, Node.js & scalable APIs.",
    "Currently solving DSA in Java 🚀",
    "Clean UI. Smooth UX. Strong logic."
  ]

  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    const typingSpeed = isDeleting ? 40 : 80

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1200) // pause after typing
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        if (charIndex === 0) {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - bounds.left
    const offsetY = event.clientY - bounds.top
    const centerX = bounds.width / 2
    const centerY = bounds.height / 2

    rotateX.set((centerY - offsetY) / 18)
    rotateY.set((offsetX - centerX) / 18)
  }

  const resetTilt = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  return (
    <section id="home" className="relative min-h-screen flex items-center py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.15),transparent_38%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 text-center lg:text-left"
        >
          <p className="inline-flex items-center text-sm tracking-[0.24em] uppercase text-blue-200/90 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-400/20">
            Portfolio 2026 Edition
          </p>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Naitik Gupta
            </h1>

            <p className="text-xl md:text-2xl text-gray-300">
              B.Tech CSE | Full Stack Developer
            </p>

            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I craft responsive, high-performance web experiences with clean architecture, smooth motion, and a strong problem-solving mindset.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-primary text-white font-medium shadow-lg shadow-primary/30 hover:shadow-primary/45 hover:-translate-y-0.5 transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl font-medium border border-gray-700 text-gray-100 hover:border-primary/60 hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            style={{ transform }}
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
            className="relative rounded-[2rem] p-[1px] bg-gradient-to-br from-blue-500/80 via-cyan-300/70 to-purple-500/70"
          >
            <div className="glass rounded-[2rem] p-6 md:p-7 border border-white/10">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={profileImg}
                  alt="Naitik Gupta profile"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>

              {/* 🔥 REAL TYPING */}
              <div className="pt-5">
                <h3 className="text-xl font-semibold text-white">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h3>

                <p className="text-sm text-gray-300 mt-1">
                  React • Node • APIs • DSA in Java
                </p>
              </div>

            </div>

            <div className="absolute -z-10 -inset-8 rounded-[2.5rem] bg-blue-500/20 blur-3xl" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero