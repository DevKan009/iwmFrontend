import { Building2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const departments = [
  {
    name: "IT & e-Governance",
    description: "Drive digital transformation and manage city-wide IT infrastructure."
  },
  {
    name: "Revenue",
    description: "Learn municipal finance, tax collection, and revenue management systems."
  },
  {
    name: "Smart City",
    description: "Work on cutting-edge urban projects and smart city solutions."
  },
  {
    name: "AICTSL",
    description: "Manage public transport operations like iBus and city buses."
  },
  {
    name: "Public Works Department",
    description: "Oversee infrastructure development, road construction, and city planning."
  },
  {
    name: "Finance and Accounts Department",
    description: "Handle municipal budgeting, accounting, and financial reporting."
  },
  {
    name: "LAW Department",
    description: "Assist in legal matters, policy drafting, and regulatory compliance."
  },
  {
    name: "SBM",
    description: "Contribute to Swachh Bharat Mission and waste management initiatives."
  },
  {
    name: "PR & Journalism",
    description: "Manage public relations, media communication, and civic updates."
  },
  {
    name: "Electricity",
    description: "Manage street lighting, electrical infrastructure, and energy efficiency initiatives."
  },
  {
    name: "Garden",
    description: "Maintain city parks, green belts, and drive urban afforestation projects."
  },
  {
    name: "Workshop/Mechanical",
    description: "Oversee maintenance of municipal vehicles, machinery, and equipment."
  },
];

export function DepartmentsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            12 Departments
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Diverse Career Paths
          </h2>
          <p className="text-lg text-muted-foreground">
            Interns are assigned to one of 12 specialized departments based on their interests, skills, and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TooltipProvider>
            {departments.map((dept) => (
              <Tooltip key={dept.name}>
                <TooltipTrigger asChild>
                  <div
                    className="group p-4 rounded-xl bg-card border border-border hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 flex items-center gap-3 cursor-pointer"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-foreground text-left">{dept.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-[200px] text-center">{dept.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
