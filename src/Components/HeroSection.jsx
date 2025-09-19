import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { PiSparkleFill } from "react-icons/pi";

const HeroSection = () => {
  const navRefs = useRef([]);
  const textRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Nav animation (stagger)
      gsap.from(navRefs.current, {
        y: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });

      // Hero text animation
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        delay: 0.6,
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <div className="relative w-[90vw] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Background Image */}
      <div
        className="relative w-full h-[600px] md:h-[700px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20230517/original/pngtree-someone-in-a-red-hoodie-is-in-front-of-a-red-picture-image_2633991.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
          {/* Left Logo */}
          <div
            ref={(el) => (navRefs.current[0] = el)}
            className="flex items-center space-x-2"
          >
            <PiSparkleFill className="text-white text-xl sm:text-2xl" />
            <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">
              Luminous Labs
            </span>
          </div>

          {/* Center Nav */}
          <div className="hidden md:flex space-x-8">
            {["Technology", "Company", "Commercial", "Blog", "Shop"].map(
              (text, i) => (
                <a
                  key={i}
                  ref={(el) => (navRefs.current[i + 1] = el)}
                  href="#"
                  className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                >
                  {text}
                </a>
              )
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            <span
              ref={(el) => (navRefs.current[6] = el)}
              className="text-white text-lg font-medium"
            >
              EN <span className="ml-1">&#9660;</span>
            </span>
            <span
              ref={(el) => (navRefs.current[7] = el)}
              className="text-white text-lg font-medium"
            >
              Cart
            </span>
            <svg
              ref={(el) => (navRefs.current[8] = el)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.002zM8.75 10.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-3zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-3z"
              />
            </svg>
          </div>
        </nav>

        {/* Centered Hero Text */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <p className="text-white text-lg md:text-xl mb-4 font-normal tracking-wide">
            Red Light Therapy: proven, safe, and non-invasive
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Your cells, supercharged
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
