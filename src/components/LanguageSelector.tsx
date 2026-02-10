import { motion } from "motion/react";
import { useLanguage, Language } from "../contexts/LanguageContext";
import moroccoFlag from "figma:asset/8b261b1754d24640fc6374c8b229c73e508cefc2.png";
import franceFlag from "figma:asset/d16f55e135831e5f32f7dd344cc2247b23fca1ba.png";
import ukFlag from "figma:asset/0eb58a0c157a352b703f32c89bc9312d817cda6e.png";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; flag: string }[] = [
    { code: "dar", flag: moroccoFlag },
    { code: "en", flag: ukFlag },
    { code: "fr", flag: franceFlag },
  ];

  return (
    <div className="flex items-center lang-container bg-black/50 border border-white/30 rounded-full backdrop-blur-sm">
      <style>{`
        .lang-container {
          padding: 6px 8px; /* Horizontal padding matches gap */
          gap: 8px;
          justify-content: center;
          display: flex;
          align-items: center;
        }
        .lang-item {
          gap: 8px;
          display: flex;
          align-items: center;
          height: 100%;
        }
        .lang-btn {
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lang-flag {
          width: 14px;
          height: 14px;
          display: block;
        }
        .lang-separator {
          width: 1px;
          height: 8px; /* Fixed height for mobile */
          background-color: rgba(255, 255, 255, 0.3);
          display: block;
        }
        
        @media (min-width: 640px) {
          .lang-container {
            padding: 8px 12px;
            gap: 12px;
          }
          .lang-item {
            gap: 12px;
          }
          .lang-btn {
            padding: 4px;
          }
          .lang-flag {
            width: 20px;
            height: 20px;
          }
          .lang-separator {
            height: 12px; /* Fixed height for desktop */
          }
        }
      `}</style>
      {languages.map((lang, index) => (
        <div key={lang.code} className="flex items-center lang-item">
          <motion.button
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer transition-all duration-200 lang-btn touch-manipulation rounded-full ${language === lang.code
              ? "opacity-100"
              : "opacity-50 hover:opacity-100"
              }`}
            whileHover={{
              scale: 1.1,
              filter: "brightness(1.2)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              opacity: language === lang.code ? 1 : 0.5,
              scale: language === lang.code ? 1.05 : 1,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            aria-label={`Switch to ${lang.code === 'dar' ? 'Darija' : lang.code === 'en' ? 'English' : 'French'}`}
            type="button"
          >
            <img
              src={lang.flag}
              alt={lang.code}
              className="lang-flag object-contain pointer-events-none"
            />
          </motion.button>
          {index < languages.length - 1 && (
            <div className="lang-separator" />
          )}
        </div>
      ))}
    </div>
  );
}