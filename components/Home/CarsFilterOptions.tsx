"use Client";
import React from "react";

const CarsFilterOptions = () => {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold">Cars Catalog</h2>
        <h3>Explore the cars you like</h3>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Manufacturer
          </option>
          <option>Honda</option>
          <option>BMW</option>
        </select>
      </div>
    </div>
  );
};

export default CarsFilterOptions;
