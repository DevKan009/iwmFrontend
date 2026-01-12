import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Indore Municipal Corporation", "M.G. Road, Indore", "Madhya Pradesh - 452001"],
    link: "https://www.google.com/maps/search/?api=1&query=Indore+Municipal+Corporation+MG+Road+Indore",
  },
  {
    icon: MapPin,
    title: "AICTSL Office",
    details: ["Plot No. 30, Residency Area, AB Road", "Opposite MGM Medical College", "Indore - 452001"],
    link: "https://www.google.com/maps/search/?api=1&query=AICTSL+Office+Indore",
  },
  {
    icon: MapPin,
    title: "Smart City Office",
    details: ["Nehru Park Campus", "Indore - 452003"],
    link: "https://www.google.com/maps/search/Indore+Smart+City+Development,+Nehru+Park+Campus,+Park+Road,+Indore-452003,+Madhya+Pradesh,+India",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["iwmimcindore@gmail.com"],
    link: "mailto:iwmimcindore@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 88396 35194", "+91 98263 32221"],
    link: "tel:+918839635194",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Sat: 10:00 AM - 5:30 PM", "Sunday: Closed"],
    link: null,
  },
  {
    icon: Instagram,
    title: "Instagram",
    details: ["@internshipwithmayor.indore"],
    link: "https://www.instagram.com/internshipwithmayor.indore/",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    details: ["Internship with Mayor"],
    link: "https://www.linkedin.com/company/internship-with-mayor-indore/",
  },
];

const Contact = () => {
  return (
    <PublicLayout>
      <SEO
        title="Contact Us"
        description="Get in touch with the IWM team. Visit our office at Indore Municipal Corporation or check our AICTSL and Smart City office locations."
        url="https://iwmindore.gov.in/contact"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-emerald-800 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Have questions about the IWM program? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((item) => {
                  const Wrapper = item.link ? "a" : "div";
                  return (
                    <Wrapper
                      key={item.title}
                      href={item.link || undefined}
                      target={item.link?.startsWith('http') ? "_blank" : undefined}
                      rel={item.link?.startsWith('http') ? "noopener noreferrer" : undefined}
                      className={`p-6 rounded-xl bg-card border border-border transition-colors flex flex-col ${item.link ? 'hover:border-primary/50 hover:bg-primary/5 cursor-pointer' : ''}`}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <div className="flex-grow">
                        {item.details.map((detail, index) => (
                          <p key={index} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                      {item.link && item.icon === MapPin && (
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <span className="text-sm font-medium text-primary flex items-center">
                            View Location
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </div>
                      )}
                    </Wrapper>
                  );
                })}
              </div>

              {/* Map */}
              <div className="w-full h-64 rounded-xl bg-muted border border-border overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.057077553259!2d75.86795897588825!3d22.72609952732924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd7112a20121%3A0xb3518386f7847be5!2sNagar%20Nigam%20Indore!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nagar Nigam Indore Map"
                  className="w-full h-full"
                />
              </div>
            </div>


          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Contact;