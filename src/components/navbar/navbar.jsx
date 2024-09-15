import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../navbar/navbar.css";

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Logo'>
            Exclusive
        </div>
        <div className='options'>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>
        </div>
        <div className='search'>
            <input type='text' placeholder='What are you Looking for ?'/>
            <div className='search-icon'>
                <i className="fas fa-search"></i>
            </div>
        </div>
        <div className='others'>
        <div className='icon'>
                <i className="fas fa-heart"></i>
            </div>
            <div className='icon'>
            <i class="fa-duotone fa-solid fa-cart-shopping"></i>
            </div>
        </div>

    </div>
  )
}
