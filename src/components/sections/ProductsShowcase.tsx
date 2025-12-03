import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import windowSliding from "@/assets/window-sliding.jpg";
import windowCasement from "@/assets/window-casement.jpg";
import doorEntry from "@/assets/door-entry.jpg";
import doorSliding from "@/assets/door-sliding.jpg";

const categories = [
  {
    title: "UPVC Windows",
    description: "Energy-efficient windows designed for modern living",
    image: windowSliding,
    link: "/products/windows",
    products: [
      { name: "Sliding Windows", image: windowSliding },
      { name: "Casement Windows", image: windowCasement },
    ],
  },
  {
    title: "UPVC Doors",
    description: "Secure, stylish doors for every entrance",
    image: doorEntry,
    link: "/products/doors",
    products: [
      { name: "Entry Doors", image: doorEntry },
      { name: "Sliding Doors", image: doorSliding },
    ],
  },
];

export function ProductsShowcase() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-body font-semibold text-sm rounded-full mb-4 animate-fade-up">
            Our Product Range
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
            Premium UPVC Solutions for
            <span className="text-accent"> Every Space</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg animate-fade-up animation-delay-200">
            Discover our comprehensive range of windows and doors, engineered for 
            durability, energy efficiency, and timeless aesthetics.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Main Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  {category.description}
                </p>

                {/* Product Preview */}
                <div className="flex gap-4 mb-6">
                  {category.products.map((product) => (
                    <div key={product.name} className="flex-1">
                      <div className="aspect-square rounded-xl overflow-hidden mb-2 border border-border">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm font-body text-muted-foreground text-center">
                        {product.name}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={category.link}
                  className="inline-flex items-center gap-2 text-accent font-body font-semibold hover:gap-3 transition-all"
                >
                  View All {category.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-accent-glow">
                  <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-up animation-delay-500">
          <Button variant="premium" size="lg" asChild>
            <Link to="/products">
              Explore All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
