// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Layout from "./Pages/Layout";
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// import logo from './logo.svg';
// import React from 'react';
// import './App.css';
// import Layout from "./Pages/Layout";
// import Home from './Pages/Home'
// import Dashboard from './Pages/Dashboard';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//       <Router>
//         <Routes>
//         <Route path="/" exact component={Layout}/>
//         <Route path='/Home' Component={Home} />
//         <Route path='/Dashboard' component={Dashboard} />
//         </Routes>
//       </Router>
//   );
// }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);
// export default App;


 
