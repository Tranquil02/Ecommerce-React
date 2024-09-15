import React from "react";
import { Navbar } from "../../components/navbar/navbar.jsx";
import { Side } from "../../components/sideComponent/Side.jsx";
import SalesComponent from "../../components/Sales/Sales.jsx";
import "../homepage/homepage.css";
import { Banner } from "../../components/banner/banner.jsx";
import HeaderSale from "../../components/header/header.jsx";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="firstContent">
        <Side />
        <Banner />
      </div>
      <SalesComponent saleName="Flash Sale" saleDate="Today's"/>
      <SalesComponent saleName="Best Selling Products" saleDate="This Month"/>
    </>
  );
}

export default Homepage;
