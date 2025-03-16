import React from "react";
import "./ShopByCategory.css";

const ShopByCategoryCard = () => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
      <div className="custom-border w-[150px] h-[150px] lg:w-[180px] lg:h-[180px] rounded-full">
        <img
          className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
          src="https://www.pharmacydirect.co.nz/images/P/dior-forever-cushion-loose-powder-fair-10g-0-35oz-.26133280102.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ShopByCategoryCard;
