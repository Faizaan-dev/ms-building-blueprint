import { Shield, Zap, ThermometerSun, Volume2, Palette, Settings } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Superior Durability",
    description: "Lead-free UPVC profiles reinforced with galvanized steel for exceptional strength and longevity.",
  },
  {
    icon: ThermometerSun,
    title: "Energy Efficient",
    description: "Multi-chambered profiles with double glazing for optimal thermal insulation and 40% energy savings.",
  },
  {
    icon: Volume2,
    title: "Sound Insulation",
    description: "Advanced acoustic design reduces external noise by up to 45dB for peaceful interiors.",
  },
  {
    icon: Zap,
    title: "UV Protection",
    description: "High titanium dioxide content ensures superior UV resistance and prevents yellowing.",
  },
  {
    icon: Palette,
    title: "Custom Finishes",
    description: "Wide range of colors and wood-grain finishes to complement any architectural style.",
  },
  {
    icon: Settings,
    title: "Low Maintenance",
    description: "Corrosion-resistant and easy to clean, requiring minimal upkeep for years of use.",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-body font-semibold text-sm rounded-full mb-4">
            Why Choose UPVC?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Engineered for
            <span className="text-accent"> Excellence</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Our UPVC windows and doors combine cutting-edge technology with 
            meticulous craftsmanship to deliver unparalleled performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-elegant transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:shadow-accent-glow transition-all duration-300">
                <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
