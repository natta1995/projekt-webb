import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ProductPage from "./pages/products";
import Navbar from "./navbar"
import ContactPage from "./pages/contacts";
import Footer from "./footer"
import ProductDetailPage from "./pages/productDetail";
import BookClub from "./pages/bookclub";


function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/bookclub" element={<BookClub/>} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
