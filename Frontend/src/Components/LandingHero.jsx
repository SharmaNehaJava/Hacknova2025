import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const LandingHero = () => {
  useEffect(() => {
    // Text animation: Fade in and slide up
    gsap.fromTo(
      '.text-gradient', 
      { opacity: 0, y: 100 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.5 }
    );

    // Description text animation: Fade in with delay
    gsap.fromTo(
      '.description', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: 1 }
    );

    // Floating balls animation: Random movements with GSAP's "stagger"
    gsap.to('.floating-ball', {
      y: '+=20',
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
      ease: 'easeInOut',
      duration: 2,
      delay: 1
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white text-center overflow-hidden">
      
      {/* Red floating spheres */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-b from-red-500 to-black rounded-full shadow-2xl animate-pulse floating-ball" />
      <div className="absolute bottom-1/4 right-1/4  w-10 h-10 bg-gradient-to-b from-red-500 to-black rounded-full shadow-2xl animate-pulse floating-ball" />
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-gradient-to-b from-red-500 to-black rounded-full shadow-2xl animate-pulse floating-ball" />
      <div className="absolute bottom-0 center w-50 h-50 bg-gradient-to-b from-red-500 to-black rounded-full shadow-2xl animate-pulse floating-ball" />
      <div className="absolute top-1/4 left-1/4 w-30 h-30 bg-gradient-to-b from-red-500 to-black rounded-full shadow-2xl animate-pulse floating-ball" />
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-b from-red-500 to-black rounded-full shadow-2xl animate-pulse floating-ball" />

      {/* Main Content */}
      <div className="relative z-10 px-4">
        <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-purple-600 text-gradient">
          HACK THE MULTIVERSE
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-gray-300 description">
          Join the 36-hour hackathon exploring infinite possibilities across parallel universes.
        </p>
      </div>
    </div>
  );
};

export default LandingHero;
