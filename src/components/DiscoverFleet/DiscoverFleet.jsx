"use client";
import { useState } from "react";
import FleetTab from "./FleetTab";

const DiscoverFleet = () => {
  const [activeTab, setActiveTab] = useState(0); // Active tab state

  const fleetData = [
    {
      name: "LINCOLN MKT STRETCH LIMOUSINE",
      images: [
        "https://rpclimo.com/wp-content/uploads/2023/12/1-1024x571.png",
        "https://rpclimo.com/wp-content/uploads/2023/12/2-1024x571.png",
        "https://rpclimo.com/wp-content/uploads/2023/12/1-1024x571.png",
        "https://rpclimo.com/wp-content/uploads/2023/12/2-1024x571.png",
      ],
      description:
        "Step into the world of luxury with the Lincoln MKT Stretch Limousine, a perfect choice for those who seek elegance and spacious comfort in their travels. Whether it’s a special celebration or a sophisticated corporate event, this limousine enhances every occasion with its style and luxury.",
      passengerCapacity: "7-8",
      luggageCapacity: "5 bags",
      features: [
        "Spacious Interior for Comfort: Designed to comfortably seat up to 7 passengers, the interior of the Lincoln MKT Stretch Limousine is a blend of elegance and practicality, ensuring every journey is a memorable one.",
        "Ample Luggage Space: With the capacity to hold up to 5 pieces of luggage, this limousine is ideal for airport transfers, business travel, or special events where you need to carry extra baggage without compromising on style.",
        "Luxury Meets Technology: Immerse yourself in the luxurious amenities, including advanced infotainment systems, climate control for personalized comfort, and ambient lighting to set the mood.",
        "Performance and Safety Combined: Experience the smooth power of its engine, ensuring a tranquil journey, while relying on the comprehensive safety features for a secure ride every time.",
      ],
    },
    {
      name: "MERCEDES-BENZ SPRINTER CREW VAN 2500",
      images: [
        "https://rpclimo.com/wp-content/uploads/2023/12/2-1.jpg",
        "https://rpclimo.com/wp-content/uploads/2023/12/1-1.jpg",
        "https://rpclimo.com/wp-content/uploads/2023/12/2-1.jpg",
        "https://rpclimo.com/wp-content/uploads/2023/12/1-1.jpg",
      ],
      description:
        "The Mercedes-Benz Sprinter Crew Van 2500 offers a spacious and luxurious ride, ideal for groups, business trips, and airport transfers...",
      passengerCapacity: "12-14",
      luggageCapacity: "10 bags",
      features: [
        "Spacious Interior for Comfort: Designed to comfortably seat up to 7 passengers, the interior of the Lincoln MKT Stretch Limousine is a blend of elegance and practicality, ensuring every journey is a memorable one.",
        "Ample Luggage Space: With the capacity to hold up to 5 pieces of luggage, this limousine is ideal for airport transfers, business travel, or special events where you need to carry extra baggage without compromising on style.",
        "Luxury Meets Technology: Immerse yourself in the luxurious amenities, including advanced infotainment systems, climate control for personalized comfort, and ambient lighting to set the mood.",
        "Performance and Safety Combined: Experience the smooth power of its engine, ensuring a tranquil journey, while relying on the comprehensive safety features for a secure ride every time.",
      ],
    },
    {
      name: "LINCOLN NAVIGATOR",
      images: [
        "https://rpclimo.com/wp-content/uploads/2023/12/2-2.jpg",
        "https://rpclimo.com/wp-content/uploads/2023/12/3-1.jpg",
        "https://rpclimo.com/wp-content/uploads/2023/12/2-2.jpg",
        "https://rpclimo.com/wp-content/uploads/2023/12/3-1.jpg",
      ],
      description:
        "The Lincoln Navigator brings elegance and comfort to any journey with its impressive size and luxury features...",
      passengerCapacity: "7-8",
      luggageCapacity: "5 bags",
      features: [
        "Spacious Interior for Comfort: Designed to comfortably seat up to 7 passengers, the interior of the Lincoln MKT Stretch Limousine is a blend of elegance and practicality, ensuring every journey is a memorable one.",
        "Ample Luggage Space: With the capacity to hold up to 5 pieces of luggage, this limousine is ideal for airport transfers, business travel, or special events where you need to carry extra baggage without compromising on style.",
        "Luxury Meets Technology: Immerse yourself in the luxurious amenities, including advanced infotainment systems, climate control for personalized comfort, and ambient lighting to set the mood.",
        "Performance and Safety Combined: Experience the smooth power of its engine, ensuring a tranquil journey, while relying on the comprehensive safety features for a secure ride every time.",
      ],
    },
    {
      name: "SUV CADILLAC ESCALADE",
      images: [
        "https://rpclimo.com/wp-content/uploads/2023/12/5-1.jpg",
        "https://rpclimo.com/wp-content/uploads/2023/12/4-1.jpg",
        "https://rpclimo.com/wp-content/uploads/2023/12/5-1.jpg",
        "https://rpclimo.com/wp-content/uploads/2023/12/4-1.jpg",
      ],
      description:
        "The Cadillac Escalade combines sophistication and high performance, offering unmatched luxury and comfort for your travels...",
      passengerCapacity: "7-8",
      luggageCapacity: "6 bags",
      features: [
        "Spacious Interior for Comfort: Designed to comfortably seat up to 7 passengers, the interior of the Lincoln MKT Stretch Limousine is a blend of elegance and practicality, ensuring every journey is a memorable one.",
        "Ample Luggage Space: With the capacity to hold up to 5 pieces of luggage, this limousine is ideal for airport transfers, business travel, or special events where you need to carry extra baggage without compromising on style.",
        "Luxury Meets Technology: Immerse yourself in the luxurious amenities, including advanced infotainment systems, climate control for personalized comfort, and ambient lighting to set the mood.",
        "Performance and Safety Combined: Experience the smooth power of its engine, ensuring a tranquil journey, while relying on the comprehensive safety features for a secure ride every time.",
      ],
    },
    {
      name: "MERCEDES BENZ S580",
      images: [
        "https://rpclimo.com/wp-content/uploads/2023/12/6-1.jpg",
        "https://rpclimo.com/wp-content/uploads/2023/12/7-1.jpg",
        "https://rpclimo.com/wp-content/uploads/2023/12/6-1.jpg",
        "https://rpclimo.com/wp-content/uploads/2023/12/7-1.jpg",
      ],
      description:
        "The Mercedes-Benz S580 is the epitome of luxury and technology, offering an unforgettable driving experience...",
      passengerCapacity: "4-5",
      luggageCapacity: "4 bags",
      features: [
        "Spacious Interior for Comfort: Designed to comfortably seat up to 7 passengers, the interior of the Lincoln MKT Stretch Limousine is a blend of elegance and practicality, ensuring every journey is a memorable one.",
        "Ample Luggage Space: With the capacity to hold up to 5 pieces of luggage, this limousine is ideal for airport transfers, business travel, or special events where you need to carry extra baggage without compromising on style.",
        "Luxury Meets Technology: Immerse yourself in the luxurious amenities, including advanced infotainment systems, climate control for personalized comfort, and ambient lighting to set the mood.",
        "Performance and Safety Combined: Experience the smooth power of its engine, ensuring a tranquil journey, while relying on the comprehensive safety features for a secure ride every time.",
      ],
    },
  ];

  return (
    <div className="2xl:max-w-[1350px] w-full mx-auto px-4">
      <p className="text-4xl font-serif ">Discover Our Fleet</p>
      <p className="mt-5 text-lg">
        Embark on a journey of luxury and sophistication as you discover our
        exquisite fleet of vehicles designed to redefine your travel experience.
        Each vehicle in our fleet is a testament to our commitment to elegance,
        comfort, and reliability. Here's a glimpse into the diverse offerings
        that await you.
      </p>

      {/* Tabs */}
      <div className="mt-10">
        <div className="flex text-sm gap-1 ">
          {fleetData?.map((fleet, index) => (
            <button
              key={index}
              className={`px-2 py-1.5  ${
                activeTab === index
                  ? "bg-yellow-600 text-white"
                  : "bg-orange-200 text-black"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {fleet?.name}
            </button>
          ))}
        </div>
        <div className="bg-white">
          <FleetTab {...fleetData[activeTab]} />
        </div>
      </div>
    </div>
  );
};

export default DiscoverFleet;
