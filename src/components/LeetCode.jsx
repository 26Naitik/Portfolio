import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SiLeetcode } from 'react-icons/si'

const username = 'NaitikGupta2642'

const fallbackStats = {
  totalSolved: 0,
  easySolved: 0,
  mediumSolved: 0,
  hardSolved: 0,
  totalQuestions: 3400
}

const CACHE_KEY = "leetcodeStats"
const CACHE_TIME = 1000 * 60 * 60

const LeetCode = () => {
  const [stats, setStats] = useState(fallbackStats)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY)
        const cachedTime = localStorage.getItem(CACHE_KEY + "_time")

        if (cached && cachedTime && Date.now() - cachedTime < CACHE_TIME) {
          setStats(JSON.parse(cached))
          setLoading(false)
          return
        }

        const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)

        if (!res.ok) throw new Error("API failed")

        const data = await res.json()

        const formatted = {
          totalSolved: data.totalSolved || 0,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          totalQuestions: data.totalQuestions || 3400
        }

        setStats(formatted)

        localStorage.setItem(CACHE_KEY, JSON.stringify(formatted))
        localStorage.setItem(CACHE_KEY + "_time", Date.now())

        setError('')
      } catch (err) {
        console.log("ERROR:", err)

        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
          setStats(JSON.parse(cached))
        }

        setError('Failed to fetch live data')
      } finally {
        setLoading(false)
      }
    }

    fetchLeetCodeStats()
  }, [])

  // 🔥 PROGRESS CALCULATION (ADDED)
  const progress = Math.min((stats.totalSolved / stats.totalQuestions) * 550, 550)

  return (
    <section id="leetcode" className="py-28 relative bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-primary">Problem</span> Solving.
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="glass border border-gray-800 rounded-3xl p-8 max-w-4xl mx-auto"
        >

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            {/* LEFT SIDE */}
            <div className="flex-1 text-center md:text-left">

              <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                <SiLeetcode className="text-[#FFA116] text-4xl" />
                <h3 className="text-2xl font-bold text-white">LeetCode Stats</h3>
              </div>

              {loading ? (
                <p className="text-yellow-400">Loading...</p>
              ) : (
                <>
                  <div className="text-5xl font-bold text-[#FFA116] mb-2">
                    {stats.totalSolved}
                  </div>
                  <p className="text-gray-400 mb-6">Total Problems Solved</p>

                  {error && (
                    <p className="text-xs text-amber-300 mb-4">{error}</p>
                  )}

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-900 p-4 rounded-xl">
                      <p className="text-sm text-gray-400">Easy</p>
                      <p className="text-xl text-green-400">{stats.easySolved}</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-xl">
                      <p className="text-sm text-gray-400">Medium</p>
                      <p className="text-xl text-yellow-400">{stats.mediumSolved}</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-xl">
                      <p className="text-sm text-gray-400">Hard</p>
                      <p className="text-xl text-red-400">{stats.hardSolved}</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* 🔥 RIGHT SIDE (UPGRADED CIRCLE) */}
            <div className="relative w-48 h-48 hidden md:flex items-center justify-center">

              <svg className="w-full h-full -rotate-90">

                {/* Background */}
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  strokeWidth="12"
                  fill="transparent"
                  stroke="#1f2937"
                />

                {/* Animated Progress */}
                <motion.circle
                  cx="96"
                  cy="96"
                  r="88"
                  strokeWidth="12"
                  fill="transparent"
                  stroke="#FFA116"
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 10px #FFA116)" }}
                  initial={{ strokeDasharray: "0 550" }}
                  animate={{ strokeDasharray: `${progress} 550` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>

              {/* Center Text */}
              <div className="absolute text-center">
                <p className="text-3xl font-bold text-white">{stats.totalSolved}</p>
                <p className="text-xs text-gray-400">Solved</p>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LeetCode