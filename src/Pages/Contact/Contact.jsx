import React, { useState } from "react";
import "./contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      {/* Breadcrumb */}
      <div className="Contact-container">
        <nav className="breadcrumb">
          <a href="/" className="breadcrumb-item">
            Home
          </a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-active">Contact</span>
        </nav>
      </div>

      {/* Contact Section */}
      <div className="Contact-container contact-section">
        {/* Contact Info Section */}
        <div className="contact-info">
          {/* Call To Us */}
          <div className="contact-item">
            <div className="contact-icon phone-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="contact-details">
              <h3>Call To Us</h3>
              <p>We are available 24/7, 7 days a week.</p>
              <p className="contact-phone">Phone: +8801611112222</p>
            </div>
          </div>
          <hr />
          {/* Write To Us */}
          <div className="contact-item">
            <div className="contact-icon email-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-details">
              <h3>Write To Us</h3>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p className="contact-email">Emails: customer@exclusive.com</p>
              <p className="contact-email">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <form action="#" method="post">
            <div className="form-grid">
              <input
                type="text"
                placeholder="Your Name *"
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="form-input"
                required
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="form-input"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="form-textarea"
              required
            ></textarea>
            <div className="form-button">
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
