import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MobileTabs from './components/MobileTabs/MobileTabs'; 
import HeroSearch from './components/HeroSearch/HeroSearch';
import PropertyGrid from './components/PropertyGrid/PropertyGrid';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <MobileTabs />
        <main>
          <Routes>
            {/* Home page: HeroSearch + PropertyGrid */}
            <Route 
              path="/" 
              element={
                <>
                  <HeroSearch />
                  <PropertyGrid />
                </>
              } 
            />
            {/* Property details page */}
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
