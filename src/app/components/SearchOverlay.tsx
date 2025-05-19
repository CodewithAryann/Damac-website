"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useRouter } from "next/navigation";

const SearchFilter = () => {
  const router = useRouter();

  const [showTrending, setShowTrending] = useState(false);
  const [dropdown, setDropdown] = useState({
    property: false,
    bedrooms: false,
    price: false,
  });

  const [filters, setFilters] = useState({
    location: "All locations",
    property: "Any",
    bedrooms: "Any",
    price: "Any",
  });

  const locationRef = useRef<HTMLDivElement>(null);
  const propertyRef = useRef<HTMLDivElement>(null);
  const bedroomsRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (key: "property" | "bedrooms" | "price") => {
    setDropdown((prev) => ({
      property: false,
      bedrooms: false,
      price: false,
      [key]: !prev[key],
    }));
    setShowTrending(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setShowTrending(false);
      }
      if (propertyRef.current && !propertyRef.current.contains(event.target as Node)) {
        setDropdown((prev) => ({ ...prev, property: false }));
      }
      if (bedroomsRef.current && !bedroomsRef.current.contains(event.target as Node)) {
        setDropdown((prev) => ({ ...prev, bedrooms: false }));
      }
      if (priceRef.current && !priceRef.current.contains(event.target as Node)) {
        setDropdown((prev) => ({ ...prev, price: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const trendingLocations = [
    "ELO 3 (DAMAC HILLS 2)",
    "Lagoon Views (DAMAC Lagoons)",
    "Safa Gate (Sheikh Zayed Road)",
    "Violet 4 (DAMAC HILLS 2)",
  ];

  const propertyTypes = ["Any", "Apartment", "Villa", "Townhouse"];
  const bedroomOptions = ["Any", "1", "2", "3", "4", "5"];
  const priceOptions = [
    "Any",
    "Under AED 500k",
    "AED 500k - AED 1M",
    "AED 1M - AED 2M",
    "Above AED 2M",
  ];

  const renderListItems = (
    options: string[],
    selectedValue: string,
    onClick: (value: string) => void,
    type?: "bedrooms"
  ) =>
    options.map((option) => {
      const isSelected = selectedValue === option;
      return (
        <li
          key={option}
          onClick={() => onClick(option)}
          className={`cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-md ${
            isSelected ? "bg-gray-300 font-semibold" : ""
          }`}
        >
          {type === "bedrooms" && option !== "Any"
            ? `${option} Bedroom${option !== "1" ? "s" : ""}`
            : option}
        </li>
      );
    });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source
          src="damac-video-2.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="w-full max-w-7xl relative">
          <div className="bg-gradient-to-r from-white/40 to-white/10 backdrop-blur-md rounded-3xl px-4 py-3 flex flex-wrap gap-2 md:gap-0 md:flex-nowrap items-center justify-between text-white">

            {/* Location */}
            <div
              ref={locationRef}
              onClick={() => {
                setShowTrending(!showTrending);
                setDropdown({ property: false, bedrooms: false, price: false });
              }}
              className="relative flex-1 min-w-[160px] px-3 py-2 cursor-pointer rounded-xl hover:bg-white/20 transition"
            >
              <p className="text-sm text-gray-200">
                Search by City, Community or Project
              </p>
              <h4 className="font-bold text-white">{filters.location}</h4>

              {showTrending && (
                <div className="absolute left-0 top-full mt-2 w-full bg-white text-black rounded-2xl shadow-xl p-4 z-30 max-h-60 overflow-y-auto">
                  <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-3">
                    Trending Now
                  </h3>
                  <ul className="divide-y divide-gray-200">
                    {trendingLocations.map((loc) => (
                      <li
                        key={loc}
                        onClick={() => {
                          setFilters({ ...filters, location: loc });
                          setShowTrending(false);
                        }}
                        className={`flex items-center py-2 space-x-3 cursor-pointer hover:bg-gray-100 px-2 rounded-md ${
                          filters.location === loc ? "bg-gray-300 font-semibold" : ""
                        }`}
                      >
                        <FaMapMarkerAlt className="text-gray-600" />
                        <span className="text-sm font-semibold">{loc}</span>
                      </li>
                    ))}
                    <li
                      onClick={() => {
                        setFilters({ ...filters, location: "All locations" });
                        setShowTrending(false);
                      }}
                      className={`flex items-center py-2 space-x-3 cursor-pointer hover:bg-gray-100 px-2 rounded-md ${
                        filters.location === "All locations"
                          ? "bg-gray-300 font-semibold"
                          : ""
                      }`}
                    >
                      <FaMapMarkerAlt className="text-gray-600" />
                      <span className="text-sm font-semibold">All locations</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Property Type */}
            <div
              ref={propertyRef}
              onClick={() => toggleDropdown("property")}
              className="relative flex-1 min-w-[160px] px-3 py-2 cursor-pointer rounded-xl hover:bg-white/20 transition"
            >
              <p className="text-sm text-gray-200">Property Type</p>
              <div className="flex justify-between items-center font-bold text-white">
                <span>{filters.property}</span>
                {dropdown.property ? <IoChevronUp /> : <IoChevronDown />}
              </div>

              {dropdown.property && (
                <ul className="absolute top-full left-0 w-full mt-2 bg-white text-black rounded-xl shadow-lg z-30 max-h-60 overflow-y-auto">
                  {renderListItems(propertyTypes, filters.property, (val) => {
                    setFilters({ ...filters, property: val });
                    setDropdown({ ...dropdown, property: false });
                  })}
                </ul>
              )}
            </div>

            {/* Bedrooms */}
            <div
              ref={bedroomsRef}
              onClick={() => toggleDropdown("bedrooms")}
              className="relative flex-1 min-w-[160px] px-3 py-2 cursor-pointer rounded-xl hover:bg-white/20 transition"
            >
              <p className="text-sm text-gray-200">Bedrooms</p>
              <div className="flex justify-between items-center font-bold text-white">
                <span>
                  {filters.bedrooms === "Any"
                    ? "Any"
                    : `${filters.bedrooms} Bedroom${filters.bedrooms !== "1" ? "s" : ""}`}
                </span>
                {dropdown.bedrooms ? <IoChevronUp /> : <IoChevronDown />}
              </div>

              {dropdown.bedrooms && (
                <ul className="absolute top-full left-0 w-full mt-2 bg-white text-black rounded-xl shadow-lg z-30 max-h-60 overflow-y-auto">
                  {renderListItems(bedroomOptions, filters.bedrooms, (val) => {
                    setFilters({ ...filters, bedrooms: val });
                    setDropdown({ ...dropdown, bedrooms: false });
                  }, "bedrooms")}
                </ul>
              )}
            </div>

            {/* Price */}
            <div
              ref={priceRef}
              onClick={() => toggleDropdown("price")}
              className="relative flex-1 min-w-[160px] px-3 py-2 cursor-pointer rounded-xl hover:bg-white/20 transition"
            >
              <p className="text-sm text-gray-200">Price</p>
              <div className="flex justify-between items-center font-bold text-white">
                <span>{filters.price}</span>
                {dropdown.price ? <IoChevronUp /> : <IoChevronDown />}
              </div>

              {dropdown.price && (
                <ul className="absolute top-full left-0 w-full mt-2 bg-white text-black rounded-xl shadow-lg z-30 max-h-60 overflow-y-auto">
                  {renderListItems(priceOptions, filters.price, (val) => {
                    setFilters({ ...filters, price: val });
                    setDropdown({ ...dropdown, price: false });
                  })}
                </ul>
              )}
            </div>

            {/* Show Results Button */}
            <button
              onClick={() => {
                const query = new URLSearchParams(filters).toString();
                router.push(`/results?${query}`);
              }}
              className="bg-white text-black font-bold px-6 py-2 rounded-full min-w-[200px] mt-3 md:mt-0 transition hover:bg-[#ccb073] hover:text-white"
            >
              SHOW ALL RESULTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
