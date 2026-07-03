import { Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-transparent" />
      
      <div className="relative w-full px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-archivo text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            Ready to Elevate Your{" "}
            <span className="text-lime">Team or Brand?</span>
          </h2>
          <p className="text-light-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Contact us today for custom orders, team pricing, and personalized sportswear solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923034659038"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-lime text-dark px-8 py-4 rounded-full text-base font-semibold hover:bg-lime-light transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="mailto:hbsports0410@gmail.com"
              className="flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/5 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a
              href="https://wa.me/923034659038?text=Hi%20H%26B%20SPORTS%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20custom%20sportswear."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-lime/30 text-lime px-8 py-4 rounded-full text-base font-medium hover:bg-lime/10 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-5 h-5" />
              Request a Quote
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-light-muted text-sm">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +92 303 4659038
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              hbsports0410@gmail.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
