import { useEffect, useRef } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./styles/scroll.css";
import "./styles/text-transition.css";
import "./styles/responsive.css";

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* Content Layer */}
        <div className="relative z-10 text-transition-container">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}