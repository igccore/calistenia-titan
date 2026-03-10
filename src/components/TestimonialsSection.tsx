import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Martín R.",
    role: "Instructor Certificado",
    text: "Gracias a Axel, hoy soy instructor de calistenia. Su método es claro, efectivo y transformador. No solo cambió mi físico, cambió mi mentalidad.",
  },
  {
    name: "Lucía G.",
    role: "Alumna Avanzada",
    text: "Empecé sin poder hacer una flexión y hoy hago muscle-ups. El coaching personalizado marcó la diferencia. Axel es el mejor en lo que hace.",
  },
  {
    name: "Santiago M.",
    role: "Instructor Certificado",
    text: "La formación de instructores de Axel es de otro nivel. Contenido profundo, seguimiento constante y una comunidad increíble.",
  },
  {
    name: "Valentina P.",
    role: "Alumna Intermedia",
    text: "El curso online superó todas mis expectativas. Las progresiones están perfectamente diseñadas. 100% recomendado.",
  },
  {
    name: "Diego F.",
    role: "Coach de Mentalidad",
    text: "El coaching de mentalidad con Axel fue un antes y un después. Me ayudó a superar bloqueos que no sabía que tenía.",
  },
  {
    name: "Camila S.",
    role: "Instructora Certificada",
    text: "Formarme con Axel fue la mejor inversión de mi vida. Hoy tengo mi propio negocio de fitness gracias a sus enseñanzas.",
  },
];

const TestimonialCard = ({ t, i }: { t: typeof testimonials[0]; i: number }) => (
  <motion.div
    className="bg-card border border-border/40 rounded-lg p-8 min-w-[320px] md:min-w-[400px] flex-shrink-0"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.1 }}
  >
    <Quote className="text-primary mb-4" size={28} />
    <p className="font-body text-foreground text-base md:text-lg leading-relaxed mb-6">
      "{t.text}"
    </p>
    <div className="flex items-center gap-1 mb-3">
      {[...Array(5)].map((_, j) => (
        <Star key={j} className="text-primary fill-primary" size={16} />
      ))}
    </div>
    <p className="font-display text-foreground text-xl">{t.name}</p>
    <p className="font-body text-muted-foreground text-sm">{t.role}</p>
  </motion.div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="bg-background py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 md:mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-foreground text-5xl md:text-7xl lg:text-8xl">
            TESTIMONIOS
          </h2>
          <div className="section-divider mt-4" />
          <p className="font-body text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Todas las personas que se han formado como instructores con Axel Dubin
            hoy transforman vidas.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} t={t} i={i % testimonials.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
