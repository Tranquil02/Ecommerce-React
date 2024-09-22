import React from "react";
import "./about.css";
import shoppingGirl from "../../assets/shoppingGirl.png";
import Statistics from "../../components/Statistics/Statistics";
import TeamPage from "../../components/peoples/people";
import Features from "../../components/features/features";

export const About = () => {
  return (
    <div className="our-story">
      <div className="Contact-container">
        <nav className="breadcrumb">
          <a href="/" className="breadcrumb-item">
            Home
          </a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-active">About</span>
        </nav>
      </div>

      <div className="main-content">
        {/* Text Section */}
        <div className="text-section">
          <h1 className="title">Our Story</h1>
          <p className="description">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="description">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img
            src={shoppingGirl}
            alt="Two women shopping, holding bags and smiling while looking at a phone"
            className="image"
          />
        </div>
      </div>
      <Statistics />
      <TeamPage />
      <Features/>
    </div>
  );
};
