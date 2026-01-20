import { useEffect, useState } from "react";
import { Quote, Loader2 } from "lucide-react";
import { client } from "@/sanityClient";
import { urlFor } from "@/lib/sanityImageUrl";

interface FeaturedAlumni {
  _id: string;
  name: string;
  role?: string;
  department: string;
  testimonial: string;
  currentRole: string;
  profileImage?: {
    asset?: {
      _ref: string;
    };
  };
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<FeaturedAlumni[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedAlumni = async () => {
      try {
        const query = `*[_type == "alumni" && featured == true]{
          _id,
          name,
          department,
          testimonial,
          currentRole,
          profileImage
        } | order(_createdAt desc) [0...3]`;

        const data = await client.fetch(query);
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching featured alumni:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedAlumni();
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-br from-primary via-primary/95 to-emerald-800 text-white text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hear From Our Alumni
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how the IWM program has shaped the careers of our past interns.
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary" />
            <p>Loading featured alumni...</p>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial._id}
                className="relative p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                    {testimonial.profileImage?.asset ? (
                      <img src={urlFor(testimonial.profileImage.asset)} alt={testimonial.name} className="w-full h-full object-cover" />
                    ) : (
                      testimonial.name.charAt(0)
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">IWM Alumni</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.testimonial}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Department</p>
                  <p className="text-sm font-medium text-foreground">{testimonial.department}</p>
                  <p className="text-xs text-muted-foreground mt-2">Currently</p>
                  <p className="text-sm font-medium text-emerald-600">{testimonial.currentRole}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p>No featured alumni stories yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
