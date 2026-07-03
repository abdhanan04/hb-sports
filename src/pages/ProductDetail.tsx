import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import {
  ArrowLeft,
  Phone,
  Mail,
  MessageSquare,
  ChevronRight,
  Check,
} from "lucide-react";
import PageLayout from "../components/PageLayout";
import { getProductById, getRelatedProducts } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const relatedProducts = product ? getRelatedProducts(product, 4) : [];
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product) {
      gsap.fromTo(
        ".detail-anim",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [product]);

  if (!product) {
    return (
      <PageLayout>
        <section className="pt-32 pb-20 bg-dark min-h-screen">
          <div className="w-full px-6 lg:px-10 text-center">
            <h1 className="font-archivo text-3xl text-white mb-4">
              Product Not Found
            </h1>
            <p className="text-light-muted mb-6">
              The product you are looking for does not exist.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-lime hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  const allImages = product.images;

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <section className="pt-24 pb-6 bg-dark">
        <div className="w-full px-6 lg:px-10">
          <div className="flex items-center gap-2 text-sm text-light-muted">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/shop" className="hover:text-white transition-colors">
              Collections
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-white transition-colors capitalize"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-8 lg:py-12 bg-dark">
        <div className="w-full px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image Gallery */}
            <div className="detail-anim">
              {/* Main Image */}
              <div className="aspect-square rounded-[10px] overflow-hidden border border-white/10 bg-dark-card mb-4">
                <img
                  src={allImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="flex gap-3">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === i
                          ? "border-lime"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="detail-anim">
              {/* Category badge */}
              <span className="inline-block px-3 py-1 bg-lime/10 border border-lime/20 rounded-full text-xs font-mono uppercase tracking-wider text-lime mb-4">
                {product.subcategory}
              </span>

              <h1 className="font-archivo text-3xl md:text-4xl text-white mb-4">
                {product.name}
              </h1>

              <p className="text-light-muted leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-white mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <Check className="w-4 h-4 text-lime flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-white mb-3">Available Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-white mb-3">
                    Available Colors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Section (No Pricing) */}
              <div className="rounded-[10px] border border-lime/20 bg-lime/5 p-6">
                <h3 className="font-archivo text-lg text-white mb-2">
                  Contact for Pricing & Orders
                </h3>
                <p className="text-light-muted text-sm mb-4">
                  Get in touch with us for the best pricing, bulk discounts, and
                  custom orders.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href={`https://wa.me/923034659038?text=Hi%20H%26B%20SPORTS%2C%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full text-sm font-semibold hover:brightness-110 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Contact on WhatsApp
                  </a>
                  <a
                    href={`https://wa.me/923034659038?text=Hi%20H%26B%20SPORTS%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-lime text-dark py-3 rounded-full text-sm font-semibold hover:bg-lime-light transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Request a Quote
                  </a>
                  <a
                    href={`mailto:hbsports0410@gmail.com?subject=Inquiry%20about%20${encodeURIComponent(product.name)}`}
                    className="flex items-center justify-center gap-2 border border-white/20 text-white py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email Inquiry
                  </a>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-light-muted">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3" /> +92 303 4659038
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3" /> hbsports0410@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-20 bg-dark border-t border-white/5">
          <div className="w-full px-6 lg:px-10">
            <h2 className="font-archivo text-2xl md:text-3xl text-white mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/product/${rp.id}`}
                  className="group rounded-[10px] overflow-hidden border border-white/10 hover:border-lime/30 transition-all duration-500 bg-dark-card"
                >
                  <div className="aspect-square relative overflow-hidden bg-dark-elevated">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-light-muted">
                      {rp.subcategory}
                    </span>
                    <h3 className="font-semibold text-white mt-1 group-hover:text-lime transition-colors line-clamp-2">
                      {rp.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
