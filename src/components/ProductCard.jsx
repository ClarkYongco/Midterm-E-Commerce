import React from "react";

export default function ProductCard({ product, addToCart }) {
  const handleBuyNow = () => {
    addToCart(product); // Add to cart first
    alert("Bought Successfully!"); // Show popup
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="font-semibold text-lg mt-2">{product.title}</h2>
      <p className="text-gray-600">₱{product.price}</p>

      <div className="flex gap-2 mt-3">
        {/* Buy Now */}
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-blue-700 text-white px-3 py-2 rounded hover:bg-blue-800"
        >
          Buy Now
        </button>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-green-700 text-white px-3 py-2 rounded hover:bg-green-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
