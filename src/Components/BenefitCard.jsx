import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BenefitCard = ({
  image,
  title,
  subtitle,
  description,
  benefits,
  overlayStats,
}) => {
  const cardRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex flex-col md:flex-row items-center gap-8 bg-[#f8f5ef] rounded-3xl overflow-hidden px-6 py-10 max-w-[70vw] mx-auto mb-10 shadow-sm"
    >
      {/* Image Section */}
      <div className="relative w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
        {overlayStats && (
          <div className="absolute bottom-4 left-4 bg-white/50 backdrop-blur-sm text-black px-4 py-2 rounded-xl text-xs font-medium shadow-md space-y-1">
            <p className="text-[11px] font-semibold text-black/70 uppercase">
              Uterine Blood Flow: Optimal
            </p>
            <div className="flex justify-between gap-4">
              {overlayStats.map((stat, index) => (
                <div key={index} className="text-[12px]">
                  <div className="text-black/70">{stat.label}</div>
                  <div className="text-black font-semibold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-5 text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
        <p className="text-sm text-gray-700">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-800"
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
