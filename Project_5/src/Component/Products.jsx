import React from "react";

const Products = () => {
  const products = [
    { name: "Perk", quantity: 10, sales: 7 },
    { name: "Pepsi", quantity: 10, sales: 20 },
    { name: "Coke", quantity: 18, sales: 50 },
    { name: "Maggi", quantity: 41, sales: 22 },
    { name: "5Star", quantity: 7, sales: 9 },
  ];
  return (
    <>
      <h1>Product Name</h1>
      <ul>
        {products.map((product) => (
          <li> {product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Products;
