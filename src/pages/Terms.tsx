import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <PublicLayout>
      <SEO 
        title="Terms of Service" 
        description="Terms of Service for Internship with Mayor (IWM), Indore Municipal Corporation"
        url="https://iwmindore.gov.in/terms"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-16">
        <div className="container max-w-4xl">
          <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Terms of Service
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none space-y-6">

              {/* 1 */}
              <section>
                <h2>1. Program Overview</h2>
                <p>
                  The Internship with Mayor (IWM) is an educational initiative of
                  Indore Municipal Corporation (IMC) to provide students with
                  hands-on exposure to municipal governance. Participation is
                  voluntary and does not constitute employment.
                </p>
              </section>

              {/* 2 */}
              <section>
                <h2>2. Eligibility Criteria</h2>
                <ul>
                  <li>Must be enrolled in a recognized educational institution</li>
                  <li>Must be at least 18 years of age</li>
                  <li>Must have good academic and disciplinary standing</li>
                  <li>Must be available for a minimum of 45 days</li>
                  <li>Must submit valid ID and academic documents</li>
                </ul>
              </section>

              {/* 3 */}
              <section>
                <h2>3. Application and Selection</h2>
                <p>
                  IMC reserves the sole right to accept or reject applications.
                  Submission of false or misleading information will result in
                  immediate disqualification and possible legal action.
                </p>
              </section>

              {/* 4 */}
              <section>
                <h2>4. Internship Terms and Conditions</h2>

                <h3>4.1 Duration and Attendance</h3>
                <ul>
                  <li>Minimum duration: 45 days</li>
                  <li>Maximum duration: 6 months</li>
                  <li>Working hours as per IMC norms</li>
                  <li>Unauthorized absence may lead to termination</li>
                </ul>

                <h3>4.2 Work Requirements</h3>
                <ul>
                  <li>Interns must use their own vehicle for conveyance</li>
                  <li>Interns must carry their own laptop/devices</li>
                  <li>IMC may provide workspace, internet, and stationery</li>
                </ul>

                <h3>4.3 Reporting Structure</h3>
                <p>
                  Interns shall report to designated officers of the concerned
                  department as directed by the Additional Commissioner or
                  Department Head.
                </p>

                <h3>4.4 Code of Conduct</h3>
                <ul>
                  <li>Maintain professional decorum and discipline</li>
                  <li>Follow safety and security protocols</li>
                  <li>No political activity during internship hours</li>
                  <li>No harassment, misconduct, or discrimination</li>
                </ul>
              </section>

              {/* 5 */}
              <section>
                <h2>5. Representation and Media</h2>
                <p>
                  Interns shall not represent themselves as IMC officials or
                  interact with media or external agencies without written
                  authorization.
                </p>
              </section>

              {/* 6 */}
              <section>
                <h2>6. Photography and Information Sharing</h2>
                <p>
                  Photography, recording, or transmission of official
                  information is strictly prohibited without prior written
                  permission from IMC.
                </p>
              </section>

              {/* 7 */}
              <section>
                <h2>7. Confidentiality</h2>
                <p>
                  Interns must maintain strict confidentiality of all unpublished
                  information including employee data, financial records,
                  vendor details, and project information. This obligation
                  continues even after completion of the internship.
                </p>
              </section>

              {/* 8 */}
              <section>
                <h2>8. Intellectual Property</h2>
                <p>
                  All work created during the internship shall be the exclusive
                  property of Indore Municipal Corporation.
                </p>
              </section>

              {/* 9 */}
              <section>
                <h2>9. No Stipend or Employment</h2>
                <p>
                  The internship carries no stipend, allowance, or remuneration
                  and does not create an employer–employee relationship.
                </p>
              </section>

              {/* 10 */}
              <section>
                <h2>10. Termination</h2>
                <p>
                  IMC may terminate the internship without prior notice for
                  misconduct, poor performance, breach of confidentiality, or
                  violation of these terms.
                </p>
              </section>

              {/* 11 */}
              <section>
                <h2>11. Liability</h2>
                <p>
                  Interns are responsible for their personal belongings and any
                  damage caused to IMC property. IMC bears no liability for loss
                  or injury.
                </p>
              </section>

              {/* 12 */}
              <section>
                <h2>12. Governing Law</h2>
                <p>
                  These terms shall be governed by the laws of India and subject
                  to the jurisdiction of courts in Indore, Madhya Pradesh.
                </p>
              </section>

              <section className="pt-6 border-t border-border">
                <p className="text-sm italic text-muted-foreground">
                  By applying to or participating in the IWM program, you
                  acknowledge that you have read, understood, and agreed to
                  these Terms of Service.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Terms;
