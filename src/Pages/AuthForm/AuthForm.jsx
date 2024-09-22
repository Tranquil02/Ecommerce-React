import React from "react";
import "./authform.css";
import googleImage from "../../assets/gogle.png";
// import { useLocation } from "react-router-dom";

const AuthForm = ({ isSignup }) => {
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
          <h2>{isSignup ? "Create an account" : "Log in to your account"}</h2>
          <p>{isSignup ? "Enter your details below" : "Welcome back! Enter your details below"}</p>

          {/* Form */}
          <form>
            <input className="input" type="text" placeholder="Name" style={{ display: isSignup ? 'block' : 'none' }} />
            <input
              className="input"
              type="email"
              placeholder="Email or Phone Number"
            />
            <input className="input" type="password" placeholder="Password" />
            <button className="button">{isSignup ? "Create Account" : "Login Account"}</button>
          </form>

          {/* Google Signup */}
          <button className="google-button">
            <img src={googleImage} alt="Google logo" />
            {isSignup ? "Sign up with Google" : "Log in with Google"}
          </button>

          {/* Login/Signup Link */}
          <div className="login-link">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <a href={isSignup ? "/login" : "/signup"}>{isSignup ? "Log in" : "Sign up"}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Signup = () => {
//   const location = useLocation();
//   const isSignupPage = location.pathname === "/signup";

//   return <AuthForm isSignup={isSignupPage} />;
// };

export default AuthForm;
