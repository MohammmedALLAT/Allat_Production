import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Language = "dar" | "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Load saved language from localStorage, default to English
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('allat-language');
      return (saved as Language) || "en";
    }
    return "en";
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Update HTML attributes for RTL/LTR on mount and language change
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (language === "dar") {
      htmlElement.setAttribute("lang", "ar");
      htmlElement.setAttribute("dir", "rtl");
    } else {
      htmlElement.setAttribute("lang", language);
      htmlElement.setAttribute("dir", "ltr");
    }
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    if (lang !== language && !isTransitioning) {
      setIsTransitioning(true);
      
      // Find all translatable elements
      const translatableElements = document.querySelectorAll('[data-lang-dar][data-lang-en][data-lang-fr]');
      
      // Fade out
      translatableElements.forEach(el => {
        (el as HTMLElement).style.opacity = '0';
      });
      
      // Wait for fade out animation (150ms)
      setTimeout(() => {
        // Update language state
        setLanguage(lang);
        
        // Save to localStorage
        localStorage.setItem('allat-language', lang);
        
        // Update text content for all elements
        translatableElements.forEach(el => {
          const element = el as HTMLElement;
          const newText = element.getAttribute(`data-lang-${lang}`);
          if (newText) {
            element.textContent = newText;
          }
        });
        
        // Update HTML direction
        const htmlElement = document.documentElement;
        if (lang === "dar") {
          htmlElement.setAttribute("lang", "ar");
          htmlElement.setAttribute("dir", "rtl");
        } else {
          htmlElement.setAttribute("lang", lang);
          htmlElement.setAttribute("dir", "ltr");
        }
        
        // Fade in
        setTimeout(() => {
          translatableElements.forEach(el => {
            (el as HTMLElement).style.opacity = '1';
          });
          
          setIsTransitioning(false);
        }, 50);
      }, 150);
    }
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    isTransitioning,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Text component that stores all translations in data attributes
interface TextProps {
  dar: string;
  en: string;
  fr: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export function Text({ 
  dar, 
  en, 
  fr, 
  as: Component = "span", 
  className = "", 
  style = {},
  id
}: TextProps) {
  const { language } = useLanguage();
  
  // Select correct text based on current language
  const text = language === "dar" ? dar : language === "en" ? en : fr;
  
  return (
    <Component
      id={id}
      data-lang-dar={dar}
      data-lang-en={en}
      data-lang-fr={fr}
      className={className}
      style={{
        ...style,
        transition: 'opacity 150ms ease-in-out',
      }}
    >
      {text}
    </Component>
  );
}
