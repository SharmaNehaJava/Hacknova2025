import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VenueSection = () => {
  const sectionRef = useRef(null);

  // Destination coordinates for GTBIT College
  const gtbitLat = 28.6468011;
  const gtbitLng = 77.1042632;

  const openGoogleMaps = () => {
    const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${gtbitLat},${gtbitLng}&travelmode=driving`;
    window.open(mapUrl, "_blank");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.5,
        delay: 0.3, // slight delay to observe the animation
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 px-4 text-white">
      <h2 className="text-3xl md:text-4xl font-bebas font-bold text-center text-red-500 mb-12">
        VENUE
      </h2>

      <div className="max-w-6xl mx-auto bg-[#0d0d0d] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 shadow-2xl border border-red-800">
        <div className="md:w-1/2 w-full">
          <img
            src="/GTBIT.jpg"
            alt="GTBIT Campus"
            className="w-full h-full object-cover rounded-xl border border-red-800"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-center text-left">
          <h3 className="text-4xl font-bold mb-4">GTBIT College</h3>
          <p className="text-lg mb-6 leading-relaxed text-gray-200">
            Join us at{" "}
            <span className="text-red-400 font-semibold">
              Guru Tegh Bahadur Institute of Technology
            </span>
            , IP University, New Delhi — where creativity meets innovation in a
            tech-powered experience!
          </p>
          <button
            onClick={openGoogleMaps}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md w-fit transition duration-300"
          >
            View Directions to GTBIT
          </button>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
