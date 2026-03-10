"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
  "https://akns-images.eonline.com/eol_images/Entire_Site/2022724/rs_640x640-220824161753-1.png",
  "https://geeklane.in/cdn/shop/files/emojiwake_transparent.png?v=1731590614&width=1000",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
];

export default function Slider() {
  const [image, setImages] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImages((currentValue) => {
        if (currentValue == images.length - 1) {
          return 0;
        } else {
          return currentValue + 1;
        }
      });
    }, 2500);
    return () => clearInterval(interval); //unmounte
  }, []);

  return (
    <div className="flex-1 max-w-[50%] overflow-hidden relative h-[450px] flex  justify-center items-center">
      <div className="  relative h-full w-full ">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1500 ${
              image === index ? "opacity-500" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
