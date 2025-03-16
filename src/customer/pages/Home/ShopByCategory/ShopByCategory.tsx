import React from "react";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
  return (
    <div className="flex flex-wrap justify-center gap-7">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
        <ShopByCategoryCard />
      ))}
    </div>
  );
};

export default ShopByCategory;
