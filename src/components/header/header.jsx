// Header.js
import React from 'react';
import LanguageSelector from "../languageSelector/language";
import "./header.css";

const HeaderSale = () => {
    return (
        <div className="Header">
            <p className="head-text">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <a href="/" className='shopLink'>Shop Now</a>
            <LanguageSelector />
        </div>
    );
};

export default HeaderSale;
