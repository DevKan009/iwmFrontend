import { CheckCircle2, Users, Briefcase, Award, BookOpen, Globe } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description: "Work on actual civic projects impacting millions of citizens in Indore.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn directly from senior IAS/IPS officers and department heads.",
  },
  {
    icon: BookOpen,
    title: "Skill Development",
    description: "Gain practical skills in governance, project management, and public policy.",
  },
  {
    icon: Award,
    title: "Official Certificate",
    description: "Receive a government-recognized certificate upon successful completion.",
  },
  {
    icon: Globe,
    title: "Network Building",
    description: "Connect with like-minded peers and build lasting professional relationships.",
  },
  {
    icon: CheckCircle2,
    title: "Career Boost",
    description: "Enhance your resume with prestigious government internship experience.",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About the Program
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shape the Future of Urban Governance
          </h2>
          <p className="text-lg text-muted-foreground">
            The IWM program offers a unique opportunity for young minds to engage with municipal governance, working across 12 departments to drive innovation and development in India's cleanest city.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
