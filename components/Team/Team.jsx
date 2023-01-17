import Image from "next/image";
import React from "react";

const Team = ({ team }) => {
    const { name, description, Img } = team;

  return (
    <>
      <div className="lg:w-1/3 sm:w-full p-4 ">
        <div className="flex relative rounded-lg">
          <img
            alt="Team Members Images"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
            src={Img}
          />

          <div className="px-8 py-5 relative z-10  m-2 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {name}
            </h1>
            <p className="text-2xl ">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
