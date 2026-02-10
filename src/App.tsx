import { useEffect, useState } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { IntroLoader } from "./components/IntroLoader";
import "./styles/scroll.css";
import "./styles/text-transition.css";
import "./styles/responsive.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we've already shown the intro in this session
    const hasSeenIntro = sessionStorage.getItem("intro_shown");

    if (hasSeenIntro) {
      setIsLoading(false);
    }

    // User requirement: "If the user refreshes, it shows again"
    // To achieve this with sessionStorage, we clear the flag on unload.
    const handleUnload = () => {
      sessionStorage.removeItem("intro_shown");
    };

    window.addEventListener("beforeunload", handleUnload);

    // Reveal the app once mounted (matches index.html style)
    const root = document.getElementById('root');
    if (root) {
      setTimeout(() => {
        root.classList.add('loaded');
      }, 100);
    }

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  const handleIntroFinish = () => {
    setIsLoading(false);
    sessionStorage.setItem("intro_shown", "true");
  };

  return (
    <LanguageProvider>
      {isLoading && <IntroLoader onFinish={handleIntroFinish} />}
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