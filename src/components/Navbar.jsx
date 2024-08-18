import React, { useEffect, useState } from 'react';

const sectionIds = ['Home', 'About', 'Events', 'Team', 'Contact'];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="nav-left flex items-center">
        <img className='w-[4rem]' src="/assets/logo.png" alt="Rotaract Club Logo" />
        <h2 className='text-3xl pl-2 font-semibold'>Rotaract Club</h2>
      </div>
      <div className="nav-right flex items-center text-gray-400 px-10 text-2xl gap-10 bg-[#7F0627] rounded-l-full -mr-5">
        {sectionIds.map((sectionId, i) => (
          <h3
            key={i}
            className={`cursor-pointer ${activeLink === sectionId ? 'text-white' : ''}`}
            onClick={() => scrollToSection(sectionId)}
          >
            {sectionId}
          </h3>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;