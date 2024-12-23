"use client";
import { useState } from "react";

const FrequentlyAskedQuestions = () => {
  // Set the initial active index to 0
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What types of vehicles are available in your fleet?",
      answer:
        "Our fleet at RPC Limo includes a variety of luxury vehicles such as stretch limousines for grand entrances, spacious SUV limos for larger groups, and elegant sedans for a more intimate experience. Each vehicle is regularly inspected and maintained to ensure safety and comfort.",
    },
    {
      question: "Are your chauffeurs experienced?",
      answer:
        "Yes, our chauffeurs are highly experienced, professionally trained, and licensed. They are committed to ensuring a safe, comfortable, and luxurious travel experience for our clients.",
    },
    {
      question: "What amenities can I expect in a RPC Limo?",
      answer:
        "You can expect a range of amenities, including plush seating, state-of-the-art entertainment systems, complimentary refreshments, and climate control for your utmost comfort.",
    },
    {
      question: "What is the minimum age requirement to rent a limo?",
      answer:
        "The minimum age requirement to rent a limo is 21 years. A valid driver's license or identification card is also required at the time of booking.",
    },
    {
      question: "What if I encounter a problem during my service?",
      answer:
        "If you encounter any issues during your service, please contact our customer service team immediately. We are available 24/7 to resolve any concerns and ensure your satisfaction.",
    },
    {
      question: "Can I modify or cancel my reservation?",
      answer:
        "Yes, you can modify or cancel your reservation. However, please review our cancellation and modification policy for specific terms and conditions, including applicable fees.",
    },
    {
      question: "How does RPC Limo ensure passenger safety during the ride?",
      answer:
        "Passenger safety is our top priority. Our vehicles are equipped with advanced safety features, and our chauffeurs are trained to follow all safety protocols. Regular maintenance checks ensure our fleet meets the highest safety standards.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="2xl:max-w-[1350px] w-full mx-auto px-4">
      <div>
        <p className="text-4xl font-serif">
          Frequently Asked Questions for RPC Limo Service
        </p>
        <div className="flex mt-10 flex-col items-start space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              <div
                className={`flex w-full text-xl px-4 py-3 items-center gap-4 cursor-pointer ${
                  activeIndex === index
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-100 text-black"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <p>{activeIndex === index ? "-" : "+"}</p>
                <p>{faq.question}</p>
              </div>
              {activeIndex === index && (
                <p className="px-12 py-6 bg-gray-50 text-lg font-light">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
