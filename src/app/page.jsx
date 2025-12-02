'use client'

import Image from "next/image";
import Banner from "./(shared)/heroBanner/page";
import Tips from "./(shared)/tips/tips";
import Essentials from "./(shared)/essentials/essentials";
import Vets from "./(shared)/vets/vets";
import AllServiceCard from "./services/allServices/page";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AllServiceCard/>
      <Tips/>
      <Essentials/>
      <Vets/>
    </div>
  );
}
