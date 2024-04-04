"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Globe from "./Globe";
const Beams = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-dark-1 relative flex flex-col items-center justify-center antialiased">
        <Globe />
      <BackgroundBeams />
    </div>
  );
};
export default Beams;
