import React, { createContext, useState, useContext } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isNavOpen, setNavOpen }}>
      {children}
    </NavContext.Provider>
  );
};