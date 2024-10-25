import React, { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcDiscover } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const [loading, setLoading] = useState(false); // State for loader

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    // Simulate payment processing (replace this with actual payment logic)
    setTimeout(() => {
      setLoading(false);
      // Redirect to the success page
      navigate("/order-success");
    }, 2000); // Simulate a 2-second processing time
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-5">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Payment Information
        </h2>

        <div className="flex justify-center mb-6">
          <FaCcVisa className="text-4xl mx-2 text-blue-600" />
          <FaCcMastercard className="text-4xl mx-2 text-red-600" />
          <FaCcDiscover className="text-4xl mx-2 text-orange-600" />
        </div>

        <div className="mb-4 text-center">
          <span className="text-lg font-semibold">Total Amount: </span>
          <span className="text-xl text-green-600"> ₹400.00</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <input
              type="number"
              name="cardNumber"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="cardName"
            >
              Cardholder Name
            </label>
            <input
              type="text"
              name="cardName"
              id="cardName"
              value={formData.cardName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="sm:w-1/2 pr-2 mb-4 sm:mb-0">
              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="expiryDate"
              >
                Expiry Date (MM/YY)
              </label>
              <input
                type="number"
                name="expiryDate"
                id="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="MM/YY"
              />
            </div>
            <div className="sm:w-1/2 pl-2">
              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="cvv"
              >
                CVV
              </label>
              <input
                type="number"
                name="cvv"
                id="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123"
              />
            </div>
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition duration-200 text-center ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8H4z"
                  />
                </svg>
                Processing...
              </div>
            ) : (
              "Pay Now"
            )}
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between">
            <span>Product Price</span>
            <span> ₹400.00</span>
          </div>
          <div className="flex justify-between my-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span> ₹400.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
