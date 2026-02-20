import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/573001234567?text=Hola%2C%20quiero%20hacer%20un%20pedido";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Cómo Comprarnos", href: "#como-comprarnos" },
  { label: "Cobertura", href: "#cobertura" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-brown shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <span className="font-display text-2xl font-black tracking-widest">
            <span className="text-brand-beige">PRO</span>
            <span className="text-brand-terracota">TEAM</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-500 text-brand-beige hover:text-brand-terracota transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-brand-terracota hover:bg-brand-terracota-dark text-white font-display font-600 text-sm px-5 py-2.5 rounded-md transition-colors duration-200 tracking-wide"
        >
          <MessageCircle size={16} />
          Haz tu Pedido
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-beige"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-brand-brown border-t border-brand-beige/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-brand-beige hover:text-brand-terracota text-base py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-terracota text-white font-display font-600 text-sm px-5 py-3 rounded-md mt-2"
          >
            <MessageCircle size={16} />
            Haz tu Pedido
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
