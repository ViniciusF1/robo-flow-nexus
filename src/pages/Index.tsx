
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import HeroSection from "@/components/sections/HeroSection";
import MetricsSection from "@/components/sections/MetricsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <HeroSection />
        <MetricsSection />
        <FeaturesSection />
        <UseCasesSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
      <Footer />
      <ChatBot />
    </>
  );
};

export default Index;
