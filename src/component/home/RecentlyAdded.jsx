"use client";
import React, { useEffect, useState } from "react";

import Container from "../Container";
import ProductBox from "../ProductBox";

export default function RecentlyAdded() {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/mobile-accessories?limit=5&skip=5"
    );
    const data = await response.json();
    setProduct(data.products);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="bg-gray-100 p-3">
      <Container>
        <h1 className="text-center text-3xl font-bold ">
          Recentaly Added Products
        </h1>
        <div className=" grid grid-cols-5 gap-3 my-4">
          {product.map((prod) => {
            return <ProductBox key={prod.id} product={prod} />;
          })}
        </div>
      </Container>
    </div>
  );
}
