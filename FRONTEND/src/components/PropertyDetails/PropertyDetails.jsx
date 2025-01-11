// src/components/PropertyDetails/PropertyDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../../data/propertiesData';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams(); // Retrieve the property id from the URL
  const property = propertiesData.find((property) => property.id === parseInt(id));

  if (!property) {
    return <div className="property-details">Property not found</div>;
  }

  // Dynamically require the image
  const propertyImage = require(`../../images/${property.image}`);

  return (
    <div className="property-details-container">
      <div className="property-header">
        {/* Display main property image */}
        <img
          src={propertyImage.default || propertyImage}
          alt={property.address}
          className="property-main-image"
        />
        <div className="property-header-info">
          <h1 className="property-title">{property.address}</h1>
          <div className="stars">
            {/* Render star ratings dynamically */}
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < Math.floor(property.rating || 4.8) ? '' : 'empty'}`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="property-location">{property.address}</p>
          <p className="property-description">
            Located in the heart of the city, this property is perfect for your next stay.
          </p>
        </div>
      </div>
      <div className="property-body">
        <div className="property-details">
          <h3>Details</h3>
          <ul>
            <li>Bedrooms: {property.bedrooms}</li>
            <li>Rooms: {property.rooms}</li>
            <li>Square Feet: {property.sqft.toLocaleString()}</li>
          </ul>
        </div>
        <div className="property-pricing">
          <p>1 day rental: €80 / night</p>
          <p>Weekly rental: €70 / night</p>
          <button className="show-contacts-button">Show Contacts</button>
        </div>
      </div>
      <div className="property-gallery">
        <h3>Gallery</h3>
        <div className="gallery-images">
          {/* Example gallery thumbnails */}
          <img
            src={propertyImage.default || propertyImage}
            alt="Gallery thumbnail"
            className="gallery-thumbnail"
          />
          <img
            src={propertyImage.default || propertyImage}
            alt="Gallery thumbnail"
            className="gallery-thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
