import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Instagram,
  Facebook,
  ArrowRight,
  Check,
} from "lucide-react";
import PageLayout from "../components/PageLayout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - no backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-transparent" />
        <div className="relative w-full px-6 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime mb-3">
            Get in Touch
          </p>
          <h1 className="font-archivo text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-light-muted max-w-2xl text-lg">
            Have a question or ready to place an order? Reach out to us via
            WhatsApp, email, or fill out the contact form below.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-dark">
        <div className="w-full px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* WhatsApp */}
            <a
              href="https://wa.me/923034659038"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[10px] border border-white/10 p-6 bg-white/[0.02] hover:border-[#25D366]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-4 group-hover:bg-[#25D366]/20 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
              <p className="text-light-muted text-sm">+92 303 4659038</p>
              <span className="inline-flex items-center gap-1 text-[#25D366] text-xs mt-3 group-hover:gap-2 transition-all">
                Chat Now <ArrowRight className="w-3 h-3" />
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:hbsports0410@gmail.com"
              className="group rounded-[10px] border border-white/10 p-6 bg-white/[0.02] hover:border-lime/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center text-lime mb-4 group-hover:bg-lime/20 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white mb-1">Email</h3>
              <p className="text-light-muted text-sm">
                hbsports0410@gmail.com
              </p>
              <span className="inline-flex items-center gap-1 text-lime text-xs mt-3 group-hover:gap-2 transition-all">
                Send Email <ArrowRight className="w-3 h-3" />
              </span>
            </a>

            {/* Location */}
            <div className="rounded-[10px] border border-white/10 p-6 bg-white/[0.02]">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white mb-1">Location</h3>
              <p className="text-light-muted text-sm">Pakistan</p>
              <p className="text-light-muted text-xs mt-1">
                Serving clients worldwide
              </p>
            </div>

            {/* Response Time */}
            <div className="rounded-[10px] border border-white/10 p-6 bg-white/[0.02]">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white mb-1">Response Time</h3>
              <p className="text-light-muted text-sm">
                Within 1 business day
              </p>
              <p className="text-light-muted text-xs mt-1">
                WhatsApp: Instant replies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Social */}
      <section className="py-16 lg:py-20 bg-dark border-t border-white/5">
        <div className="w-full px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-archivo text-2xl md:text-3xl text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-light-muted text-sm mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-light-muted focus:outline-none focus:border-lime/50 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-light-muted focus:outline-none focus:border-lime/50 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-light-muted focus:outline-none focus:border-lime/50 transition-colors"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-light-muted focus:outline-none focus:border-lime/50 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-lime text-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-lime-light transition-all duration-300 w-full sm:w-auto"
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Actions + Social */}
            <div>
              <h2 className="font-archivo text-2xl md:text-3xl text-white mb-2">
                Quick Actions
              </h2>
              <p className="text-light-muted text-sm mb-8">
                Get instant responses through our preferred channels.
              </p>

              <div className="space-y-4 mb-10">
                <a
                  href="https://wa.me/923034659038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-[10px] border border-[#25D366]/20 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Contact on WhatsApp
                    </h3>
                    <p className="text-light-muted text-xs">
                      Fastest response time
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#25D366] ml-auto group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="mailto:hbsports0410@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-[10px] border border-lime/20 bg-lime/5 hover:bg-lime/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center text-dark flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Send an Email</h3>
                    <p className="text-light-muted text-xs">
                      Detailed inquiries
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-lime ml-auto group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/923034659038?text=Hi%20H%26B%20SPORTS%2C%20I%27d%20like%20to%20request%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-[10px] border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Request a Quote
                    </h3>
                    <p className="text-light-muted text-xs">
                      Bulk orders & custom designs
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/50 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Social Links */}
              <h3 className="font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/hbsports___?igsh=MW04MHJiNjF3cDl5eA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-lime hover:text-dark transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/18eYQDMnN8/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-lime hover:text-dark transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hbsports0410@gmail.com"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-lime hover:text-dark transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-dark border-t border-white/5">
        <div className="w-full px-6 lg:px-10">
          <div className="rounded-[10px] overflow-hidden border border-white/10 aspect-[21/9] bg-dark-card relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <MapPin className="w-10 h-10 text-lime mb-3" />
              <h3 className="font-archivo text-xl text-white mb-2">
                H&B SPORTS
              </h3>
              <p className="text-light-muted text-sm max-w-md">
                Based in Pakistan, serving clients worldwide. Contact us for
                shipping options to your location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
