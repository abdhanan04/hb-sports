import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  Users,
  Globe,
  Zap,
  Target,
  Heart,
  TrendingUp,
  Shield,
  Shirt,
  CircleDot,
} from "lucide-react";
import PageLayout from "../components/PageLayout";
import ContactCTA from "../components/ContactCTA";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality First",
    description:
      "We never compromise on quality. Every product undergoes rigorous testing to ensure it meets professional standards.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation Driven",
    description:
      "We continuously invest in research and development to bring cutting-edge materials and designs to our customers.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer Centric",
    description:
      "Our clients are at the heart of everything we do. We work closely with teams and individuals to deliver exactly what they need.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Standards",
    description:
      "Our products meet international quality standards and are trusted by athletes and teams worldwide.",
  },
];

const stats = [
  { icon: <Users className="w-8 h-8" />, value: "500+", label: "Teams Served" },
  { icon: <Award className="w-8 h-8" />, value: "25+", label: "Years Experience" },
  { icon: <Globe className="w-8 h-8" />, value: "20+", label: "Countries" },
  { icon: <Target className="w-8 h-8" />, value: "50K+", label: "Products Delivered" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-anim",
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

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-transparent" />
        <div className="relative w-full px-6 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime mb-3">
            Our Story
          </p>
          <h1 className="font-archivo text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            About H&B SPORTS
          </h1>
          <p className="text-light-muted max-w-2xl text-lg">
            A legacy of excellence in sportswear manufacturing, driven by passion
            for performance and commitment to quality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-dark">
        <div className="w-full px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-[10px] overflow-hidden border border-white/10">
              <img
                src="/images/about-factory.jpg"
                alt="H&B SPORTS Manufacturing"
                className="w-full aspect-video object-cover"
              />
            </div>

            {/* Story Content */}
            <div>
              <h2 className="font-archivo text-3xl md:text-4xl text-white mb-6">
                Crafting Excellence Since Day One
              </h2>
              <div className="space-y-4 text-light-muted leading-relaxed">
                <p>
                  H&B SPORTS was founded with a singular vision: to provide
                  athletes and sports teams with premium-quality apparel that
                  enhances performance and embodies team spirit. What started as
                  a small operation has grown into a trusted name in sportswear
                  manufacturing.
                </p>
                <p>
                  Our expertise spans across multiple disciplines—from
                  professional racing apparel that meets the highest safety
                  standards to custom soccer kits worn by clubs in competitive
                  leagues. We combine advanced manufacturing techniques with
                  premium materials to create products that athletes can rely on.
                </p>
                <p>
                  Every piece that leaves our facility represents our commitment
                  to craftsmanship, innovation, and the relentless pursuit of
                  excellence. We don't just make sportswear—we engineer
                  performance gear that helps athletes push their limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-dark border-t border-white/5">
        <div className="w-full px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 lg:p-8 rounded-[10px] border border-white/10 bg-white/[0.02]"
              >
                <div className="text-lime mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <p className="font-archivo text-3xl lg:text-4xl text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-light-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-20 bg-dark border-t border-white/5">
        <div className="w-full px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime mb-4">
              Expertise
            </p>
            <h2 className="font-archivo text-3xl md:text-4xl text-white">
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Shirt className="w-6 h-6" />,
                title: "Sportswear Manufacturing",
                desc: "Premium athletic wear including compression gear, tracksuits, training apparel, and performance clothing for all sports.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Racing Apparel Production",
                desc: "Professional-grade racing suits, karting gear, gloves, and motorsport accessories that meet international safety standards.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Teamwear Customization",
                desc: "Fully customizable team uniforms, jerseys, and kits with sublimation printing, embroidery, and professional finishing.",
              },
              {
                icon: <CircleDot className="w-6 h-6" />,
                title: "Soccer Equipment",
                desc: "High-quality match balls, training balls, and soccer accessories for clubs, academies, and professional teams.",
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Hosiery & Accessories",
                desc: "Compression wear, athletic socks, calf sleeves, and sport-specific accessories designed for comfort and performance.",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Bulk & Wholesale Orders",
                desc: "Competitive pricing for bulk orders, team packages, and wholesale partnerships with reliable delivery timelines.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="about-anim rounded-[10px] border border-white/10 p-6 lg:p-8 bg-white/[0.02] hover:border-lime/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center text-lime mb-4 group-hover:bg-lime/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-light-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-dark border-t border-white/5">
        <div className="w-full px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime mb-4">
              Principles
            </p>
            <h2 className="font-archivo text-3xl md:text-4xl text-white">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="text-center p-6 lg:p-8 rounded-[10px] border border-white/10 bg-white/[0.02]"
              >
                <div className="w-14 h-14 rounded-full bg-lime/10 flex items-center justify-center text-lime mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-light-muted text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </PageLayout>
  );
}
