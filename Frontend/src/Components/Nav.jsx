import React from 'react'

const Nav = () => {
  return (
    <div className="w-screen fixed top-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b  px-6 py-3 flex items-center justify-between text-white shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold ">
        HACK<span className='text-red-500'>NOVA</span>
      </h1>

      {/* Nav Links */}
      <div className="hidden md:flex gap-6 text-sm uppercase tracking-wider font-semibold">
        {['About', 'Tracks', 'Schedule', 'Prizes', 'Sponsors', 'Team', 'Join us'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="hover:text-red-400 transition relative group"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <button className="border-1 text-white px-5 py-2 rounded-md font-semibold  hover:shadow-pink-400 transition hover:scale-105">
        Register Now
      </button>
    </div>
  )
}

export default Nav
