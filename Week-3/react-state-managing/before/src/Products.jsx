import React, { useState } from "react";
import "./App.css";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { Link } from "react-router-dom";

export default function Products() {
  const { category } = useParams();
  const [size, setSize] = useState("");
  const {
    data: products,
    error,
    loading,
  } = useFetch("products?category=" + category);

  function handleChange(e) {
    setSize(e.target.value);
  }

  const filteredProduct = size
    ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size)))
    : products;

  if (error) throw error;
  if (loading) return <Spinner />;
  if (products.length === 0) return <PageNotFound />;

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <Link to={`/${category}/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </Link>
      </div>
    );
  }

  return (
    <>
      <main>
        <section id="filters">
          <label htmlFor="size">Filter by Size:</label>{" "}
          <select id="size" value={size} onChange={handleChange}>
            <option value="">All sizes</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          {size && <h2>Found {filteredProduct.length} items.</h2>}
        </section>
        <section id="products">{filteredProduct.map(renderProduct)}</section>
      </main>
    </>
  );
}
