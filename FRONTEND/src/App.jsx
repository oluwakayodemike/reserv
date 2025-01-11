// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css'; // Optional, if you want to style the App container

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        {/* Additional content for your page */}
        <h1>Welcome to PACompany</h1>
        <p>Find your dream apartment.</p>
      </main>
    </div>
  );
}

export default App;