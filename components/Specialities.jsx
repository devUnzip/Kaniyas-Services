import Image from "next/image";
import React from "react";

const Specialities = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <h2 className="text-center text-5xl font-bold mt-20">
          OUR SPECIALTIES
        </h2>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="px-6 py-3 lg:w-1/3">
              <div class="h-full shadow-xl hover:shadow-2xl ease-in duration-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <Image
                  height="100"
                  width="100"
                  src="/assets/Icon-Door-1.png"
                  className="mx-auto"
                />
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Renewal of doors
                </h1>
                <p class="leading-relaxed mb-3">
                  Cleaning the door and sticking a beautiful new wallpaper
                  according to your choice
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="px-6 py-3 lg:w-1/3">
              <div class="h-full shadow-xl hover:shadow-2xl ease-in duration-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <Image
                  height="100"
                  width="100"
                  src="/assets/Icone-camera.png"
                  className="mx-auto"
                />
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Installation of security cameras
                </h1>
                <p class="leading-relaxed mb-3">
                  Installation of security cameras at home, in the office and
                  outside.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="px-6 py-3 lg:w-1/3 ">
              <div class="h-full shadow-xl hover:shadow-2xl ease-in duration-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <Image
                  height="100"
                  width="100"
                  src="/assets/Icon-barake.png"
                  className="mx-auto"
                />
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Locksmith services
                </h1>
                <p class="leading-relaxed mb-3">
                  Burglary of house, car and safe Repair and replacement of
                  cylinder and locks.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialities;
