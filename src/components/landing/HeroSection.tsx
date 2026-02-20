import { MessageCircle, ChevronDown } from "lucide-react";
import heroWarehouse from "@/assets/hero-warehouse.jpg";

const WHATSAPP_LINK = "https://wa.me/573001234567?text=Hola%2C%20quiero%20información%20sobre%20sus%20productos";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWarehouse})` }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "hsla(25, 32%, 17%, 0.80)" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-24">
        {/* Badge */}
        <span className="inline-block bg-brand-terracota/20 border border-brand-terracota/50 text-brand-terracota font-display text-xs font-600 tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 animate-fade-in">
          Distribuidor Mayorista B2B · Colombia
        </span>

        {/* H1 */}
        <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Proteína Animal de{" "}
          <span className="text-brand-beige">Calidad</span>{" "}
          para tu Negocio.
        </h1>

        {/* Subtitle */}
        <p
          className="text-brand-beige/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Distribución mayorista de cerdo, pollo, res y pescado congelado.
          Entregas al día siguiente en{" "}
          <span className="text-brand-beige font-semibold">Córdoba, Sucre, Antioquia y Bolívar.</span>
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.35s", opacity: 0 }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-brand-terracota hover:bg-brand-terracota-dark text-white font-display font-700 text-base px-8 py-4 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            Hablar con un Asesor
          </a>
          <a
            href="#productos"
            className="font-display font-500 text-brand-beige border border-brand-beige/40 hover:border-brand-beige px-8 py-4 rounded-md transition-all duration-200 text-base"
          >
            Ver Productos
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-20 pb-10 animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          {[
            { value: "60T", label: "Capacidad de almacenamiento" },
            { value: "6", label: "Rutas de entrega activas" },
            { value: "+30", label: "Municipios cubiertos" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-900 text-4xl text-brand-terracota">{stat.value}</div>
              <div className="text-brand-beige/70 text-sm mt-1 font-display tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-brand-beige/50" size={28} />
      </div>
    </section>
  );
};

export default HeroSection;
