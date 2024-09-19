// ProductGrid.js
import React from 'react';
import './arrival.css';
import ps5 from "../../assets/ps5.jpeg";

const newproducts = [
  {
    id: 1,
    image: ps5,
    title: 'PlayStation 5',
    description: 'Black and White version of the PS5 coming out on sale.',
  },
  {
    id: 2,
    image: 'womens-collection.png',
    title: "Women's Collections",
    description: 'Featured collections that give you another vibe.',
  },
  // Add more products as needed
];

const NewProductGrid = () => {
  return (
    <div className="new-container">
      <section className="new-featured">
        <div className="new-featured-label">Featured</div>
        <h1>New Arrival</h1>
      </section>
      <div className="new-product-grid">
        {newproducts.map(product => (
          <div className="new-product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button>Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProductGrid;
