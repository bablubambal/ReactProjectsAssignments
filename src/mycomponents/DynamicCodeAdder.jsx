
// DynamicComponentAdder.js
import React, { useState } from 'react';
import DynamicComponent from './DynamicComponent';

const DynamicComponentAdder = () => {
  // ... useState and functions you already defined
  const [components, setComponents] = useState([]);

 


  const addComponent = () => {
    const newComponent = {
      id: Math.random(),
      layout: 'textTopImageBottom', // default layout
      heading: 'Editable Heading',
      paragraph: 'Editable paragraph content...',
      imageSrc: 'https://via.placeholder.com/150'
    };
    setComponents([...components, newComponent]);
  };

  const updateComponent = (id, updatedData) => {
    setComponents(components.map(comp => comp.id === id ? updatedData : comp));
  };

  const removeComponent = (id) => {
    setComponents(components.filter(comp => comp.id !== id));
  };


  return (
    <div className="container mt-3">
      <button className="btn btn-primary" onClick={addComponent}>Add Component</button>
      {components.map((componentData) => (
        <DynamicComponent
          key={componentData.id}
          data={componentData}
          updateComponent={updateComponent}
          removeComponent={removeComponent}
        />
      ))}
    </div>
  );
};

export default DynamicComponentAdder;
