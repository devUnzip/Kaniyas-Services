"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropDownOpen(false);
        }
      }
      ["mousedown", "scroll"].forEach(function (e) {
        document.addEventListener(e, handleClickOutside);
        return () => {
          document.removeEventListener(e, handleClickOutside);
        };
      });
    }, [ref]);
  }

  function closeHamburger() {
    setHamburgerOpen(false);
  }

  const handleNavLink = (path) => () => {
    closeHamburger();
    router.push(path);
  };

  const dropDownRef = useRef(null);
  useOutsideAlerter(dropDownRef);
  return (
    <div className="bg-primary ">
      <div className="md:container  px-6 md:px-0 lg:border-none border-b-[1px] h-[65px] lg:py-2">
        <div className="flex items-center justify-between lg:block">
          <div className="flex justify-between items-center">
            <div className="">
              <Image
                width={40}
                height={23}
                onClick={() => router.push("/")}
                src="/logo.png"
                className="cursor-pointer"
                alt="Logo"
                priority="1"
              />
            </div>
            <div className="hidden lg:flex ">
              <div
                onClick={() => router.push("/")}
                className="text-white m-4 cursor-pointer hover:scale-125 ease-in duration-300"
              >
                (972) 50-754-6969
              </div>
              <div
                onClick={() => router.push("/")}
                className="text-white m-4 cursor-pointer hover:scale-125 ease-in duration-300"
              >
                Contact Us
              </div>

              <div className="text-white m-4 cursor-pointer hover:scale-125 ease-in duration-300">
                Reviews from Google
              </div>
              <div
                onClick={() => setDropDownOpen(!dropDownOpen)}
                className="text-white relative m-4 cursor-pointer flex items-center hover:scale-125 ease-in duration-300"
                ref={dropDownRef}
              >
                <div>On Us</div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#667085"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {dropDownOpen && (
                  <div className="absolute top-[25px] -left-4 z-10 w-32 bg-secondary rounded divide-y divide-gray-100 shadow ">
                    <ul className="py-1 text-sm text-white">
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 "
                        >
                          Dropdown1
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="text-white m-4 cursor-pointer hover:scale-125 ease-in duration-300">
                Our Specialty
              </div>
              <div className="text-white  m-4 cursor-pointer hover:scale-125 ease-in duration-300">Home</div>
            </div>
          </div>
          <div>
            <div>
              {hamburgerOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-[24px] h-[24px] mt-3 lg:hidden text-white cursor-pointer"
                  onClick={() => setHamburgerOpen(!hamburgerOpen)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px] mt-3 lg:hidden cursor-pointer"
                  onClick={() => setHamburgerOpen(!hamburgerOpen)}
                >
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
      {hamburgerOpen && (
        <div className="absolute  z-50 bg-primary w-full body-font lg:hidden  shadow-headerLight dark:shadow-headerDark z-100 overflow-hidden">
          <div className="md:container ">
            <div
              onClick={handleNavLink("/")}
              className={`text-white cursor-pointer border-b-[1px] py-2 px-3`}
            >
              (972) 50-754-6969
            </div>
            <div
              onClick={handleNavLink("/")}
              className={` text-white  cursor-pointer border-b-[1px] py-2 px-3`}
            >
              Contact Us
            </div>

            <div
              className={`  text-white  cursor-pointer border-b-[1px] py-2 px-3`}
            >
              Reviews from Google
            </div>
            <div
              className={`  text-white cursor-pointer border-b-[1px] py-2 px-3`}
            >
              <div
                ref={dropDownRef}
                onClick={() => setDropDownOpen(!dropDownOpen)}
                className="text-white relative group  cursor-pointer justify-between flex "
              >
                <div className="">On us</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-1 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
                {dropDownOpen && (
                  <div className="absolute top-[25px]  z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow ">
                    <ul className="py-1 text-sm text-secondary">
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 hover:text-primary"
                        >
                          Dropdown1
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div
              className={` text-white  cursor-pointer border-b-[1px] py-2 px-3`}
            >
              Our Specialty
            </div>
            <div className={` text-white  cursor-pointer py-2 px-3`}>Home</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
