import React from "react";
import {
  FaTruck,
  FaGlobe,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaUndoAlt,
  FaCalendarAlt,
} from "react-icons/fa";

// Get current date formatted for Bangladesh locale
const getCurrentDate = () => {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-BD", options);
};

// Card component using Tailwind CSS classes
const Card = ({ icon: Icon, title, description, date }) => {
  Icon;
  return (
    <div
      className="
      border border-gray-200 rounded-lg p-5 mx-auto my-2.5 w-70 shadow-lg bg-[#fefefe]
      flex flex-col items-center text-center
      min-h-[220px] justify-between
      transform transition-transform duration-300 hover:scale-105 hover:bg-[#caeb66] 
    "
    >
      <div className="text-3xl text-[#849b42] mb-4">
        <Icon />
      </div>
      <h3 className="text-md font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-base text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="text-sm text-gray-500 flex items-center">
        <FaCalendarAlt className="mr-1.5" /> {date}
      </div>
    </div>
  );
};

// Container component for all service cards
const ServiceCardContainer = () => {
  const todayDate = getCurrentDate();

  // Your provided data as an array of objects
  const servicesData = [
    {
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  // A mapping of titles to icons
  const iconMap = {
    "Express & Standard Delivery": FaTruck,
    "Nationwide Delivery": FaGlobe,
    "Fulfillment Solution": FaWarehouse,
    "Cash on Home Delivery": FaMoneyBillWave,
    "Corporate Service / Contract In Logistics": FaBuilding,
    "Parcel Return": FaUndoAlt,
  };

  return (
    <div>
      <h1 className="text-2xl my-9">Discover Our Services</h1>
      <p className="text-sm mx-50 my-8 text-gray-300">
        Here's detailed information about our main services. Each card provides
        a brief overview and highlights the unique aspects of each service.
        We're always ready to meet your needs
      </p>

      <div
        className="
      grid grid-cols-1 lg:grid-cols-3
    "
      >
        {servicesData.map((service, index) => (
          <Card
            key={index}
            icon={iconMap[service.title] || FaCalendarAlt} // Fallback to a default icon if title not found
            title={service.title}
            description={service.description}
            date={todayDate}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCardContainer;
