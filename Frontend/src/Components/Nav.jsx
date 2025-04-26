import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Importing react-scroll for smooth scrolling
import { Menu, X } from 'lucide-react'; // Lucide icons, super lightweight

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Tracks', target: 'tracks' },
    { label: 'Schedule', target: 'schedule' },
    { label: 'Prizes', target: 'prizes' },
    { label: 'Sponsors', target: 'sponsors' },
    { label: 'Team', target: 'team' },
    { label: 'FAQs', target: 'faq' },
    // { label: 'Venue', target: 'venue' },
    // { label: 'Reach', target: 'reach' }
  ];

  return (
    <div className="w-screen fixed top-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b px-6 py-3 flex items-center justify-between text-white shadow-lg font-[Orbitron]">
      
      {/* Logo */}
      <Link to="home" smooth={true} className="text-2xl font-bold animate-flicker text-cyan-400 drop-shadow-[0_0_10px_cyan]">
        HACK<span className="text-red-500">NOVA</span>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-6 text-sm uppercase tracking-wider font-semibold">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.target}
            smooth={true}
            className="hover:text-red-400 transition relative group"
          >
            {item.label}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Links Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/80 flex flex-col items-center py-4 space-y-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.target}
              smooth={true}
              onClick={() => setIsOpen(false)} // Close on click
              className="text-white text-lg uppercase hover:text-cyan-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* CTA Button */}
      <button className="hidden md:inline-block border border-cyan-400 text-white px-5 py-2 rounded-md font-semibold transition hover:scale-105 hover:shadow-[0_0_10px_cyan]">
        Register Now
      </button>
    </div>
  );
}

export default Nav;
