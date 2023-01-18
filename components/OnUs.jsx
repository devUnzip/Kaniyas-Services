import Image from "next/image";
import React from "react";

const OnUs = () => {
  return (
    <>
      {/* on us section */}
      <section className="lg:flex lg:flex-row-reverse rtl-grid mx-5 lg:items-center	md:justify-between">
        {/* Text Article */}

        <article className="lg:w-1/2 lg:ml-20 lg:rtl-grid">
          <h2 className="text-2xl font-bold text-center text-[#526050]">
            On Us
          </h2>
          <section>
            <div>
              <h2 className="text-2xl lg:text-5xl font-bold mb-3">
                Service above all, not satisfied don't pay
              </h2>
              <p className="text-gray-700	mb-6">
                A company that has been operating for several years in locksmith
                services, we have reached thousands of people and continue to do
                so, service is our top priority, we reach people in the middle
                of the night and behave with sensitivity and respect.
              </p>
            </div>
            <div className="lg:flex my-6 lg:flex-row-reverse">
              <article className="lg:w-2/4">
                <h4 className="my-2">Guaranteed professionalism</h4>
                <p className="text-gray-700	">
                  With years of experience, we will not leave without a perfect
                  result and your good feeling.
                </p>
              </article>
              <article className="lg:w-2/4">
                <h4 className="my-2">fair price</h4>
                <p className="text-gray-700	">
                  We only ask for what we deserve and nothing more, we tell the
                  whole truth and the options, full transparency.
                </p>
              </article>
            </div>
          </section>
        </article>
        {/* Image */}
        <article className="lg:w-1/2 lg:ml-[-200px]">
          <Image height="300" width="400" src="/assets/on.jpeg" />
        </article>
      </section>
    </>
  );
};

export default OnUs;