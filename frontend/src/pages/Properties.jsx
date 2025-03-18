import React from "react";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Villa with Amazing View",
      price: "600,00,00",
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 2,
      title: "Villa with Amazing View",
      price: "600,00,00",
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 3,
      title: "Villa with Amazing View",
      price: "600,00,00",
      bedrooms: 4,
      bathrooms: 3,
    },
  ];

  return (
    <div className="bg-white py-10 sm:py-12 md:py-16" id="sell">
      <div className="max-w-[1280px] relative mx-auto px-4">
        {/* Vertical "PROPERTIES" text - hidden on mobile */}
        <div className="hidden md:flex absolute transform -rotate-90 -left-24 top-28 items-end gap-4">
          <div className="bg-[#8665F6] w-24 h-1 my-auto"></div>
          <span className="text-black tracking-widest text-center uppercase text-xl font-semibold">
            Properties
          </span>
        </div>

        {/* Mobile "PROPERTIES" indicator */}
        <div className="flex md:invisible items-center gap-3 mb-6">
          <div className="bg-[#8665F6] w-12 h-1"></div>
          <span className="text-black tracking-widest uppercase text-base font-semibold">
            Properties
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-8 sm:mb-10 md:mb-12 pl-0 md:pl-16">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold uppercase">
            EXPLORE THE LATEST PROPERTIES
          </h2>
          <h3 className="text-xl sm:text-xl md:text-2xl uppercase font-normal">
            AND SELECT YOUR HOME
          </h3>
        </div>

        {/* Property cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pl-0 md:pl-16">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Load more button */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <button className="bg-[#096CC9] text-white py-2 sm:py-3 px-6 sm:px-10 rounded text-xs sm:text-sm uppercase font-semibold hover:bg-blue-700 transition">
            LOAD MORE LISTINGS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
