import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Users, Building, CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on materials or craftsmanship, ensuring every product meets international standards.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "Continuously adopting latest technologies and techniques to deliver superior UPVC solutions.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building lasting relationships through exceptional service and support at every stage.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for perfection in every window and door we manufacture and install.",
  },
];

const milestones = [
  { year: "2009", title: "Company Founded", description: "Started with a vision to revolutionize the UPVC industry in India." },
  { year: "2012", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management." },
  { year: "2016", title: "10,000 Projects", description: "Crossed the milestone of 10,000 successful installations." },
  { year: "2020", title: "Pan-India Presence", description: "Expanded operations to serve customers across all major cities." },
  { year: "2024", title: "Innovation Hub", description: "Launched state-of-the-art manufacturing facility with German machinery." },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={heroBackground} alt="About MS Building Solutions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-accent font-body font-semibold text-sm rounded-full mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building Trust,
              <span className="text-accent"> One Window at a Time</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 font-body mb-8">
              With over 15 years of excellence in UPVC solutions, MS Building Solutions 
              has transformed thousands of spaces across India with premium quality 
              windows and doors.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-body font-semibold text-sm rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                A Legacy of Excellence in
                <span className="text-accent"> UPVC Solutions</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-body">
                <p>
                  Founded in 2009, MS Building Solutions began with a simple mission: to provide 
                  Indian homes and businesses with world-class UPVC windows and doors that combine 
                  European quality with local expertise.
                </p>
                <p>
                  Over the years, we have grown from a small workshop to a full-fledged 
                  manufacturing facility equipped with German precision machinery and staffed 
                  by highly trained professionals.
                </p>
                <p>
                  Today, we are proud to be one of the most trusted names in the UPVC industry, 
                  serving architects, builders, and homeowners with solutions that stand the 
                  test of time.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-accent">15+</p>
                  <p className="text-sm text-muted-foreground font-body">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-accent">10K+</p>
                  <p className="text-sm text-muted-foreground font-body">Projects Done</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-accent">50+</p>
                  <p className="text-sm text-muted-foreground font-body">Cities Served</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20 rounded-3xl" />
              <img
                src={heroBackground}
                alt="MS Building Solutions Factory"
                className="relative rounded-3xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-body font-semibold text-sm rounded-full mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              What Drives Us
              <span className="text-accent"> Forward</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 text-center hover:shadow-elegant transition-shadow"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-body font-semibold text-sm rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Key
              <span className="text-accent"> Milestones</span>
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card rounded-2xl p-6 shadow-sm inline-block">
                      <span className="text-accent font-display font-bold text-2xl">{milestone.year}</span>
                      <h3 className="font-display font-semibold text-foreground mt-2">{milestone.title}</h3>
                      <p className="text-muted-foreground font-body text-sm mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-accent rounded-full items-center justify-center z-10 shadow-accent-glow">
                    <CheckCircle className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-accent font-body font-semibold text-sm rounded-full mb-4">
                Our Guarantee
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Industry-Leading
                <span className="text-accent"> Warranty</span>
              </h2>
              <p className="text-primary-foreground/80 font-body mb-8">
                We stand behind every product we manufacture. Our comprehensive warranty 
                covers materials, workmanship, and performance, giving you complete peace of mind.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-body">10-year warranty on UPVC profiles</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-body">5-year warranty on hardware and fittings</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-body">2-year warranty on installation workmanship</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-body">Free service visits during warranty period</span>
                </div>
              </div>
              <Button variant="hero" size="lg" className="mt-8" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-primary-foreground/10">
                <p className="font-display text-5xl font-bold text-accent mb-2">10</p>
                <p className="font-body text-primary-foreground/80">Years Profile Warranty</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-primary-foreground/10">
                <p className="font-display text-5xl font-bold text-accent mb-2">5</p>
                <p className="font-body text-primary-foreground/80">Years Hardware Warranty</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-primary-foreground/10">
                <p className="font-display text-5xl font-bold text-accent mb-2">24/7</p>
                <p className="font-body text-primary-foreground/80">Customer Support</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-primary-foreground/10">
                <p className="font-display text-5xl font-bold text-accent mb-2">100%</p>
                <p className="font-body text-primary-foreground/80">Satisfaction Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
