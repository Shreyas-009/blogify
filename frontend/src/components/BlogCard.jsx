import React from "react";
import ArrowIcon from "../assets/arrow-right.svg";

const BlogCard = ({ image, title, link }) => {
  return (
    <div className="relative rounded-lg overflow-hidden group h-full shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-60 transition-all"></div>
      <div className="absolute bottom-0 left-0 p-3 sm:p-4 lg:p-6 text-white flex flex-col justify-center gap-2 sm:gap-3">
        <h3 className="font-bold text-xs sm:text-sm lg:text-base leading-tight">
          {title}
        </h3>
        <a
          href={link}
          className="text-white flex items-center group-hover:text-blue-300 transition-colors"
        >
          <span className="text-[10px] sm:text-xs mr-1 sm:mr-2 font-semibold">
            Continue reading
          </span>
          <img src={ArrowIcon} alt="arrow" className="w-2 h-2" />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
