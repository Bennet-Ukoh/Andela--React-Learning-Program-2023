import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";
import Details from "./Details";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="content">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carve Shoes</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
