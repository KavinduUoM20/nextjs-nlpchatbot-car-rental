"use Client";
import { useEffect } from "react";

import Hero from "@/components/Home/Hero";
import CarsFilterOptions from "@/components/Home/CarsFilterOptions";
import SearchInput from "@/components/Home/SearchInput";
import Image from "next/image";
import { getCarsList } from "@/services";

export default function Home() {
  const getCarsList_ = async () => {
    const result = await getCarsList();
    console.log(result);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOptions />
    </div>
  );
}
