// MenuShimmer.js
import React from "react";

const MenuShimmer = () => {
  return (
    <div className="space-y-6 pt-48 mx-auto" style={{ maxWidth: "768px" }}>
      {/* Placeholder for each item */}
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center justify-center p-4 bg-gray-200 rounded-lg h-32 animate-pulse shadow-lg"
        >
          {/* Item Details Placeholder */}
          <div className="flex-1 text-left md:w-3/5">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-3/4 mb-1"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6"></div>
          </div>

          {/* Item Image Placeholder */}
          <div className="flex flex-col md:flex-row items-center md:w-2/5 mt-4 md:mt-0 justify-end">
            <div className="w-32 h-24 bg-gray-300 rounded-md mb-4 md:mb-0 md:mr-4"></div>
            {/* Action Buttons Placeholder */}
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <div className="h-10 bg-gray-300 rounded w-full md:w-12"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuShimmer;
