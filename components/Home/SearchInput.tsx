"use Client";
import React from "react";

const SearchInput = () => {
  return (
    <div>
      <h1 className="text-center text-[20px] text-gray-500">
        Let's Search What you Need
      </h1>
      <div className="flex justify-center gap-5">
        <div className="flex bg-slate-100 p-2 rounded-xl">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-950"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Location"
              className="appearance-none text-gray-950 border-none bg-transparent p-2"
            />
          </div>
          <div>
            <input
              type="date"
              className="appearance-none border-none bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
