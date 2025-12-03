import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "All Products", href: "/products" },
      { name: "UPVC Windows", href: "/products/windows" },
      { name: "UPVC Doors", href: "/products/doors" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-elegant py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-accent-glow transition-shadow duration-300">
                <span className="text-primary-foreground font-display font-bold text-xl">MS</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className={cn(
                "font-display font-bold text-lg leading-tight transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-primary"
              )}>
                MS Building
              </p>
              <p className={cn(
                "text-xs font-body tracking-wider transition-colors duration-300",
                isScrolled ? "text-muted-foreground" : "text-primary/70"
              )}>
                SOLUTIONS
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 font-body font-medium text-sm transition-all duration-300 hover:text-accent",
                    location.pathname === item.href
                      ? "text-accent"
                      : isScrolled
                      ? "text-foreground"
                      : "text-primary"
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-xl shadow-elegant border border-border p-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm font-body text-foreground hover:bg-secondary hover:text-accent rounded-lg transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className={cn(
                "flex items-center gap-2 font-body text-sm font-medium transition-colors",
                isScrolled ? "text-foreground" : "text-primary"
              )}
            >
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
            <Button variant="nav-cta" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-foreground" : "text-primary"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-up">
            <div className="bg-card rounded-2xl shadow-elegant border border-border p-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-4 py-3 font-body font-medium rounded-xl transition-colors",
                      location.pathname === item.href
                        ? "bg-accent/10 text-accent"
                        : "text-foreground hover:bg-secondary"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
