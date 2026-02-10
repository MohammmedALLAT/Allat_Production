import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { Text } from "../contexts/LanguageContext";

export function Hero() {
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const iframeCreated = useRef(false);

  // Create Spline iframe ONCE using vanilla JS
  useEffect(() => {
    if (!iframeCreated.current && splineContainerRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://my.spline.design/animatedpaperboat-ucFmHfh70KR83liPukiHMapv/';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.objectFit = 'cover';
      iframe.setAttribute('frameBorder', '0');
      iframe.setAttribute('title', '3D Background');

      splineContainerRef.current.appendChild(iframe);
      iframeCreated.current = true;
    }
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Spline 3D Background - Contained within Hero */}
      <div
        ref={splineContainerRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 0,
          backgroundColor: '#000000',
        }}
      />

      {/* 32 sm:w-h-12 sm:40 sm:bg-black/Content Layer */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 pb-12 sm:pb-16">
        <motion.div
          className="text-center max-w-4xl w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.08em] mb-6 sm:mb-8 md:mb-10 leading-[1.15] font-['Space_Grotesk'] font-bold uppercase">
            <Text
              dar="بني الـ BRAND ديالك"
              en="BUILD YOUR BRAND"
              fr="CONSTRUISEZ VOTRE MARQUE"
              as="span"
            />
            <br />
            <Text
              dar="من خلال الـ VISUAL"
              en="THROUGH VISUALS"
              fr="À TRAVERS LES VISUELS"
              as="span"
              className="block mt-2 sm:mt-3 md:mt-4"
            />
          </h1>

          <Text
            dar="Allat Production كساعد الشركات باش يبانو بشكل محترف من خلال الـ visual identity، إنتاج الـ content، والقصة اللي كتجيب الـ clients."
            en="Allat Production helps businesses present themselves professionally through visual identity, content creation, and storytelling visuals that attract clients."
            fr="Allat Production aide les entreprises à se présenter de manière professionnelle grâce à l'identité visuelle, la création de contenu et les visuels narratifs qui attirent les clients."
            as="p"
            className="text-sm sm:text-base md:text-lg text-[#bfbfbf] mb-4 sm:mb-5 md:mb-6 tracking-[0.05em] font-light leading-[1.8] max-w-2xl mx-auto px-4"
          />

          <Text
            dar="التصوير • الـ REELS • الـ DESIGN & BRANDING"
            en="Photography • Videography • Graphic Design & Branding"
            fr="Photographie • Vidéographie • Design Graphique & Branding"
            as="p"
            className="text-xs sm:text-sm text-[#bfbfbf] mb-8 sm:mb-10 md:mb-14 tracking-[0.2em] font-light uppercase"
          />

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <motion.button
              onClick={() => {
                const element = document.getElementById("work");
                if (element) {
                  const navbarHeight = 80;
                  const targetPosition = element.offsetTop - navbarHeight;
                  window.scrollTo({ top: targetPosition, behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 border-2 border-white rounded-full text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:bg-white hover:text-black min-w-[200px] sm:min-w-[220px] font-normal cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Text
                dar="شوف المشاريع"
                en="View Projects"
                fr="Voir les Projets"
                as="span"
              />
            </motion.button>

            <motion.button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  const navbarHeight = 80;
                  const targetPosition = element.offsetTop - navbarHeight;
                  window.scrollTo({ top: targetPosition, behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 border-2 border-white rounded-full text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:bg-white hover:text-black min-w-[200px] sm:min-w-[220px] font-normal cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Text
                dar="تواصل معانا"
                en="Contact Us"
                fr="Nous Contacter"
                as="span"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}