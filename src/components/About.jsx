import { motion } from 'framer-motion'
import { FiBookOpen, FiCode, FiAward } from 'react-icons/fi'

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me.</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm Naitik Tarkeshwar Gupta, an aspiring Software Engineer and Computer Science student at <span className="text-white font-medium">Parul University, Vadodara</span>. 
            </p>
            <p>
              I specialize in building scalable, high-performance web applications using modern technologies like React, Node.js, and MongoDB. I thrive in challenging environments—whether that means architecting robust backend services, creating pixel-perfect user interfaces, or building innovative solutions at hackathons.
            </p>
            <p>
              Beyond full-stack development, I have a strong foundation in Data Structures and Algorithms (DSA) in Java. I actively solve problems to continuously refine my logic and write optimized, production-ready code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { icon: <FiBookOpen />, title: "Education", text: "B.Tech CSE at Parul University" },
              { icon: <FiCode />, title: "Focus", text: "Web Development & DSA" },
              { icon: <FiAward />, title: "Goal", text: "Full Stack Developer" }
            ].map((item, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-colors duration-300 group"
              >
                <div className="text-primary mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
