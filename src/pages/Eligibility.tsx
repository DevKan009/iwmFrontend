import { PublicLayout } from "@/components/layout/PublicLayout";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react"

const eligibilityCriteria = [
  { text: "Currently enrolled in undergraduate (any year) or postgraduate program", eligible: true },
  { text: "Recently graduated (within last 2 years)", eligible: true },
  { text: "Indian citizen with valid ID proof", eligible: true },
  { text: "Able to commit 40-45 days for the program", eligible: true },
  { text: "Good academic standing", eligible: true },
  { text: "No age restriction", eligible: true },
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
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-emerald-800/80 z-10" />

        {/* 3. Your original Content - Added relative and z-20 to stay on top */}
        <div className="container relative z-20">
          <h1 className="text-4xl font-bold text-white mb-4">Eligibility & FAQ</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Check if you're eligible for the IWM program and find answers to commonly asked questions.
          </p>
        </div>
      </section>

      {/* Eligibility Checker */}
      <section className="py-16 bg-background ">
        <div className="container flex justify-center">
          <div className="w-full max-w-2xl text-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
              <div className="space-y-3">
                {eligibilityCriteria.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
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
