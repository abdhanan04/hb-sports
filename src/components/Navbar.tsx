import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { categories } from "../data/products";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/shop" },
    { name: "Custom Kits", path: "/custom-kits" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const productLinks = [
    { name: "All Products", path: "/shop" },
    ...categories.map((category) => ({
      name: category.name,
      path: `/shop?category=${category.id}`,
    })),
  ];

  const menuSections = [
    {
      title: "Main",
      items: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Products",
      items: productLinks,
    },
    {
      title: "Customization",
      items: [{ name: "Custom Kits", path: "/custom-kits" }],
    },
  ];

  const isHome = location.pathname === "/";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? "bg-dark/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-slate-950/20"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 lg:px-10">
          <div className="flex items-center justify-between h-14 lg:h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-archivo text-base lg:text-lg text-white tracking-[0.24em] uppercase">
                H&B <span className="text-lime">SPORTS</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`group relative text-[0.92rem] font-medium tracking-[0.22em] uppercase transition-colors duration-300 ${
                      isActive ? "text-lime" : "text-white/75 hover:text-white"
                    }`}
                  >
                    <span className="inline-flex items-center gap-0.5">
                      {link.name}
                    </span>
                    <span
                      className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-lime transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA */}
              <a
                href="https://wa.me/923034659038"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-2 bg-lime text-dark px-4 py-2.5 rounded-full text-[0.82rem] font-semibold uppercase tracking-[0.18em] hover:bg-lime/95 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Us
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex items-center justify-center text-white border border-white/20 rounded-full p-3"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={`relative z-10 h-full w-full max-w-[24rem] bg-dark border-r border-white/10 shadow-2xl transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-archivo text-lg text-white tracking-[0.24em] uppercase">
              H&B <span className="text-lime">SPORTS</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="h-full overflow-y-auto px-6 py-8">
            {menuSections.map((section, sectionIndex) => (
              <div key={section.title} className="mb-10">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400 mb-4">
                  {section.title}
                </p>
                <div className="flex flex-col gap-4">
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={`${section.title}-${item.name}`}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-lg font-semibold transition-colors duration-300 ${
                        location.pathname === item.path ? "text-lime" : "text-white/80 hover:text-white"
                      }`}
                      style={{ transitionDelay: `${(sectionIndex * section.items.length + itemIndex) * 35}ms` }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
