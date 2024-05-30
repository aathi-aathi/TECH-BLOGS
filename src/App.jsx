import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Category from './category';
import './App.css'

function App() {
  return (
    <Router>
      <nav>
        <ul className='category-list'>
          <li><Link to="/category/all">ALL</Link></li>
          <li><Link to="/category/FSD">FULL STACK DEVELOPMENT</Link></li>
          <li><Link to="/category/dataScience">DATA SCIENCE</Link></li>
          <li><Link to="/category/cyberSecurity">CYBER SECURITY</Link></li>
          <li><Link to="/category/career">CAREER</Link></li>

        </ul>
      </nav>
      <Routes>
      <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </Router>

  );
}

export default App;
