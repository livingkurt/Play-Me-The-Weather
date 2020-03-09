import React, { useEffect } from 'react';
import './App.css.scss';
import Home from './components/pages/Home.jsx'
import axios from 'axios'

function App() {

  const search = async () => {
    const res = await axios.get('https://api.spotify.com/v1/search?q=roadhouse%20blues')
    console.log(res.data)
  }
  useEffect(() => {
    search()
  }, [])

  return (
    <div className="main_container">
      <nav className="nav_container">
        <h3 className="app_title">Weather Music App</h3>
        {/* <button>Sign In With Spotify</button> */}
      </nav>
      <Home />
    </div>
  );
}

export default App;
