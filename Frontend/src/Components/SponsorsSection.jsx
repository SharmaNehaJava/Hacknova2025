import React from "react";
import TiltedCard from "./TitledCard";


const sponsors = {
  "Platform Partner": [
    {
      image: "xyz_logo.svg.png",
      alt: "xyz"
    }
  ],
  "Platinum Sponsor": [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Oci_Logo.svg/512px-Oci_Logo.svg.png",
      alt: "OCI"
    }
  ],
  "Gold Sponsor": [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Qube_Logo.svg/512px-Qube_Logo.svg.png",
      alt: "Qube"
    }
  ],
  "Silver Sponsor": [
    { image: "https://example.com/logo1.png", alt: "Imgech" },
    { image: "https://example.com/logo2.png", alt: "NextEra" },
    { image: "https://example.com/logo3.png", alt: "RBrand" },
    { image: "https://example.com/logo4.png", alt: "Pevak" },
    { image: "https://example.com/logo5.png", alt: ".xyz" },
    { image: "https://example.com/logo6.png", alt: "More" }
  ],
  "Bronze Sponsor": [
    { image: "https://example.com/interview-logo.png", alt: "Interview Buddy" },
    { image: "https://example.com/smile-logo.png", alt: "Smiley" }
  ],
  "Education Partner": [
    {
      image: "https://example.com/ridein-logo.png",
      alt: "RideIn"
    }
  ],
  // "Web3 Partner": [
  //   {
  //     image: "https://example.com/web3-logo.png",
  //     alt: "Web3 Logo"
  //   }
  // ]
};

const SponsorsSection = () => {
  return (
    <section className="bg-black py-16 px-6 text-white text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-red-500 tracking-widest mb-14">
        SPONSORS
      </h2>
      <div className="flex flex-col gap-14 max-w-5xl mx-auto">
        {Object.entries(sponsors).map(([category, items], idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold text-white mb-6">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {items.map((sponsor, i) => (
                <TiltedCard
                  key={i}
                  imageSrc={sponsor.image}
                  altText={sponsor.alt}
                  captionText={sponsor.alt}
                  containerHeight="120px"
                  containerWidth="120px"
                  imageHeight="120px"
                  imageWidth="120px"
                  rotateAmplitude={10}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="text-xs font-bold text-white">{sponsor.alt}</p>
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;

