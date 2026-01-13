import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, Award, Calendar } from "lucide-react";
import iwmLogo from "@/assets/iwm-logo.png";
import student1 from "@/assets/student1.jpg.webp";
import CountUp from "@/components/ui/countup";

const stats = [
  { label: "Interns Trained", value: "2,500+", icon: Users, end: 2500, suffix: "+" },
  { label: "Departments", value: "12", icon: Building2, end: 12, suffix: "" },
  { label: "Batches", value: "7+", icon: Calendar, end: 7, suffix: "+" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={student1}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm backdrop-blur-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Applications Open for Batch 8
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Internship with
              <span className="block text-amber-400">Mayor, Indore</span>
            </h1>

            <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.45s" }}>
              Join India's most prestigious civic internship program. Gain hands-on experience in city governance, work alongside top officials, and contribute to transforming Indore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSevZtptEtkpNbml4wzx4pvY5TtRDEJ3pBgIWhqZJSwJk9v75w/viewform">
                <Button variant="hero" size="xl" className="group">
                  Apply Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="hero-outline" size="xl">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                  <stat.icon className="w-5 h-5 text-amber-400 mx-auto lg:mx-0 mb-2" />
                  <p className="text-2xl font-bold text-white">
                    <CountUp end={stat.end} duration={3.8} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual Element */}
          <div className="hidden lg:block relative animate-fade-in lg:order-1" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-pulse" />
              <div className="absolute inset-4 rounded-full border-2 border-white/10 animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="absolute inset-8 rounded-full border-2 border-emerald-400/20 animate-pulse" style={{ animationDelay: "0.4s" }} />

              {/* Center content */}
              <div className="absolute inset-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl overflow-hidden p-4">
                <img
                  src={iwmLogo}
                  alt="IWM - Internship with Mayor"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-amber-400 text-amber-950 font-semibold text-xs shadow-lg animate-float">
                40-45 Days
              </div>
              <div className="absolute bottom-16 left-0 px-4 py-2 rounded-lg bg-white text-primary font-semibold text-sm shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                Certificate on Completion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
