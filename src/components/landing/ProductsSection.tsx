import cerdoImg from "@/assets/product-cerdo.jpg";
import polloImg from "@/assets/product-pollo.jpg";
import viscerasImg from "@/assets/product-visceras.jpg";
import pescadoImg from "@/assets/product-pescado.jpg";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

const products = [
  {
    id: "cerdo",
    title: "Cerdo Importado",
    image: cerdoImg,
    items: ["Sirloin de cerdo", "Punta chuleta", "Lomo de cerdo", "Paticas de cerdo"],
    accent: "Importado · Premium",
  },
  {
    id: "pollo",
    title: "Pollo",
    image: polloImg,
    items: ["Colombinas de pollo", "Filete de pechuga", "Mollejas de pollo"],
    accent: "Fresco · Congelado",
  },
  {
    id: "visceras",
    title: "Vísceras de Res",
    image: viscerasImg,
    items: ["Bofe de res", "Hígado de res", "Mondongo"],
    accent: "Calidad garantizada",
  },
  {
    id: "pescado",
    title: "Pescados y Otros",
    image: pescadoImg,
    items: ["Bocachico entero", "Filete de Basa", "Papas Mydibel"],
    accent: "Mar · Río",
  },
];

const ProductsSection = () => {
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
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-brand-beige-light"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 to-transparent" />
                <span className="absolute bottom-3 left-3 text-brand-beige text-xs font-display font-500 tracking-wider">
                  {product.accent}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-700 text-lg text-brand-brown mb-3">
                  {product.title}
                </h3>
                <ul className="space-y-1.5">
                  {product.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-terracota flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover CTA */}
              <div className="px-5 pb-5">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-brand-beige-soft hover:bg-brand-terracota text-brand-brown hover:text-white font-display font-600 text-sm py-2.5 rounded-md transition-all duration-200 group-hover:bg-brand-terracota group-hover:text-white"
                >
                  <MessageCircle size={15} />
                  Consultar precio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
