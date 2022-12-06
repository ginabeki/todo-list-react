import React from 'react';
import ReactDOM from 'react-dom/client';
import './functionBased/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './functionBased/components/Navbar/Navbar';
import Home from './functionBased/pages/Home';
import About from './functionBased/pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </Router>

  </React.StrictMode>,
);
