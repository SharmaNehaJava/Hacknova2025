import React from "react";
import { MapPin, Bus, TrainFront, Car } from "lucide-react";

const Card = ({ children, className }) => (
  <div className={`rounded-2xl bg-[#1f1f1f] shadow-md p-0 border border-[#333] ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const ReachGTBIT = () => {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-12">
        How to Reach GTBIT, New Delhi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="text-center">
            <TrainFront className="mx-auto mb-4 h-10 w-10 text-blue-400" />
            <h3 className="text-xl font-semibold text-white mb-2">By Metro</h3>
            <p className="text-gray-300">
              Board from any metro station → Exit at Subhash Nagar(Blue Line) or Mayapuri (Pink Line) → E-rickshaw to GTBIT.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="text-center">
            <Bus className="mx-auto mb-4 h-10 w-10 text-green-400" />
            <h3 className="text-xl font-semibold text-white mb-2">By Bus</h3>
            <p className="text-gray-300">
              Take a DTC bus to Uttam Nagar or Janakpuri area. From there, local transport is available to reach GTBIT.
            </p>
          </CardContent>
        </Card>

        <Card>
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