import React from 'react';

const Showcase = () => {
  return (
    <section className="w-full relative mt-250 md:mt-20 lg:mt-0 h-[70vh] lg:h-[100vh] md:h-[70vh] flex justify-center px-4 py-16 ">
      <div className="relative w-full max-w-6xl bg-[#f9f6f0] rounded-[32px] overflow-hidden shadow-md">
        {/* Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#fbe8e2] via-[#fbd1dc] to-[#fdf5f5] opacity-80 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-12 pb-20">
          {/* Headline */}
          <p className="text-xl md:text-3xl font-semibold text-gray-900 max-w-2xl leading-snug">
            <span className="font-bold">Meet Kini,</span> the first wearable using <br className="hidden md:block" />
            non-invasive light technology to support and improve female longevity
          </p>

          {/* Product Image */}
          <img
            src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673daf8686019b7dff3699ab_kini.webp"
            alt="Kini wearable"
            className="w-[100%] absolute sm:top-20 top-40 lg:top-1 mb-8 object-contain"
          />

          {/* Call to Action */}
          <div className="flex absolute top-80 md:top-110 lg:top-130 items-center justify-between md:w-full sm:h-[30%] w-[80%] max-w-[380px] bg-white/80 border border-gray-200 backdrop-blur-sm shadow-md rounded-full px-6 py-3 space-x-4">
            <span className="text-sm sm:text-base text-gray-700">Get the new Kini now</span>
            <span className="text-sm sm:text-base font-bold text-gray-800">$149</span>
            <button className="bg-black text-white text-sm sm:text-base font-medium px-5 py-2 rounded-full hover:bg-gray-900 transition">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
