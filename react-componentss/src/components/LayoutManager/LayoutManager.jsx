// import React from 'react';
// import { useLayout } from '../../context/LayoutContext';
// import CardComponent from '../CardComponent/CardComponent';
// // import AdjustableComponent from '../AdjustableComponent/AdjustableComponent';
// import './LayoutManager.css';
// import AdjustableComponent from '../AdjustableComponents/AdjustableComponent';

// const LayoutManager = () => {
//   const { layoutComponents } = useLayout();

//   // Component logic...
  

//   return (
//     <div className="layout-manager">
//       {/* JSX code to render your layoutComponents */}
//     </div>
//   );
// };

// export default LayoutManager;

import React from 'react';
import { useLayout } from '../../context/LayoutContext';
import AdjustableComponent from '../AdjustableComponent/AdjustableComponent';
import CardComponent from '../CardComponent/CardComponent';

const LayoutManager = () => {
  const { components, addComponent, removeComponent } = useLayout();

  // Logic to render the components based on the type or any other property
  const renderComponent = (component) => {
    switch (component.type) {
      case 'card':
        return (
          <CardComponent
            key={component.id}
            // Pass other necessary props
          />
        );
      case 'adjustable':
        return (
          <AdjustableComponent
            key={component.id}
            // Pass other necessary props
          />
        );
      // Add other cases as necessary
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Dynamically render components */}
      {components.map(renderComponent)}
      <button onClick={() => addComponent(/* new component data */)}>
        Add Component
      </button>
    </div>
  );
};

export default LayoutManager;

