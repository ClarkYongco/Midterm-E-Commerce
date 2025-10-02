import React from "react";
import CartButton from "./CartButton";

export default function Header({ onCartClick, cartCount }) {
  return (
    <header className="bg-amber-100 text-black p-4 flex items-center shadow-md">
      {/* Left spacer */}
      <div className="w-1/3"></div>

      {/* Center title */}
      <div className="w-1/3 text-center">
        <h1 className="text-2xl font-bold">RED GATE STORE</h1>
      </div>

      {/* Right side: Cart button */}
      <div className="w-1/3 flex justify-end">
        <CartButton onClick={onCartClick} cartCount={cartCount} />
      </div>
    </header>
  );
}
