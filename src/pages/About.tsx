import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Calendar, Award, BookOpen, Building2, Target, ArrowRight } from "lucide-react";


const programHighlights = [
  { icon: Calendar, label: "Duration", value: "40-45 Days" },
  { icon: Users, label: "Batch Size", value: "200+ Interns" },
  { icon: Building2, label: "Departments", value: "12 Specialized" },
  { icon: Award, label: "Certificate", value: "Government Recognized" },
];

const objectives = [
  "Provide hands-on experience in municipal governance and city administration",
  "Develop future leaders with practical understanding of public service",
  "Bridge the gap between academic learning and real-world civic challenges",
  "Foster innovation and fresh perspectives in urban development",
  "Create a network of civic-minded youth contributing to nation-building",
];

const About = () => {
  return (
    <PublicLayout>
      <SEO
        title="About Us"
        description="Learn about the Internship with Mayor (IWM) program, its vision, objectives, and the 40-45 day journey transforming youth into civic leaders."
        url="https://iwmindore.gov.in/about"
      />
   {/* Hero Section */}
      {/* FIX: Increased pb-32 to pb-48 (and pb-60 on larger screens). 
          This makes the blue section taller, creating room for the cards to overlap 
          without covering the text.
      */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-emerald-800 pt-20 pb-48 md:pb-60">
        
        {/* Background image behind the gradient */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dvneefjpi/image/upload/v1768369473/Untitled_design1_u1lcae.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
              About the Program
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Internship with Mayor, Indore
            </h1>
            <p className="text-lg text-white/80">
              India's flagship civic internship program offering young minds an unprecedented opportunity to work alongside senior officials and contribute to urban governance in India's cleanest city.
            </p>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-12 bg-background">
        <div className="container">
          {/* FIX: Added 'relative z-20' to ensure cards sit firmly on top of the hero background.
             Optional: You can adjust -mt-20 to -mt-24 if you want them to overlap more, 
             now that there is room.
          */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-24 relative z-20">
            {programHighlights.map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-6 shadow-lg border border-border bg-white">
                 {/* Note: Added bg-white above just in case 'bg-card' is transparent */}
                <item.icon className="w-8 h-8 text-emerald-600 mb-3" />
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-xl font-bold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Objectives */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Vision
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Empowering Youth for Public Service
              </h2>
              <p className="text-muted-foreground mb-6">
                The IWM program was conceived to create a bridge between aspiring young professionals and the complex world of municipal governance. Under the visionary leadership of the Mayor and IMC Commissioner, this initiative transforms interns into future civic leaders.
              </p>
              <p className="text-muted-foreground">
                Each batch works on real projects across 12 departments, gaining invaluable experience while contributing meaningfully to the development of Indore – consistently ranked as India's cleanest city.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600" />
                Program Objectives
              </h3>
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
              What You Get
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Program Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Mentorship from IAS/IPS Officers", desc: "Learn directly from senior government officials with decades of experience." },
              { title: "Certificate of Completion", desc: "Receive a government-recognized certificate upon successful completion." },
              { title: "Professional Network", desc: "Build lasting connections with peers and officials." },
              { title: "Skill Development", desc: "Gain practical skills in governance, management, and public policy." },
              { title: "Motivational & Awareness Sessions", desc: "Exclusive masterclasses on entrepreneurship, personality development, and high-impact resume building." },
              { title: "Letter of Recommendation", desc: "Outstanding performers receive official recommendations." },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-card rounded-xl p-6 border border-border">
                <BookOpen className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join thousands of young professionals who have transformed their careers through the IWM program.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSevZtptEtkpNbml4wzx4pvY5TtRDEJ3pBgIWhqZJSwJk9v75w/viewform" target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="xl" className="group">
              Apply Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;
