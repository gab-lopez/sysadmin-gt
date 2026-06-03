import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import QuoteSection from "@/components/sections/QuoteSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* <ProjectsSection /> */}
      <WhyUsSection />
      <section className="flex flex-col lg:flex-row min-h-screen">
  <div className="w-full lg:w-1/2">
    <QuoteSection />
  </div>
  <div className="w-full lg:w-1/2">
    <ContactSection />
  </div>
</section>
    </>
  );
}