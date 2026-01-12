import { useEffect, useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Award, Quote, ArrowRight, Loader2 } from "lucide-react";

import { client } from "@/sanityClient"; // Make sure this path matches where you created the file

// This defines what the data looks like so TypeScript is happy
interface AlumniData {
  name: string;
  batch: string;
  department: string;
  project: string;
  currentRole: string;
  education: string;
  quote: string;
  highlight: string;
}

const Alumni = () => {
  // 1. State to store the data from Sanity
  const [alumni, setAlumni] = useState<AlumniData[]>([]);
  // 2. State to handle the loading status
  const [isLoading, setIsLoading] = useState(true);

  // 3. Fetch data when the page loads
  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const query = `*[_type == "alumni"]{
          name,
          batch,
          department,
          project,
          currentRole,
          education,
          quote,
          highlight
        }`;

        const data = await client.fetch(query);
        setAlumni(data);
      } catch (error) {
        console.error("Error fetching alumni:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  return (
    <PublicLayout>
      <SEO
        title="Alumni Network"
        description="Meet the IWM Alumni Network. Stories of interns who have worked on real civic projects and moved on to impactful careers."
        url="https://iwmindore.gov.in/alumni"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-emerald-800 py-16">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
              Success Stories
            </span>
            <h1 className="text-4xl font-bold text-white mb-4">IWM Alumni Network</h1>
            <p className="text-lg text-white/80">
              Meet the talented individuals who have completed the IWM program and gone on to make significant contributions in their respective fields.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 -mt-16">
            {[
              { label: "Total Alumni", value: "2,500+" },
              { label: "Placed in Govt. Jobs", value: "350+" },
              { label: "Entrepreneurs", value: "120+" },
              { label: "Higher Education", value: "800+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Grid Section */}
      <section className="py-16 bg-background">
        <div className="container">

          {/* Conditional Rendering: Show Loader OR Show Data */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary" />
              <p>Loading alumni stories...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alumni.map((alum, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-r from-primary to-emerald-700 p-6">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-2xl mb-4">
                      {alum.name?.charAt(0) || "A"}
                    </div>
                    <h3 className="text-xl font-bold text-white">{alum.name}</h3>
                    <p className="text-white/80 text-sm">{alum.batch}</p>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Current Role</p>
                        <p className="font-medium text-foreground">{alum.currentRole}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Education</p>
                        <p className="font-medium text-foreground">{alum.education}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-amber-500 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">IWM Highlight</p>
                        <p className="text-sm text-foreground">{alum.highlight}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Quote className="w-6 h-6 text-primary/20 mb-2" />
                      <p className="text-sm text-muted-foreground italic">"{alum.quote}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Be the Next Success Story</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join the IWM program and start your journey towards a meaningful career in public service.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSevZtptEtkpNbml4wzx4pvY5TtRDEJ3pBgIWhqZJSwJk9v75w/viewform" target="_blank" rel="noopener noreferrer">
            <Button variant="civic" size="lg" className="group">
              Apply Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Alumni;