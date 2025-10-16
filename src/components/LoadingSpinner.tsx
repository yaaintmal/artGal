import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-50 rounded-lg shadow-md border border-gray-200">
      <div
        className="animate-spin h-10 w-10 border-4 border-t-4 border-gray-200 rounded-full"
        role="status"
        aria-live="polite"
        aria-label="Loading Artworks"
      ></div>

      <p className="mt-4 text-lg font-semibold text-gray-700">
        Fetching Artworks from the official AIC Institute in Chicago 🎨
      </p>

      {/* Optional subtext */}
      <p className="text-sm text-gray-500">
        Just a moment while we load the masterpieces.
      </p>
    </div>
  );
};

export default LoadingSpinner;
