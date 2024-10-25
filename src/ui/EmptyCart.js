import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { FaShoppingCart } from "react-icons/fa"; // For adding a cart icon

function EmptyCart() {
  return (
    <div className="pt-32 text-center">
      <FaShoppingCart className="text-6xl text-gray-400 mb-6 mx-auto" />
      <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty</h2>
      <p className="text-gray-600 mb-6">
        It looks like you haven't added anything to your cart yet. Start
        exploring our menu and fill it up with your favorite items!
      </p>
      <Link
        to="/" // Update this path based on your app's routing
        className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors"
      >
        Go to Home Page
      </Link>
    </div>
  );
}

export default EmptyCart;
