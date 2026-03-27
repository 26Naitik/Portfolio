import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.send(
      'service_93j4rdk', // 🔥 tera service ID
      'template_eworj9o', // 🔥 template skip hack
      {
        name: form.name,
        email: form.email,
        message: form.message
      },
      'pyOZdM540Tgk4Q1d3' // ⚠️ yaha apna public key daalna
    )
    .then(() => {
      setStatus("✅ Message sent successfully!")
      setForm({ name: '', email: '', message: '' })
    })
    .catch(() => {
      setStatus("❌ Failed to send message")
    })
  }

  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch.</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full md:mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl md:mx-auto text-lg leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start text-left">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {[
              { icon: <FiMail />, title: "Email", value: "naitikgupta803@gmail.com", link: "mailto:naitikgupta803@gmail.com" },
              { icon: <FiPhone />, title: "Phone", value: "+91 7488152993", link: "tel:+917488152993" },
              { icon: <FiMapPin />, title: "Location", value: "Vadodara, Gujarat", link: "#" },
            ].map((info, i) => (
              <a href={info.link} key={i} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider">{info.title}</h4>
                  <p className="text-lg text-gray-200 font-medium">{info.value}</p>
                </div>
              </a>
            ))}

            <div className="pt-8 flex gap-6 border-t border-gray-800">
              <a href="https://github.com/naitikgupta" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/naitik-tarkeshwar-gupta-b46763328/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300">
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={sendEmail} className="glass p-8 rounded-2xl border border-gray-800 flex flex-col gap-6">

              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary resize-none"
                  placeholder="Hello Naitik, I want to talk about..."
                  required
                />
              </div>

              <button className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg shadow-primary/25 mt-2">
                Send Message
              </button>

              {status && <p className="text-center text-sm text-green-400">{status}</p>}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact