import { useState } from "react"

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 Ask anything about Naitik!" }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const sendMessage = (customText) => {
    const messageText = customText || input
    if (!messageText) return

    const userMsg = { role: "user", text: messageText }
    setMessages(prev => [...prev, userMsg])

    const msg = messageText.toLowerCase()
    let reply = "That's interesting! Feel free to ask more about me 😊"

    // 🔥 (ALL YOUR LOGIC SAME — TOUCH NAHI KIYA)
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
      reply = "I focus on building strong fundamentals and practical skills rather than just chasing trends..."
    }
    else if (msg.includes("experience")) {
      reply = "I am currently building my skills and projects actively..."
    }
    else if (msg.includes("certification")) {
      reply = "Yes, I have completed multiple certifications..."
    }
    else if (msg.includes("strength")) {
      reply = "My biggest strength is consistency..."
    }
    else if (msg.includes("weakness")) {
      reply = "I sometimes spend extra time understanding things deeply..."
    }
    else if (msg.includes("hobby") || msg.includes("interest")) {
      reply = "I enjoy coding and playing cricket."
    }
    else if (msg.includes("contact") || msg.includes("email")) {
      reply = "You can reach me at: naitikgupta803@gmail.com"
    }
    else if (msg.includes("linkedin")) {
      reply = "Here is my LinkedIn..."
    }
    else if (msg.includes("github")) {
      reply = "Here is my GitHub..."
    }
    else if (msg.includes("available")) {
      reply = "I am available immediately..."
    }

    setInput("")
    setLoading(true)

    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: reply }])
      setLoading(false)
    }, 700)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* 🔥 BUTTON UPGRADE */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
      >
        Ask about Naitik
      </button>

      {open && (
        <div className="w-80 h-96 bg-gray-900 text-white rounded-xl mt-3 p-4 flex flex-col animate-[fadeIn_0.3s_ease]">
          
          {/* 🔥 WHATSAPP STYLE CHAT UI (ADDED ONLY) */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl text-sm max-w-[75%] ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-gray-800 text-gray-200 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-2xl bg-gray-800 text-gray-400 text-sm">
                  typing...
                </div>
              </div>
            )}
          </div>

          {/* SAME BUTTONS */}
          <div className="flex flex-wrap gap-2 my-2">
            <button onClick={() => sendMessage("name")} className="text-xs bg-gray-800 px-2 py-1 rounded">Name</button>
            <button onClick={() => sendMessage("skills")} className="text-xs bg-gray-800 px-2 py-1 rounded">Skills</button>
            <button onClick={() => sendMessage("project")} className="text-xs bg-gray-800 px-2 py-1 rounded">Projects</button>
            <button onClick={() => sendMessage("contact")} className="text-xs bg-gray-800 px-2 py-1 rounded">Contact</button>
          </div>

          {/* INPUT SAME */}
          <div className="flex mt-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 bg-gray-800 rounded-l"
              placeholder="Ask anything..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={() => sendMessage()} className="bg-primary px-4 rounded-r">
              Send
            </button>
          </div>

        </div>
      )}
    </div>
  )
}

export default ChatBot