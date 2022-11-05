import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Books from './components/Books';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
