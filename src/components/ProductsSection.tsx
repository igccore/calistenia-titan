import { motion } from "framer-motion";
import { Play, CheckCircle } from "lucide-react";
import productsBg from "@/assets/products-bg.jpg";

const features = [
  "Programa completo de calistenia",
  "Progresiones paso a paso",
  "Plan de nutrición incluido",
  "Acceso de por vida",
  "Comunidad exclusiva",
];

const ProductsSection = () => {
  return (
    <section id="productos" className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-foreground text-5xl md:text-7xl lg:text-8xl">
            PRODUCTOS
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-foreground text-4xl md:text-5xl mb-6">
              CURSO DE CALISTENIA
            </h3>
            <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
              Dominá tu cuerpo con el programa más completo de calistenia en español.
              Desde principiante hasta avanzado, con progresiones probadas por cientos
              de alumnos que hoy son instructores certificados.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feat, i) => (
                <motion.li
                  key={feat}
                  className="flex items-center gap-3 font-body text-foreground text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <CheckCircle className="text-primary flex-shrink-0" size={22} />
                  {feat}
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contacto"
              className="btn-cta inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              ADQUIRIR EL CURSO
            </motion.a>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-deep group cursor-pointer">
              <img
                src={productsBg}
                alt="Curso de calistenia"
                className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/20 transition-all duration-500">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-glow-red group-hover:scale-110 transition-transform duration-300">
                  <Play className="text-primary-foreground ml-1" size={32} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
