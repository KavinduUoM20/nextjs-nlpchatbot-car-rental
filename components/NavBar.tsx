"use Client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function NavBar() {
  return (
    <div className="flex items-center justify-between px-4 md:px-8 py-2 shadow-sm border-b-[2px]">
      <Image src="/logo.png" alt="logo" width={100} height={100} />

      <div className="hidden md:flex gap-5">
        <h1 className="border-b-2 border-white hover:text-blue-500 hover:border-b-4 hover:border-blue-500 transition-colors duration-300 p-3">
          Home
        </h1>
        <h1 className="border-b-2 border-white hover:text-blue-500 hover:border-b-4 hover:border-blue-500 transition-colors duration-300 p-3">
          About
        </h1>
        <h1 className="border-b-2 border-white hover:text-blue-500 hover:border-b-4 hover:border-blue-500 transition-colors duration-300 p-3">
          Contact us
        </h1>
      </div>
      <UserButton />
    </div>
  );
}

export default NavBar;
