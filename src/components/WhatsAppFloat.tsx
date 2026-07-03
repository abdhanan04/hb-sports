import { Phone } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923034659038"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow"
      aria-label="Contact on WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
