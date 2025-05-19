"use client";

import Link from "next/link";

export default function PremierBanner() {
  return (
    <div className="bg-white py-8 md:py-10">
      <div
        id="premier-banner"
        className="relative my-8 md:my-10 mx-auto max-w-7xl md:w-5/6"
        style={{
          backgroundImage:
            "url(damac-bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay to make background brighter */}
        <div className="absolute inset-0 bg-white opacity-50 pointer-events-none"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center text-center px-6 py-12 md:py-16">
          <img
            loading="lazy"
            width={100}
            height={101}
            className="mx-auto"
            src="damac-gold.webp"
            alt="damac-gold"
          />
          <h2 className="font-normal uppercase font-primary text-lg md:text-xl my-3 md:my-4 accent-font accent-title accent-color text-black max-w-xl">
            The premier luxury property developer in Dubai
          </h2>
          <Link
  href="/en-ae/about-damac/"
  className="btn btn-medium btn-tertiary-black px-0 font-medium relative inline-block text-black uppercase hover:text-[#ccb073] transition-colors duration-300 ease-in-out"
  style={{
    textDecorationLine: "underline",
    textDecorationSkipInk: "none",
    textUnderlineOffset: "6px",
    textDecorationThickness: "2px",
  }}
>
  Discover Damac
</Link>

        </div>
      </div>
    </div>
  );
}
