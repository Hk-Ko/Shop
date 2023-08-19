import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import "animate.css"

const App = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="detail/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </div>
  );
};

export default App;
