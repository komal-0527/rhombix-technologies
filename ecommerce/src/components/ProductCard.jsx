import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain p-4 bg-gray-50"
      />
      <div className="px-4 pb-4">
        <h3 className="text-lg font-semibold h-16 overflow-hidden text-gray-800">
          {product.title}
        </h3>
        <p className="text-[#7d5448]] font-bold text-xl mt-2">
          ${product.price}
        </p>
        <button className="mt-4 w-full bg-[#7d5448] text-white py-2 rounded hover:bg-[#8c5c4e] transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
