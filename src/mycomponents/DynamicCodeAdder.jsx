// import React, { useState } from 'react';

// const EditableText = ({ text, onTextChange }) => (
//   <input type="text" value={text} onChange={(e) => onTextChange(e.target.value)} />
// );

// const EditableImage = ({ src, onSrcChange }) => (
//   <div>
//     <img src={src} alt="Editable" style={{ width: '100px', height: '100px' }} />
//     <input type="text" value={src} onChange={(e) => onSrcChange(e.target.value)} />
//   </div>
// );

// const ComponentLayoutOne = ({ onTextChange, onSrcChange }) => (
//   <div className="layout-one">
//     <EditableText text="Lorem Ipsum is simply dummy text" onTextChange={onTextChange} />
//     <EditableImage src="https://via.placeholder.com/150" onSrcChange={onSrcChange} />
//     {/* ... other layout details */}
//   </div>
// );

// const ComponentLayoutTwo = ({ onTextChange, onSrcChange }) => (
//   <div className="layout-two">
//     {/* similar to ComponentLayoutOne but with different layout */}
//   </div>
// );

// function DynamicComponentAdder() {
//   const [components, setComponents] = useState([]);
//   const [editableText, setEditableText] = useState('Lorem Ipsum is simply dummy text');
//   const [editableSrc, setEditableSrc] = useState('https://via.placeholder.com/150');

//   const addComponent = (layoutType) => {
//     const newComponent = layoutType === 'layoutOne' ? (
//       <ComponentLayoutOne
//         onTextChange={(newText) => setEditableText(newText)}
//         onSrcChange={(newSrc) => setEditableSrc(newSrc)}
//       />
//     ) : (
//       <ComponentLayoutTwo
//         onTextChange={(newText) => setEditableText(newText)}
//         onSrcChange={(newSrc) => setEditableSrc(newSrc)}
//       />
//     );
//     setComponents([...components, newComponent]);
//   };

//   return (
//     <div>
//       <button onClick={() => addComponent('layoutOne')}>Add Layout One</button>
//       <button onClick={() => addComponent('layoutTwo')}>Add Layout Two</button>
//       <div>
//         {components.map((Component, index) => (
//           <div key={index}>{Component}</div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DynamicComponentAdder;



// import React, { useState } from 'react';

// // Editable components
// const EditableText = ({ text, onTextChange, style }) => (
//   <input
//     type="text"
//     value={text}
//     onChange={(e) => onTextChange(e.target.value)}
//     style={{ ...style, padding: '5px', margin: '5px 0' }}
//   />
// );

// const EditableImage = ({ src, onSrcChange, style }) => (
//   <div style={{ ...style, textAlign: 'center' }}>
//     <img src={src} alt="Editable" style={{ maxWidth: '100%', maxHeight: '200px' }} />
//     <input
//       type="text"
//       value={src}
//       onChange={(e) => onSrcChange(e.target.value)}
//       style={{ padding: '5px', margin: '5px 0' }}
//     />
//   </div>
// );

// // Layout Components
// const ComponentLayoutOne = ({ onTextChange, onSrcChange }) => {
//   // Inline styles for layout one
//   const styles = {
//     container: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'flex-start',
//       padding: '20px',
//       border: '1px solid #ccc',
//       borderRadius: '8px',
//       marginBottom: '20px',
//     },
//     textSection: {
//       width: '60%',
//       marginRight: '20px'
//     },
//     imageSection: {
//       width: '35%',
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.textSection}>
//         <EditableText text="Lorem Ipsum is simply dummy text" onTextChange={onTextChange} />
//         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
//         <button style={{ padding: '10px' }}>Left image right text</button>
//       </div>
//       <EditableImage src="https://via.placeholder.com/150" onSrcChange={onSrcChange} style={styles.imageSection} />
//     </div>
//   );
// };

// // Similar structure for ComponentLayoutTwo but with reversed sections


// const ComponentLayoutTwo = ({ onTextChange, onSrcChange }) => {
//     // Inline styles for layout one
//     const styles = {
//       container: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'flex-start',
//         padding: '20px',
//         border: '1px solid #ccc',
//         borderRadius: '8px',
//         marginBottom: '20px',
//       },
//       textSection: {
//         width: '60%',
//         marginRight: '20px'
//       },
//       imageSection: {
//         width: '35%',
//       }
//     };
  
//     return (
//       <div style={styles.container}>
        
//         <EditableImage src="https://via.placeholder.com/150" onSrcChange={onSrcChange} style={styles.imageSection} />
//         <div style={styles.textSection}>
//           <EditableText text="Lorem Ipsum is simply dummy text" onTextChange={onTextChange} />
//           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
//           <button style={{ padding: '10px' }}>Left image right text</button>
//         </div>
//       </div>
//     );
//   };


// function DynamicComponentAdder() {
//   const [components, setComponents] = useState([]);

//   const addComponent = (layoutType) => {
//     const Component = layoutType === 'layoutOne' ? ComponentLayoutOne : ComponentLayoutTwo;
//     setComponents(components.concat(Component));
//   };

//   return (
//     <div>
//       <button onClick={() => addComponent('layoutOne')}>Add Component One</button>
//       <button onClick={() => addComponent('layout')}>Add Component TWO</button>
//       {/* Add more buttons for different layout types */}
//       <div>
//         {components.map((Component, index) => (
//           <Component key={index} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DynamicComponentAdder;





