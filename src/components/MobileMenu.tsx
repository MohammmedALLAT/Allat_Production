import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Text } from "../contexts/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: Array<{ dar: string; en: string; fr: string; id: string }>;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export function MobileMenu({ 
  isOpen, 
  onClose, 
  menuItems, 
  activeSection, 
  scrollToSection 
}: MobileMenuProps) {
  
  const handleItemClick = (id: string) => {
    scrollToSection(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed inset-0 z-[101] flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-white hover:text-[#bfbfbf] transition-colors"
              aria-label="Close menu"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            {/* Menu Items */}
            <nav className="flex flex-col items-center gap-8 w-full max-w-md">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-center text-2xl tracking-[0.15em] uppercase font-light transition-all duration-300 py-4 relative ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-[#bfbfbf] hover:text-white"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Text
                    dar={item.dar}
                    en={item.en}
                    fr={item.fr}
                  />
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: "60px" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}