export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  collection: string;
  description: string;
  images: string[];
  sizes?: string[];
  colors?: string[];
  features?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "sportswear",
    name: "Sportswear",
    description: "Modern athletic wear designed for training, competition, and everyday performance.",
    image: "/images/sportswear-showcase.jpg",
    count: 7,
  },
  {
    id: "hosiery",
    name: "Hosiery",
    description: "Premium compression wear, socks, and athletic legwear for maximum comfort.",
    image: "/images/hosiery-3.jpg",
    count: 6,
  },
  {
    id: "racing",
    name: "Racing & Karting Gear",
    description: "Professional karting and motorsport apparel engineered for performance and safety.",
    image: "/images/racing-1.jpg",
    count: 6,
  },
  {
    id: "soccer",
    name: "Soccer Equipment",
    description: "High-quality soccer balls and gear for clubs, teams, academies, and athletes.",
    image: "/images/soccer-2.jpg",
    count: 6,
  },
  {
    id: "custom",
    name: "Custom Team Kits",
    description: "Fully customizable team uniforms, jerseys, and kits for any sport.",
    image: "/images/custom-kits.jpg",
    count: 7,
  },
];

export const collections = [
  { id: "elite", name: "Elite Performance", description: "Top-tier professional gear" },
  { id: "team", name: "Custom Teamwear", description: "Personalized team solutions" },
  { id: "racing", name: "Pro Racing", description: "Motorsport excellence" },
  { id: "soccer", name: "Soccer Essentials", description: "Complete soccer gear" },
];

