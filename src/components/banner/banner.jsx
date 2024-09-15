import React from 'react';
import "../banner/banner.css"
import BannerImg from "../../assets/banner.png";

export const Banner = () => {
  return (
    <div className="banner">
        <img src={BannerImg} alt="Banner" sizes='20px'/>
    </div>
  )
}
