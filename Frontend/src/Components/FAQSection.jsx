import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Hacknova 2025?",
    answer:
      "Hacknova 2025 is a 36-hour offline hackathon organized at GTBIT (Guru Tegh Bahadur Institute of Technology), GGSIPU, New Delhi, designed to foster innovation, creativity, and problem-solving among student developers."
  },
  {
    question: "When and where will the hackathon take place?",
    answer:
      "Hacknova 2025 will be held on 2nd–3rd August 2025 at GTBIT College, GGSIPU, New Delhi."
  },
  {
    question: "Who can participate in Hacknova 2025?",
    answer:
      "The hackathon is open to students, innovators, and aspiring technologists from colleges and universities across India."
  },
  {
    question: "What is the duration of the event?",
    answer:
      "The hackathon will run for 36 hours continuously from 2nd August morning to 3rd August evening."
  },
  {
    question: "What are the themes for the hackathon?",
    answer:
      "Themes will revolve around real-world challenges including Sustainability, Fintech, AI & ML, Cybersecurity, Education, and more."
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "Participants should bring their laptops, chargers, extension cords, valid student ID, and essentials for a 36-hour stay."
  },
  {
    question: "Can I participate solo or do I need a team?",
    answer:
      "You can participate either solo or in a team. Teams of 2–4 members are preferred. Solo participants can be merged into teams."
  },
  {
    question: "Are inter-college teams allowed to participate?",
    answer:
      "Yes, inter-college teams are welcome. Diversity in team composition is encouraged."
  },
  {
    question: "Will there be food and drinks during the event?",
    answer:
      "Yes! Meals, snacks, and refreshments will be provided throughout the event, including high tea, midnight snacks, and breakfast."
  },
  {
    question: "Will there be charging ports available?",
    answer:
      "Yes, the venue will have adequate charging points and power outlets across all hacking areas."
  },
  {
    question: "What activities will be available during breaks?",
    answer:
      "Breaks will feature fun activities, mini-games, and informal networking to recharge and connect with fellow hackers."
  },
  {
    question: "How can I register for the event?",
    answer:
      "Registration details and form will be available on the official Hacknova 2025 website. Stay tuned to our social handles for updates."
  },
  {
    question: "Can my travel expenses be reimbursed?",
    answer:
      "Currently, travel reimbursement is not guaranteed. Please stay updated via the official communication for any sponsorship benefits."
  },
  {
    question: "What if I have issues or questions during the event?",
    answer:
      "A dedicated helpdesk and volunteers will be available on-site for your assistance at any time during the hackathon."
  },
  {
    question: "What makes Hacknova 2025 unique?",
    answer:
      "Hacknova 2025 stands out for its 36-hour offline format, real-world problem statements, strong mentor network, and immersive experience at a premier tech institute in Delhi."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`rounded-lg p-4 mb-3 border ${
        isOpen ? "border-red-500 bg-[#2a2a2a]" : "border-red-700 bg-[#1a1a1a]"
      } text-white transition-colors duration-300 cursor-pointer`}
    >
      <div
        className="flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-medium hover:text-red-500">{question}</h4>
        <ChevronDown
          className={`transition-transform ${
            isOpen ? "rotate-180 text-red-500" : "rotate-0"
          }`}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-sm text-gray-300"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="bg-black py-16 px-4 text-white">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-10 tracking-widest">
        FAQs
      </h2>
      <div className="max-w-3xl mx-auto">
        <AnimatePresence>
          {visibleFaqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </AnimatePresence>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 text-white rounded-lg transition duration-300"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
