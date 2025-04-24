import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Gift } from "lucide-react";

const winners = [
  {
    title: "Winner",
    prize: "Cash Prize + Exclusive Swag Kit",
    badge: "Gold",
    icon: <Trophy className="h-8 w-8 text-yellow-400" />,
    border: "border-yellow-500"
  },
  {
    title: "1st Runner-up",
    prize: "Cash Prize + Exclusive Swag Kit",
    badge: "Silver",
    icon: <Award className="h-8 w-8 text-gray-300" />,
    border: "border-gray-400"
  },
  {
    title: "2nd Runner-up",
    prize: "Cash Prize + Exclusive Swag Kit",
    badge: "Bronze",
    icon: <Award className="h-8 w-8 text-orange-400" />,
    border: "border-orange-400"
  }
];

const additionalPrizes = [
  {
    title: "Top 20 Teams",
    prize: "Free .xyz domain name for each winning team",
    badge: "Bonus",
    icon: <Gift className="h-8 w-8 text-blue-400" />,
    border: "border-blue-500"
  },
  {
    title: "Swag Kit for All",
    prize: "Exclusive T-Shirt & Swag Kit for all participants!",
    badge: "Swag Kit",
    icon: <Gift className="h-8 w-8 text-pink-400" />,
    border: "border-pink-500"
  }
];

const PrizeCard = ({ title, prize, icon, badge, border }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
    className={`bg-[#0e0e20] text-white rounded-xl px-6 py-6 border-2 ${border} relative w-full max-w-xs text-center shadow-lg`}
  >
    <div className="absolute -top-3 right-3 bg-gray-800 text-xs px-2 py-1 rounded-full text-white border border-gray-600">
      {badge}
    </div>
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{prize}</p>
  </motion.div>
);

const PrizeSection = () => {
  return (
    <section className="bg-black py-20 px-6 text-white text-center">
      <h2 className="text-5xl font-extrabold text-pink-500 mb-4 tracking-widest">
        PRIZE <span className="text-white">POOL</span>
      </h2>
      <p className="text-2xl font-bold mb-12 text-white">₹1,000,000+ in total value</p>

      {/* Winner Row */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto mb-12">
        {winners.map((item, index) => (
          <PrizeCard key={index} {...item} />
        ))}
      </div>

      {/* Additional Prizes */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
        {additionalPrizes.map((item, index) => (
          <PrizeCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PrizeSection;
