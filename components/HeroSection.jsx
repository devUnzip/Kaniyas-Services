import React from "react";

function HeroSection() {
  return (
    <>
      <section className="bg-[url('https://manulor.co.il/wp-content/uploads/2023/01/cover-website-green-1.png')] lg:bg-[url('https://manulor.co.il/wp-content/uploads/2023/01/man-in-white2-1.jpg')] bg-cover bg-no-repeat h-[100vh]">
        <div>
          <div>
            <div className="flex justify-between items-center p-5 mx-5 pt-16">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-14"
                  src="https://manulor.co.il/wp-content/uploads/2023/01/%D7%94%D7%9E%D7%A0%D7%94%D7%9C-%D7%94%D7%98%D7%9B%D7%A0%D7%99-%D7%9C%D7%95%D7%92%D7%95.png"
                  alt=""
                />
                <h1 className="text-[10px] mt-4">Certification of the </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-14"
                  src="https://manulor.co.il/wp-content/uploads/2023/01/logo-polic-vector-1.png"
                  alt=""
                />
                <h1 className="text-[10px] mt-4">With the approval</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-14"
                  src="https://manulor.co.il/wp-content/uploads/2023/01/logo-%D7%A8%D7%91-%D7%91%D7%A8%D7%99%D7%97.png"
                  alt=""
                />
                <h1 className="text-[10px] mt-4">Multi bolt specialist</h1>
              </div>
            </div>
            <h1 className="text-center text-6xl font-medium p-10">
              A locksmith who is available for you around the clock
            </h1>
            <h1 className="text-center text-3xl">Light you up in the dark</h1>

            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg my-5">Contact Us</button>

            <div className="flex justify-center items-center">
            <img
            className="h-[210px] "
              src="https://manulor.co.il/wp-content/uploads/2023/01/man-with-pattern-best3.gif"
              alt=""
            />
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
