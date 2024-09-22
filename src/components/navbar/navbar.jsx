import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../navbar/navbar.css";

export const Navbar = () => {
  const location = useLocation();

  // Determine if the current path is "/signup" or "/login"
  const isSignupPage = location.pathname === "/signup";
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="Navbar">
      <div className="Logo">Exclusive</div>
      <div className="options">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact Us
            </NavLink>
          </li>
          {!isSignupPage && (
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Sign Up
              </NavLink>
            </li>
          ) }{!isLoginPage&&(
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Log In
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="options-other">
        <div className="search">
          <input type="text" placeholder="What are you looking for?" />
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
        </div>
        {!isSignupPage && !isLoginPage && (
          <>
            <div className="icon">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="icon">
              <i className="fas fa-heart"></i>
            </div>
            <div className="icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
