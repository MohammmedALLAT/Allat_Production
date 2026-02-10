import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Text } from "../contexts/LanguageContext";

import aboutImage from "figma:asset/b5bd907321b718e2565d2ff809b9b6edb17802ec.png";

export function About() {
  return (
    <section id="about" className="bg-black py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Text
              dar="على الاستوديو"
              en="About Studio"
              fr="À Propos du Studio"
              as="div"
              className="mb-6 sm:mb-8 text-xs tracking-[0.3em] text-[#bfbfbf] uppercase font-light"
            />

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-10 sm:mb-12 md:mb-16 tracking-[0.02em] leading-[0.95] font-['Space_Grotesk'] font-bold uppercase">
              <Text
                dar="من الفكرة"
                en="FROM CONCEPT"
                fr="DU CONCEPT"
                as="span"
              />
              <br />
              <Text
                dar="للتسليم"
                en="TO DELIVERY"
                fr="À LA LIVRAISON"
                as="span"
              />
            </h2>

            <div className="space-y-6 sm:space-y-8 text-[#bfbfbf] leading-[1.8] text-base sm:text-lg font-light">
              <Text
                dar="Allat Production هو استوديو متخصص في الـ branding و الـ visual content، كيبني الـ brand image للشركات وكيساعدهم يبانو بشكل محترف وما ينساوش عند الزبائن ديالهم."
                en="Allat Production is a full visual branding and content creation studio that builds the brand image for businesses, helping them appear professional and memorable to their clients."
                fr="Allat Production est un studio complet de branding visuel et de création de contenu qui construit l'image de marque des entreprises, les aidant à paraître professionnelles et mémorables auprès de leurs clients."
                as="p"
              />

              <Text
                dar="العملية ديالنا كتبدا بفهم الـ brand والرؤية ديالك. بعدها كنخلقو مفهوم بصري كيعكس الـ identity ديالك، كنصمّمو الـ visual elements اللي كتمثّلك، وكنديرو shooting احترافي للصورة والفيديو اللي كيحكي القصة ديالك."
                en="Our process begins by understanding your brand and vision. We then create a visual concept that reflects your identity, design the visual elements that represent you, and execute professional photo and video shoots that capture your story."
                fr="Notre processus commence par la compréhension de votre marque et de votre vision. Nous créons ensuite un concept visuel qui reflète votre identité, concevons les éléments visuels qui vous représentent et réalisons des séances photo et vidéo professionnelles qui capturent votre histoire."
                as="p"
              />

              <Text
                dar="في الأخير، كنديرو الـ montage ونحضّرو الـ content جاهز للـ marketing اللي كيخلي الـ business ديالك يبان كليدر في المجال ديالك. حنا ما كنصوّروش غير، كنبنيو الصورة اللي كتجيب الـ clients."
                en="Finally, we edit and prepare marketing-ready content that positions your business as a leader in your field. We don't just take pictures—we build the image that helps you attract clients."
                fr="Enfin, nous éditons et préparons du contenu prêt pour le marketing qui positionne votre entreprise comme un leader dans votre domaine. Nous ne prenons pas simplement des photos—nous construisons l'image qui vous aide à attirer des clients."
                as="p"
              />
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <ImageWithFallback
                src={aboutImage}
                alt="Allat Production Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-[1.06]"
                style={{
                  transition: 'transform 1.5s cubic-bezier(0.25, 1, 0.5, 1), filter 1.5s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}