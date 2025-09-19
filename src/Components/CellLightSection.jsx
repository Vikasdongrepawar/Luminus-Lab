import React, { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

const faqData = [
  "Why does it look like that the LEDs are switched off in the NIR setting?",
  "What is the difference between red light and NIR light?",
  "Is red light an alternative to sunlight?",
];

const CellLightSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-14 px-4 sm:px-8 lg:px-16 space-y-20">
      {/* Top Feature Card */}
      <div className="bg-gradient-to-tr from-[#f76259] to-[#f7b4f2] rounded-3xl p-8 md:p-14 text-white relative overflow-hidden shadow-xl max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-xl leading-snug">
          Learn how <span className="text-white font-bold">CellLight</span> powers your health.
        </h2>
        <p className="mt-4 text-white/90 text-base sm:text-lg max-w-xl">
          Innovative, science-backed technology created to fuel cellular energy and longevity.
        </p>
        <button className="mt-6 bg-white text-black px-6 py-2 rounded-full text-sm font-medium shadow hover:bg-gray-100 transition flex items-center gap-2">
          Explore <FaArrowRight />
        </button>
      </div>

      {/* Bottom Section: Call & FAQs */}
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        {/* Left: Call-to-Action */}
        <div className="md:w-1/2 space-y-5">
          <p className="text-gray-600 text-base leading-relaxed">
            We believe in meaningful conversations. To help you out, we provide
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            a <span className="font-bold">free 20-minute call</span> to answer your questions.
          </h3>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-2">
            Book a free call <FaArrowRight />
          </button>
        </div>

        {/* Right: FAQs */}
        <div className="md:w-1/2 space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="bg-[#f4f1eb] rounded-xl p-4 cursor-pointer hover:bg-[#ece7de] transition"
              onClick={() => toggleFAQ(i)}
            >
              <div className="flex justify-between items-center">
                <p className="text-gray-800 text-sm sm:text-base">{item}</p>
                <FaChevronDown
                  className={`text-gray-600 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === i && (
                <p className="mt-3 text-sm text-gray-600">
                  {/* Add answers here if needed */}
                  This is a placeholder answer for the question.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CellLightSection;
