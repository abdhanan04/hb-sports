import { Link } from "react-router-dom";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "Sportswear", path: "/shop?category=sportswear" },
    { name: "Hosiery", path: "/shop?category=hosiery" },
    { name: "Racing & Karting Gear", path: "/shop?category=racing" },
    { name: "Soccer Equipment", path: "/shop?category=soccer" },
    { name: "Custom Team Kits", path: "/custom-kits" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Collections", path: "/shop" },
  ];

  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="w-full px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.png"
                alt="H&B SPORTS"
                className="h-12 w-12 object-contain"
              />
              <span className="font-archivo text-xl text-white">
                H&B <span className="text-lime">SPORTS</span>
              </span>
            </Link>
            <p className="text-light-muted text-sm leading-relaxed mb-6">
              Premium sportswear, professional racing apparel, custom team kits, and soccer equipment built for champions.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/923034659038"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-lime transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +92 303 4659038
              </a>
              <a
                href="mailto:hbsports0410@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-lime transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                hbsports0410@gmail.com
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-light-muted mb-6">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-lime transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-light-muted mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-lime transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-light-muted mb-6">
              Get in Touch
            </h4>
            <p className="text-white/70 text-sm mb-4">
              Ready to elevate your team or brand? Contact us for custom orders and inquiries.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/923034659038"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-lime text-dark px-5 py-3 rounded-full text-sm font-semibold hover:bg-lime-light transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Contact on WhatsApp
              </a>
              <a
                href="mailto:hbsports0410@gmail.com"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-light-muted text-xs">
            &copy; {currentYear} H&B SPORTS. All rights reserved.
          </p>
          <p className="text-light-muted text-xs">
            Designed for Performance. Built for Champions.
          </p>
        </div>
      </div>
    </footer>
  );
}
