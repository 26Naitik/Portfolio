import { motion } from 'framer-motion'
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa6'
import { TbBinaryTree } from 'react-icons/tb'

const skills = [
  { name: 'HTML', level: 92, icon: SiHtml5, color: 'from-orange-400 to-orange-600' },
  { name: 'CSS', level: 86, icon: FaCss3Alt, color: 'from-sky-400 to-blue-500' },
  { name: 'JavaScript', level: 84, icon: SiJavascript, color: 'from-yellow-300 to-yellow-500' },
  { name: 'React', level: 80, icon: SiReact, color: 'from-cyan-300 to-cyan-500' },
  { name: 'Node.js', level: 76, icon: SiNodedotjs, color: 'from-green-400 to-green-600' },
  { name: 'Python', level: 78, icon: SiPython, color: 'from-indigo-400 to-blue-500' },
  { name: 'DSA', level: 72, icon: TbBinaryTree, color: 'from-violet-400 to-purple-600' }
]

const Skills = () => {
  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Stack.</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full md:mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="group glass rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon size={21} />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{skill.level}%</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{skill.name}</h3>
                <div className="h-2.5 bg-slate-800/90 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.15 + index * 0.05 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills