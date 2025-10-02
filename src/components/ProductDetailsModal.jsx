import React from "react";

export default function ProductDetailsModal({ product, onClose, addToCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <p>{product.description}</p>
        <p className="text-xl font-bold mt-2">${product.price}</p>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add to Cart
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
