import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/573001234567?text=Hola%2C%20quiero%20información%20sobre%20sus%20productos";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle size={26} className="text-white" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
