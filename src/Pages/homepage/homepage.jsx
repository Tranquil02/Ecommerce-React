import React from "react";
import { Navbar } from "../../components/navbar/navbar.jsx";
import { Side } from "../../components/sideComponent/Side.jsx";
import SalesComponent from "../../components/Sales/Sales.jsx";
import "../homepage/homepage.css";
import ImageSlider from "../../components/banner/banner.jsx";
import BrowseCategories from "../../components/categorie/categories.jsx";
import NewProductGrid from "../../components/NewArrival/NewArrival.jsx";
import Features from "../../components/features/features.jsx";
import Footer from "../../components/Footer/footer.jsx";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="firstContent">
        <Side />
        <ImageSlider showButtons="true" margin="auto 45px" width="800px"/>
      </div>
      <SalesComponent saleName="Flash Sales" saleDate="Today's" scroll="true"/>
      <BrowseCategories/>
      <SalesComponent saleName="Best Selling Products" saleDate="This Month" scroll={true}/>
      <ImageSlider margin="auto" width="1080px"/>
      <SalesComponent saleName="Explore Our Products" saleDate="Our Products"/>
      {/* <NewProductGrid/> */}
      <Features/>
      <Footer/>
    </>
  );
}

export default Homepage;
