import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";

const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const WhyUsSection = dynamic(() => import("@/components/sections/WhyUsSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
    </>
  );
}