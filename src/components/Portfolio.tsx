import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Text } from "../contexts/LanguageContext";


export function Portfolio() {
  const projects = [
    {
      title: {
        dar: "فيلم BRAND سينمائي",
        en: "Cinematic Brand Film",
        fr: "Film de Marque Cinématographique",
      },
      category: {
        dar: "إعلان تجاري",
        en: "Commercial",
        fr: "Commercial",
      },
      image: "https://images.unsplash.com/photo-1638961862991-bd7ee1c9ecfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NzA2NDEzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: {
        dar: "حملة تجارية",
        en: "Corporate Campaign",
        fr: "Campagne d'Entreprise",
      },
      category: {
        dar: "فيديو تجاري",
        en: "Commercial Video",
        fr: "Vidéo Commerciale",
      },
      image: "https://images.unsplash.com/photo-1637441211446-6e75c8e3cc2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwdmlkZW8lMjBjYW1lcmF8ZW58MXx8fHwxNzcwNjQxMzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: {
        dar: "قصة الـ BRAND",
        en: "Brand Storytelling",
        fr: "Narration de Marque",
      },
      category: {
        dar: "سرد بصري",
        en: "Visual Narrative",
        fr: "Récit Visuel",
      },
      image: "https://images.unsplash.com/photo-1759393851741-674ee71fb498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0b3J5dGVsbGluZyUyMHZpZGVvfGVufDF8fHx8MTc3MDY0MTM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: {
        dar: "التوجيه الإبداعي",
        en: "Creative Direction",
        fr: "Direction Créative",
      },
      category: {
        dar: "إنتاج فيلمي",
        en: "Film Production",
        fr: "Production Cinématographique",
      },
      image: "https://images.unsplash.com/photo-1769693315423-7096f8b7ab24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpcmVjdG9yJTIwZmlsbWluZ3xlbnwxfHx8fDE3NzA2NDEzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: {
        dar: "سلسلة CONTENT للـ SOCIAL",
        en: "Social Content Series",
        fr: "Série de Contenu Social",
      },
      category: {
        dar: "السوشيال ميديا",
        en: "Social Media",
        fr: "Médias Sociaux",
      },
      image: "https://images.unsplash.com/photo-1770368787880-7f6fa3488067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NzA2MjcyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: {
        dar: "توثيق الـ EVENT",
        en: "Event Documentation",
        fr: "Documentation d'Événement",
      },
      category: {
        dar: "تغطية الـ events",
        en: "Event Coverage",
        fr: "Couverture d'Événement",
      },
      image: "https://images.unsplash.com/photo-1763280290224-1b7ed510a31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZpZGVvZ3JhcGh5fGVufDF8fHx8MTc3MDU1NjgxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="work" className="bg-black py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-20 md:mb-28 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Text
            dar="المشاريع المختارة"
            en="Selected Projects"
            fr="Projets Sélectionnés"
            as="div"
            className="mb-6 sm:mb-8 text-xs tracking-[0.3em] text-[#bfbfbf] uppercase font-light"
          />

          <Text
            dar="الأعمال ديالنا"
            en="OUR WORK"
            fr="NOS TRAVAUX"
            as="h2"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.02em] mb-6 sm:mb-8 md:mb-10 font-['Space_Grotesk'] font-bold uppercase"
          />

          <Text
            dar="هاد الـ projects كيوريو كيفاش الـ visual content الاستراتيجي كيحوّل الشركات، كيخليهم يبانو بشكل أكثر احترافية ومايتنساوش عند الزبائن ديالهم."
            en="These projects demonstrate how strategic visual content transforms businesses, making them appear more professional and memorable to their customers."
            fr="Ces projets démontrent comment le contenu visuel stratégique transforme les entreprises, les rendant plus professionnelles et mémorables pour leurs clients."
            as="p"
            className="text-sm sm:text-base md:text-lg text-[#bfbfbf] font-light leading-[1.8] max-w-3xl mx-auto px-4"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      className="group relative h-[500px] overflow-hidden border border-white/10 rounded-sm cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt="Project"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.06]"
          style={{
            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), filter 0.45s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <Text
          dar={project.category.dar}
          en={project.category.en}
          fr={project.category.fr}
          as="div"
          className="text-xs tracking-[0.2em] text-[#bfbfbf] uppercase mb-3 font-light opacity-60"
        />

        <Text
          dar={project.title.dar}
          en={project.title.en}
          fr={project.title.fr}
          as="h3"
          className="text-2xl tracking-[0.05em] uppercase font-['Space_Grotesk'] font-bold"
        />
      </div>
    </motion.div>
  );
}