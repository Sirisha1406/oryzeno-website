import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/80">
            Get in touch — we'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Let's Connect
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you're a school looking to host a workshop, a student curious about our programs, 
                or someone who wants to collaborate — we're here to talk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email */}
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:contact@oryzeno.com"
                  className="text-secondary hover:text-secondary/80 transition-colors"
                >
                  contact@oryzeno.com
                </a>
                <p className="text-muted-foreground text-sm mt-2">
                  We typically respond within 24-48 hours
                </p>
              </div>

              {/* Phone / WhatsApp */}
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Phone / WhatsApp</h3>
                <a
                  href="tel:+919876543210"
                  className="text-secondary hover:text-secondary/80 transition-colors"
                >
                  +91 98765 43210
                </a>
                <p className="text-muted-foreground text-sm mt-2">
                  Available Mon-Sat, 10 AM - 6 PM IST
                </p>
              </div>

              {/* Location */}
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Location</h3>
                <p className="text-foreground">Hyderabad, Telangana</p>
                <p className="text-muted-foreground text-sm mt-2">
                  India
                </p>
              </div>

              {/* WhatsApp */}
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Quick Message</h3>
                <a
                  href="https://wa.me/917671802363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary/80 transition-colors"
                >
                  Message on WhatsApp
                </a>
                <p className="text-muted-foreground text-sm mt-2">
                  For quick inquiries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            Want to Bring Oryzeno to Your School?
          </h2>
          <p className="text-lg text-secondary-foreground/90 max-w-2xl mx-auto">
            We partner with schools and colleges to deliver AI awareness sessions and coding workshops. 
            Reach out to discuss how we can collaborate.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
