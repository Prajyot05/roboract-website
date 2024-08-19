import React, { useContext, useEffect, useState } from 'react';
import { NavContext } from '../context/NavbarContext';

const MobileNav = () => {
  const { isNavOpen ,setNavOpen } = useContext(NavContext);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } 
    else {
      document.body.style.overflow = 'auto';
    }
  }, [isNavOpen]);

  useEffect(() => {
    const handleScroll = () => {
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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectionIds = ['Home', 'About', 'Events', 'Team', 'Contact'];

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const scrollToY = element.offsetTop;
      window.scrollTo({ top: scrollToY, behavior: 'smooth' });
      setNavOpen(false);
    }
  };

  return (
    isNavOpen && (
      <div className={`mobile-nav fixed flex flex-col items-center justify-center md:hidden top-0 left-0 w-full h-screen bg-[#7F0627] z-50 ${!isNavOpen && 'slideUp'}`}>
        {sectionIds.map((sectionId, i) => (
          <h2
            key={i}
            className={`text-6xl ${activeLink === sectionId ? 'text-[#EDF4EA]' : 'text-[#828282]'}`}
            onClick={() => handleSectionClick(sectionId)}
          >
            {sectionId}
          </h2>
        ))}
      </div>
    )
  );
};

export default MobileNav;