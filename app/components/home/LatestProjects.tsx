import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const LatestProjects = () => {
  return (
    <div className="bg-[#f6f7f8] py-10 flex flex-col gap-10">
      <Heading heading="Our Latest Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-4 items-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="relative  h-full w-full">
      <Image
        src={"/project1.png"}
        alt="Project 1"
        height={250}
        width={250}
        className="relative w-full rounded-xl"
      />
      <div className="p-6 bg-[rgba(255,255,255)] w-1/2 absolute bottom-10 right-10 rounded-xl border">
        <h5 className="text-color text-lg font-bold leading-normal">
          Rustic Chic Cottage
        </h5>
        <p className="text-sm font-normal leading-normal text-ellipsis text">
          A cozy cottage with rustic charm and chic accents. The design combines
          vintage furniture
        </p>
        <Button className="mt-4">Read More</Button>
      </div>
    </div>
  );
};

export default LatestProjects;
