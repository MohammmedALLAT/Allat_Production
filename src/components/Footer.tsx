import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Text } from "../contexts/LanguageContext";
import logo from "figma:asset/76527b4a4576db370dc37fa9fd8637acdee950e4.png";

export function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/allat.prod/",
      label: "Instagram",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/212697634567",
      label: "WhatsApp",
    },
    {
      icon: Mail,
      href: "mailto:allatproduction@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer
      className="relative w-full border-t border-white/10 bg-black/80 backdrop-blur-md z-40"
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between py-4">
          {/* Left: Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={logo}
                alt="Allat Production"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs tracking-[0.15em] uppercase font-['Space_Grotesk'] font-bold text-white">
              Allat Production
            </span>
          </div>

          {/* Center: Copyright */}
          <div className="text-xs text-[#bfbfbf] font-light">
            <Text
              dar="© 2026 Allat Production"
              en="© 2026 Allat Production"
              fr="© 2026 Allat Production"
            />
            {" • "}
            <Text
              dar="جميع الحقوق محفوظة"
              en="All Rights Reserved"
              fr="Tous droits réservés"
            />
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bfbfbf] hover:text-white transition-colors duration-300 p-2"
                  aria-label={social.label}
                >
                  <IconComponent size={18} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center justify-center py-5 gap-4">
          {/* Logo & Name */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={logo}
                alt="Allat Production"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs tracking-[0.15em] uppercase font-['Space_Grotesk'] font-bold text-white">
              Allat Production
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bfbfbf] hover:text-white transition-colors duration-300 p-2 touch-manipulation"
                  aria-label={social.label}
                >
                  <IconComponent size={20} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-[10px] sm:text-xs text-[#bfbfbf]/80 font-light text-center">
            <Text
              dar="© 2026 Allat Production"
              en="© 2026 Allat Production"
              fr="© 2026 Allat Production"
            />
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            <Text
              dar="جميع الحقوق محفوظة"
              en="All Rights Reserved"
              fr="Tous droits réservés"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}