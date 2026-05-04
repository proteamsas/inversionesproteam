import { useState } from "react";
import cerdoImg from "@/assets/product-cerdo.jpg";
import polloImg from "@/assets/product-pollo.jpg";
import viscerasImg from "@/assets/product-visceras.jpg";
import pescadoImg from "@/assets/product-pescado.jpg";
import cerdoPunta from "@/assets/products/cerdo-punta-chuleta.jpg";
import cerdoSirloin from "@/assets/products/cerdo-sirloin.jpg";
import cerdoLomo from "@/assets/products/cerdo-lomo.jpg";
import polloPechuga from "@/assets/products/pollo-pechuga.jpg";
import polloFilete from "@/assets/products/pollo-filete.jpg";
import polloColombinas from "@/assets/products/pollo-colombinas.jpg";
import viscerasMondongo from "@/assets/products/visceras-mondongo.jpg";
import viscerasBofe from "@/assets/products/visceras-bofe.jpg";
import viscerasHigado from "@/assets/products/visceras-higado.jpg";
import pescadoBocachico from "@/assets/products/pescado-bocachico.jpg";
import pescadoBasa from "@/assets/products/pescado-basa.jpg";
import papasFrancesa from "@/assets/products/papas-francesa.jpg";
import { MessageCircle, ChevronDown } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type FeaturedProduct = { name: string; en?: string; image: string };
type Category = {
  id: string;
  title: string;
  image: string;
  accent: string;
  items: string[];
  featured: FeaturedProduct[];
};

const products: Category[] = [
  {
    id: "cerdo",
    title: "Cerdo Importado",
    image: cerdoImg,
    accent: "Importado · Premium",
    items: ["Sirloin", "Punta chuleta (entera y picada)", "Lomo (Cañón)", "Paticas (Codillos)", "Pierna con Hueso"],
    featured: [
      { name: "Punta chuleta", en: "Ham Ends - Bone in", image: cerdoPunta },
      { name: "Sirloin", en: "Ham Ends - Boneless", image: cerdoSirloin },
      { name: "Lomo", en: "Boneless Loin", image: cerdoLomo },
    ],
  },
  {
    id: "pollo",
    title: "Pollo",
    image: polloImg,
    accent: "Fresco · Congelado",
    items: ["Colombinas de pollo", "Filete de pechuga", "Mollejas de pollo", "Pechuga Nacional", "Pernil"],
    featured: [
      { name: "Pechuga Nacional", en: "Bone-in Breast", image: polloPechuga },
      { name: "Filete de pechuga", en: "Butterfly Breast", image: polloFilete },
      { name: "Colombinas de pollo", en: "Chicken Drumsticks", image: polloColombinas },
    ],
  },
  {
    id: "visceras",
    title: "Vísceras de Res",
    image: viscerasImg,
    accent: "Calidad garantizada",
    items: ["Bofe de res", "Hígado de res", "Mondongo", "Lengua", "Patas de Res", "Corazón"],
    featured: [
      { name: "Mondongo", en: "Honeycomb Tripe", image: viscerasMondongo },
      { name: "Bofe", en: "Beef Lung", image: viscerasBofe },
      { name: "Hígado de res", en: "Beef Liver", image: viscerasHigado },
    ],
  },
  {
    id: "pescado",
    title: "Pescados y Otros",
    image: pescadoImg,
    accent: "Mar · Río",
    items: ["Bocachico", "Basa Entera", "Basa Picada", "Papas a la Francesa 2.5 Kg"],
    featured: [
      { name: "Bocachico", en: "Argentino", image: pescadoBocachico },
      { name: "Basa Entera", en: "Whole Basa", image: pescadoBasa },
      { name: "Papas a la Francesa", en: "2.5 Kg", image: papasFrancesa },
    ],
  },
];

const ProductsSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="productos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-terracota font-display font-600 text-sm tracking-widest uppercase mb-3">
            Lo que distribuimos
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-brand-brown">
            Categorías de Productos
          </h2>
          <div className="w-16 h-1 bg-brand-terracota mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm text-muted-foreground font-body">
            Toca una categoría para ver los productos destacados.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const isOpen = openId === product.id;
            return (
              <div
                key={product.id}
                className={cn(
                  "group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-brand-beige-light flex flex-col",
                  isOpen && "shadow-2xl ring-2 ring-brand-terracota/30",
                )}
              >
                {/* Image */}
                <button
                  type="button"
                  onClick={() => toggle(product.id)}
                  aria-expanded={isOpen}
                  aria-controls={`gallery-${product.id}`}
                  className="relative h-52 overflow-hidden text-left"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-brand-beige text-xs font-display font-500 tracking-wider">
                    {product.accent}
                  </span>
                </button>

                {/* Content */}
                <div className="p-5 flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-display font-700 text-lg text-brand-brown">
                      {product.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => toggle(product.id)}
                      aria-expanded={isOpen}
                      aria-controls={`gallery-${product.id}`}
                      aria-label={isOpen ? "Cerrar galería" : "Ver fotos"}
                      className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-beige-soft hover:bg-brand-terracota hover:text-white text-brand-brown flex items-center justify-center transition-colors"
                    >
                      <ChevronDown
                        size={16}
                        className={cn("transition-transform duration-300", isOpen && "rotate-180")}
                      />
                    </button>
                  </div>
                  <ul className="space-y-1.5">
                    {product.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-terracota flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Expandable gallery */}
                  <div
                    id={`gallery-${product.id}`}
                    className={cn(
                      "grid transition-all duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4 border-t border-brand-beige-light">
                        <p className="text-[11px] uppercase tracking-widest text-brand-terracota font-display font-600 mb-3">
                          Destacados
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          {product.featured.map((f) => (
                            <div key={f.name} className="flex flex-col">
                              <div className="aspect-square rounded-md overflow-hidden bg-brand-beige-soft">
                                <img
                                  src={f.image}
                                  alt={f.name}
                                  loading="lazy"
                                  width={1024}
                                  height={1024}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <p className="mt-1.5 text-[11px] font-display font-600 text-brand-brown leading-tight">
                                {f.name}
                              </p>
                              {f.en && (
                                <p className="text-[10px] text-muted-foreground italic leading-tight">
                                  {f.en}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-5 pb-5">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-brand-beige-soft hover:bg-brand-terracota text-brand-brown hover:text-white font-display font-600 text-sm py-2.5 rounded-md transition-all duration-200"
                  >
                    <MessageCircle size={15} />
                    Consultar precio
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
