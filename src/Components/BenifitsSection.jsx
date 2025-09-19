import BenefitCard from "./BenefitCard";

const benefitsData = [
    {
      image:
        "https://i.pinimg.com/736x/fd/80/89/fd8089e26703bc13e13ea11b764cdf47.jpg",
      title: "Optimized female health",
      subtitle:
        "Red light therapy can effectively support your fertility in the long-term.",
      description:
        "By increasing blood flow, supporting tissue regeneration and balancing hormones, CellLight™ supports your uterus and ovaries naturally.",
      benefits: ["Promotes healthy tissue", "Balances your hormones"],
      overlayStats: [
        { label: "PI", value: "0.65" },
        { label: "RI", value: "0.55" },
        { label: "S/D", value: "2.3" },
      ],
    },
    {
      image:
        "https://i.pinimg.com/736x/28/22/a8/2822a8f339c85ed3f4c7e124f0565d6f.jpg",
      title: "Enhanced deep sleep",
      subtitle:
        "Near-infrared light enhances mitochondrial function in neurons, helping improve deep sleep.",
      description:
        "CellLight™ will help reduce your natural wake-sleep cycle and melatonin production, improving sleep quality over time.",
      benefits: [
        "Longer deep sleep",
        "Enhanced melatonin function",
        "Balance sleep hormone release",
      ],
      overlayStats: [
        { label: "REM%", value: "21" },
        { label: "HR", value: "54" },
        { label: "Sleep score", value: "88" },
      ],
    },
    {
      image:
        "https://i.pinimg.com/736x/45/3d/c9/453dc9fb7f73af3b843aad1ec57db041.jpg",
      title: "Youthful skin",
      subtitle:
        "CellLight™ accelerates cellular repair and stem cell proliferation, leading to higher natural collagen and elastic production.",
      description:
        "This results in youthful, glowing skin that allows you to look as young as you feel—inside and out.",
      benefits: ["Increased cellular repair", "More natural collagen and elastin"],
      overlayStats: [
        { label: "Elasticity", value: "95%" },
        { label: "Hydration", value: "89%" },
        { label: "Wrinkle depth", value: "-23%" },
      ],
    },
    {
      image:
        "https://i.pinimg.com/736x/86/a7/0e/86a70eb66ce3e6be688cb4af34209193.jpg",
      title: "Extended longevity",
      subtitle:
        "CellLight™ helps mitochondria produce more energy (ATP), supporting long-term health and protecting against chronic conditions.",
      description:
        "Increasing cellular energy not only extends your life biologically but also enhances your daily quality of life and performance.",
      benefits: ["Improved energy levels", "Reducing signs of aging", "Better metabolism"],
      overlayStats: [
        { label: "Biological age", value: "49 yrs" },
        { label: "Cell ATP", value: "+27%" },
        { label: "Oxidative stress", value: "-18%" },
      ],
    },
    {
      image:
        "https://i.pinimg.com/736x/c0/ab/bd/c0abbd2c11b9896e3240836d6a2d91c2.jpg",
      title: "Boosted mental & physical resilience",
      subtitle:
        "Studies show consistent use of CellLight™ improves heart rate variability (HRV) over time and reduces oxidative stress.",
      description:
        "Higher HRV is strongly associated with emotional resilience, immunity, and stress adaptability—ensuring you stay stronger, longer.",
      benefits: ["Reduced oxidative stress", "Higher HRV"],
      overlayStats: [
        { label: "HRV", value: "152" },
        { label: "Stress Index", value: "-24%" },
        { label: "Mood", value: "+31%" },
      ],
    },
  ];
  

  export default function BenefitsSection() {
    return (
      <section className="py-10  sm:py-14 md:py-16 px-4 sm:px-6 lg:px-12 ">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-sm sm:text-base text-gray-600 font-semibold uppercase tracking-wider mb-2">
            Benefits
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Feel the difference in every aspect
          </h2>
        </div>
  
        {/* Benefit Cards */}
        <div className="space-y-10 sm:space-y-12">
          {benefitsData.map((item, idx) => (
            <BenefitCard key={idx} {...item} />
          ))}
        </div>
      </section>
    );
  }
