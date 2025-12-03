import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Award, Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const stats = [
  { icon: Shield, value: "15+", label: "Years Experience" },
  { icon: Award, value: "10K+", label: "Projects Completed" },
  { icon: Clock, value: "100%", label: "On-Time Delivery" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Modern home with premium UPVC windows"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-body">
                Premium UPVC Solutions Since 2009
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
              Crafting Premium
              <span className="block text-accent">Windows & Doors</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-primary-foreground/80 font-body mb-8 max-w-lg animate-fade-up animation-delay-200">
              Transform your spaces with our elegantly designed, energy-efficient UPVC 
              windows and doors. Built to last, designed to impress.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-up animation-delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact">
                  <Play className="w-5 h-5" />
                  Watch Video
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-up animation-delay-400">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                    <stat.icon className="w-5 h-5 text-accent" />
                    <span className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-primary-foreground/60 text-sm font-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Floating Card (Desktop) */}
          <div className="hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute -top-4 -right-4 w-full h-full bg-accent/20 rounded-3xl" />
              <div className="relative bg-card/95 backdrop-blur-xl rounded-3xl p-8 shadow-elegant">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Quality Assured</h3>
                    <p className="text-sm text-muted-foreground font-body">ISO 9001 Certified</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-xl">
                    <span className="font-body text-sm text-foreground">Weather Resistance</span>
                    <span className="text-accent font-semibold">100%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-xl">
                    <span className="font-body text-sm text-foreground">UV Protection</span>
                    <span className="text-accent font-semibold">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-xl">
                    <span className="font-body text-sm text-foreground">Energy Savings</span>
                    <span className="text-accent font-semibold">40%</span>
                  </div>
                </div>
                <Button variant="accent" className="w-full mt-6" asChild>
                  <Link to="/contact">Get Free Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
