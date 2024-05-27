import React from "react";

const ProductDetail = () => {
  const products = [
    { name: "Perk", quantity: 10, sales: 7 },
    { name: "Pepsi", quantity: 10, sales: 20 },
    { name: "Coke", quantity: 18, sales: 50 },
    { name: "Maggi", quantity: 41, sales: 22 },
    { name: "5Star", quantity: 7, sales: 9 },
  ];

  const filtereddata = products.filter(
    (product) => product.sales > product.quantity
  );
  return (
    <div>
      <h1>Product Details</h1>
      <ul>
        {filtereddata.map((product) => (
          <li>
            Name: {product.name} , Quantity: {product.quantity} ,Sales:
            {product.sales}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
