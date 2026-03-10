import React from "react";
import Slider from "./Slider";
import Container from "../Container";

export default function HeroSection() {
  return (
    <Container>
      <section className=" flex items-center justify-between p-9 rounded-[12px]">
        <div className="flex-1 max-w-[50%] flex-col gap-4  ">
          <h1 className="text-4xl font-bold mb-[1rem]">
            One stop solution <span className="text-pink-500">E-Store</span>
          </h1>
          <p>Discover the latest headphone, earphones, mobiles, tablets etc.</p>
          <p>Exclusive deals just for you</p>
          <button className="bg-gray-100 p-[12px] text-pink-400 mt-2 cursor-pointer">
            Shop Now
          </button>
        </div>
        <Slider />
      </section>
    </Container>
  );
}
