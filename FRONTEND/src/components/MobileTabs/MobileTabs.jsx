import React, { useState } from 'react';
import { FaBed, FaPlane, FaCar, FaUber, FaTaxi } from 'react-icons/fa';
import './MobileTabs.css';

const MobileTabs = () => {
  const [activeTab, setActiveTab] = useState('stays');

  const tabs = [
    { id: 'stays', label: 'Stays', icon: FaBed },
    { id: 'flights', label: 'Flights', icon: FaPlane },
    { id: 'cars', label: 'Car rentals', icon: FaCar },
    { id: 'taxi', label: 'Airport taxis', icon: FaTaxi },
    { id: 'stays', label: 'Stays', icon: FaBed },
    { id: 'flights', label: 'Flights', icon: FaPlane },
    { id: 'cars', label: 'Car rentals', icon: FaCar },
    { id: 'taxi', label: 'Airport taxis', icon: FaTaxi },
    { id: 'stays', label: 'Stays', icon: FaBed },
    { id: 'flights', label: 'Flights', icon: FaPlane },
    { id: 'cars', label: 'Car rentals', icon: FaCar },
    { id: 'taxi', label: 'Airport taxis', icon: FaTaxi },
    { id: 'stays', label: 'Stays', icon: FaBed },
    { id: 'flights', label: 'Flights', icon: FaPlane },
    { id: 'cars', label: 'Car rentals', icon: FaCar },
    { id: 'taxi', label: 'Airport taxis', icon: FaTaxi },
  ];

  return (
    <nav className="mobile-tabs">
      <ul className="mobile-tabs-list">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <li key={tab.id}>
              <a
                className={`mobile-tab-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon className="mobile-tab-icon" />
                {tab.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileTabs;