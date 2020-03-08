import React from 'react';
import './App.css.scss';
import Home from './components/pages/Home.jsx'

function App() {
  return (
    <div className="main_container">
      <nav className="nav_container">
        <h3 className="app_title">Weather Music App</h3>
      </nav>
      <Home />
    </div>
  );
}

export default App;
