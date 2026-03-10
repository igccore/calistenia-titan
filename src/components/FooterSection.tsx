import logoTitan from "@/assets/logo-titan.png";

const FooterSection = () => {
  return (
    <footer className="bg-background border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logoTitan} alt="Calistenia Titan" className="h-10 w-auto" />
          <div className="flex gap-8 font-body font-bold text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-foreground transition-colors">HOME</a>
            <a href="#productos" className="hover:text-foreground transition-colors">PRODUCTOS</a>
            <a href="#coaching" className="hover:text-foreground transition-colors">COACHING</a>
            <a href="#contacto" className="hover:text-foreground transition-colors">CONTACTO</a>
          </div>
          <p className="font-body text-xs text-muted-foreground/50">
            © 2026 Calistenia Titan. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
