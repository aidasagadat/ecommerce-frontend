import React from "react";
import "./ProductCard.css";

const images = [
  "https://cdn-obyavleniya.kaspi.kz/webp/89/89f24d82-8cd1-4b00-8ede-54674fa0e546/5-full.jpg",
  "https://cdn-obyavleniya.kaspi.kz/webp/89/89f24d82-8cd1-4b00-8ede-54674fa0e546/3-full.jpg",
];

const ProductCard = () => {
  return (
    <div className="group px-4 relative">
      <div className="card">
        {images.map((item) => (
          <img className="card-media object-top" src={item} alt="" />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
