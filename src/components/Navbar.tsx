import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Text } from "../contexts/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";
import logo from "figma:asset/76527b4a4576db370dc37fa9fd8637acdee950e4.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Intersection Observer for hero section
  useEffect(() => {
    const heroSection = document.getElementById("home");

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When hero section is NOT intersecting (not visible), activate glass effect
          setScrolled(!entry.isIntersecting);
        });
      },
      {
        // Trigger when hero section top edge crosses viewport bottom
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px", // Account for navbar height
      }
    );

    observer.observe(heroSection);

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "work", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { dar: "البداية", en: "Home", fr: "Accueil", id: "home" },
    { dar: "علينا", en: "About", fr: "À Propos", id: "about" },
    { dar: "الخدمات", en: "Services", fr: "Services", id: "services" },
    { dar: "الأعمال", en: "Work", fr: "Travaux", id: "work" },
    { dar: "التواصل", en: "Contact", fr: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const targetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.35)" : "transparent",
        backdropFilter: scrolled ? "blur(12px) saturate(140%)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(12px) saturate(140%)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 16px rgba(0, 0, 0, 0.15)" : "none",
        transition: "all 350ms ease",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6 flex items-center justify-between relative">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 sm:gap-4 cursor-pointer group transition-opacity duration-300 hover:opacity-80"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden flex items-center justify-center bg-transparent">
            <img
              src={logo}
              alt="Allat Production Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block text-white text-sm sm:text-base md:text-lg tracking-[0.15em] uppercase font-['Space_Grotesk'] font-bold whitespace-nowrap">
            Allat Production
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`text-xs tracking-[0.2em] uppercase font-light transition-all duration-300 cursor-pointer relative group ${activeSection === item.id
                ? "text-white"
                : "text-[#bfbfbf] hover:text-white"
                }`}
            >
              <Text
                dar={item.dar}
                en={item.en}
                fr={item.fr}
              />
              <span className={`absolute left-0 right-0 bottom-[-4px] h-[1px] bg-white transition-all duration-300 ${activeSection === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                }`} />
            </button>
          ))}
        </div>

        {/* Language Selector */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:transform-none lg:ml-8">
          <LanguageSelector />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 text-white hover:text-[#bfbfbf] transition-colors"
          aria-label="Open menu"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          menuItems={menuItems}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
        />
      </div>
    </motion.nav>
  );
}