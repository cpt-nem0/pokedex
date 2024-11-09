import React from "react";

const AnimatedLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="relative">
        {/* Pokeball */}
        <div className="w-24 h-24 rounded-full border-8 border-gray-800 bg-white relative overflow-hidden animate-bounce">
          {/* Red top half */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-red-500" />

          {/* Center button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-gray-800">
            <div className="w-full h-full rounded-full bg-white animate-pulse" />
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-6 text-center">
          <div className="relative">
            <div className="flex space-x-1 justify-center items-center text-lg font-semibold text-gray-700">
              {"Loading...".split("").map((c, idx) => (
                <span
                  key={idx}
                  className="animate-bounce"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLoader;
