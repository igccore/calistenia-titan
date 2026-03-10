import { motion } from "framer-motion";
import { Send, MessageCircle, Instagram, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="relative bg-secondary py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-foreground text-5xl md:text-7xl lg:text-8xl">
              CONTACTO
            </h2>
            <div className="section-divider mt-4 mx-0" />
            <p className="font-body text-muted-foreground text-lg md:text-xl mt-6 leading-relaxed max-w-lg">
              ¿Listo para transformar tu cuerpo y tu mentalidad? Dejá tus datos
              y te contactamos para comenzar tu camino hacia la mejor versión de vos.
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={22} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right - Form Placeholder (for GoHighLevel integration) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              id="ghl-form-placeholder"
              className="bg-card border border-border/50 rounded-lg p-8 md:p-10"
            >
              <h3 className="font-display text-foreground text-3xl mb-6">
                ESCRIBINOS
              </h3>
              {/* Placeholder form - replace with GoHighLevel embed */}
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: Connect to GoHighLevel CRM
                }}
              >
                <div>
                  <label className="font-body text-sm text-muted-foreground block mb-2">
                    NOMBRE
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre completo"
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground block mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground block mb-2">
                    TELÉFONO
                  </label>
                  <input
                    type="tel"
                    placeholder="+54 11 1234-5678"
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground block mb-2">
                    MENSAJE
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Contanos en qué te podemos ayudar..."
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-cta w-full flex items-center justify-center gap-3">
                  <Send size={18} />
                  ENVIAR MENSAJE
                </button>
              </form>
              <p className="font-body text-xs text-muted-foreground/60 mt-4 text-center">
                {/* GoHighLevel integration placeholder */}
                Este formulario se conectará a tu CRM (GoHighLevel)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
