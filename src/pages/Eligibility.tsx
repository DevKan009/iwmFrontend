import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Globe2, GraduationCap, Clock, UserCheck } from "lucide-react"

const eligibilityCriteria = [
  {
    icon: UserCheck,
    title: "Citizenship & Age",
    text: "The applicant must be an Indian citizen and should be at least 18 years old at the time of application."
  },
  {
    icon: Globe2,
    title: "Language Proficiency",
    text: "Knowledge of Hindi and English is mandatory for effective communication and administration."
  },
  {
    icon: GraduationCap,
    title: "Educational Qualification",
    text: "The applicant must have obtained a diploma, graduation, post-graduation, or any other higher qualification from a recognized university."
  },
  {
    icon: Clock,
    title: "Duration & Commitment",
    text: "The internship duration can range from 6 weeks to 6 months. During this period, interns must work for a minimum of 20 hours per week."
  },
];

const faqs = [
  {
    question: "What is the duration of the internship?",
    answer: "The IWM internship program runs for 40-45 days. Interns are expected to work full-time during this period, following regular office hours of the assigned department.",
  },
  {
    question: "Is there any stipend provided?",
    answer: "The program focuses on learning and experience rather than monetary compensation. However, selected interns receive a certificate of completion and letter of recommendation.",
  },
  {
    question: "How are departments assigned to interns?",
    answer: "Department assignment is based on a combination of factors: your academic specialization, areas of interest selected during registration, technical skills, and availability. Our team uses skill-matching algorithms to ensure the best fit.",
  },
  {
    question: "Can I choose my department?",
    answer: "While you can indicate your preferences (up to 3 areas of interest) during registration, final department assignment is at the discretion of the IWM Committee based on program requirements and your profile.",
  },
  {
    question: "What happens after I submit my application?",
    answer: "After submission, your application goes through a review process by the IWM selection committee. Shortlisted candidates may be called for an interview. Selected candidates will be notified via email and assigned to a department.",
  },
  {
    question: "Is there any accommodation provided?",
    answer: "The program does not provide accommodation. Interns are expected to arrange their own stay in Indore. However, the program team can assist with information about affordable options.",
  },
  {
    question: "Can working professionals apply?",
    answer: "Yes, working professionals can apply if they can commit full-time for the duration of the program. You would need to arrange leave from your current employment.",
  },
  {
    question: "What are the working hours?",
    answer: "Interns follow regular government office hours, typically 10:00 AM to 5:30 PM, Monday to Saturday. Some departments may have occasional requirements for extended hours during special projects.",
  },
];

const Eligibility = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PublicLayout>
      <SEO
        title="Eligibility & FAQ"
        description="Check eligibility criteria for the IWM program. Open to Indian citizens 18+ with a diploma/degree. Find answers to common questions."
        url="https://iwmindore.gov.in/eligibility"
      />
      {/* Hero */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        {/* 1. Background Image Layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dvneefjpi/image/upload/v1767773020/561807879_17966057843972078_2518633767852562154_n_jesajf.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* 2. Your original Gradient - Now acts as an overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-emerald-800/70 z-10" />

        {/* 3. Your original Content - Added relative and z-20 to stay on top */}
        <div className="container relative z-20">
          <h1 className="text-4xl font-bold text-white mb-4">Eligibility & FAQ</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Check if you're eligible for the IWM program and find answers to commonly asked questions.
          </p>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              Check Your Eligibility
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who Can Apply?
            </h2>
            <p className="text-lg text-muted-foreground">
              Ensure you meet the following requirements to join the Internship with Mayor program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {eligibilityCriteria.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative gradient blob */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors" />

                <div className="flex items-start gap-4 relatie z-10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Meet the criteria?</h3>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg">
                Don't miss this opportunity to contribute to Indore's development. Applications are open now!
              </p>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSevZtptEtkpNbml4wzx4pvY5TtRDEJ3pBgIWhqZJSwJk9v75w/viewform">
                <div className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-emerald-600 shadow transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Apply for Internship
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Eligibility Checker Tool /}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg h-fit">
              <h3 className="text-xl font-semibold text-foreground mb-6">Quick Eligibility Check</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Current Educational Status</Label>
                  <Select value={educationStatus} onValueChange={setEducationStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undergraduate">Undergraduate Student</SelectItem>
                      <SelectItem value="postgraduate">Postgraduate Student</SelectItem>
                      <SelectItem value="recent-graduate">Recent Graduate (within 2 years)</SelectItem>
                      <SelectItem value="professional">Working Professional</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Field of Study</Label>
                  <Select value={stream} onValueChange={setStream}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="management">Management</SelectItem>
                      <SelectItem value="arts">Arts & Humanities</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="law">Law</SelectItem>
                      <SelectItem value="commerce">Commerce</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Can you commit 40-45 days full-time?</Label>
                  <Select value={availability} onValueChange={setAvailability}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes, I can commit full-time</SelectItem>
                      <SelectItem value="no">No, I have other commitments</SelectItem>
                      <SelectItem value="partial">Partially available</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={checkEligibility} className="w-full" disabled={!educationStatus || !availability}>
                  Check Eligibility
                </Button>

                {checkResult !== null && (
                  <div
                    className={`p-4 rounded-lg flex items-center gap-3 ${
                      checkResult ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                    }`}
                  >
                    {checkResult ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-medium">You appear to be eligible! Apply now to join IWM.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5" />
                        <span className="font-medium">Based on your responses, full-time availability is required.</span>
                      </>
                    )}
                  </div>
                )}

                {checkResult && (
                  <Link to="/register">
                    <Button variant="civic" className="w-full">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
      */}

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Frequently Asked Questions
            </h2>

            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Accordion type="single" collapsible className="space-y-2">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredFaqs.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No FAQs found matching your search.
              </p>
            )}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Eligibility;
