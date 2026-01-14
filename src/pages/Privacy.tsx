import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <PublicLayout>
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy for Internship with Mayor program by Indore Municipal Corporation"
        url="https://iwmindore.gov.in/privacy"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-16">
        <div className="container max-w-4xl">
          <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Privacy Policy</h1>
                <p className="text-sm text-muted-foreground mt-1">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Indore Municipal Corporation (IMC) is committed to protecting the privacy and personal information of all participants in the Internship with Mayor (IWM) program. This Privacy Policy explains how we collect, use, store, and protect your personal data in accordance with the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  When you apply for the IWM program, we collect the following information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Personal Information:</strong> Name, date of birth, gender, contact details (email, phone number, address)</li>
                  <li><strong>Educational Information:</strong> Institution name, course details, academic qualifications, enrollment number</li>
                  <li><strong>Identification Documents:</strong> student ID, photograph</li>
                  <li><strong>Professional Information:</strong> Skills, areas of interest, previous internship experience</li>
                  <li><strong>Emergency Contact Information:</strong> Parent/guardian contact details</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information for website analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Your information is used for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Processing and evaluating internship applications</li>
                  <li>Assigning interns to appropriate departments based on their qualifications and interests</li>
                  <li>Communicating program updates, schedules, and important announcements</li>
                  <li>Maintaining attendance and performance records during the internship period</li>
                  <li>Issuing certificates of completion and letters of recommendation</li>
                  <li>Creating an alumni database for future engagement and networking opportunities</li>
                  <li>Improving program quality through feedback analysis</li>
                  <li>Complying with legal and regulatory requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">4. Data Storage and Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All personal data is stored securely on government-approved servers within India. We implement appropriate technical and organizational measures including encryption, access controls, and regular security audits to protect your information from unauthorized access, alteration, disclosure, or destruction. Only authorized IMC personnel involved in program administration have access to your personal information on a need-to-know basis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">5. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We do not sell or rent your personal information to third parties. Your data may be shared only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Within IMC:</strong> With relevant departments where you are assigned for internship purposes</li>
                  <li><strong>Government Agencies:</strong> When required by law or for compliance with legal obligations</li>
                  <li><strong>Educational Institutions:</strong> With your explicit consent, to verify internship completion</li>
                  <li><strong>Public Display:</strong> Success stories and testimonials with your prior written consent (names may be displayed on website)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Application and internship records are retained for a period of 7 years from the completion of the program or as required by applicable laws. Alumni information is maintained indefinitely for networking and future engagement purposes unless you request deletion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Under applicable data protection laws, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access your personal information held by IMC</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Withdraw consent for non-essential data processing</li>
                  <li>Request deletion of your data after program completion (subject to legal retention requirements)</li>
                  <li>Lodge a complaint with the Data Protection Authority</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">8. Cookies and Website Analytics</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies and similar technologies to enhance user experience, analyze website traffic, and improve our services. These cookies do not collect personally identifiable information without your consent. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">9. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to external websites (including application forms hosted on Google Forms). IMC is not responsible for the privacy practices of these third-party websites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">10. Changes to Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  IMC reserves the right to update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Significant changes will be communicated through email or website notifications. Continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">11. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact:
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
                  By applying to the Internship with Mayor program, you acknowledge that you have read, understood, and agree to the terms outlined in this Privacy Policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Privacy;
