import React, { useEffect, useRef } from "react";
import { MapPin, Bus, TrainFront, Car } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ children, className }) => (
  <div className={`rounded-2xl bg-[#1f1f1f] shadow-md p-0 border border-[#333] ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const ReachGTBIT = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-12 px-4 md:px-20 mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-12 font-bebas">
        HOW TO REACH GTBIT, NEW DELHI ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card ref={(el) => (cardsRef.current[0] = el)}>
          <CardContent className="text-center">
            <TrainFront className="mx-auto mb-4 h-10 w-10 text-blue-400" />
            <h3 className="text-xl font-semibold text-white mb-2">By Metro</h3>
            <p className="text-gray-300">
              Board from any metro station → Exit at Subhash Nagar(Blue Line) or Mayapuri (Pink Line) → E-rickshaw to GTBIT.
            </p>
          </CardContent>
        </Card>

        <Card ref={(el) => (cardsRef.current[1] = el)}>
          <CardContent className="text-center">
            <Bus className="mx-auto mb-4 h-10 w-10 text-green-400" />
            <h3 className="text-xl font-semibold text-white mb-2">By Bus</h3>
            <p className="text-gray-300">
              Take a DTC bus to swarg ashram near mayapuri and subhash nagar metro station. From there, local transport is available to reach GTBIT.
            </p>
          </CardContent>
        </Card>

        <Card ref={(el) => (cardsRef.current[2] = el)}>
          <CardContent className="text-center">
            <Car className="mx-auto mb-4 h-10 w-10 text-yellow-400" />
            <h3 className="text-xl font-semibold text-white mb-2">By Cab</h3>
            <p className="text-gray-300">
              Book a cab to "GTBIT College,Rajouri Garden, New Delhi" via any ride-hailing app. Easily accessible via Ring Road.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReachGTBIT;
