import { Warehouse, Truck, MessageSquare } from "lucide-react";

const pillars = [
  {
    icon: Warehouse,
    title: "Alta Capacidad",
    description:
      "Bodegas con capacidad de hasta 60 toneladas de producto congelado para garantizar disponibilidad constante.",
  },
  {
    icon: Truck,
    title: "Logística Eficiente",
    description:
      "Esquema de preventa y entrega al día siguiente. Nuestros asesores toman tu pedido y lo tienes listo al otro día.",
  },
  {
    icon: MessageSquare,
    title: "Atención Personalizada",
    description:
      "Asesoría directa vía WhatsApp o visitas presenciales de nuestros asesores comerciales en tu zona.",
  },
];

const WhyProteam = () => {
  return (
    <section id="como-comprarnos" className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-terracota font-display font-600 text-sm tracking-widest uppercase mb-3">
            Nuestras ventajas
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-brand-brown">
            ¿Por qué elegir PROTEAM?
          </h2>
          <div className="w-16 h-1 bg-brand-brown mx-auto mt-4 rounded-full" />
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white/70 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-brand-brown/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-brown flex items-center justify-center mb-5 shadow-md">
                  <Icon size={28} className="text-brand-beige" />
                </div>
                <div className="w-8 h-0.5 bg-brand-terracota mb-4 rounded-full" />
                <h3 className="font-display font-700 text-xl text-brand-brown mb-3">
                  {pillar.title}
                </h3>
                <p className="text-brand-brown/70 font-body leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process steps */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="font-display font-700 text-2xl text-brand-brown text-center mb-10">
            ¿Cómo hacer tu pedido?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: "01", label: "Contacta al asesor", desc: "Por WhatsApp o visita presencial" },
              { step: "02", label: "Realiza tu pedido", desc: "El asesor toma tu pedido en preventa" },
              { step: "03", label: "Recibe al día siguiente", desc: "Entrega en ruta a tu establecimiento" },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center p-6 relative">
                <span className="font-display font-900 text-5xl text-brand-terracota/25 mb-2 leading-none">
                  {item.step}
                </span>
                <h4 className="font-display font-700 text-brand-brown mb-1">{item.label}</h4>
                <p className="text-brand-brown/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProteam;
