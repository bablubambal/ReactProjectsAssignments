// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // For routing
// import { AuthProvider } from './contexts/AuthProvider'; // Importing AuthProvider
// import Dashboard from './layouts/Dashboard'; // Importing Dashboard layout

// ReactDOM.render(
//   <AuthProvider>
//     <Router>
//       <Switch>
//         <Route path="/dashboard" component={Dashboard} />
//         {/* Add more routes as needed */}
//       </Switch>
//     </Router>
//   </AuthProvider>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import { AuthProvider } from './contexts/AuthProvider';
import Dashboard from './layouts/Dashboard';

ReactDOM.render(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' element = {<>Hello world</>} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </AuthProvider>,
  document.getElementById('root')
);
