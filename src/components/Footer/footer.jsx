import React from 'react';
import './footer.css'; // Importing the CSS file
import googlePlay from "../../assets/googleget.png";
import appleStore from "../../assets/appstore.png";
import qr from "../../assets/qr.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Exclusive</h4>
        <p>Subscribe to our newsletter</p>
        <p>Get 10% off your first order!</p>
        <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            aria-label="Email for subscription" 
            required 
          />
          <button type="submit" aria-label="Subscribe">
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>

      <div className="footer-section">
        <h4>Support</h4>
        <address>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>Email: <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a></p>
          <p>Phone: <a href="tel:+88015888889999">+88015-88888-9999</a></p>
        </address>
      </div>

      <div className="footer-section">
        <h4>Account</h4>
        <ul>
          <li><a href="#my-account">My Account</a></li>
          <li><a href="#login">Login / Register</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#wishlist">Wishlist</a></li>
          <li><a href="#shop">Shop</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-of-use">Terms of Use</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Download App</h4>
        <p>Save $3 with App for New Users Only</p>
        <div className="app-links">
          <img src={googlePlay}alt="Download on Google Play" />
          <img src={appleStore} alt="Download on the App Store" />
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook-f" aria-label="Facebook"></i>
          <i className="fab fa-twitter" aria-label="Twitter"></i>
          <i className="fab fa-instagram" aria-label="Instagram"></i>
          <i className="fab fa-linkedin-in" aria-label="LinkedIn"></i>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2022 Rimel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
