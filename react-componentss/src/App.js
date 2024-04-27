
import React from 'react';
import './App.css';
import LayoutManager from './components/LayoutManager/LayoutManager';
import DynamicComponent from './mycomponents/DynamicContent';
import DynamicComponentAdder from './mycomponents/DynamicCodeAdder';
import DynamicCode from './mycomponents/DynamicCode';
import { LayoutContext, LayoutProvider } from './mycomponents/LayoutContext';
import CardsContainer from './mycomponents/CardsContainer';

function App() {
  return (
    <div className="App">
      <h1>Hello React App</h1>
      {/* <DynamicComponent/> */}
      <DynamicComponentAdder/>
      {/* <DynamicCode/> */}
      {/* <LayoutManager /> */}


      <LayoutProvider>
      <div className="App">
        <h1 className=" my-4">Cards Heading</h1>
        <CardsContainer />
        
      </div>
    </LayoutProvider>
    </div>
  );
}

export default App;
