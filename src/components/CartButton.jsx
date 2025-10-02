import React from "react";

export default function CartButton({ onClick, cartCount }) {
  return (
    <button
      onClick={onClick}
      className="relative bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100"
    >
      🛒 Cart
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
          {cartCount}
        </span>
      )}
    </button>
  );
}
