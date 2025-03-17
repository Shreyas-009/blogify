import React from "react";
import Bath from "../assets/Cards/Bath.svg";
import Bed from "../assets/Cards/Bed.svg";
import PropertyImage from "../assets/Cards/property-image.png";

const PropertyCard = ({ price, title, bedrooms, bathrooms }) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-[0px_2px_15px_0px_rgba(0,0,0,0.10)]"
    >
      <div className="relative h-64">
        <img
          src={PropertyImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <h3 className="font-bold text-xl ">{title}</h3>
        <p className="font-bold text-xl">${price}</p>
        <p className="text-gray-600 text-sm">
          Beautiful, updated, ground level Co-op apartment in the desirable
          Bay...
        </p>
        <div className="flex justify-start gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <img src={Bed} alt="Bed" className="w-5 h-5" />
            <span>{bedrooms} Bedroom</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Bath} alt="Bath" className="w-5 h-5" />
            <span>{bathrooms} Bathroom</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    <div className="bg-white py-16 ">
      <div className="max-w-[1280px] relative mx-auto px-4">
        {/* Vertical "PROPERTIES" text */}
        <div className="absolute transform -rotate-90 -left-24 top-28 flex  items-end gap-4">
          <div className="bg-[#8665F6] w-24 h-1 my-auto"></div>
          <span className="  text-black tracking-widest text-center uppercase text-xl font-semibold">
            Properties
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-12 pl-16">
          <h2 className="text-3xl font-bold uppercase">
            EXPLORE THE LATEST PROPERTIES
          </h2>
          <h3 className="text-2xl uppercase font-normal">
            AND SELECT YOUR HOME
          </h3>
        </div>

        {/* Property cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-16">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Load more button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#096CC9] text-white py-3 px-10 rounded text-sm uppercase font-semibold hover:bg-blue-700 transition">
            LOAD MORE LISTINGS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
