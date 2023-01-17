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
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              OUR GREAT TEAM
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              We work hard. We are a team. We are a team of 3 people.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            {/* Cards Start */}
            {teamData.map((team) => (
              <Team
              key={team.id} team={team}
              ></Team>
            ))}
            {/* Cards End */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
