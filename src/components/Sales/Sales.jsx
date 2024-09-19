import React, { useState } from "react";
import "../Sales/Sales.css";
import gameImg from "../../assets/game.png";
import Countdown from "../countdown/countdown";

function SalesComponent({ saleName, saleDate,scroll }) {
  const [products, setProducts] = useState([
    // product data here
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      image: gameImg,
      salePrice: 120,
      actualPrice: 160,
      discount: 41, 
      rating: 4,
      reviewCount: 88,
    },
    {
      id: 2,
      name: "HAVIT HV-G92 Gamepad",
      image: gameImg,
      salePrice: 120,
      actualPrice: 160,
      discount: 41,
      rating: 2.5,
      reviewCount: 88, 
    },
    {
      id: 3,
      name: "HAVIT HV-G92 Gamepad",
      image: gameImg,
      salePrice: 120,
      actualPrice: 160,
      discount: 41,
      rating: 4.5,
      reviewCount: 88, 
    },
    {
      id: 4,
      name: "HAVIT HV-G92 Gamepad",
      image: gameImg,
      salePrice: 120,
      actualPrice: 160,
      discount: 41, 
      rating: 4.5,
      reviewCount: 88,
    },
    {
      id: 5,
      name: "HAVIT HV-G92 Gamepad",
      image: gameImg,
      salePrice: 120,
      actualPrice: 160,
      discount: 41, 
      rating: 3.5,
      reviewCount: 88,
    },
    {
      id: 6,
      name: "HAVIT HV-G92 Gamepad",
      image: gameImg,
      salePrice: 120,
      actualPrice: 160,
      discount: 41,
      rating: 4.5,
      reviewCount: 88,
    },
  ]);

  const handleAddToCart = (productId) => {
    // Handle adding product to cart logic
  };

  const scrollStyle=`${scroll?"product-scroll-container":"product-scroll-container noScroll"}`

  return (
    <div className="sales-container ">
      <div className="sales-top">
        <div className="indicator"></div>
        <h3 className="Sales-date">{saleDate}</h3>
      </div>
      <div className="Flash-top">
        <h2 className="Sale-heading">{saleName}</h2>
        {saleName == "Flash Sales" && <Countdown />}
      </div>
      <div className={scrollStyle}>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="discount-label">{product.discount}% OFF</div>
            <img src={product.image} alt={product.name} />
            <div className="icon-container">
              <button>
                <i className="fa-regular fa-heart"></i>
              </button>
              <button>
                <i className="fa-regular fa-eye"></i>
              </button>
            </div>
            <h3 className="product-name">{product.name}</h3>
            <div className="price-container">
              <p className="Sale-price">${product.salePrice}</p>
              <p className="Actual-price">${product.actualPrice}</p>
            </div>

            {/* Rating Section */}
            <div className="rating-section">
              <div className="stars">
                {Array.from({ length: 5 }, (_, index) => {
                  if (index < Math.floor(product.rating)) {
                    return <i key={index} className="fas fa-star"></i>;
                  } else if (index < product.rating) {
                    return <i key={index} className="fas fa-star-half-alt"></i>;
                  }
                  return (
                    <i key={index} className="fas fa-star text-gray-300"></i>
                  );
                })}
              </div>
              <span className="review-count">({product.reviewCount})</span>
            </div>

            <button className="Add-Cart" onClick={handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button className="view-all-button">View All Products</button>
    </div>
  );
}

export default SalesComponent;
