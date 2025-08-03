import React, { useEffect, useState } from "react";

const About = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div style={{ padding: "6rem 2rem" }}>
      <h1>Welcome to Theme Switcher</h1>
      <p>This content changes style based on the selected theme.</p>
      <button style={{ padding: "10px", marginBottom: "20px" }}>Click Me</button>
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {products.slice(0, 6).map((product) => (
          <div key={product.id} style={{ border: "1px solid gray", padding: "1rem" }}>
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
