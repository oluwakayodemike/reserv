import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import './HeroSearch.css';
import heroBg from '../../images/hero-bg.jpg';
import { filters } from '../../data/filters';

const HeroSearch = () => {
  const [filterValues, setFilterValues] = useState({
    propertyType: 'New home',
    rooms: '1, 2 rooms',
    priceRange: '$570 000 — 800 000',
    location: '',
  });

  const [selectedFilter, setSelectedFilter] = useState('Buy');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Placeholder logic based on the selected filter
  const getPlaceholderText = () => {
    switch (selectedFilter) {
      case 'Buy':
        return 'Enter a location to buy';
      case 'Rent':
        return 'Where do you want to rent?';
      case 'Sell':
        return 'Choose a location to sell';
      case 'Realtor':
        return 'Search for realtors';
      default:
        return 'Enter location';
    }
  };

  // Handler to update filter values dynamically
  const handleFilterChange = (name, value) => {
    setFilterValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Dynamically fetch filters based on the selected option
  const currentFilters = filters[selectedFilter.toLowerCase()];

  if (!currentFilters) {
    console.error(`No filters found for the selected category: ${selectedFilter}`);
  }

  // Filter tabs component
  const FilterTabs = () => (
    <div className="filter-tabs">
      {['Buy', 'Rent', 'Sell', 'Realtor'].map((tab) => (
        <button
          key={tab}
          className={`filter-tab ${selectedFilter === tab ? 'active' : ''}`}
          onClick={() => setSelectedFilter(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  // Search filters component
  const SearchFilters = () => (
    <div className="search-filters">
      {/* Desktop Search Bar */}
      <div className="search-bar">
        {currentFilters && currentFilters.map((filter) => (
          <div className="search-input-group" key={filter.name}>
            <select
              value={filterValues[filter.name]}
              onChange={(e) => handleFilterChange(filter.name, e.target.value)}
              className="search-select"
            >
              {filter.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Location Input */}
        <div className="search-input-group location-input">
          <FaMapMarkerAlt className="location-icon" />
          <input
            type="text"
            value={filterValues.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            placeholder={getPlaceholderText()}
            className="search-input"
          />
        </div>

        <button className="map-toggle">Show on map</button>
        <button className="search-button">
          <FaSearch />
        </button>
      </div>

      {/* Mobile Search Box */}
      <div className="mobile-search-box">
        <button
          className="mobile-search-input"
          onClick={() => setIsModalOpen(true)}
        >
          {getPlaceholderText()}
        </button>
        <button className="mobile-search-button">
          <FaMapMarkerAlt />
        </button>
      </div>
    </div>
  );

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <h1>Find your dream apartment</h1>
      </div>

      {/* Separated Filter Tabs */}
      <FilterTabs />

      {/* Main Search Filters */}
      <SearchFilters />

      {/* Modal for Mobile Search */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="modal-close-button"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <div className="modal-search-bar">
              <div className="modal-filter-heading">
                <h2>{selectedFilter}</h2>
                <p>{getPlaceholderText()}</p>
              </div>

              {currentFilters && currentFilters.map((filter) => (
                <div className="search-input-group" key={filter.name}>
                  <label className="modal-filter-title">{filter.label}</label>
                  <select
                    value={filterValues[filter.name]}
                    onChange={(e) => handleFilterChange(filter.name, e.target.value)}
                    className="search-select"
                  >
                    {filter.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

              <div className="search-input-group location-input">
                <label className="location-label">
                  <span className="location-icon-wrapper">Location</span>
                </label>
                <input
                  type="text"
                  value={filterValues.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  placeholder={getPlaceholderText()}
                  className="search-input"
                />
              </div>

              <button className="map-toggle">Show on map</button>
              <button className="search-button">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSearch;