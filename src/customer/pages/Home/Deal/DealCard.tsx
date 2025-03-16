import React from "react";

const DealCard = () => {
  return (
    <div className="w-[10rem] cursor-pointer">
      <img
        className="border-x-[7px] border-t-[7px] border-grey-600 w-full h-[12rem] object-cover object-top"
        src="https://www.redeluxe.com/cdn/shop/files/hermes-handbag-kelly-grey-hermes-kelly-mini-ii-etain-greige-veau-epsom-leather-palladium-plated-y-stamp-redeluxe-46347635196214.jpg?v=1706534785"
        alt=""
      />
      <div className="border-4 border-black bg-black text-white p-2 text-center">
        <p className="text-lg font-semibold">Hermes Pre-owned</p>
        <p className="text-2xl font-bold">5% OFF</p>
        <p className="text-balance text-lg">shop now</p>
      </div>
    </div>
  );
};

export default DealCard;
