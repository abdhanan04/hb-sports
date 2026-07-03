import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Filter,
  X,
  ArrowRight,
  Phone,
  Search,
} from "lucide-react";
import PageLayout from "../components/PageLayout";
import ContactCTA from "../components/ContactCTA";
import { products, categories } from "../data/products";
import type { Product } from "../data/products";

gsap.registerPlugin(ScrollTrigger);

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const activeCategory = searchParams.get("category") || "all";

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === "all") {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: ".products-grid", start: "top 80%" },
        }
      );
    });
    return () => ctx.revert();
  }, [filteredProducts]);

  return (
    <PageLayout>
      {/* Hero Header */}
      <section className="pt-28 pb-12 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-transparent" />
        <div className="relative w-full px-6 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime mb-3">
            Browse Our Catalog
          </p>
          <h1 className="font-archivo text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Collections
          </h1>
          <p className="text-light-muted max-w-xl">
            Explore our premium range of sportswear, racing gear, soccer
            equipment, and custom team kits. Contact us for pricing and orders.
          </p>
        </div>
      </section>

      {/* Filters + Search Bar */}
      <section className="sticky top-16 lg:top-20 z-40 bg-dark/95 backdrop-blur-md border-y border-white/5">
        <div className="w-full px-6 lg:px-10 py-4">
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-light-muted" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder:text-light-muted focus:outline-none focus:border-lime/50 transition-colors"
              />
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-white/20 rounded-full text-sm text-white"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>

            {/* Desktop filters */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Category filter */}
              <select
                value={activeCategory}
                onChange={(e) => updateFilter("category", e.target.value)}
                className="px-4 py-2.5 bg-black border border-white/10 rounded-full text-sm text-white focus:outline-none focus:border-lime/50"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>

            </div>

            {/* Clear filters */}
            {(activeCategory !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSearchParams(new URLSearchParams());
                  setSearchQuery("");
                }}
                className="flex items-center gap-1 text-light-muted hover:text-white text-sm transition-colors"
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>

          {/* Mobile filters panel */}
          {isFilterOpen && (
            <div className="lg:hidden mt-4 flex flex-col gap-3 pb-2">
              <select
                value={activeCategory}
                onChange={(e) => updateFilter("category", e.target.value)}
                className="px-4 py-2.5 bg-black border border-white/10 rounded-full text-sm text-white focus:outline-none"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16 bg-dark">
        <div className="w-full px-6 lg:px-10">
          <p className="text-light-muted text-sm mb-8">
            Showing {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""}
          </p>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-light-muted text-lg mb-4">
                No products found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchParams(new URLSearchParams());
                  setSearchQuery("");
                }}
                className="text-lime hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </PageLayout>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card group rounded-[10px] overflow-hidden border border-white/10 hover:border-lime/30 transition-all duration-500 bg-dark-card">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="aspect-square relative overflow-hidden bg-dark-elevated">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 bg-dark/80 backdrop-blur-sm rounded-full text-xs font-mono uppercase tracking-wider text-light-muted border border-white/10">
          {product.subcategory}
        </span>
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-white mb-2 group-hover:text-lime transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-light-muted text-xs leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Contact CTA */}
        <div className="flex flex-col gap-2">
          <a
            href={`https://wa.me/923034659038?text=Hi%20H%26B%20SPORTS%2C%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-lime text-dark py-2.5 rounded-full text-sm font-semibold hover:bg-lime-light transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Contact for Price
          </a>
          <Link
            to={`/product/${product.id}`}
            className="flex items-center justify-center gap-2 border border-white/20 text-white py-2.5 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300"
          >
            View Details <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
