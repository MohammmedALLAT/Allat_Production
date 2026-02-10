import { motion } from "motion/react";
import { Camera, Video, Palette } from "lucide-react";
import { useState } from "react";
import { Text } from "../contexts/LanguageContext";
import { TextTransition } from "./TextTransition";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(1); // Center card is active by default

  const services = [
    {
      id: 0,
      icon: Camera,
      title: { dar: "التصوير", en: "Photography", fr: "Photographie" },
      description: {
        dar: "تصوير الـ products، الـ portraits، الشركات والـ events",
        en: "Product photos, portraits, businesses and events",
        fr: "Photos de produits, portraits, entreprises et événements",
      },
    },
    {
      id: 1,
      icon: Video,
      title: { dar: "إنتاج الفيديو", en: "Videography", fr: "Vidéographie" },
      description: {
        dar: "REELS، إعلانات، مقابلات وتغطية الـ events",
        en: "Reels, ads, interviews and coverage",
        fr: "Reels, publicités, interviews et couverture",
      },
    },
    {
      id: 2,
      icon: Palette,
      title: {
        dar: "الـ DESIGN & BRANDING",
        en: "Graphic Design & Branding",
        fr: "Design Graphique & Branding",
      },
      description: {
        dar: "اللوغوهات، الـ visual identity والـ brand image",
        en: "Logos, identity and brand image",
        fr: "Logos, identité et image de marque",
      },
    },
  ];

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section id="services" className="bg-black py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-20 md:mb-28 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Text
            dar="الخدمات ديالنا"
            en="Our Services"
            fr="Nos Services"
            as="div"
            className="mb-6 sm:mb-8 text-xs tracking-[0.3em] text-[#bfbfbf] uppercase font-light"
          />
          
          <Text
            dar="أشنو كنديرو"
            en="WHAT WE DO"
            fr="CE QUE NOUS FAISONS"
            as="h2"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.02em] font-['Space_Grotesk'] font-bold uppercase"
          />
        </motion.div>

        {/* Desktop: Horizontal Card Layout / Mobile: Vertical Stack */}
        <div className="hidden md:flex relative items-center justify-center gap-6 lg:gap-8 min-h-[600px] perspective-[2000px]">
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            const position = index - activeIndex; // -1 (left), 0 (center), 1 (right)
            
            return (
              <motion.div
                key={service.id}
                className="relative cursor-pointer"
                onClick={() => handleCardClick(index)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                animate={{
                  scale: isActive ? 1 : 0.85,
                  x: position * 20,
                  z: isActive ? 0 : -100,
                  opacity: isActive ? 1 : 0.5,
                }}
                style={{
                  transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Card Container */}
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    width: isActive ? "420px" : "380px",
                    height: isActive ? "560px" : "520px",
                    transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Card Background with Gradient */}
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)"
                        : "linear-gradient(135deg, #121212 0%, #0a0a0a 100%)",
                      transition: "all 400ms ease",
                    }}
                  />

                  {/* Glass Effect Overlay */}
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: isActive
                        ? "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 70%)"
                        : "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
                      transition: "all 400ms ease",
                    }}
                  />

                  {/* Subtle Light Reflection on Active Card */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, transparent 40%, transparent 60%, rgba(255, 255, 255, 0.06) 100%)",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}

                  {/* Border */}
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      border: isActive ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "all 400ms ease",
                    }}
                  />

                  {/* Glow Effect - Active Card */}
                  {isActive && (
                    <div
                      className="absolute -inset-1 rounded-2xl blur-2xl -z-10"
                      style={{
                        background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
                        opacity: 0.6,
                      }}
                    />
                  )}

                  {/* Shadow for Depth */}
                  <div
                    className="absolute inset-0 rounded-2xl -z-20"
                    style={{
                      boxShadow: isActive
                        ? "0 25px 80px rgba(0, 0, 0, 0.6), 0 10px 40px rgba(0, 0, 0, 0.4)"
                        : "0 10px 40px rgba(0, 0, 0, 0.5)",
                      transition: "all 400ms ease",
                    }}
                  />

                  {/* Blur Effect on Side Cards */}
                  <div
                    className="absolute inset-0 rounded-2xl backdrop-blur-sm"
                    style={{
                      backdropFilter: isActive ? "blur(0px)" : "blur(2px)",
                      WebkitBackdropFilter: isActive ? "blur(0px)" : "blur(2px)",
                      transition: "all 400ms ease",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center">
                    {/* Icon */}
                    <motion.div
                      className="mb-10"
                      animate={{
                        scale: isActive ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <service.icon 
                        className="w-16 h-16"
                        style={{
                          strokeWidth: 1.5,
                          opacity: isActive ? 1 : 0.7,
                          transition: "all 400ms ease",
                        }}
                      />
                    </motion.div>

                    {/* Title */}
                    <Text
                      dar={service.title.dar}
                      en={service.title.en}
                      fr={service.title.fr}
                      as="h3"
                      className="text-3xl mb-6 tracking-[0.05em] uppercase leading-tight font-['Space_Grotesk'] font-bold"
                      style={{
                        opacity: isActive ? 1 : 0.7,
                        transition: "all 400ms ease",
                      }}
                    />

                    {/* Short Description */}
                    <Text
                      dar={service.description.dar}
                      en={service.description.en}
                      fr={service.description.fr}
                      as="p"
                      className="text-[#bfbfbf] leading-[1.8] font-light text-base max-w-[320px]"
                      style={{
                        opacity: isActive ? 1 : 0.6,
                        transition: "all 400ms ease",
                      }}
                    />

                    {/* Active Indicator Line */}
                    {isActive && (
                      <motion.div
                        className="mt-8 w-16 h-0.5 bg-white rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 64, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden flex flex-col items-stretch gap-6 max-w-md mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <IconComponent className="w-12 h-12" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-2xl mb-4 tracking-[0.05em] uppercase leading-tight font-['Space_Grotesk'] font-bold">
                  <Text
                    dar={service.title.dar}
                    en={service.title.en}
                    fr={service.title.fr}
                  />
                </h3>

                {/* Description */}
                <p className="text-[#bfbfbf] leading-[1.8] font-light text-sm">
                  <Text
                    dar={service.description.dar}
                    en={service.description.en}
                    fr={service.description.fr}
                  />
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Hint Text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Text
            dar="كليكي باش تشوف كل خدمة"
            en="Click to explore each service"
            fr="Cliquez pour explorer chaque service"
            as="p"
            className="text-xs tracking-[0.2em] text-[#bfbfbf]/60 uppercase font-light"
          />
        </motion.div>
      </div>
    </section>
  );
}