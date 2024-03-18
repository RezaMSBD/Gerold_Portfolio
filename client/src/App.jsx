import React from "react";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import TopHeader from "./Shared/TopHeader/TopHeader";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
