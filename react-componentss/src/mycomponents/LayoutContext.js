// LayoutContext.js
import React, { createContext, useState } from 'react';

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [layoutData, setLayoutData] = useState([]);

  const saveLayoutData = (data) => {
    setLayoutData(data);
  };

  return (
    <LayoutContext.Provider value={{ layoutData, saveLayoutData }}>
      {children}
    </LayoutContext.Provider>
  );
};
