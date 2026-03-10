"use client";
import React, { useContext, useState } from "react";
import { MainContext } from "../Context/CartContext";

export default function page() {
  const { cart, setCart } = useContext(MainContext);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const removeItem = (id) => {
    const updateCart = cart.filter((item) => item.pId !== id);
    setCart(updateCart);
  };

  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.pId}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>₹{item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.pId)}
                  className="px-3 py-1 bg-gray-200"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.pId)}
                  className="px-3 py-1 bg-gray-200"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(item.pId)}
                className="text-red-500 cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))
        )}

        <div className="mt-6 text-xl font-bold">Total: ₹{totalPrice}</div>
      </div>
    </div>
  );
}