export const products: Product[] = [
  // HOSIERY (6 products)
  {
    id: "hosiery-1",
    name: "Compression Calf Sleeves",
    category: "hosiery",
    subcategory: "Compression Wear",
    collection: "elite",
    description: "Professional-grade compression calf sleeves designed for enhanced blood circulation, reduced muscle fatigue, and optimal athletic performance. Perfect for running, cycling, and high-intensity training.",
    images: ["/images/hosiery-1.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy"],
    features: ["Graduated compression", "Moisture-wicking fabric", "Seamless construction", "Anti-odor technology"],
  },
  {
    id: "hosiery-2",
    name: "Performance Knee-High Socks",
    category: "hosiery",
    subcategory: "Athletic Socks",
    collection: "elite",
    description: "Premium knee-high athletic socks with targeted cushioning and arch support. Engineered for all-day comfort during intense training sessions and competitive play.",
    images: ["/images/hosiery-2.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "White"],
    features: ["Reinforced heel & toe", "Arch compression support", "Breathable mesh panels", "Stay-up cuff"],
  },
  {
    id: "hosiery-3",
    name: "Striped Crew Sport Socks",
    category: "hosiery",
    subcategory: "Athletic Socks",
    collection: "team",
    description: "Classic striped crew socks with modern athletic performance. Available in multiple team color combinations to match your squad's identity.",
    images: ["/images/hosiery-3.jpg"],
    sizes: ["M", "L", "XL"],
    colors: ["Navy/Grey", "Black/Grey", "Red/White", "Orange/Grey"],
    features: ["Cotton blend comfort", "Reinforced cushioning", "Team color options", "Durable construction"],
  },
  {
    id: "hosiery-4",
    name: "PRO Compression Shorts",
    category: "hosiery",
    subcategory: "Compression Wear",
    collection: "elite",
    description: "Elite compression shorts with integrated phone pocket and PRO waistband. Provides muscle support and recovery benefits for serious athletes.",
    images: ["/images/hosiery-4.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black"],
    features: ["4-way stretch", "Phone pocket", "PRO waistband", "Flatlock seams"],
  },
  {
    id: "hosiery-5",
    name: "Elite Compression Leggings",
    category: "hosiery",
    subcategory: "Compression Wear",
    collection: "elite",
    description: "Full-length compression leggings with targeted muscle support zones. Designed for maximum performance during training and competition.",
    images: ["/images/hosiery-5.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy"],
    features: ["Targeted compression zones", "Breathable panels", "Waistband pocket", "UV protection"],
  },
  {
    id: "hosiery-6",
    name: "Performance Compression Shorts",
    category: "hosiery",
    subcategory: "Compression Wear",
    collection: "team",
    description: "Versatile compression shorts with side phone pocket. Perfect for gym sessions, running, or as a base layer under team shorts.",
    images: ["/images/hosiery-6.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey"],
    features: ["Side phone pocket", "Quick-dry fabric", "Chafe-free seams", "Elastic waistband"],
  },

  // SOCCER (6 products)
  {
    id: "soccer-1",
    name: "H&B Elite Match Ball - White/Gold",
    category: "soccer",
    subcategory: "Match Balls",
    collection: "soccer",
    description: "FIFA-quality match ball with premium synthetic leather cover. Hand-stitched for perfect spherical consistency and predictable flight trajectory.",
    images: ["/images/soccer-1.jpg"],
    sizes: ["Size 5", "Size 4"],
    colors: ["White/Gold/Black"],
    features: ["FIFA Quality Pro", "Hand-stitched", "Butyl bladder", "All-weather performance"],
  },
  {
    id: "soccer-2",
    name: "H&B Pro Match Ball - Blue",
    category: "soccer",
    subcategory: "Match Balls",
    collection: "soccer",
    description: "Professional match ball featuring advanced aerodynamic panel design. Tested and approved for competitive play at all levels.",
    images: ["/images/soccer-2.jpg"],
    sizes: ["Size 5", "Size 4"],
    colors: ["White/Blue"],
    features: ["Aerodynamic panels", "Thermal bonded", "High-retention bladder", "Premium touch"],
  },
  {
    id: "soccer-3",
    name: "H&B Training Ball - Yellow",
    category: "soccer",
    subcategory: "Training Balls",
    collection: "soccer",
    description: "High-visibility training ball designed for all weather conditions. Durable construction withstands heavy daily use on any surface.",
    images: ["/images/soccer-3.jpg"],
    sizes: ["Size 5", "Size 4", "Size 3"],
    colors: ["Yellow/Blue"],
    features: ["High-visibility design", "Reinforced panels", "All-surface grip", "Extended durability"],
  },
  {
    id: "soccer-4",
    name: "H&B Night Match Ball",
    category: "soccer",
    subcategory: "Match Balls",
    collection: "elite",
    description: "Premium night match ball with reflective elements for low-light visibility. Same pro-level performance with enhanced visibility features.",
    images: ["/images/soccer-4.jpg"],
    sizes: ["Size 5"],
    colors: ["Black/Blue/Silver"],
    features: ["Reflective elements", "Pro-level construction", "Enhanced visibility", "All-weather grip"],
  },
  {
    id: "soccer-5",
    name: "H&B Street Soccer Ball",
    category: "soccer",
    subcategory: "Street Balls",
    collection: "soccer",
    description: "Rugged street soccer ball built for concrete and asphalt surfaces. Extra-durable cover resists abrasion while maintaining excellent touch.",
    images: ["/images/soccer-5.jpg"],
    sizes: ["Size 5", "Size 4"],
    colors: ["Orange/Black"],
    features: ["Abrasion-resistant", "Rubberized cover", "Street-optimized", "Long-lasting"],
  },
  {
    id: "soccer-6",
    name: "H&B Limited Edition Ball",
    category: "soccer",
    subcategory: "Special Edition",
    collection: "elite",
    description: "Limited edition designer soccer ball with unique artistic pattern. Collectible quality meets professional performance standards.",
    images: ["/images/soccer-6.jpg"],
    sizes: ["Size 5"],
    colors: ["White/Pink/Teal"],
    features: ["Limited edition", "Unique design", "Pro performance", "Collector's item"],
  },

  // RACING (6 products)
  {
    id: "racing-1",
    name: "Excel Motorsport Pro Racing Suit",
    category: "racing",
    subcategory: "Racing Suits",
    collection: "racing",
    description: "Professional motorsport racing suit with FIA homologation. Multi-layer fire-resistant construction with advanced breathability technology for maximum comfort during endurance races.",
    images: ["/images/racing-1.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black/White/Blue"],
    features: ["FIA Homologated", "Multi-layer fire resistant", "Breathable panels", "Customizable branding"],
  },
  {
    id: "racing-2",
    name: "Kaulig Racing Team Suit",
    category: "racing",
    subcategory: "Racing Suits",
    collection: "racing",
    description: "Team-spec racing suit as worn by professional drivers. Features sponsor-ready placement zones and premium Nomex construction for maximum safety.",
    images: ["/images/racing-2.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black/Green"],
    features: ["Nomex construction", "Sponsor placement zones", "Team branding ready", "Professional fit"],
  },
  {
    id: "racing-3",
    name: "OMP Circuit Racing Suit",
    category: "racing",
    subcategory: "Racing Suits",
    collection: "racing",
    description: "Classic two-tone racing suit from the renowned OMP line. Perfect for club racing, track days, and karting championships.",
    images: ["/images/racing-3.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue/Black"],
    features: ["OMP quality", "Two-tone design", "Club racing ready", "Lightweight"],
  },
  {
    id: "racing-4",
    name: "KS-2 Art Racing Kit - Orange",
    category: "racing",
    subcategory: "Complete Kits",
    collection: "racing",
    description: "Complete racing kit including suit, gloves, and shoes. The KS-2 Art line combines style with professional-grade protection for serious competitors.",
    images: ["/images/racing-4.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black/Orange"],
    features: ["Complete kit", "Matching gloves & shoes", "Professional grade", "Stylish design"],
  },
  {
    id: "racing-5",
    name: "Sport Racing Kit - Teal",
    category: "racing",
    subcategory: "Complete Kits",
    collection: "racing",
    description: "Entry-level professional racing kit with coordinated suit, gloves, and shoes. Ideal for aspiring racers and karting enthusiasts.",
    images: ["/images/racing-5.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy/White/Teal"],
    features: ["Complete kit", "Entry-level pro", "Coordinated design", "Great value"],
  },
  {
    id: "racing-6",
    name: "Thunder Head Le Mans Suit",
    category: "racing",
    subcategory: "Racing Suits",
    collection: "elite",
    description: "Endurance racing suit designed for 24-hour races. Maximum comfort, advanced cooling, and premium fire protection for the most demanding motorsport events.",
    images: ["/images/racing-6.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy/White/Teal"],
    features: ["Endurance optimized", "Advanced cooling", "Premium protection", "24h race ready"],
  },

  // SPORTSWEAR / CUSTOM KITS (7 products)
  {
    id: "sportswear-1",
    name: "Pro Basketball Jersey - Wave",
    category: "sportswear",
    subcategory: "Basketball",
    collection: "team",
    description: "Customizable basketball jersey with dynamic wave design. Full sublimation printing allows unlimited color and pattern options for your team.",
    images: ["/images/sportswear-1.jpg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Custom"],
    features: ["Full sublimation", "Moisture-wicking", "Custom numbering", "Team name printing"],
  },
  {
    id: "sportswear-2",
    name: "Classic Basketball Jersey - Vintage",
    category: "sportswear",
    subcategory: "Basketball",
    collection: "team",
    description: "Vintage-inspired basketball jersey with retro script lettering. Premium mesh construction provides excellent breathability during intense games.",
    images: ["/images/sportswear-2.jpg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Cream/Green"],
    features: ["Vintage design", "Mesh construction", "Script lettering", "Retro styling"],
  },
  {
    id: "sportswear-3",
    name: "Tactical Basketball Jersey - Camo",
    category: "sportswear",
    subcategory: "Basketball",
    collection: "team",
    description: "Bold camo-pattern basketball jersey for teams that want to stand out. Dye-sublimated design won't crack, peel, or fade.",
    images: ["/images/sportswear-3.jpg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black Camo"],
    features: ["Camo pattern", "Dye-sublimated", "No crack/peel", "Bold design"],
  },
  {
    id: "sportswear-4",
    name: "Heritage Basketball Shorts",
    category: "sportswear",
    subcategory: "Basketball",
    collection: "team",
    description: "Classic heritage basketball shorts with vintage script branding. Comfortable fit with premium materials for peak on-court performance.",
    images: ["/images/sportswear-4.jpg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Cream/Red"],
    features: ["Heritage styling", "Premium materials", "Comfortable fit", "Classic look"],
  },
  {
    id: "sportswear-5",
    name: "Lightning Basketball Shorts",
    category: "sportswear",
    subcategory: "Basketball",
    collection: "team",
    description: "Aggressive lightning bolt design basketball shorts. Features side pockets and adjustable drawstring waist for perfect fit.",
    images: ["/images/sportswear-5.jpg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black/White"],
    features: ["Lightning design", "Side pockets", "Drawstring waist", "Bold styling"],
  },
  {
    id: "sportswear-6",
    name: "Elite Tracksuit - Blue",
    category: "sportswear",
    subcategory: "Tracksuits",
    collection: "elite",
    description: "Premium tracksuit set with contrast panel design. Perfect for training, warm-ups, and team travel. Zip pockets and elastic cuffs for functionality.",
    images: ["/images/sportswear-6.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue"],
    features: ["Contrast panels", "Zip pockets", "Elastic cuffs", "Full zip jacket"],
  },
  {
    id: "sportswear-7",
    name: "Pro Tracksuit - Neon",
    category: "sportswear",
    subcategory: "Tracksuits",
    collection: "elite",
    description: "High-performance tracksuit with neon accent panels. Stand out on the track or court with this eye-catching athletic set.",
    images: ["/images/sportswear-7.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black/Neon Green"],
    features: ["Neon accents", "Performance fabric", "Modern cut", "Athletic fit"],
  },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((p) => p.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};
