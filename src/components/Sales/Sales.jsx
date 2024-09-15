import React, { useState } from 'react';
import "../Sales/Sales.css";
import gameImg from "../../assets/game.png";

function SalesComponent({saleName,saleDate}) {
  const [products, setProducts] = useState([
    // product data here
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      image: gameImg,
      salePrice: 120,
      actualPrice: 160,
      discount: 41// Example discount percentage
    },
    {
      id: 2,
      name: 'HAVIT HV-G92 Gamepad',
      image: gameImg,
      salePrice: 120,
      actualPrice: 160,
      discount: 41// Example discount percentage
    },
    {
      id: 3,
      name: 'HAVIT HV-G92 Gamepad',
      image: gameImg,
      salePrice: 120,
      actualPrice: 160,
      discount: 41// Example discount percentage
    },
    {
      id: 4,
      name: 'HAVIT HV-G92 Gamepad',
      image: gameImg,
      salePrice: 120,
      actualPrice: 160,
      discount: 41// Example discount percentage
    },
    {
      id: 5,
      name: 'HAVIT HV-G92 Gamepad',
      image: gameImg,
      salePrice: 120,
      actualPrice: 160,
      discount: 41// Example discount percentage
    },
    {
      id: 6,
      name: 'HAVIT HV-G92 Gamepad',
      image: gameImg,
      salePrice: 120,
      actualPrice: 160,
      discount: 41// Example discount percentage
    },
    
  ]);

  const handleAddToCart = (productId) => {
    // Handle adding product to cart logic
  };

  return (
    <div className="sales-container">
      <h3 className='Sales-date'>{saleDate}</h3>
      <h2 className='Sale-heading'>{saleName}</h2>
      <div className="product-scroll-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
          <div className="discount-label">{product.discount}% OFF</div>
            <img src={product.image} alt={product.name} />
            <div className="icon-container">
              <button><i className="fa-regular fa-heart"></i></button>
              <button><i className="fa-regular fa-eye"></i></button>
            </div>
            <h3 className='product-name'>{product.name}</h3>
          <div className='price-container'>
              <p className='Sale-price'>${product.salePrice}</p>
              <p className='Actual-price'>${product.actualPrice}</p>
            </div>

          <button className='Add-Cart'onClick={handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button className="view-all-button">View All Products</button>
    </div>
  );
}

export default SalesComponent;