import { MessageSquare, Ruler, Factory, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description: "Our experts discuss your requirements, preferences, and provide personalized recommendations.",
  },
  {
    icon: Ruler,
    step: "02",
    title: "Measurement",
    description: "Precise on-site measurements to ensure perfect fit and optimal performance.",
  },
  {
    icon: Factory,
    step: "03",
    title: "Manufacturing",
    description: "Custom fabrication using German machinery and premium quality materials.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Installation",
    description: "Professional installation by certified experts with quality assurance.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-accent font-body font-semibold text-sm rounded-full mb-4">
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            From Vision to
            <span className="text-accent"> Installation</span>
          </h2>
          <p className="text-primary-foreground/70 font-body text-lg">
            A seamless journey from consultation to completion, ensuring 
            exceptional quality at every step.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-foreground/10 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/10 transition-all duration-500 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center font-display font-bold text-accent-foreground shadow-accent-glow">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-primary rounded-full border-4 border-accent -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
