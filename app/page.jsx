import React from "react";
import Specialities from "../components/Specialities";
import Teams from "../components/Team/Teams";
import HeroSection from "../components/HeroSection";

function page() {
  return (
    <>
      <HeroSection />
      <Specialities />
      <Teams />
    </>
  );
}

export default page;
