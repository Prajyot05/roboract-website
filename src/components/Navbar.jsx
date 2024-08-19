import React, { useContext, useEffect, useState } from 'react';
// import Hamburger from './Hamburger';
import Hamburger from 'hamburger-react'
import { NavContext } from '../context/NavbarContext';

const sectionIds = ['Home', 'About', 'Events', 'Team', 'Contact'];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  const { isNavOpen, setNavOpen } = useContext(NavContext);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const scrollToY = element.offsetTop;
      window.scrollTo({ top: scrollToY, behavior: 'smooth' });
    }
  };

  const determineActiveSection = () => {
    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(sectionId);
        }
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
      determineActiveSection();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar w-full flex justify-between p-5 fixed z-50 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-left flex cursor-pointer items-center">
        <img className='w-[2rem] md:w-[4rem]' src="/assets/logo.png" alt="Rotaract Club Logo" />
        <h2 className='text-lg sm:text-3xl pl-2 font-semibold'>Rotaract Club</h2>
      </div>
      <div className="nav-right flex items-center text-gray-400 px-2 sm:px-5 md:px-10 text-2xl gap-10 bg-[#7F0627] rounded-l-full -mr-5">
        {sectionIds.map((sectionId, i) => (
          <h3
            key={i}
            className={`cursor-pointer hidden md:block ${activeLink === sectionId && 'text-white'}`}
            onClick={() => scrollToSection(sectionId)}
          >
            {sectionId}
          </h3>
        ))}
        <div className="hamburger md:hidden">
          {/* <Hamburger /> */}
          <Hamburger color="#ffffff" toggled={isNavOpen} toggle={setNavOpen} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;