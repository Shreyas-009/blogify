import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-[0px_1px_40px_0px_rgba(0,0,0,0.10)] flex flex-col items-center text-center gap-2 sm:gap-3">
      <img
        src={icon}
        alt={title}
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
      />
      <h3 className="font-bold text-base sm:text-lg md:text-xl">{title}</h3>
      <p className="text-gray-600 text-sm w-64 sm:text-sm sm:w-64">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
