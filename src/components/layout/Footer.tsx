import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  products: [
    { name: "Sliding Windows", href: "/products/windows" },
    { name: "Casement Windows", href: "/products/windows" },
    { name: "Entry Doors", href: "/products/doors" },
    { name: "Sliding Doors", href: "/products/doors" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/about" },
    { name: "Warranty", href: "/about" },
    { name: "Careers", href: "/contact" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Request Quote", href: "/contact" },
    { name: "FAQs", href: "/contact" },
    { name: "Installation Guide", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      {/* CTA Section */}
      <div className="container-custom py-16">
        <div className="bg-accent/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Ready to Transform Your Space?
              </h3>
              <p className="text-primary-foreground/80 font-body">
                Get a free consultation and quote for your project today.
              </p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">MS</span>
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">MS Building</p>
                <p className="text-xs font-body tracking-wider text-primary-foreground/70">SOLUTIONS</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 font-body mb-6 max-w-sm">
              Premium UPVC windows and doors crafted with precision. 
              Transforming spaces with elegant, durable, and energy-efficient solutions.
            </p>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-body">+91 98765 43210</span>
              </a>
              <a href="mailto:info@msbuildingsolutions.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-body">info@msbuildingsolutions.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="font-body">123 Industrial Area, Phase 2<br />New Delhi, India - 110001</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors font-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm font-body">
              © {new Date().getFullYear()} MS Building Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
