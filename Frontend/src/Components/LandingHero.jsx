import React from 'react';

const LandingHero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white text-center overflow-hidden ">
      {/* <img src="../../public/IronMan.jpg" alt="Dr. Strange" className='h-screen w-screen' /> */}

      {/* Main Content */}
      <div className="absolute top-50">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-pink-400 to-purple-500">
          
          HACK THE    
          MULTIVERSE
          
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
          Join the 36-hour hackathon exploring infinite possibilities across parallel universes.
        </p>
        <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition">
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default LandingHero;
