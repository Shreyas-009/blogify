import React from "react";
import SellHomeIcon from "../assets/Services/home.png";
import BuyHomeIcon from "../assets/Services/house.png";
import HomeInspectionIcon from "../assets/Services/inspection.png";
import LegalServicesIcon from "../assets/Services/appartment.png";
import FreeEvaluationIcon from "../assets/Services/evaluation.png";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[0px_1px_40px_0px_rgba(0,0,0,0.10)] flex flex-col items-center text-center gap-3">
      <img src={icon} alt={title} className="h-18" />
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-gray-600 text-sm w-64">{description}</p>
    </div>
  );
};

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
      className="py-16"
      style={{
        background:
          "linear-gradient(180deg, #EDF7FA 28.12%, rgba(255, 255, 255, 0.00) 100%)",
      }}
    >
      <div className="max-w-[1280px] relative mx-auto px-4">
        {/* Vertical "SERVICES" text */}
        <div className="absolute transform -rotate-90 -left-24 top-24 flex items-end gap-4">
          <div className="bg-[#8665F6] w-24 h-1 my-auto"></div>
          <span className="text-black tracking-widest text-center uppercase text-xl font-semibold">
            Services
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-12 pl-16">
          <h2 className="text-3xl font-bold uppercase">
            EXCLUSIVE, COMMITTED, PROFESSIONAL
          </h2>
          <h3 className="text-2xl uppercase font-normal">
            SERVICES WE CAN OFFER YOU
          </h3>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pl-16">
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
