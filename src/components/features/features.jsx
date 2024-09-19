import React from 'react';
import './features.css'; // Importing the CSS file

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <div className="icon">
        <i class="fas fa-shipping-fast"></i>
        </div>
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className="feature">
        <div className="icon">
          <i className="fas fa-headset"></i>
        </div>
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className="feature">
        <div className="icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Features;