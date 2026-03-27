import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import LeetCode from './components/LeetCode';
import LinkedInSection from './components/LinkedInSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ChatBot from './components/ChatBot'; // 🔥 ADD THIS

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-primary loader-dot"></div>
          <div className="w-4 h-4 rounded-full bg-blue-400 loader-dot"></div>
          <div className="w-4 h-4 rounded-full bg-blue-200 loader-dot"></div>
        </div>
        <p className="mt-6 text-gray-400 font-mono tracking-widest text-sm animate-pulse">
          INITIALIZING_PORTFOLIO...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <LeetCode />
        <LinkedInSection />
        <Contact />
      </main>
      <Footer />

      {/* 🔥 CHATBOT ADDED */}
      <ChatBot />
    </div>
  );
}

export default App;