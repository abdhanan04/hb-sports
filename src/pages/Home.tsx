import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Shirt,
  CircleDot,
  Users,
  Zap,
  Award,
  Star,
} from "lucide-react";
import PageLayout from "../components/PageLayout";
import ContactCTA from "../components/ContactCTA";
import { categories } from "../data/products";

gsap.registerPlugin(ScrollTrigger);

/* ─────────── HERO SECTION ─────────── */
function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // click-to-cycle images (3 states)
  const imageStates = [
    {
      key: "racing",
      label: "Racing Suit",
      src: "/images/racing-showcase.jpg",
    },
    {
      key: "soccer",
      label: "Soccer Gear",
      src: "/images/soccer-showcase.jpg",
    },
    {
      key: "sportswear",
      label: "Sportswear",
      src: "/images/sportswear-showcase.jpg",
    },
  ] as const;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.16),transparent_22%),linear-gradient(180deg,#020617_0%,#050d1d_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.65)_0%,rgba(15,41,65,0.12)_40%,transparent_100%)]" />
      <div className="absolute -left-24 top-16 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-300">
              Premium Sports Gear
            </span>
            <div className="space-y-6">
              <h1 className="font-archivo text-5xl md:text-6xl xl:text-7xl text-white leading-[0.95] tracking-[-0.04em]">
                Crafting gear <span className="text-sky-300">for champions</span>
              </h1>
              <p className="max-w-2xl text-slate-300 text-base md:text-lg leading-8">
                H&B Sports creates high-performance sportswear, racing suits, and soccer equipment with precision design, cutting-edge materials, and a bold blue gradient identity.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-7 py-3 text-sm font-semibold uppercase text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.24)] transition hover:bg-sky-300"
              >
                Explore products
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-7 py-3 text-sm font-semibold uppercase text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
              >
                About us
              </Link>
            </div>

          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative overflow-hidden rounded-[40px] border border-slate-700/80 bg-slate-950/90 shadow-[0_45px_120px_rgba(30,64,175,0.18)]">
              <HeroImageSwitcher imageStates={imageStates} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImageSwitcher({
  imageStates,
}: {
  imageStates: ReadonlyArray<{ key: string; label: string; src: string }>;
}) {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardImageRef = useRef<HTMLImageElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(cardImageRef.current, {
      opacity: 0,
      scale: 0.96,
      x: -12,
      duration: 0.18,
    })
      .add(() => {
        setActive((v: number) => (v + 1) % imageStates.length);
      })
      .fromTo(
        cardImageRef.current,
        { opacity: 0, scale: 0.96, x: 12 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.32,
        }
      )
      .fromTo(
        labelRef.current,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.25 },
        "-=0.15"
      )
      .add(() => setIsAnimating(false));
  };

  return (
    <button
      type="button"
      onClick={next}
      className="relative w-full h-full text-left overflow-hidden"
      aria-label="Change hero image"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent" />
      <img
        ref={cardImageRef}
        src={imageStates[active]?.src}
        alt={imageStates[active]?.label}
        className="relative z-10 h-full w-full object-cover transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-sky-900/10" />
    </button>
  );
}


/* ─────────── FEATURED CATEGORIES ─────────── */
function FeaturedCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cat-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const getIcon = (id: string) => {
    switch (id) {
      case "sportswear":
        return <Shirt className="w-6 h-6" />;
      case "hosiery":
        return <CircleDot className="w-6 h-6" />;
      case "racing":
        return <Zap className="w-6 h-6" />;
      case "soccer":
        return <CircleDot className="w-6 h-6" />;
      case "custom":
        return <Users className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-dark relative">
      <div className="w-full px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime mb-4">
            Browse by Category
          </p>
          <h2 className="font-archivo text-3xl md:text-4xl lg:text-5xl text-white">
            Featured Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="cat-card group relative rounded-[10px] overflow-hidden border border-white/10 hover:border-lime/40 transition-all duration-500"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center text-lime mb-3">
                    {getIcon(cat.id)}
                  </div>
                  <h3 className="font-semibold text-lg text-white mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-light-muted text-xs leading-relaxed">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-lime text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── MAIN SHOWCASE ─────────── */
function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".showcase-item",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const showcases = [
    {
      title: "Racing Gear",
      description:
        "Professional karting and motorsport apparel engineered for performance, durability, and comfort.",
      image: "/images/racing-showcase.jpg",
      link: "/shop?category=racing",
    },
    {
      title: "Sportswear",
      description:
        "Modern athletic wear designed for training, competition, and everyday performance.",
      image: "/images/sportswear-showcase.jpg",
      link: "/shop?category=sportswear",
    },
    {
      title: "Soccer Equipment",
      description:
        "High-quality soccer products for clubs, teams, academies, and professional athletes.",
      image: "/images/soccer-showcase.jpg",
      link: "/shop?category=soccer",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-dark">
      <div className="w-full px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime mb-4">
            Our Specialties
          </p>
          <h2 className="font-archivo text-3xl md:text-4xl lg:text-5xl text-white">
            Main Showcase
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {showcases.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="showcase-item group relative rounded-[10px] overflow-hidden border border-white/10 hover:border-lime/30 transition-all duration-500"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-archivo text-2xl lg:text-3xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-light-muted text-sm leading-relaxed mb-4 max-w-sm">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-lime text-sm font-medium">
                  View Collection <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── ABOUT PREVIEW ─────────── */
function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const features = [
    { icon: <Award className="w-6 h-6" />, label: "Quality" },
    { icon: <Zap className="w-6 h-6" />, label: "Innovation" },
    { icon: <Users className="w-6 h-6" />, label: "Custom Manufacturing" },
    { icon: <Star className="w-6 h-6" />, label: "Professional Craftsmanship" },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-transparent" />
      <div className="relative w-full px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="about-content relative rounded-[10px] overflow-hidden border border-white/10">
            <img
              src="/images/about-factory.jpg"
              alt="H&B SPORTS Manufacturing"
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Content */}
          <div className="about-content">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime mb-4">
              About H&amp;B SPORTS
            </p>
            <h2 className="font-archivo text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Built for Champions,{" "}
              <span className="text-lime">Designed for You</span>
            </h2>
            <p className="text-light-muted leading-relaxed mb-6">
              H&amp;B SPORTS is a leading manufacturer of premium sportswear,
              professional racing apparel, and custom team kits. With years of
              expertise in athletic apparel production, we combine cutting-edge
              design with superior craftsmanship to deliver products that meet
              international standards.
            </p>
            <p className="text-light-muted leading-relaxed mb-8">
              From professional racing suits to custom soccer uniforms, our
              commitment to quality and innovation drives everything we create.
              We serve teams, clubs, academies, and individual athletes across
              the globe.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 border border-white/5"
                >
                  <div className="text-lime">{f.icon}</div>
                  <span className="text-xs text-light-muted text-center">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-lime font-medium hover:underline"
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── HOME PAGE ─────────── */
export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturedCategories />
      <ShowcaseSection />
      <AboutPreview />
      <ContactCTA />
    </PageLayout>
  );
}
