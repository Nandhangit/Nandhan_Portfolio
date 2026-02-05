import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    //  Prevent horizontal scroll & mobile blur issues
    // <div className="min-h-screen w-full overflow-x-hidden bg-[#0f0720] selection:bg-purple-500/30">
       <div className="min-h-screen w-full overflow-x-hidden bg-[#101A14] text-gray-100 selection:bg-orange-500/20">
 
      {/* 🌌 BACKGROUND GLOW — DESKTOP ONLY */}
      <div className="fixed inset-0 -z-10 pointer-events-none hidden lg:block">
      {/* Warm Green Orange Glow */}
<div
  className="
    absolute top-0 left-1/2 -translate-x-1/2
    w-[60vw] h-[60vw]
    bg-orange-800/15
    blur-[160px]
    rounded-full
    animate-pulse
  "
/>

{/* Deep Green Glow */}
<div
  className="
    absolute bottom-0 left-1/2 -translate-x-1/2
    w-[60vw] h-[60vw]
    bg-green-900/20
    blur-[160px]
    rounded-full
    animate-pulse
  "
/>
      </div> 
        
      <Navbar />

      {/*  CONTENT — SAFE ON MOBILE */}
      <main
        className="
          w-full max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-12
        "
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;

