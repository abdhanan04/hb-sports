import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Mail,
  MessageSquare,
  Palette,
  Ruler,
  Shirt,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PageLayout from "../components/PageLayout";
import ContactCTA from "../components/ContactCTA";

gsap.registerPlugin(ScrollTrigger);

const customizationOptions = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Custom Colors & Design",
    description:
      "Choose from unlimited color combinations and create unique designs that represent your team's identity.",
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    title: "Team Logos & Branding",
    description:
      "Add your team logo, sponsor branding, player names, and numbers with professional-quality printing.",
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Perfect Fit Sizing",
    description:
      "Comprehensive size range from youth to adult plus sizes. Custom measurements available for perfect fit.",
  },
  {
    icon: <Check className="w-8 h-8" />,
    title: "Premium Materials",
    description:
      "Moisture-wicking, breathable fabrics that perform under pressure. Durable construction for long-lasting wear.",
  },
];

const jerseyExamples = [
  {
    title: "Soccer Kits",
    description: "Full soccer team kits including jerseys, shorts, and socks.",
    images: [
      "/images/sportswear-1.jpg",
      "/images/sportswear-2.jpg",
      "/images/sportswear-6.jpg",
    ],
  },
  {
    title: "Racing Team Apparel",
    description: "Professional racing suits and team apparel for motorsport.",
    images: [
      "/images/racing-1.jpg",
      "/images/racing-2.jpg",
      "/images/racing-6.jpg",
    ],
  },
  {
    title: "Sports Uniforms",
    description: "Basketball, volleyball, and general sports uniforms.",
    images: [
      "/images/sportswear-3.jpg",
      "/images/sportswear-4.jpg",
      "/images/sportswear-5.jpg",
    ],
  },
];

export default function CustomKits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeKit, setActiveKit] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".custom-anim",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const currentKit = jerseyExamples[activeKit];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-transparent" />
        <div className="relative w-full px-6 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime mb-3">
            Custom Solutions
          </p>
          <h1 className="font-archivo text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Custom Sports Kits
          </h1>
          <p className="text-light-muted max-w-2xl text-lg">
            Design your team's perfect look with our fully customizable sportswear
            solutions. From concept to creation, we bring your vision to life.
          </p>
        </div>
      </section>

      {/* Main Showcase Image */}
      <section className="pb-12 bg-dark">
        <div className="w-full px-6 lg:px-10">
          <div className="relative rounded-[10px] overflow-hidden border border-white/10 aspect-[21/9]">
            <img
              src="/images/custom-kits.jpg"
              alt="Custom Sports Kits"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
              <h2 className="font-archivo text-2xl md:text-3xl text-white mb-2">
                Your Team. Your Style.
              </h2>
              <p className="text-light-muted max-w-lg">
                Fully customizable designs for any sport. Professional quality,
                unlimited design options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section ref={sectionRef} className="py-16 lg:py-20 bg-dark">
        <div className="w-full px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime mb-4">
              Why Choose Us
            </p>
            <h2 className="font-archivo text-3xl md:text-4xl text-white">
              Customization Options
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationOptions.map((opt) => (
              <div
                key={opt.title}
                className="custom-anim rounded-[10px] border border-white/10 p-6 lg:p-8 bg-white/[0.02] hover:border-lime/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-lime/10 flex items-center justify-center text-lime mb-5 group-hover:bg-lime/20 transition-colors">
                  {opt.icon}
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">
                  {opt.title}
                </h3>
                <p className="text-light-muted text-sm leading-relaxed">
                  {opt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jersey Examples Gallery */}
      <section className="py-16 lg:py-20 bg-dark border-t border-white/5">
        <div className="w-full px-6 lg:px-10">
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime mb-4">
              Portfolio
            </p>
            <h2 className="font-archivo text-3xl md:text-4xl text-white mb-6">
              Teamwear Gallery
            </h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {jerseyExamples.map((kit, i) => (
                <button
                  key={kit.title}
                  onClick={() => {
                    setActiveKit(i);
                    setActiveImage(0);
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeKit === i
                      ? "bg-lime text-dark"
                      : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {kit.title}
                </button>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-[10px] overflow-hidden border border-white/10 aspect-[16/10] bg-dark-card mb-4">
              <img
                src={currentKit.images[activeImage]}
                alt={`${currentKit.title} example ${activeImage + 1}`}
                className="w-full h-full object-contain bg-dark-elevated"
              />

              {/* Navigation arrows */}
              <button
                onClick={() =>
                  setActiveImage((prev) =>
                    prev === 0 ? currentKit.images.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-dark transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setActiveImage((prev) =>
                    prev === currentKit.images.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-dark transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3">
              {currentKit.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-24 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImage === i
                      ? "border-lime"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <p className="text-center text-light-muted text-sm mt-4">
              {currentKit.description}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-dark border-t border-white/5">
        <div className="w-full px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime mb-4">
              Process
            </p>
            <h2 className="font-archivo text-3xl md:text-4xl text-white">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Share your requirements, team size, and design ideas with us.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Our designers create mockups based on your specifications.",
              },
              {
                step: "03",
                title: "Approval",
                desc: "Review and approve the designs before production begins.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Receive your custom kits delivered to your doorstep.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <span className="font-archivo text-5xl text-lime/20">
                  {s.step}
                </span>
                <h3 className="font-semibold text-white mt-3 mb-2">
                  {s.title}
                </h3>
                <p className="text-light-muted text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-dark border-t border-white/5">
        <div className="w-full px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center rounded-[10px] border border-lime/20 bg-lime/5 p-8 lg:p-12">
            <h2 className="font-archivo text-2xl md:text-3xl text-white mb-3">
              Contact H&B SPORTS for Custom Design Consultation
            </h2>
            <p className="text-light-muted mb-8">
              Let our design team create the perfect look for your team. Free
              design consultation and mockups.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/923034659038?text=Hi%20H%26B%20SPORTS%2C%20I%27d%20like%20to%20discuss%20a%20custom%20team%20kit%20design."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a
                href="mailto:hbsports0410@gmail.com?subject=Custom%20Kit%20Design%20Consultation"
                className="flex items-center gap-2 bg-lime text-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-lime-light transition-all"
              >
                <Mail className="w-4 h-4" />
                Email Inquiry
              </a>
              <a
                href="https://wa.me/923034659038?text=Hi%20H%26B%20SPORTS%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20custom%20team%20kits."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-lime/30 text-lime px-8 py-3.5 rounded-full text-sm font-medium hover:bg-lime/10 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </PageLayout>
  );
}
