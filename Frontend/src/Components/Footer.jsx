import React, { useEffect, useRef } from 'react'
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaPaperPlane } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-gray-300 px-6 py-12 md:px-20 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo + Desc */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-red-500 to-red-900 rounded-full flex items-center justify-center text-xl font-bold">H</div>
            <h1 className="text-2xl font-bold tracking-wider text-white">
              HACK<span className="text-red-500">NOVA</span>
            </h1>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            The ultimate cosmic hackathon experience where dimensions collide and innovation transcends reality.
          </p>
          <div className="flex gap-4 text-2xl text-white">
            <FaTwitter className="hover:text-red-400 cursor-pointer hover:bg-white hover:rounded-full hover:p-1" />
            <FaInstagram className="hover:text-red-400 cursor-pointer hover:bg-white hover:rounded-full hover:p-1" />
            <FaLinkedin className="hover:text-red-400 cursor-pointer hover:bg-white hover:rounded-full hover:p-1" />
            <FaGithub className="hover:text-red-400 cursor-pointer hover:bg-white hover:rounded-full hover:p-1" />
            <FaDiscord className="hover:text-red-400 cursor-pointer hover:bg-white hover:rounded-full hover:p-1" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {['Home', 'About', 'Tracks', 'Schedule', 'Prizes', 'Sponsors', 'Team', 'Register'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-red-400 transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            {['Code of Conduct', 'FAQ', 'Sponsor Prospectus', 'Hacker Guide', 'Past Winners', 'Terms & Conditions', 'Privacy Policy'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-red-400 transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-sm mb-4">Stay updated with the latest news and announcements about HackNova.</p>
          <form className="flex rounded-md overflow-hidden shadow-inner bg-[#131824] focus-within:ring-2 focus-within:ring-red-500">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 bg-transparent text-white outline-none"
            />
            <button type="submit" className="bg-red-500 hover:bg-red-600 p-2 w-10 flex items-center justify-center">
              <FaPaperPlane />
            </button>
          </form>
          <p className="text-xs mt-3 text-gray-400">
            By subscribing, you agree to our <a href="#privacy-policy" className="underline hover:text-red-400">Privacy Policy</a> and consent to receive updates from HackNova.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <hr className="border-gray-800 my-8" />
      <p className="text-center text-xs text-gray-500">
        © 2023 HackNova. All rights reserved. A cosmic event organized by the Multiverse Innovation Initiative.
      </p>
    </footer>
  )
}

export default Footer
