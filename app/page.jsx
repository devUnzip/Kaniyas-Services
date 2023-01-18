import React from "react";
import OnUs from "../components/OnUs";
import Specialities from "../components/Specialities";
import Teams from "../components/Team/Teams";
import HeroSection from "../components/HeroSection";
import OnUS from "../components/OnUs";

function page() {
  return (
    <>
      <HeroSection />
      <Specialities />
      <OnUs/>
      <Teams />
    </>
  );
}

export default page;
