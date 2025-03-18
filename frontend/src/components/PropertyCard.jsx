import React from "react";
import Bath from "../assets/Cards/Bath.svg";
import Bed from "../assets/Cards/Bed.svg";
import PropertyImage from "../assets/Cards/Property-image.png";

const PropertyCard = ({ price, title, bedrooms, bathrooms }) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-[0px_2px_15px_0px_rgba(0,0,0,0.10)] h-full"
     style={{ boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.10)" }}
    >
      <div className="relative h-48 sm:h-56 md:h-64">
        <img
          src={PropertyImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-2 sm:gap-3">
        <h3 className="font-bold text-lg sm:text-xl">{title}</h3>
        <p className="font-bold text-lg sm:text-xl">${price}</p>
        <p className="text-gray-600 text-xs sm:text-sm">
          Beautiful, updated, ground level Co-op apartment in the desirable
          Bay...
        </p>
        <div className="flex justify-start gap-4 sm:gap-6 text-gray-600 text-xs sm:text-sm">
          <div className="flex items-center gap-1 sm:gap-2">
            <img src={Bed} alt="Bed" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{bedrooms} Bedroom</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <img src={Bath} alt="Bath" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{bathrooms} Bathroom</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
