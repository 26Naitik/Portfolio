import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const placeholderProjects = [
  {
    id: 1,
    title: "E-Commerce Microservices",
    description: "A full-stack e-commerce platform featuring JWT authentication, Stripe payment gateway, and Redis caching for the product catalog which reduced load times by 40%.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "Stripe"],
    github: "https://github.com/naitikgupta",
    live: "#"
  },
  {
    id: 2,
    title: "Real-Time Collaboration Tool",
    description: "Developed a real-time workspace for remote teams using WebSockets. Handled concurrent connections efficiently, implementing live cursors and collaborative document editing.",
    tech: ["React", "Socket.io", "Express", "Tailwind CSS"],
    github: "https://github.com/naitikgupta",
    live: "#"
  },
  {
    id: 3,
    title: "AI-Powered Dashboard",
    description: "Built an analytics dashboard that uses OpenAI APIs to summarize data and generate insights in real-time. Deployed on Vercel with automated CI/CD pipelines.",
    tech: ["React", "OpenAI API", "Tailwind CSS", "Vercel"],
    github: "https://github.com/naitikgupta",
    live: "#"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects.</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full md:mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl md:mx-auto text-lg leading-relaxed">
            Here are some of the full-stack applications I've built to solve real-world problems. Each project demonstrated below involves different challenges and architectures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl flex flex-col border border-gray-800 hover:border-primary/40 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8 flex flex-col h-full relative z-10 transition-colors duration-300">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FiGithub size={24} />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                      <FiGithub size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm lg:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800/50">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800/50 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects