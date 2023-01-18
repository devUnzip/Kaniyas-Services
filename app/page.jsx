import React from "react";
import OnUs from "../components/OnUs";
import Specialities from "../components/Specialities";
import Teams from "../components/Team/Teams";

function page() {
  return (
    <div>
      <Specialities></Specialities>
      <OnUs></OnUs>
      <Teams></Teams>
    </div>
  );
}

export default page;
