// import React, { createContext, useState } from 'react';

// export const LayoutContext = createContext();

// export const LayoutProvider = ({ children }) => {
//   const [layoutComponents, setLayoutComponents] = useState([]);

//   // Add your context methods here...

//   return (
//     <LayoutContext.Provider value={{ layoutComponents, setLayoutComponents }}>
//       {children}
//     </LayoutContext.Provider>
//   );
// };

// import React, { createContext, useState, useContext } from 'react';

// export const LayoutContext = createContext();

// export const LayoutProvider = ({ children }) => {
//   const [layoutComponents, setLayoutComponents] = useState([]);

//   // ... (other context logic)

//   return (
//     <LayoutContext.Provider value={{ layoutComponents, setLayoutComponents }}>
//       {children}
//     </LayoutContext.Provider>
//   );
// };

// export const useLayout = () => useContext(LayoutContext);



import React, { createContext, useState, useContext } from 'react';

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const [components, setComponents] = useState([]);

  const addComponent = (component) => {
    setComponents((prevComponents) => [...prevComponents, component]);
  };

  const removeComponent = (id) => {
    setComponents((prevComponents) => prevComponents.filter((c) => c.id !== id));
  };

  const value = {
    components,
    addComponent,
    removeComponent,
  };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

const useLayout = () => useContext(LayoutContext);

export { LayoutContext, LayoutProvider, useLayout };

