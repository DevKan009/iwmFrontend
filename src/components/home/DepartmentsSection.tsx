import { Building2 } from "lucide-react";

const departments = [
  "IT & e-Governance",
  "Revenue",
  "Smart City",
  "AICTSL",
  "Public Works Department",
  "Finance and Accounts Department",
  "LAW Department",
  "SBM",
  "PR & Journalism",
];

export function DepartmentsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            9 Departments
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Diverse Career Paths
          </h2>
          <p className="text-lg text-muted-foreground">
            Interns are assigned to one of 9 specialized departments based on their interests, skills, and academic background.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {departments.map((dept) => (
            <div
              key={dept}
              className="group p-4 rounded-xl bg-card border border-border hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-medium text-foreground">{dept}</span>
            </div>
          ))}
          <div className="p-4 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-medium">
            Upcoming..
          </div>
        </div>
      </div>
    </section>
  );
}
