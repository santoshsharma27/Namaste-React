import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Grocery = () => {
  return (
    <div className="text-center pt-32">
      <h2 className="text-2xl font-semibold">
        Our Grocery Store is currently unavailable
      </h2>
      <p className="mt-4 text-gray-600">
        We apologize for any inconvenience caused. Please check back with us
        later.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default Grocery;
