import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Homeowner, Delhi",
    content: "MS Building Solutions transformed our home with their premium UPVC windows. The energy savings and noise reduction are remarkable. Highly professional team!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Architect, Mumbai",
    content: "I've recommended MS Building to multiple clients. Their attention to detail and product quality is unmatched. The installation was seamless and on schedule.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Builder, Bangalore",
    content: "We've partnered with MS Building for our residential projects. Their UPVC doors and windows add tremendous value and our clients love the results.",
    rating: 5,
  },
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management" },
  { name: "RoHS Compliant", description: "Lead-Free Materials" },
  { name: "CiPET Certified", description: "Performance Tested" },
  { name: "IGBC Partner", description: "Green Building" },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Testimonials */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-body font-semibold text-sm rounded-full mb-4">
              Client Stories
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted by
              <span className="text-accent"> Thousands</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              See what our satisfied customers have to say about their experience 
              with MS Building Solutions.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="relative bg-card rounded-2xl p-8 shadow-elegant animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-accent-glow">
                  <Quote className="w-5 h-5 text-accent-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground font-body mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground font-body">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-secondary rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Excellence Redefined
            </h3>
            <p className="text-muted-foreground font-body">
              Certified quality you can trust
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-card rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="font-display font-bold text-accent text-lg">
                    {cert.name.split(" ")[0]}
                  </span>
                </div>
                <p className="font-display font-semibold text-foreground text-sm">{cert.name}</p>
                <p className="text-xs text-muted-foreground font-body">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
