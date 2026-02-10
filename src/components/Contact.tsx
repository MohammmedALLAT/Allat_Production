import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Text } from "../contexts/LanguageContext";
import logo from "figma:asset/76527b4a4576db370dc37fa9fd8637acdee950e4.png";
import instagramLogo from "figma:asset/dd5c1e5b4944667524ec7c452e097b741aaafad7.png";
import whatsappLogo from "figma:asset/f651deeabc1da0455d4cf19e279bc1e5c84e1652.png";
import emailLogo from "figma:asset/bcd8e711b2bfea2e07fbc93d9c98a2319e21b988.png";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
  parallaxSpeed: number;
}

export function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [logoDistance, setLogoDistance] = useState(1);
  const [logoRef, setLogoRef] = useState<HTMLDivElement | null>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number>();

  // Generate stars on mount
  useEffect(() => {
    const generatedStars: Star[] = [];
    for (let i = 0; i < 150; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleDelay: Math.random() * 5,
        parallaxSpeed: Math.random() * 0.5 + 0.5,
      });
    }
    setStars(generatedStars);
  }, []);

  // Smooth light following with damping
  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;

        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 2;
        const y = (e.clientY / innerHeight - 0.5) * 2;
        setMousePosition({ x, y });
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const smoothFollow = () => {
      const dampingFactor = 0.08;
      currentX += (targetX - currentX) * dampingFactor;
      currentY += (targetY - currentY) * dampingFactor;

      setLightPosition({ x: currentX, y: currentY });

      if (logoRef && sectionRef.current) {
        const rect = logoRef.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const logoCenterX = rect.left - sectionRect.left + rect.width / 2;
        const logoCenterY = rect.top - sectionRect.top + rect.height / 2;

        const dx = currentX - logoCenterX;
        const dy = currentY - logoCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const normalizedDistance = Math.min(distance / 400, 1);
        setLogoDistance(normalizedDistance);
      }

      animationFrameRef.current = requestAnimationFrame(smoothFollow);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(smoothFollow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [logoRef]);

  const handleSocialClick = (platform: string, url: string, e: React.MouseEvent) => {
    if (platform === "Instagram") {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 800;

      if (isMobile) {
        e.preventDefault();
        const deepLink = "instagram://user?username=allat.prod";
        const webLink = url;

        // Try opening the deep link
        window.location.href = deepLink;

        // Fallback to web link if deep link fails (timeout)
        setTimeout(() => {
          window.location.href = webLink;
        }, 1000); // 1000ms fallback timer
      }
    }
  };

  const contacts = [
    {
      platform: "Instagram",
      platformDar: "إنستاغرام",
      platformFr: "Instagram",
      handle: "@allat.prod",
      url: "https://www.instagram.com/allat.prod/",
      coloredLogo: instagramLogo,
      glowColor: "rgba(253, 29, 29, 0.4)",
    },
    {
      platform: "WhatsApp",
      platformDar: "واتساب",
      platformFr: "WhatsApp",
      handle: "+212 697 634 567",
      url: "https://wa.me/212697634567",
      coloredLogo: whatsappLogo,
      glowColor: "rgba(37, 211, 102, 0.4)",
    },
    {
      platform: "Email",
      platformDar: "إيمايل",
      platformFr: "Email",
      handle: "allatproduction@gmail.com",
      url: "mailto:allatproduction@gmail.com",
      coloredLogo: emailLogo,
      glowColor: "rgba(66, 133, 244, 0.4)",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0a0e1a 50%, #000814 100%)",
      }}
    >
      {/* Starfield background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => {
          const starX = (star.x / 100) * (sectionRef.current?.offsetWidth || window.innerWidth);
          const starY = (star.y / 100) * (sectionRef.current?.offsetHeight || window.innerHeight);
          const dx = cursorPosition.x - starX;
          const dy = cursorPosition.y - starY;
          const distanceToStar = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - distanceToStar / 200);

          return (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity + proximity * 0.4,
                filter: "blur(0.5px)",
                transition: "opacity 0.8s ease",
              }}
              animate={{
                opacity: [star.opacity + proximity * 0.4, star.opacity * 0.3 + proximity * 0.4, star.opacity + proximity * 0.4],
                x: [0, mousePosition.x * star.parallaxSpeed * 2, 0],
                y: [0, mousePosition.y * star.parallaxSpeed * 2, 0],
              }}
              transition={{
                opacity: {
                  duration: 3 + star.twinkleDelay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                x: {
                  duration: 8,
                  ease: "easeOut",
                },
                y: {
                  duration: 8,
                  ease: "easeOut",
                },
              }}
            />
          );
        })}
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Moon Logo Container */}
        <motion.div
          className="flex justify-center items-center mb-24 h-[500px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            ref={setLogoRef}
            className="relative"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Large outer halo */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "500px",
                height: "500px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.01) 60%, transparent 100%)",
                filter: "blur(60px)",
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Medium halo */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "320px",
                height: "320px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.02) 70%, transparent 100%)",
                filter: "blur(40px)",
              }}
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Inner bright glow */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                width: "200px",
                height: "200px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
                filter: "blur(25px)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Interactive light */}
            <motion.div
              className="absolute rounded-full pointer-events-none -z-10"
              style={{
                width: "180px",
                height: "180px",
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${mousePosition.x * 8}px, ${mousePosition.y * -8}px)`,
                background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(255,255,255,${0.25 * (1 - logoDistance)}) 0%, rgba(255,255,255,${0.1 * (1 - logoDistance)}) 50%, transparent 80%)`,
                filter: "blur(40px)",
                opacity: 1 - logoDistance * 0.7,
                transition: "transform 500ms ease-out, opacity 500ms ease-out",
              }}
            />

            {/* Moon Logo */}
            <motion.div
              className="relative w-[160px] h-[160px] rounded-full overflow-hidden cursor-pointer"
              style={{
                boxShadow: `
                  0 0 ${60 + (1 - logoDistance) * 30}px rgba(255, 255, 255, ${0.5 + (1 - logoDistance) * 0.3}), 
                  0 0 ${120 + (1 - logoDistance) * 60}px rgba(255, 255, 255, ${0.25 + (1 - logoDistance) * 0.2}),
                  0 0 ${200 + (1 - logoDistance) * 80}px rgba(255, 255, 255, ${0.1 + (1 - logoDistance) * 0.1}),
                  inset 0 0 20px rgba(0, 0, 0, ${0.2 - (1 - logoDistance) * 0.1})
                `,
                scale: logoDistance < 0.5 ? 1.02 : 1,
                transition: "scale 500ms ease-out, box-shadow 300ms ease-out",
              }}
            >
              <img
                src={logo}
                alt="Allat Production Logo"
                className="w-full h-full object-cover"
                style={{
                  filter: `brightness(${1.1 + (1 - logoDistance) * 0.2}) contrast(${1.05 + (1 - logoDistance) * 0.05})`,
                  transition: "filter 300ms ease-out",
                }}
              />

              <div
                className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundSize: "100px 100px",
                }}
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${50 + mousePosition.x * 40}% ${50 + mousePosition.y * 40}%, rgba(255,255,255,${0.3 * (1 - logoDistance)}) 0%, transparent 50%)`,
                  opacity: 1 - logoDistance,
                  transition: "opacity 300ms ease-out",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Title and Subtitle */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Text
            dar="ابدا PROJECT"
            en="Start a Project"
            fr="Démarrer un Projet"
            as="h2"
            className="text-5xl md:text-6xl lg:text-7xl tracking-[0.02em] mb-8 leading-[1.1] font-['Space_Grotesk'] font-bold uppercase text-white"
          />

          <Text
            dar="سواء عندك منتج، محل، خدمة، أو فكرة بيزنس، Allat Production كتحوّلها لـ visual brand قوي ومحترف كيجذب ويحوّل الـ clients."
            en="Whether you have a product, shop, service, or business idea, Allat Production transforms it into a strong, professional visual brand that attracts and converts clients."
            fr="Que vous ayez un produit, une boutique, un service ou une idée d'entreprise, Allat Production le transforme en une marque visuelle forte et professionnelle qui attire et convertit les clients."
            as="p"
            className="text-base md:text-lg text-[#bfbfbf] font-light leading-[1.8] max-w-2xl mx-auto mb-4"
          />

          <Text
            dar="يالاه نبنيو الـ brand image ديالك مع بعض."
            en="Let's build your brand image together."
            fr="Construisons ensemble votre image de marque."
            as="p"
            className="text-sm text-[#bfbfbf] font-light leading-[1.8] max-w-xl mx-auto"
          />
        </motion.div>

        {/* NEW CONTACT CARDS - Clean Implementation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-32 relative z-20">
          {contacts.map((contact, index) => {
            return (
              <motion.div
                key={contact.platform}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Hover Glow Effect - Outside Card */}
                <div
                  className="contact-card-glow absolute -inset-4 rounded-sm opacity-0 blur-2xl pointer-events-none transition-opacity duration-200"
                  style={{ background: contact.glowColor }}
                />

                {/* Card */}
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card group relative block bg-[#0b0b0b] border border-white/5 rounded-sm p-12 pointer-events-auto overflow-hidden transition-all duration-200 hover:scale-[1.02]"
                  style={{ zIndex: 10 }}
                  onClick={(e) => handleSocialClick(contact.platform, contact.url, e)}
                >
                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Logo Container */}
                    <div className="relative w-16 h-16 mb-6">
                      {/* Platform Logo - Always Visible */}
                      <img
                        src={contact.coloredLogo}
                        alt={`${contact.platform} logo`}
                        className="w-16 h-16 object-contain"
                        draggable={false}
                      />
                    </div>

                    {/* Platform Name */}
                    <Text
                      dar={contact.platformDar}
                      en={contact.platform}
                      fr={contact.platformFr}
                      as="h3"
                      className="text-xl font-['Space_Grotesk'] font-bold uppercase tracking-[0.05em] text-white mb-3 transition-colors duration-200"
                    />

                    {/* Handle */}
                    <p className="text-sm text-[#bfbfbf] font-light transition-colors duration-200">
                      {contact.handle}
                    </p>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CSS for Hover States */}
      <style>{`
        /* Hover State: Show Glow */
        .contact-card:hover + .contact-card-glow,
        .relative:hover .contact-card-glow {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}