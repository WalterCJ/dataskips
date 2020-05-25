import React from "react";
import { ReactComponent as Image } from "./assets/image.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";

export default function Sidebar() {
  return (
    <div className="justify-center p-12 md:p-5 md:w-7/12 bg-white">
      <div className="md:w-full lg:w-5/6 xl:max-w-sm mx-auto hidden md:block">
        <Image />
      </div>
      <div className="flex items-center md:justify-center mt-4">
        <span className="h-10 w-10 md:h-8 md:w-8">
          <Logo />
        </span>
        <span className="font-bold text-2xl md:text-2xl lg:text-3xl text-red-500 pl-4">
          DataSkips
        </span>
      </div>
      <div className="pl-0">
        <h1 className="font-light text-lg mt-6 md:text-center">
          Transform your tabular data!
        </h1>
        <p className="text-base md:text-base text-gray-600 mt-3 leading-relaxed md:text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          veritatis quo quas. Dignissimos accusantium aliquid, dolor numquam
          eveniet error quae harum? Debitis officia rem atque fugit praesentium
          autem ullam recusandae?
        </p>
      </div>
    </div>
  );
}
