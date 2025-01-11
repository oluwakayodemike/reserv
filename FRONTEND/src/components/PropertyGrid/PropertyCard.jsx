// src/components/PropertyGrid/PropertyCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './PropertyCard.css';

// PropertyCard Component
const PropertyCard = ({ property, images }) => {
  return (
    // Wrap the property card in a Link to enable navigation
    <Link to={`/property/${property.id}`} className="property-link">
      <div className="property-card">
        {/* Property Image Section */}
        <div className="property-image">
          <img src={images[property.image]} alt={property.address} />
          <button className="favorite-button">
            <FaHeart />
          </button>
          {/* Display "Hot price" if property is flagged */}
          {property.hotPrice && <span className="hot-price">Hot price</span>}
        </div>

        {/* Property Info Section */}
        <div className="property-info">
          <div className="property-price">${property.price.toLocaleString()}</div>
          <div className="property-address">{property.address}</div>
          <div className="property-details">
            <span>{property.bedrooms} bedrooms</span>
            <span>•</span>
            <span>{property.rooms} rooms</span>
            <span>•</span>
            <span>{property.sqft.toLocaleString()} Sq. ft</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
