import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import windowSliding from "@/assets/window-sliding.jpg";
import windowCasement from "@/assets/window-casement.jpg";
import doorEntry from "@/assets/door-entry.jpg";
import doorSliding from "@/assets/door-sliding.jpg";

const allProducts = {
  windows: [
    {
      id: "sliding-window",
      name: "Sliding Windows",
      description: "Smooth horizontal operation with maximum ventilation and natural light.",
      image: windowSliding,
      features: ["Easy glide mechanism", "Space-saving design", "Multi-point locking", "Weatherproof seals"],
      specs: {
        "Frame Depth": "60mm - 80mm",
        "Glass Options": "Single/Double/Triple Glazing",
        "Max Size": "3000mm x 2400mm",
        "Colors": "White, Wood Grain, Custom RAL",
      },
    },
    {
      id: "casement-window",
      name: "Casement Windows",
      description: "Classic hinged windows offering excellent ventilation and easy cleaning.",
      image: windowCasement,
      features: ["90° opening angle", "Multi-point locking", "Tilt & turn option", "Child safety locks"],
      specs: {
        "Frame Depth": "70mm",
        "Glass Options": "Double/Triple Glazing",
        "Max Size": "1200mm x 1500mm per sash",
        "Colors": "White, Anthracite, Custom",
      },
    },
    {
      id: "fixed-window",
      name: "Fixed Windows",
      description: "Non-opening windows for maximum light and unobstructed views.",
      image: windowSliding,
      features: ["Maximum glass area", "Superior insulation", "Structural glazing option", "Large format sizes"],
      specs: {
        "Frame Depth": "60mm - 80mm",
        "Glass Options": "All glazing types",
        "Max Size": "3500mm x 2500mm",
        "Colors": "Full RAL range",
      },
    },
    {
      id: "tilt-turn-window",
      name: "Tilt & Turn Windows",
      description: "Versatile windows with dual opening modes for ventilation flexibility.",
      image: windowCasement,
      features: ["Dual opening modes", "Night ventilation", "Easy cleaning", "Enhanced security"],
      specs: {
        "Frame Depth": "70mm - 82mm",
        "Glass Options": "Double/Triple Glazing",
        "Max Size": "1400mm x 1800mm",
        "Colors": "White, Gray, Custom",
      },
    },
  ],
  doors: [
    {
      id: "entry-door",
      name: "Entry Doors",
      description: "Secure and stylish main entrance doors with premium finishes.",
      image: doorEntry,
      features: ["Multi-point locking", "Reinforced steel core", "Weatherproof threshold", "Decorative panels"],
      specs: {
        "Frame Depth": "70mm",
        "Panel Thickness": "48mm",
        "Max Size": "1200mm x 2400mm",
        "Security": "RC2/RC3 rated",
      },
    },
    {
      id: "sliding-door",
      name: "Sliding Patio Doors",
      description: "Elegant sliding doors connecting indoor and outdoor spaces seamlessly.",
      image: doorSliding,
      features: ["Smooth operation", "Low threshold option", "Multi-panel configurations", "Lift & slide mechanism"],
      specs: {
        "Frame Depth": "80mm",
        "Glass Options": "Double/Triple Glazing",
        "Max Size": "6000mm x 2700mm",
        "Panels": "2, 3, or 4 panel options",
      },
    },
    {
      id: "french-door",
      name: "French Doors",
      description: "Classic double doors adding elegance to any entrance or patio.",
      image: doorSliding,
      features: ["Full opening width", "Inward/outward opening", "Traditional aesthetics", "Modern security"],
      specs: {
        "Frame Depth": "70mm",
        "Glass Options": "Double Glazing",
        "Max Size": "2400mm x 2400mm",
        "Colors": "White, Wood Grain",
      },
    },
    {
      id: "bifold-door",
      name: "Bi-fold Doors",
      description: "Folding doors creating seamless indoor-outdoor living spaces.",
      image: doorEntry,
      features: ["Wide openings", "Multiple fold configurations", "Flush threshold", "Traffic door option"],
      specs: {
        "Frame Depth": "70mm",
        "Glass Options": "Double/Triple Glazing",
        "Max Size": "7000mm x 2500mm",
        "Panels": "2-7 panel options",
      },
    },
  ],
};

const Products = () => {
  const { category } = useParams<{ category?: string }>();
  
  const displayCategory = category === "windows" || category === "doors" ? category : null;
  const products = displayCategory ? allProducts[displayCategory] : [...allProducts.windows, ...allProducts.doors];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-accent font-body font-semibold text-sm rounded-full mb-6">
              Our Products
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {displayCategory === "windows" && "Premium UPVC Windows"}
              {displayCategory === "doors" && "Premium UPVC Doors"}
              {!displayCategory && (
                <>
                  Complete UPVC
                  <span className="text-accent"> Product Range</span>
                </>
              )}
            </h1>
            <p className="text-lg text-primary-foreground/80 font-body">
              Explore our comprehensive collection of UPVC windows and doors, 
              engineered for performance and designed for beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button variant={!displayCategory ? "accent" : "outline"} size="sm">
                All Products
              </Button>
            </Link>
            <Link to="/products/windows">
              <Button variant={displayCategory === "windows" ? "accent" : "outline"} size="sm">
                Windows
              </Button>
            </Link>
            <Link to="/products/doors">
              <Button variant={displayCategory === "doors" ? "accent" : "outline"} size="sm">
                Doors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-accent-glow">
                      <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground font-body mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent" />
                        <span className="font-body text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs Preview */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-secondary rounded-xl mb-6">
                    {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs text-muted-foreground font-body">{key}</p>
                        <p className="text-sm font-semibold text-foreground font-body">{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <Button variant="accent" asChild className="flex-1">
                      <Link to="/contact">Request Quote</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/contact">View Specs</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-2xl mx-auto">
              Our experts are ready to help you select the perfect windows and doors 
              for your project. Get a free consultation today.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
