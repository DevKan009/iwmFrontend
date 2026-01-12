import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { MayorsVisionSection } from "@/components/home/MayorsVisionSection";
import { AboutSection } from "@/components/home/AboutSection";
import { DepartmentsSection } from "@/components/home/DepartmentsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { HomeGallery } from "@/components/home/HomeGallery";

const Index = () => {
  return (
    <PublicLayout>
      <SEO
        title="Home"
        url="https://iwmindore.gov.in/"
      />
      <HeroSection />
      <MayorsVisionSection />
      <HomeGallery />
      <AboutSection />
      <DepartmentsSection />
      <TestimonialsSection />
      <CTASection />
    </PublicLayout>
  );
};

export default Index;
