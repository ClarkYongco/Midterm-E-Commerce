import React from "react";

export default function CartDrawer({ isOpen, onClose, cart, removeFromCart, clearCart }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-600">
          ✖
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-100px)]">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-3"
            >
              <div>
                <p>{item.title}</p>
                <p className="text-sm text-gray-600">
                  ${item.price} × {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className="p-4 border-t">
        <button
          onClick={() => {
            alert("Order placed successfully! ");
            if (clearCart) clearCart(); // clears the cart after checkout
            onClose(); // close the cart drawer
          }}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
