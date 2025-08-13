import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Navbar } from './components/pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
