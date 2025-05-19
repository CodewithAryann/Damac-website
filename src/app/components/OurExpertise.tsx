'use client';

import React from 'react';

const OurExpertise: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide mb-6 uppercase text-black">
            Our Expertise
          </h2>

          <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-10">
            Our luxury sales advisors bring a wealth of experience in assisting owners and investors in discovering properties that align seamlessly with their needs. With extensive knowledge of property trends, a solid grasp of industry insights, and an in-depth understanding of the local market, our advisors are dedicated to ensuring that your choice to invest in DAMAC Properties is a confident and informed choice.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0 mb-10">
            <div>
              <p className="text-2xl font-semibold text-black">110+</p>
              <p className="text-gray-700 text-sm mt-1">Luxury sales advisors</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-black">20+</p>
              <p className="text-gray-700 text-sm mt-1">Sales offices</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-black">20+</p>
              <p className="text-gray-700 text-sm mt-1">Years of experience</p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#ccb073] transition">
            GET IN TOUCH
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src="/Our_Expertise.webp" 
            alt="Expertise"
            className="w-full h-auto max-h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
