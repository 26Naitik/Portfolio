import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiMessageSquare, FiSend } from "react-icons/fi"

const TypingMessage = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i))
      i++
      if (i >= text.length) {
        clearInterval(interval)
        if (onComplete) onComplete()
      }
    }, 20) // Typing speed

    return () => clearInterval(interval)
  }, [text, onComplete])

  return <span>{displayedText}</span>
}

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 I'm Naitik's AI assistant. Ask me anything about his skills, experience or projects!", isTyping: true }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Auto-scroll whenever messages change, or input changes
  useEffect(() => {
    scrollToBottom()
  }, [messages, loading, open])

  const getBotResponse = (msg) => {
    let reply = "That's an interesting question! Feel free to ask more about my timeline, projects, or background 😊"

    if (msg.includes("name")) {
      reply = "My name is Naitik Tarkeshwar Gupta."
    }
    else if (msg.includes("college")) {
      reply = "I am currently pursuing B.Tech in Computer Science from Parul University, Vadodara."
    }
    else if (msg.includes("cgpa")) {
      reply = "My current CGPA is 8.64."
    }
    else if (msg.includes("year") || msg.includes("semester")) {
      reply = "I am currently in my 2nd year, 4th semester."
    }
    else if (msg.includes("live") || msg.includes("location")) {
      reply = "I am currently based in Vadodara, Gujarat."
    }
    else if (msg.includes("native")) {
      reply = "I am originally from Ranchi, Jharkhand."
    }
    else if (msg.includes("skills") || msg.includes("tech")) {
      reply = "I work with HTML, CSS, JavaScript, React, Node.js, and have a strong foundation in Data Structures and Algorithms using Java. I also have experience with cloud platforms like Azure and AWS."
    }
    else if (msg.includes("project")) {
      reply = "My best project so far is my personal portfolio website. It reflects my development skills, design sense, and how I present myself professionally to recruiters."
    }
    else if (msg.includes("job") || msg.includes("role")) {
      reply = "I am aiming for Full Stack Developer roles where I can contribute, learn fast, and grow into building scalable and impactful products."
    }
    else if (msg.includes("internship")) {
      reply = "I am open to both internships and full-time opportunities. For internships, I am available immediately."
    }
    else if (msg.includes("hire") || msg.includes("why")) {
      reply = "I focus on building strong fundamentals and practical skills rather than just chasing trends. My focus on scalable architectures and problem-solving makes me a reliable asset."
    }
    else if (msg.includes("experience")) {
      reply = "I am currently building my skills and projects actively, and utilizing my strong algorithmic logic to enhance my web development capabilities."
    }
    else if (msg.includes("certification")) {
      reply = "Yes, I have completed multiple certifications including Microsoft Azure Fundamentals (AZ-900) and JavaScript Specialist."
    }
    else if (msg.includes("strength")) {
      reply = "My biggest strength is consistency and adaptability to modern frameworks."
    }
    else if (msg.includes("weakness")) {
      reply = "I sometimes spend extra time understanding things deeply before implementing them."
    }
    else if (msg.includes("hobby") || msg.includes("interest")) {
      reply = "I enjoy coding, participating in hackathons, and playing cricket."
    }
    else if (msg.includes("contact") || msg.includes("email")) {
      reply = "You can reach me at: naitikgupta803@gmail.com. Or simply use the contact form on my portfolio!"
    }
    else if (msg.includes("linkedin")) {
      reply = "You can find my LinkedIn link in the Contact section! We'd love to connect."
    }
    else if (msg.includes("github")) {
      reply = "My GitHub link is also in the Contact section. Check out my repositories!"
    }
    else if (msg.includes("available")) {
      reply = "I am available immediately for standard interviews and projects."
    }

    return reply
  }

  const sendMessage = (customText) => {
    const messageText = customText || input
    if (!messageText.trim()) return

    const userMsg = { role: "user", text: messageText }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setLoading(true)

    const msgLower = messageText.toLowerCase()
    const reply = getBotResponse(msgLower)

    // Simulate network delay
    setTimeout(() => {
      setLoading(false)
      setMessages(prev => [...prev, { role: "bot", text: reply, isTyping: true }])
    }, 500)
  }

  const handleTypingComplete = (index) => {
    setMessages(prev =>
      prev.map((msg, i) => i === index ? { ...msg, isTyping: false } : msg)
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Floating Button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setOpen(true)}
            className="bg-primary text-white p-4 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2 group"
          >
            <FiMessageSquare size={24} className="group-hover:animate-pulse" />
            <span className="font-semibold pr-2 overflow-hidden whitespace-nowrap hidden md:block">Chat with AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[340px] h-[500px] max-h-[80vh] glass-panel bg-gray-900/95 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gray-800/80 border-b border-gray-700/50 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-cyan-400 flex items-center justify-center font-bold text-lg shadow-inner">
                    NG
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Naitik's AI</h3>
                  <p className="text-xs text-green-400">Online</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold mr-2 mt-1 shrink-0">
                      AI
                    </div>
                  )}
                  <div
                    className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed max-w-[80%] shadow-md ${msg.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-gray-800/80 border border-gray-700/50 text-gray-200 rounded-tl-sm"
                      }`}
                  >
                    {msg.role === "bot" && msg.isTyping ? (
                      <TypingMessage text={msg.text} onComplete={() => handleTypingComplete(i)} />
                    ) : (
                      msg.text
                    )}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start items-end">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold mr-2 mb-1 shrink-0">
                    AI
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-gray-800/80 border border-gray-700/50 rounded-tl-sm flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Space */}
            <div className="px-4 overflow-x-auto custom-scrollbar pb-2 pt-1 flex gap-2 shrink-0">
              <button onClick={() => sendMessage("skills")} className="text-xs font-medium text-gray-300 bg-gray-800/70 border border-gray-700 hover:border-primary/50 hover:bg-gray-700/80 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors">
                Tech Stack
              </button>
              <button onClick={() => sendMessage("project")} className="text-xs font-medium text-gray-300 bg-gray-800/70 border border-gray-700 hover:border-primary/50 hover:bg-gray-700/80 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors">
                Top Projects
              </button>
              <button onClick={() => sendMessage("contact")} className="text-xs font-medium text-gray-300 bg-gray-800/70 border border-gray-700 hover:border-primary/50 hover:bg-gray-700/80 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors">
                Contact Info
              </button>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-gray-900 shrink-0 border-t border-gray-800">
              <div className="flex items-center bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden focus-within:border-primary/50 transition-colors">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 px-4 py-3 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
                  placeholder="Message AI..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage()
                  }}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || loading}
                  className="px-4 py-3 text-primary hover:text-blue-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
                >
                  <FiSend size={18} className={input.trim() ? "translate-x-0" : "-translate-x-1 transition-transform"} />
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ChatBot