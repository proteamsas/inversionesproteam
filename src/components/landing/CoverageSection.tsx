import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

const routes = [
  {
    id: "uraba",
    name: "Urabá Antioqueño",
    municipalities: ["Apartadó", "Necoclí", "Turbo", "Carepa", "Chigorodó"],
  },
  {
    id: "costera",
    name: "Zona Costera",
    municipalities: [
      "Arboletes",
      "Puerto Escondido",
      "Los Córdobas",
      "San Juan de Urabá",
      "Canalete",
    ],
  },
  {
    id: "bajo-cauca",
    name: "Bajo Cauca y Sabanas",
    municipalities: [
      "Caucasia",
      "Planeta Rica",
      "Montelíbano",
      "La Apartada",
      "Buenavista",
    ],
  },
  {
    id: "sabanas",
    name: "Sabanas de Sucre",
    municipalities: [
      "Sincelejo",
      "Sahagún",
      "Corozal",
      "Chinú",
      "Sampués",
      "Ciénaga de Oro",
    ],
  },
  {
    id: "montes-maria",
    name: "Montes de María",
    municipalities: [
      "Ovejas",
      "El Carmen de Bolívar",
      "San Juan Nepomuceno",
      "San Jacinto",
    ],
  },
  {
    id: "golfo",
    name: "El Golfo",
    municipalities: [
      "Lorica",
      "San Antero",
      "Coveñas",
      "Tolú",
      "Toluviejo",
      "San Onofre",
    ],
  },
];

const CoverageSection = () => {
  const [openRoute, setOpenRoute] = useState<string | null>("uraba");

  return (
    <section id="cobertura" className="py-24 bg-brand-beige-soft">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-terracota font-display font-600 text-sm tracking-widest uppercase mb-3">
            Cobertura regional
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-brand-brown">
            Nuestras Rutas de Entrega
          </h2>
          <div className="w-16 h-1 bg-brand-terracota mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto font-body">
            Entregamos al día siguiente en más de 30 municipios de Córdoba,
            Sucre, Antioquia y Bolívar.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {routes.map((route) => {
            const isOpen = openRoute === route.id;
            return (
              <div
                key={route.id}
                className="bg-white rounded-xl border border-brand-beige-light overflow-hidden shadow-sm"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left group"
                  onClick={() => setOpenRoute(isOpen ? null : route.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? "bg-brand-terracota" : "bg-brand-beige-soft"}`}>
                      <MapPin size={15} className={isOpen ? "text-white" : "text-brand-terracota"} />
                    </div>
                    <span className="font-display font-700 text-brand-brown text-base">
                      {route.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground text-xs font-display font-500 hidden sm:inline">
                      {route.municipalities.length} municipios
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-brand-terracota transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-1">
                    <div className="flex flex-wrap gap-2">
                      {route.municipalities.map((mun) => (
                        <span
                          key={mun}
                          className="bg-brand-beige-soft text-brand-brown text-xs font-display font-500 px-3 py-1.5 rounded-full border border-brand-beige-light"
                        >
                          {mun}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
