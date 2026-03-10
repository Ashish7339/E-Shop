import FeturedProduct from "@/component/home/FeturedProduct";
import HeroSection from "@/component/home/HeroSection";
import RecentlyAdded from "@/component/home/RecentlyAdded";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RecentlyAdded />
      <FeturedProduct />  
    </>
  );
}