// 8888888888888888888888888888888888888888888888888888888888888888888

// import React, { useState } from 'react';

// const EditableText = ({ text, onTextChange }) => (
//   <input
//     type="text"
//     value={text}
//     onChange={e => onTextChange(e.target.value)}
//     style={{ display: 'block', margin: '10px 0' }}
//   />
// );

// const ComponentLayout = ({ id, componentData, updateComponent }) => {
//   const handleTextChange = (newText) => {
//     updateComponent(id, { ...componentData, text: newText });
//   };

//   const handleParagraphChange = (newParagraph) => {
//     updateComponent(id, { ...componentData, paragraph: newParagraph });
//   };

//   return (
//     <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '10px' }}>
//       <EditableText text={componentData.text} onTextChange={handleTextChange} />
//       <EditableText text={componentData.paragraph} onTextChange={handleParagraphChange} />
//       <img src={componentData.imageSrc} alt="dynamic" style={{ maxWidth: '100px', maxHeight: '100px' }} />
//     </div>
//   );
// };

// function DynamicComponentAdder() {
//   const [components, setComponents] = useState([]);

//   const addComponent = () => {
//     const newComponent = {
//       id: Math.random(), // quick way to get a unique id
//       text: 'Editable Heading',
//       paragraph: 'Editable paragraph content...',
//       imageSrc: 'https://via.placeholder.com/150'
//     };
//     setComponents(components.concat(newComponent));
//   };

//   const updateComponent = (id, updatedData) => {
//     setComponents(components.map(comp => comp.id === id ? updatedData : comp));
//   };

//   return (
//     <div>
//       <button onClick={addComponent}>Add Component</button>
//       <div>
//         {components.map((componentData) => (
//           <ComponentLayout
//             key={componentData.id}
//             id={componentData.id}
//             componentData={componentData}
//             updateComponent={updateComponent}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DynamicComponentAdder;



// *********************************************


// import React, { useState } from 'react';

// const EditableField = ({ value, onValueChange, fieldType = 'text', className = '' }) => {
//   return (
//     <input
//       type={fieldType}
//       className={`form-control ${className}`}
//       value={value}
//       onChange={e => onValueChange(e.target.value)}
//     />
//   );
// };

// const LayoutSelector = ({ onSelect }) => {
//   return (
//     <select className="form-control" onChange={e => onSelect(e.target.value)}>
//       <option value="textTopImageBottom">Text Top, Image Bottom</option>
//       <option value="textLeftImageRight">Text Left, Image Right</option>
//       <option value="textRightImageLeft">Text Right, Image Left</option>
//     </select>
//   );
// };

// const DynamicComponent = ({ data, updateComponent, removeComponent }) => {
//   const { id, layout, heading, paragraph, imageSrc } = data;

//   const handleLayoutChange = (newLayout) => {
//     updateComponent(id, { ...data, layout: newLayout });
//   };

//   const handleHeadingChange = (newHeading) => {
//     updateComponent(id, { ...data, heading: newHeading });
//   };

//   const handleParagraphChange = (newParagraph) => {
//     updateComponent(id, { ...data, paragraph: newParagraph });
//   };

//   const handleImageChange = (newImageSrc) => {
//     updateComponent(id, { ...data, imageSrc: newImageSrc });
//   };

//   const getLayoutClass = (layout) => {
//     switch (layout) {
//       case 'textTopImageBottom':
//         return 'flex-column';
//       case 'textLeftImageRight':
//         return 'flex-row';
//       case 'textRightImageLeft':
//         return 'flex-row-reverse';
//       default:
//         return '';
//     }
//   };

//   return (
//     <div className={`d-flex ${getLayoutClass(layout)} mb-4`}>
//       <div className="flex-fill p-2">
//         <EditableField value={heading} onValueChange={handleHeadingChange} />
//         <EditableField value={paragraph} onValueChange={handleParagraphChange} />
//       </div>
//       <div className="flex-fill p-2">
//         <img src={imageSrc} className="img-fluid" alt="dynamic" />
//         <EditableField value={imageSrc} onValueChange={handleImageChange} />
//       </div>
//       <div className="p-2">
//         <LayoutSelector onSelect={handleLayoutChange} />
//         <button className="btn btn-danger mt-2" onClick={() => removeComponent(id)}>Remove</button>
//       </div>
//     </div>
//   );
// };

// function DynamicComponentAdder() {
//   const [components, setComponents] = useState([]);

//   const addComponent = () => {
//     const newComponent = {
//       id: Math.random(),
//       layout: 'textTopImageBottom', // default layout
//       heading: 'Editable Heading',
//       paragraph: 'Editable paragraph content...',
//       imageSrc: 'https://via.placeholder.com/150'
//     };
//     setComponents([...components, newComponent]);
//   };

//   const updateComponent = (id, updatedData) => {
//     setComponents(components.map(comp => comp.id === id ? updatedData : comp));
//   };

//   const removeComponent = (id) => {
//     setComponents(components.filter(comp => comp.id !== id));
//   };

//   return (
//     <div className="container mt-3">
//       <button className="btn btn-primary" onClick={addComponent}>Add Component</button>
//       {components.map((componentData) => (
//         <DynamicComponent
//           key={componentData.id}
//           data={componentData}
//           updateComponent={updateComponent}
//           removeComponent={removeComponent}
//         />
//       ))}
//     </div>
//   );
// }

// export default DynamicComponentAdder;



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
