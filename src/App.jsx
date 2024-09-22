import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar"
import Homepage from "./Pages/homepage/homepage";
import { About } from "./Pages/About/About";
import {Contact} from "./Pages/Contact/Contact"
// import Signup from "./Pages/AuthForm/AuthForm";
import Footer from "./components/Footer/footer";
// import Login from "./Pages/Login/Login";
import AuthForm from "./Pages/AuthForm/AuthForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<AuthForm isSignup={true} />} />
        <Route path="/login" element={<AuthForm isSignup={false}/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
