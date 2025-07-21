import React from "react";
import Hero from "../components/Hero";
import WhyHireMe from "../components/WhyHireMe";
import BrandsCarousel from "../components/BrandsCarousel";
import WorkExperience from "../components/WorkExperience";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhyHireMe />
      <BrandsCarousel />
      <WorkExperience />
    </div>
  );
};

export default Index;
