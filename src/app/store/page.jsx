"use client";
import Container from "@/component/Container";
import React, { useEffect, useState } from "react";
import { getCategories, getProduct } from "@/libarary";
import ProductBox from "@/component/ProductBox";
import Link from "next/link";

export default function StorePage() {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  // fetch category once page load
  useEffect(() => {
    getCategories().then((res) => {
      setCategory(res);
    });
  }, []);
  // fetch products when selected categroy changes
  useEffect(() => {
    getProduct(selectedCategory).then((res) => {
      setProducts(res);
    });
  }, [selectedCategory]);
  return (
    <Container className="grid grid-cols-5 ">
      <CategoryListing
        categories={category}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <ProductListing product={products} />
    </Container>
  );
}

const CategoryListing = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <div className="flex flex-col mt-1 mr-4">
      <h4 className=" text-center rounded-2xl shadow-lg text-3xl bg-pink-400 text-white p-3 m-1">
        Categories
      </h4>

      {categories.map((d, i) => (
        <button
          key={"Category-" + i}
          onClick={() => {
            setSelectedCategory(d.slug);
          }}
          className="px-4 py-2 font-semibold text-pink-500 bg-white rounded-lg shadow-md  focus:bg-pink-300 focus:text-white focus:outline-none hover:ring-2 hover:ring-pink-400 hover:ring-opacity-75  my-0.5"
        >
          {d.name}
        </button>
      ))}
    </div>
  );
};

const ProductListing = ({ product }) => {
  return (
    <div className="col-span-4 grid-cols-4 grid gap-5 mt-3">
      {product.map((d) => (
        <ProductBox product={d} key={"Product-" + d.id} />
      ))}
    </div>
  );
};
