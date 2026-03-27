import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const API_KEY = "AIzaSyBmuwIf8Irvh7-ixw8uiyus6IjK8aWT71c"

const context = `
You are an AI assistant for Naitik's portfolio.

Name: Naitik Gupta
College: Parul University
Course: B.Tech CSE
Location: Vadodara, Gujarat
Native Place: Jharkhand
Skills: HTML, CSS, JavaScript, React, Azure

Answer in a friendly and simple way.
`

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                { text: context + "\nUser: " + userMessage }
              ]
            }
          ]
        })
      }
    )

    const data = await response.json()

    // 🔥 DEBUG (important)
    console.log("API RESPONSE:", JSON.stringify(data, null, 2))

    let reply = "Kuch error aa gaya 😅"

    if (data.candidates && data.candidates.length > 0) {
      const parts = data.candidates[0].content.parts

      reply = parts.map(p => p.text).join(" ")
    } else if (data.error) {
      reply = "API Error: " + data.error.message
    }

    res.json({ reply })

  } catch (err) {
    console.log("SERVER ERROR:", err)
    res.json({ reply: "Server error 😅" })
  }
})

app.listen(5000, () => console.log("Server running on port 5000"))