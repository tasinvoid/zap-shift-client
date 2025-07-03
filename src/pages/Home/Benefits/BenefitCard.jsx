import React from "react";

const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="card w-full bg-[#bfbfbf] shadow-md border hover:shadow-lg transition-all " data-aos="fade-in">
      <div className="card-body flex flex-col sm:flex-row items-start gap-4">
        <img src={image} alt={title} className="w-16 h-16 object-contain" />
        <div className="divider divider-horizontal hidden sm:flex my-0" />
        <div>
          <h3 className="card-title text-black text-lg mb-2">{title}</h3>
          <p className="text-sm text-black/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
