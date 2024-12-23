"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FleetTab = ({
  name,
  images,
  description,
  passengerCapacity,
  luggageCapacity,
  features,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col bg-yellow-600 gap-8 p-6">
      <div className="w-full">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 0.5s ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <Image
                loading="lazy"
                src={image}
                alt={`${name} Image ${index + 1}`}
                className=" w-full h-auto object-cover"
                width={1200}
                height={800}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div>
        <h3 className="text-2xl font-sans">{name}</h3>
        <p className="mt-8 text-lg">{description}</p>
        <div className="mt-5">
          <p>
            <strong>Passenger Capacity: </strong>
            {passengerCapacity}
          </p>
          <p>
            <strong>Luggage Capacity: </strong>
            {luggageCapacity}
          </p>
        </div>
        <ul className="mt-6 list-disc">
        <p className="text-3xl font-sans">Features</p>
          {features.map((feature, index) => (
            <li key={index} className="ml-8 italic mt-8 text-lg">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-start mt-4 justify-start">
        <button className="bg-black text-white px-6 py-3 ">
          Book now pay later
        </button>
      </div>
    </div>
  );
};

export default FleetTab;
