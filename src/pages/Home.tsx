import React, { useEffect, useState } from "react";
import "../styles/themes.css";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to Theme Switcher</h1>
      <p>This content changes style based on the selected theme.</p>
      <button className="main-button">Click Me</button>

      <div className="product-grid">
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description.slice(0, 80)}...</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-rating">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
