import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import PixelTransition from "./PixelTransition";

const organisers = [
  {
    name: "Akshat Chauhan",
    image: "https://example.com/image1.jpg",
    linkedin: "https://linkedin.com/in/akshatchauhan"
  },
  {
    name: "Bimlesh Yadav",
    image: "https://example.com/image2.jpg",
    linkedin: "https://linkedin.com/in/bimlesh"
  },
  {
    name: "Neha Sharma",
    image: "/pic1.jpg",
    linkedin: "https://www.linkedin.com/in/nehasharma1782/"
  },
  {
    name: "Kunal Singh",
    image: "https://example.com/image4.jpg",
    linkedin: "https://linkedin.com/in/kunalsingh"
  },
  {
    name: "Tanya Mehra",
    image: "https://example.com/image5.jpg",
    linkedin: "https://linkedin.com/in/tanyamehra"
  },
  {
    name: "Rajeev Verma",
    image: "https://example.com/image6.jpg",
    linkedin: "https://linkedin.com/in/rajeevverma"
  },
  {
    name: "Aayushi Patel",
    image: "https://example.com/image7.jpg",
    linkedin: "https://linkedin.com/in/aayushipatel"
  },
  {
    name: "Sameer Khan",
    image: "https://example.com/image8.jpg",
    linkedin: "https://linkedin.com/in/sameerkhan"
  },
  {
    name: "Mehak Kapoor",
    image: "https://example.com/image9.jpg",
    linkedin: "https://linkedin.com/in/mehakkapoor"
  },
  {
    name: "Raghav Mittal",
    image: "https://example.com/image10.jpg",
    linkedin: "https://linkedin.com/in/raghavmittal"
  }
];

const OrganizerCard = ({ name, image, linkedin }) => (
  <PixelTransition
    firstContent={
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        className="rounded-xl"
      />
    }
    secondContent={
      <div className="w-full h-full flex flex-col justify-center items-center bg-black text-white gap-2 rounded-xl">
        <p className="text-lg font-semibold text-red-500">{name}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>
    }
    gridSize={12}
    pixelColor="#ff0000"
    animationStepDuration={0.4}
    className="aspect-[3/4] w-full sm:w-48 lg:w-56 rounded-xl shadow-lg border border-red-600"
  />
);

const OrganisersList = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleOrganisers = showAll ? organisers : organisers.slice(0, 5);

  return (
    <section className="bg-black py-14 px-4 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-12 font-bebas">
        MEET THE ORGANIZERS
      </h2>
      <div className="flex flex-wrap gap-6 justify-center max-w-6xl mx-auto">
        {visibleOrganisers.map((org, idx) => (
          <OrganizerCard key={idx} {...org} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white font-semibold transition duration-300"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </section>
  );
};

export default OrganisersList;
