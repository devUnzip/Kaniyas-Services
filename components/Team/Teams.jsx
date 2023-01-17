import Image from "next/image";
import React from "react";
import Team from "./Team";
const Teams = () => {
  const teamData = [
    {
      id: 1,
      name: `Jhon Dow`,
      description: `Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the`,
      Img: "/assets/IMG-1.jpeg",
    },
    {
      id: 2,
      name: `Jhon Wick`,
      description: `Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the`,
      Img: "/assets/IMG-2.jpg",
    },
    {
      id: 3,
      name: `Jems Bond`,
      description: `Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the`,
      Img: "/assets/IMG-3.jpeg",
    },
  ];
  return (
    <>
      <div className="container ">
        <div className="flex flex-col text-center w-full ">
          <h1 className="sm:text-3xl text-2xl font-bold text-primary my-14">
            OUR GREAT TEAM
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row items-center">
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex justify-center relative">
              <div className="absolute h-[350px] w-[300px]">
                <Image
                  src={teamData[0].Img}
                  layout="fill"
                  className="rounded-lg"
                />
              </div>
              <div className=" relative z-10 mt-4 h-[320px] w-[275px] flex flex-col justify-center items-center text-center  bg-white opacity-0 transition-all duration-150 hover:opacity-100">
                <h3>Gal Lebkowitz</h3>

                <p className="leading-relaxed">
                  Locksmith And Camera Installer
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex justify-center relative">
              <div className="absolute h-[350px] w-[300px]">
                <Image
                  src={teamData[1].Img}
                  layout="fill"
                  className="rounded-lg"
                />
              </div>
              <div className=" relative z-10 mt-4 h-[320px] w-[275px] flex flex-col justify-center items-center text-center  bg-white opacity-0 transition-all duration-150 hover:opacity-100">
                <h3>Avi Goldberg</h3>

                <p className="leading-relaxed">Locksmith</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex justify-center relative">
              <div className="absolute h-[350px] w-[300px]">
                <Image
                  src={teamData[2].Img}
                  layout="fill"
                  className="rounded-lg"
                />
              </div>
              <div className=" relative z-10 mt-4 h-[320px] w-[275px] flex flex-col justify-center items-center text-center  bg-white opacity-0 transition-all duration-150 hover:opacity-100">
                <h3>Moti Levy</h3>

                <p className="leading-relaxed">Locksmith</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
