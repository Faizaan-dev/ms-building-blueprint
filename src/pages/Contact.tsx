import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Mon-Sat, 9AM-6PM",
    value: "+91 9941086999",
    link: "tel:+91 9941084999",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    description: "We reply within 24 hours",
    value: "msbuildingsolutions79@gmail.com",
    link: "mailto:msbuildingsolutions79@gmail.com",
    action: "Send Email",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Quick responses",
    value: "+91 9941086999,9941084999",
    link: "https://wa.me/9941086999",
    action: "Chat Now",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Our team will get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-accent font-body font-semibold text-sm rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's Discuss Your
              <span className="text-accent"> Project</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 font-body">
              Have questions or ready to start? Our team is here to help you 
              create the perfect solution for your space.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-background -mt-10 relative z-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.link}
                target={method.title === "WhatsApp" ? "_blank" : undefined}
                rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="bg-card rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                    <method.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground font-body mb-2">{method.description}</p>
                    <p className="font-body font-medium text-foreground">{method.value}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-accent font-body font-semibold text-sm group-hover:underline">
                    {method.action} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-elegant">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Request a Free Quote
                </h2>
                <p className="text-muted-foreground font-body mb-8">
                  Fill out the form below and we'll get back to you with a customized quote.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-body font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-body font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block font-body font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full h-12 rounded-xl border border-input bg-background px-4 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a subject</option>
                        <option value="windows">UPVC Windows</option>
                        <option value="doors">UPVC Doors</option>
                        <option value="both">Windows & Doors</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-body font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your project requirements, dimensions, and any specific preferences..."
                      rows={5}
                      required
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground font-body">
                    <CheckCircle className="w-4 h-4 inline mr-1 text-accent" />
                    Free consultation • No obligation • Expert advice
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office Info */}
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Visit Our Showroom
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="font-body font-medium text-foreground">MS Building Solutions</p>
                      <p className="text-muted-foreground font-body text-sm">
                        bhanur,lahariresort road Area, <br />
                        patancheruvu,hyderabad India - 502305
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="font-body font-medium text-foreground">Working Hours</p>
                      <p className="text-muted-foreground font-body text-sm">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm h-64">
                <iframe
                  src="https://www.google.com/maps?q=F5PM+HM+MS+Building+Solutions,+Sheriguda,+Hyderabad,+Telangana+502305&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MS Building Solutions Location"
                />
              </div>

              {/* FAQ Teaser */}
              <div className="bg-accent/10 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  <p className="text-sm font-body text-muted-foreground">
                    • What is the warranty period?
                  </p>
                  <p className="text-sm font-body text-muted-foreground">
                    • Do you offer installation services?
                  </p>
                  <p className="text-sm font-body text-muted-foreground">
                    • What colors are available?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
