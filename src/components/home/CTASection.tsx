import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, FileCheck } from "lucide-react";

const timeline = [
  { step: 1, title: "Register Online", description: "Complete the application form with your details", icon: FileCheck },
  { step: 2, title: "Selection Process", description: "Review and shortlisting by IWM committee", icon: Clock },
  { step: 3, title: "Department Assignment", description: "Get assigned to one of 9 departments", icon: Calendar },
  { step: 4, title: "Begin Internship", description: "Start your 40-45 day journey", icon: ArrowRight },
];

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-emerald-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-emerald-400 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
              Application Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Journey Starts Here
            </h2>
            <p className="text-lg text-white/80">
              Follow these simple steps to become a part of India's premier civic internship program.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {timeline.map((item, index) => (
              <div key={item.step} className="relative">
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-white/20" />
                )}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/register">
              <Button variant="gold" size="xl" className="group">
                Start Your Application
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-white/60">
              Registration for Batch 8 closes on Feb 28, 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
