import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap items-center justify-center pt-4">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="m-4 w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[320px] flex flex-col rounded-lg bg-gray-100 shadow-lg animate-pulse"
          >
            {/* Image Placeholder */}
            <div className="h-[150px] sm:h-[180px] md:h-[200px] rounded-lg bg-gray-300 m-5"></div>

            {/* Text Placeholders */}
            <div className="p-4 flex flex-col h-full">
              {/* Title Placeholder */}
              <div className="h-6 bg-gray-300 rounded-md mb-2"></div>

              {/* Rating Placeholder */}
              <div className="flex items-center justify-start text-sm mt-auto">
                <span className="bg-gray-300 rounded-full flex items-center justify-center w-5 h-5"></span>
                <div className="h-5 bg-gray-300 rounded-md w-12 mx-2"></div>
                <h4 className="font-bold text-gray-300 px-1">•</h4>
                <div className="h-5 bg-gray-300 rounded-md w-24"></div>
              </div>

              {/* Cuisines and Locality Placeholders */}
              <div className="h-4 bg-gray-300 rounded-md mt-3 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded-md mt-1"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
