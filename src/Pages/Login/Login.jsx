import React from "react";
import "../AuthForm/signup.css";
import googleImage from "../../assets/gogle.png";
import { useLocation } from "react-router-dom";

const Signup = () => {
  const location = useLocation();

  // Check if the current path is exactly "/signup"
  const isSignupPage = location.pathname === "/signup";
  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Left Side (Image Section) */}
        <div className="image-section">
          <img
            src="https://placehold.co/600x600"
            alt="Smartphone next to a shopping cart with two pink shopping bags"
          />
        </div>
        {/* Right Side (Form Section) */}
        <div className="form-section">
          <h2>Create an account</h2>
          <p>Enter your details below</p>

          {/* Form */}
          <form>
            <input className="input" type="text" placeholder="Name" />
            <input
              className="input"
              type="email"
              placeholder="Email or Phone Number"
            />
            <input className="input" type="password" placeholder="Password" />
            {!isSignupPage ? (
              <button className="button">Create Account</button>
            ) : (
              <button className="button"> Login Account</button>
            )}
          </form>

          {/* Google Signup */}
          <button className="google-button">
            <img src={googleImage} alt="Google logo" />
            Sign up with Google
          </button>

          {/* Login Link */}
          <div className="login-link">
            <p>
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
