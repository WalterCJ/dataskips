import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-lightblue">
      <div className="max-w-5xl mx-auto lg:max-w-6xl">
        <div className="flex flex-col min-h-screen md:flex-row lg:p-20">
          <div className="flex flex-col md:flex-row flex-grow bg-gray lg:shadow-2xl lg:rounded-lg lg:overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
