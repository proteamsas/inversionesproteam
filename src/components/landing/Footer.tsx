import { MapPin, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="bg-brand-brown text-brand-beige">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span className="font-display text-3xl font-black tracking-widest mb-4 block">
              <span className="text-brand-beige">PRO</span>
              <span className="text-brand-terracota">TEAM</span>
            </span>
            <p className="text-brand-beige/60 font-body text-sm leading-relaxed max-w-xs">
              Distribuidora mayorista de proteína animal congelada. Calidad,
              logística y atención personalizada para tu negocio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-700 text-sm tracking-widest uppercase text-brand-terracota mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {["Inicio", "Productos", "Cómo Comprarnos", "Cobertura"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "-").replace("ó", "o")}`}
                    className="text-brand-beige/70 hover:text-brand-beige text-sm font-body transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-700 text-sm tracking-widest uppercase text-brand-terracota mb-4">
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-terracota mt-0.5 flex-shrink-0" />
                <p className="text-brand-beige/70 text-sm font-body">
                  Centro Logístico San Jerónimo<br />
                  Km 3 vía Planeta Rica a Montería
                </p>
              </div>
              <a
                href="tel:+573107643793"
                className="flex items-center gap-3 text-brand-beige/70 hover:text-brand-beige text-sm font-body transition-colors"
              >
                <Phone size={16} className="text-brand-terracota flex-shrink-0" />
                +57 310 764 3793
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-brand-beige/70 hover:text-brand-beige text-sm font-body transition-colors"
              >
                <MessageCircle size={16} className="text-brand-terracota flex-shrink-0" />
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Legal */}
        <div className="border-t border-brand-beige/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-beige/40 text-xs font-body">
            PROTEAM © 2026. Todos los derechos reservados.
          </p>
          <p className="text-brand-beige/30 text-xs font-body">
            Distribución mayorista B2B · Colombia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
