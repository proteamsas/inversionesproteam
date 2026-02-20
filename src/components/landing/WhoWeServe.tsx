import { Store, Scissors, ShoppingCart, Users, Package } from "lucide-react";

const clients = [
  { icon: Store, label: "Tiendas de Barrio" },
  { icon: Scissors, label: "Carnicerías" },
  { icon: ShoppingCart, label: "Puestos de Mercado" },
  { icon: Users, label: "Revendedores" },
  { icon: Package, label: "Locales de Abarrotes" },
];

const WhoWeServe = () => {
  return (
    <section className="py-20 bg-white border-t border-brand-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-terracota font-display font-600 text-sm tracking-widest uppercase mb-3">
            Nuestros clientes
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-brand-brown">
            ¿A quién abastecemos?
          </h2>
          <div className="w-16 h-1 bg-brand-terracota mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto font-body">
            Trabajamos directamente con negocios del sector alimentario en toda
            la región Caribe y Urabá.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {clients.map((client) => {
            const Icon = client.icon;
            return (
              <div
                key={client.label}
                className="flex items-center gap-3 bg-brand-beige-soft border border-brand-beige-light hover:border-brand-terracota/40 hover:bg-brand-beige-light rounded-xl px-6 py-4 transition-all duration-200 group cursor-default"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-terracota/10 group-hover:bg-brand-terracota/20 flex items-center justify-center transition-colors">
                  <Icon size={18} className="text-brand-terracota" />
                </div>
                <span className="font-display font-600 text-brand-brown text-sm tracking-wide">
                  {client.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
