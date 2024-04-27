import React, { useState } from 'react';

// Simple components for demonstration
const Layout = () => <div style={{ border: '2px solid blue', margin: '10px' }}>Layout Component</div>;
const TextField = () => <input type="text" placeholder="Enter text here" />;
const ImageComponent = () => <img src="https://via.placeholder.com/150" alt="placeholder" />;

function DynamicComponent() {
  const [components, setComponents] = useState([]);

  const addComponent = (type) => {
    const ComponentToAdd = {
      layout: <Layout key={Math.random()} />,
      textfield: <TextField key={Math.random()} />,
      image: <ImageComponent key={Math.random()} />
    }[type];

    setComponents([...components, ComponentToAdd]);
  };

  return (
    <div>
      <button onClick={() => addComponent('layout')}>Add Layout</button>
      <button onClick={() => addComponent('textfield')}>Add Text Field</button>
      <button onClick={() => addComponent('image')}>Add Image</button>
      <div>
        {components.map((Comp, index) => (
          <div key={index}>{Comp}</div>
        ))}
      </div>
    </div>
  );
}

export default DynamicComponent;
