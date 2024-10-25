import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice"; // Adjust the path if needed

const OrderSuccess = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { firstName, phoneNumber, address, city } = location.state || {};

  // Generate a random order ID (e.g., a 6-digit number)
  const orderId = Math.floor(100000 + Math.random() * 900000);

  // Clear the cart on component mount
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="p-6 mt-8 text-center pt-32">
      <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-4" />
      <h2 className="text-3xl font-bold text-green-600">
        Order Placed Successfully!
      </h2>
      <p className="mt-4 text-lg font-medium">Thank you for your order</p>
      <p className="mt-2">Your Order will be delivered to your address</p>
      <p className="mt-2">
        Expect your order to arrive in approximately 45 minutes.
      </p>
      <p className="mt-4 font-medium">
        Order ID: <span className="text-blue-500">{orderId}</span>
      </p>
      <p className="mt-4 text-sm text-gray-600">
        If you have any questions, feel free to contact us at 1800-800-800.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        You can also track your order status in the app.
      </p>
      <div className="mt-6">
        <Link
          className="bg-blue-500 text-white font-semibold px-4 py-3 rounded hover:bg-blue-600"
          to="/"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
