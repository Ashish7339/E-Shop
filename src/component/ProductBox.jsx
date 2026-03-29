"use client";
import Link from "next/link";
import { useContext } from "react";
import { MainContext } from "../app/Context/CartContext";

export default function ProductBox({ product }) {
  const { addtoCart, cart, increaseQty, decreaseQty } = useContext(MainContext);
  const cartItem = cart.find((item) => item.id === product.id);
  return (
    <div className="transition-transform hover:-translate-y-1 duration-300 ease-in-out bg-white p-4 rounded-lg shadow-lg">
      <Link href={`/store/product-detail/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          height={150}
          className="h-48 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-105 mx-auto"
        />
      </Link>
      <div className="mt-4 flex flex-col justify-center align-middle">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-900 font-bold mt-2">₹{product.price}</p>

        {cartItem ? (
          // ✅ Quantity Controls
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => decreaseQty(product.id)}
              className="px-3 py-1 bg-gray-200 cursor-pointer"
            >
              -
            </button>

            <span>{cartItem.quantity}</span>

            <button
              onClick={() => increaseQty(product.id)}
              className="px-3 py-1 bg-gray-200"
            >
              +
            </button>
          </div>
        ) : (
          // ✅ Add to Cart Button
          <button
            onClick={() => addtoCart(product)}
            className="cursor-pointer mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
