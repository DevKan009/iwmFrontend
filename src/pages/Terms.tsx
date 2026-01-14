import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <PublicLayout>
      <SEO 
        title="Terms of Service" 
        description="Terms of Service for Internship with Mayor program by Indore Municipal Corporation"
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
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Terms of Service</h1>
                <p className="text-sm text-muted-foreground mt-1">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">1. Program Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Internship with Mayor (IWM) program is an initiative by Indore Municipal Corporation (IMC) designed to provide students with practical experience in city governance and municipal administration. By applying to or participating in this program, you agree to abide by these Terms of Service and all applicable rules and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">2. Eligibility Criteria</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  To be eligible for the IWM program, applicants must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Be currently enrolled in a recognized educational institution (university, college, or equivalent)</li>
                  <li>Be at least 18 years of age at the time of application</li>
                  <li>Have a genuine interest in civic governance and public service</li>
                  <li>Possess good academic standing with no disciplinary issues</li>
                  <li>Be available for the full duration of the internship period (40-45 days)</li>
                  <li>Provide all required documents including valid ID proof and educational certificates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">3. Application and Selection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Applications are accepted through the official online registration form. IMC reserves the right to accept or reject any application at its sole discretion based on eligibility criteria, availability, and program requirements. Selection decisions are final and not subject to appeal. Submission of false information or fraudulent documents will result in immediate disqualification and may lead to legal action.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">4. Internship Terms and Conditions</h2>
                <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.1 Duration and Attendance</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>The internship period is 40-45 days as specified in the offer letter</li>
                  <li>Working hours will be as per IMC office timings (typically 10:00 AM to 5:00 PM on weekdays)</li>
                  <li>Prior approval is required for any leave or absence</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.2 Code of Conduct</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">Interns must:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Maintain professional behavior and dress code as per IMC guidelines</li>
                  <li>Respect all IMC employees, officials, and fellow interns</li>
                  <li>Follow all safety protocols and security procedures</li>
                  <li>Not engage in any form of harassment, discrimination, or misconduct</li>
                  <li>Refrain from political activities or statements during internship hours</li>
                  <li>Report any incidents or concerns to the program coordinator immediately</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.3 Confidentiality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Interns may have access to sensitive government information, documents, and proceedings. All such information must be kept strictly confidential and not disclosed to any third party without prior written authorization from IMC. This obligation continues even after the completion of the internship.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any work, reports, presentations, or intellectual property created by interns during the internship period in the course of their duties shall be the sole property of Indore Municipal Corporation. Interns may not use, reproduce, or distribute such materials without express written permission from IMC.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">6. No Employment Relationship</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The IWM program is an educational internship and does not create an employer-employee relationship. Interns are not entitled to salary, employee benefits, or any claims of employment. A stipend or honorarium, if provided, is purely discretionary and does not constitute wages. Completion of the internship does not guarantee future employment with IMC.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">7. Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  IMC reserves the right to terminate an internship at any time without prior notice for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Violation of these Terms of Service or code of conduct</li>
                  <li>Poor attendance or unsatisfactory performance</li>
                  <li>Breach of confidentiality</li>
                  <li>Misconduct, insubordination, or illegal activities</li>
                  <li>Providing false information or fraudulent documents</li>
                  <li>Any behavior that brings disrepute to IMC or the IWM program</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Terminated interns will not be eligible for certificates and may be barred from future IMC programs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">8. Liability and Insurance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While IMC takes reasonable precautions for the safety and well-being of interns, participation in the program is at the intern's own risk. IMC is not liable for any personal injury, loss, or damage to property during the internship period. Interns are encouraged to maintain personal health insurance coverage. IMC may arrange group insurance as deemed appropriate but this is not guaranteed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">9. Certificate and Evaluation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon successful completion of the internship with attendance and satisfactory performance, interns will receive a Certificate of Completion and a Letter of Recommendation from the assigned department head and/or the Mayor's office. Evaluation is based on attendance, work quality, professionalism, and contribution to assigned projects.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">10. Use of Photographs and Testimonials</h2>
                <p className="text-muted-foreground leading-relaxed">
                  IMC may photograph, film, or record program activities for promotional and documentary purposes. By participating in the program, interns consent to the use of their photographs, videos, and testimonials in IMC's marketing materials, website, social media, and publications without any compensation. If you do not wish to be photographed, you must inform the program coordinator in writing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">11. Website Usage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Use of the IWM website (iwmindore.gov.in) is subject to these terms. Users agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>Use the website for any unlawful purpose or in violation of any laws</li>
                  <li>Attempt to gain unauthorized access to any part of the website or server</li>
                  <li>Interfere with the proper functioning of the website</li>
                  <li>Upload viruses, malware, or malicious code</li>
                  <li>Scrape, harvest, or collect information about other users</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">12. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Interns agree to indemnify and hold harmless Indore Municipal Corporation, its officials, employees, and agents from any claims, damages, losses, or expenses arising from their participation in the program, violation of these terms, or any negligent or wrongful conduct.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">13. Amendments</h2>
                <p className="text-muted-foreground leading-relaxed">
                  IMC reserves the right to modify, amend, or update these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting on the website. Continued participation in the program after such changes constitutes acceptance of the modified terms. It is the responsibility of applicants and interns to review these terms regularly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">14. Governing Law and Jurisdiction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or participation in the IWM program shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">15. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions or clarifications regarding these Terms of Service, please contact:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 mt-3">
                  <p className="text-foreground font-medium">IWM Program Coordinator</p>
                  <p className="text-muted-foreground mt-1">Indore Municipal Corporation</p>
                  <p className="text-muted-foreground">M.G. Road, Indore, Madhya Pradesh - 452001</p>
                  <p className="text-muted-foreground">Email: <a href="mailto:iwmimcindore@gmail.com" className="text-civic-green hover:underline">iwmimcindore@gmail.com</a></p>
                </div>
              </section>

              <section className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  By submitting an application or participating in the Internship with Mayor program, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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
