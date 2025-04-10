"use client";

import React, { useState } from "react";
import Heading from "../Heading";
import Image from "next/image";
import CarouselButtons from "../common/CarouselButtons";
import { teamMembers } from "@/app/data/team";

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <div className="py-10 bg-[url('/our-team-bg.svg')] bg-cover flex w-full gap-10 flex-col">
      <Heading heading="Our Team" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full px-8">
        <div className="flex  items-center justify-center rounded-full border-double border-black overflow-hidden max-w-[200px] w-full">
          <Image
            src={teamMembers[currentIndex].image}
            alt={`${teamMembers[currentIndex].name}`}
            height={100}
            width={100}
            className="w-full rounded-full border-2 border-double"
          />
        </div>
        <div className="w-full max-w-[800px] flex flex-col gap-8 ">
          <p className="text-sm font-normal leading-normal capitalize">
            {teamMembers[currentIndex].about}
          </p>

          <div>
            <p className="text-lg font-bold leading-normal capitalize">
              {teamMembers[currentIndex].name}
            </p>
            <p className="text-sm font-normal leading-normal capitalize">
              {teamMembers[currentIndex].role}
            </p>
          </div>
        </div>
      </div>
      <CarouselButtons
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
      />
    </div>
  );
};

export default OurTeam;
