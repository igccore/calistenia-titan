import { motion } from "framer-motion";
import { Brain, Dumbbell, Target, Users } from "lucide-react";
import coachingBg from "@/assets/coaching-bg.jpg";

const pillars = [
  { icon: Dumbbell, title: "CALISTENIA", desc: "Dominio corporal completo" },
  { icon: Brain, title: "MENTALIDAD", desc: "Fortaleza mental inquebrantable" },
  { icon: Target, title: "OBJETIVOS", desc: "Plan personalizado a tu medida" },
  { icon: Users, title: "COMUNIDAD", desc: "Red de atletas comprometidos" },
];

const CoachingSection = () => {
  return (
    <section id="coaching" className="relative bg-secondary py-24 md:py-32 overflow-hidden">
      {/* Background image bleed */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <img
          src={coachingBg}
          alt="Coaching de calistenia"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-foreground text-5xl md:text-7xl lg:text-8xl">
            COACHING
          </h2>
          <div className="section-divider mt-4 mx-0" />
          <p className="font-body text-muted-foreground text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
            Entrenamiento personalizado 1 a 1 con Calistenia Titan. Calistenia avanzada
            y coaching de mentalidad para transformar tu cuerpo y tu mente.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:border-primary/40 transition-all duration-500 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <pillar.icon
                className="text-accent-highlight mb-4 group-hover:scale-110 transition-transform duration-300"
                size={36}
              />
              <h3 className="font-display text-foreground text-2xl mb-2">{pillar.title}</h3>
              <p className="font-body text-muted-foreground text-base">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#contacto" className="btn-cta inline-block">
            SER PARTE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingSection;
