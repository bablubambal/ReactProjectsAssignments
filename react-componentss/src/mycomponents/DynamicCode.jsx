import React, { useState } from 'react';

// Define individual components for each layout
const LayoutImageTopTextBottom = ({ text, imageSrc, onTextChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img src={imageSrc} alt="dynamic" className="img-fluid mb-3" />
      <textarea className="form-control" value={text} onChange={e => onTextChange(e.target.value)} />
    </div>
  );
};

const LayoutTextLeftImageRight = ({ text, imageSrc, onTextChange }) => {
  return (
    <div className="d-flex justify-content-between">
      <textarea className="form-control me-3" value={text} onChange={e => onTextChange(e.target.value)} />
      <img src={imageSrc} alt="dynamic" className="img-fluid" />
    </div>
  );
};

const LayoutImageLeftTextRight = ({ text, imageSrc, onTextChange }) => {
  return (
    <div className="d-flex justify-content-between">
      <img src={imageSrc} alt="dynamic" className="img-fluid me-3" />
      <textarea className="form-control" value={text} onChange={e => onTextChange(e.target.value)} />
    </div>
  );
};

// Component to handle the layout selection and content editing
const EditableComponent = ({ component, updateComponent }) => {
  const { id, layout, text, imageSrc } = component;

  const handleTextChange = (newText) => {
    updateComponent(id, { ...component, text: newText });
  };

  const handleLayoutChange = (newLayout) => {
    updateComponent(id, { ...component, layout: newLayout });
  };

  const renderLayout = () => {
    const layoutComponents = {
      'image-top-text-bottom': <LayoutImageTopTextBottom text={text} imageSrc={imageSrc} onTextChange={handleTextChange} />,
      'text-left-image-right': <LayoutTextLeftImageRight text={text} imageSrc={imageSrc} onTextChange={handleTextChange} />,
      'image-left-text-right': <LayoutImageLeftTextRight text={text} imageSrc={imageSrc} onTextChange={handleTextChange} />
    };
    return layoutComponents[layout];
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {renderLayout()}
        <select className="form-select mt-3" value={layout} onChange={e => handleLayoutChange(e.target.value)}>
          <option value="image-top-text-bottom">Image Top / Text Bottom</option>
          <option value="text-left-image-right">Text Left / Image Right</option>
          <option value="image-left-text-right">Image Left / Text Right</option>
        </select>
      </div>
    </div>
  );
};

// Main component to add new components
const DynamicCode = () => {
  const [components, setComponents] = useState([]);

  const addComponent = () => {
    const newComponent = {
      id: Math.random(),
      layout: 'image-top-text-bottom',
      text: 'Editable content...',
      imageSrc: 'https://via.placeholder.com/150'
    };
    setComponents(components.concat(newComponent));
  };

  const updateComponent = (id, updatedData) => {
    setComponents(components.map(comp => (comp.id === id ? updatedData : comp)));
  };

  return (
    <div>
      <button onClick={addComponent} className="btn btn-primary mb-3">Add Component</button>
      <div>
        {components.map((component) => (
          <EditableComponent key={component.id} component={component} updateComponent={updateComponent} />
        ))}
      </div>
    </div>
  );
};

export default DynamicCode;
