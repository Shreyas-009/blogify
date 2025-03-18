import React from "react";
import SellHomeIcon from "../assets/Services/Home.png";
import BuyHomeIcon from "../assets/Services/House.png";
import HomeInspectionIcon from "../assets/Services/Inspection.png";
import LegalServicesIcon from "../assets/Services/Appartment.png";
import FreeEvaluationIcon from "../assets/Services/Evaluation.png";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "SELL YOUR HOME",
      description:
        "We do a free evaluation to be sure you want to start selling",
      icon: SellHomeIcon,
    },
    {
      id: 2,
      title: "BUY A HOME",
      description:
        "We do a free evaluation to be sure you want to start selling",
      icon: BuyHomeIcon,
    },
    {
      id: 3,
      title: "HOME INSPECTION",
      description:
        "We do a free evaluation to be sure you want to start selling",
      icon: HomeInspectionIcon,
    },
    {
      id: 4,
      title: "LEGAL SERVICES",
      description:
        "We do a free evaluation to be sure you want to start selling",
      icon: LegalServicesIcon,
    },
    {
      id: 5,
      title: "FREE EVALUATION",
      description:
        "We do a free evaluation to be sure you want to start selling",
      icon: FreeEvaluationIcon,
    },
    {
      id: 6,
      title: "HOME INSPECTION",
      description:
        "We do a free evaluation to be sure you want to start selling",
      icon: HomeInspectionIcon,
    },
  ];

  return (
    <div
      className="py-8 sm:py-12 md:py-16"
      id="services"
      style={{
        background:
          "linear-gradient(180deg, #EDF7FA 28.12%, rgba(255, 255, 255, 0.00) 100%)",
      }}
    >
      <div className="max-w-[1280px] relative mx-auto px-4">
        {/* Vertical "SERVICES" text - hidden on mobile */}
        <div className="hidden md:flex absolute transform -rotate-90 -left-24 top-24 items-end gap-4">
          <div className="bg-[#8665F6] w-24 h-1 my-auto"></div>
          <span className="text-black tracking-widest text-center uppercase text-xl font-semibold">
            Services
          </span>
        </div>

        {/* Mobile "SERVICES" indicator */}
        <div className="flex md:hidden items-center gap-3 mb-4 sm:mb-6">
          <div className="bg-[#8665F6] w-12 h-1"></div>
          <span className="text-black tracking-widest uppercase text-base font-semibold">
            Services
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-6 sm:mb-8 md:mb-12 pl-0 md:pl-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight">
            EXCLUSIVE, COMMITTED, PROFESSIONAL
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl uppercase font-normal mt-1 sm:mt-2">
            SERVICES WE CAN OFFER YOU
          </h3>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 pl-0 md:pl-16">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
