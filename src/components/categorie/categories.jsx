import React, { useState } from "react";
import "./Categories.css";

const BrowseCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = [
    { name: "Phones", icon: "fas fa-mobile-alt" },
    { name: "Computers", icon: "fas fa-desktop" },
    { name: "SmartWatch", icon: "fas fa-clock" },
    { name: "Camera", icon: "fas fa-camera" },
    { name: "HeadPhones", icon: "fas fa-headphones" },
    { name: "Gaming", icon: "fas fa-gamepad" },
  ];
  // console.log(selectedCategory)

  return (
    <div className="container">
      {/* Categories Header */}
      <div className="categories-header">
        <div className="indicator"></div>
        <h2 className="categories-title">Categories</h2>
      </div>

      {/* Main Heading and Navigation Arrows */}
      <div className="top-heading">
        <h1 className="main-heading">Browse By Category</h1>
        <div className="navigation">
          <button className="nav-button">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="nav-button">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-item ${selectedCategory === index ? 'selected' : ''}`}
            onClick={() => setSelectedCategory(index)}
          >
            <i className={category.icon + " icons"}></i>
            <p className="category-label">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCategories;
