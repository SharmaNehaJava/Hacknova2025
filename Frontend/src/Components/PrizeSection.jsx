import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Gift } from "lucide-react";

const winners = [
  {
    title: "Winner",
    prize: "Cash Prize + Exclusive Swag Kit",
    badge: "Gold",
    icon: <Trophy className="h-10 w-10 text-yellow-400" />,
    border: "border-yellow-500",
    glow: "shadow-yellow-500/50"
  },
  {
    title: "1st Runner-up",
    prize: "Cash Prize + Exclusive Swag Kit",
    badge: "Silver",
    icon: <Award className="h-10 w-10 text-gray-300" />,
    border: "border-gray-400",
    glow: "shadow-gray-400/50"
  },
  {
    title: "2nd Runner-up",
    prize: "Cash Prize + Exclusive Swag Kit",
    badge: "Bronze",
    icon: <Award className="h-10 w-10 text-orange-400" />,
    border: "border-orange-400",
    glow: "shadow-orange-400/50"
  }
];

const additionalPrizes = [
  {
    title: "Top 20 Teams",
    prize: "Free .xyz domain name for each winning team",
    badge: "Bonus",
    icon: <Gift className="h-10 w-10 text-blue-400" />,
    border: "border-blue-500",
    glow: "shadow-blue-500/50"
  },
  {
    title: "Swag Kit for All",
    prize: "Exclusive T-Shirt & Swag Kit for all participants!",
    badge: "Swag Kit",
    icon: <Gift className="h-10 w-10 text-pink-400" />,
    border: "border-pink-500",
    glow: "shadow-pink-500/50"
  }
];

const PrizeCard = ({ title, prize, icon, badge, border, glow }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className={`bg-[#0e0e20] text-white rounded-2xl px-8 py-8 border-2 ${border} relative w-full max-w-xs text-center transition-all duration-300 hover:${glow} shadow-md`}
  >
    <div className="absolute -top-4 right-4 bg-gray-900 text-xs px-3 py-1 rounded-full border border-gray-700">
      {badge}
    </div>
    <div className="mb-5">{icon}</div>
    <h3 className="text-2xl font-extrabold mb-3">{title}</h3>
    <p className="text-sm text-gray-400">{prize}</p>
  </motion.div>
);

const PrizeSection = () => {
  return (
    <section className="relative bg-black py-24 px-6 text-white overflow-hidden">
      {/* Glowing Background Particles */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-3xl absolute top-0 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        <div className="w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl absolute bottom-0 right-1/4 animate-ping"></div>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text"
      >
        PRIZE POOL
      </motion.h2>
      <p className="text-center text-2xl font-bold mb-16 text-gray-300">₹1,000,000+ in total value</p>

      {/* Winner Row */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto mb-20">
        {winners.map((item, index) => (
          <PrizeCard key={index} {...item} />
        ))}
      </div>

      {/* Additional Prizes */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
        {additionalPrizes.map((item, index) => (
          <PrizeCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PrizeSection;
