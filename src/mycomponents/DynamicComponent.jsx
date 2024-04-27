// DynamicComponent.js
import React from 'react';
import Layout from './Layout';
import LayoutSelector from './LayoutSelector';

const DynamicComponent = ({ data, updateComponent, removeComponent }) => {
  const { id, layout, heading, paragraph, imageSrc } = data;

  // ... all the handlers you defined before
//   const DynamicComponent = ({ data, updateComponent, removeComponent }) => {
//     const { id, layout, heading, paragraph, imageSrc } = data;
  
    const handleLayoutChange = (newLayout) => {
      updateComponent(id, { ...data, layout: newLayout });
    };
  
    const handleHeadingChange = (newHeading) => {
      updateComponent(id, { ...data, heading: newHeading });
    };
  
    const handleParagraphChange = (newParagraph) => {
      updateComponent(id, { ...data, paragraph: newParagraph });
    };
  
    const handleImageChange = (newImageSrc) => {
      updateComponent(id, { ...data, imageSrc: newImageSrc });
    };

  return (
    <div>
      <Layout
        layout={layout}
        heading={heading}
        paragraph={paragraph}
        imageSrc={imageSrc}
        onHeadingChange={handleHeadingChange}
        onParagraphChange={handleParagraphChange}
        onImageChange={handleImageChange}
      />
      <LayoutSelector onSelect={handleLayoutChange} />
      <button className="btn btn-danger mt-2" onClick={() => removeComponent(id)}>Remove</button>
    </div>
  );
};

export default DynamicComponent;
