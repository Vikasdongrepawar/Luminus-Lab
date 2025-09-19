import React from 'react';
import { PiHeartbeatFill } from 'react-icons/pi';
import { GiRunningShoe } from 'react-icons/gi';

const cards = [
    {
        title: 'Stay your best self, always',
        category: 'Wellbeing',
        color: 'bg-orange-300',
        image: 'https://i.pinimg.com/736x/ea/91/c6/ea91c65d6ea9b0f6afd16e8959477b73.jpg',
    },
    {
        title: 'Optimize your fertility, cycle\nand menopause naturally',
        category: "Women's health",
        color: 'bg-pink-400',
        image: 'https://i.pinimg.com/736x/6f/74/c3/6f74c33c9e4b337499c7de56a4c85c18.jpg',
    },
    {
        title: 'Fuel your cells\nfor a supercharged life',
        category: 'Longevity',
        color: 'bg-red-500',
        image: 'https://i.pinimg.com/736x/c0/7c/24/c07c246d58a64caeafebc4b98099da89.jpg',
    },
];

const After_Hero = () => {
    return (
        <div className="w-full h-[50vh] md:h-[50vh]  lg:h-screen mt-30 mb-10 text-center">
            {/* Top Statement */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                In 2050, material wealth will not be
            </h2>
            <p className="text-sm md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                impressive. Your VO<sub>2</sub>Max,
                <span className="inline-block mx-1 align-middle">
                    <img
                        src="https://i.pinimg.com/736x/9e/41/33/9e4133b1fc53c507eca1aa836b31cd3e.jpg"
                        alt="icon"
                        className="w-5 h-5 inline-block rounded-full object-cover"
                    />
                </span>
                speed of aging, HRV
                <span className="inline-block mx-1 align-middle">
                    <img
                        src="https://i.pinimg.com/736x/57/1e/3b/571e3b5f2855c966b14df1a0109ca271.jpg"
                        alt="icon"
                        className="w-5 h-5 inline-block rounded-full object-cover"
                    />
                </span>
                and body fat percentage
                <span className="inline-block mx-1 align-middle">
                    <img
                        src="https://i.pinimg.com/736x/89/dc/ca/89dcca24ac67cd6c00794718e4680964.jpg"
                        alt="icon"
                        className="w-5 h-5 inline-block rounded-full object-cover"
                    />
                </span>
                will be.
            </p>


            {/* Subtitle */}
            <p className="text-gray-500 uppercase tracking-wide text-sm mb-2">
                Applications
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900">
                Start shaping your tomorrow
            </h3>

            {/* Cards */}
            <div className="grid mt-30 grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
                    >
                        <img
                            src={card.image}
                            alt={card.category}
                            className="rounded-xl w-full h-48 object-cover mb-4"
                        />
                        <p className="text-gray-700 text-base mb-3 whitespace-pre-line">
                            {card.title}
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-[#fdfdfc] text-sm font-semibold text-gray-800 shadow-sm w-fit">
                            <span className={`w-3 h-3 rounded-full ${card.color}`}></span>
                            {card.category}
                        </div>

                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <button className="mt-12 px-6 py-3 bg-black text-white rounded-full text-base font-medium hover:bg-gray-800 transition">
                All products →
            </button>
        </div>
    );
};

export default After_Hero;
