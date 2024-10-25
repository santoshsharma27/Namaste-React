import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Contact = () => {
  return (
    <div className="text-center pt-32">
      <h1 className="text-2xl font-semibold">Page is under maintenance</h1>
      <p className="mt-4 text-gray-600">
        We are working hard to get this page up and running soon. Thank you for
        your patience!
      </p>
      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default Contact;
