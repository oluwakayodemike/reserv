import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaHeart } from 'react-icons/fa';
import propertiesData from '../../data/propertiesData.js';
import './PropertyGrid.css';

// Dynamically import all images from the 'images' directory
const importImages = require.context('../../images', false, /\.(jpg|jpeg|png|gif)$/);
const images = importImages.keys().reduce((acc, path) => {
  const imageName = path.replace('./', ''); // Clean up the path to get the image name
  acc[imageName] = importImages(path); // Create a mapping from image name to image URL
  return acc;
}, {});

const PropertyCard = ({ property }) => (
  <div className="property-card">
    {/* Make the entire card a clickable link */}
    <Link to={`/property/${property.id}`} className="property-link">
      <div className="property-image">
        <img src={images[property.image]} alt={property.address} />
        <button className="favorite-button">
          <FaHeart />
        </button>
        {property.hotPrice && <span className="hot-price">Hot price</span>}
      </div>
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
    </Link>
  </div>
);

const PropertyGrid = () => {
  const properties = propertiesData;

  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
