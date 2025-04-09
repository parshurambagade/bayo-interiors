"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import Heading from "../Heading";

const WhatWeDo = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[75vh] px-40">
      <div className="flex items-center justify-between w-full h-full">
        <div className=" image flex-1 h-full w-full">
          <div className=" flex w-full h-full mt-20">
            {/* <Image src={"/what-we-do-image1.png"} alt="Demo image 1" height={601} width={448} className=' left-0 top-0'/> */}
            <Image
              src={"/dot-background.svg"}
              alt="Dotted background"
              height={671}
              width={661}
              className=" right-0 top-0"
            />
            {/* <Image src={"/what-we-do-image2.png"} alt="Demo image 2" height={486} width={396} className='absolute left-60 top-40'/> */}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-10 flex-1 h-full w-full">
          <Heading heading="What We Do" />
          <div className="grid grid-cols-2 gap-4 justify-between w-full">
            <Card
              title="Planning"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at accumsan enim."
              url="#"
            />
            <Card
              title="Interior"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at accumsan enim."
              url="#"
            />
            <Card
              title="Exterior"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at accumsan enim."
              url="#"
            />
            <Card
              title="Decoration"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at accumsan enim."
              url="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
interface ICard {
  title: string;
  description: string;
  url: string;
}
const Card = ({ title, description, url }: ICard) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5  rounded-xl bg-accent p-8">
      <h5 className="text-text text-center leading-normal capitalize text-lg">
        {title}
      </h5>
      <p className="text-text text-sm font-normal leading-normal text-center">
        {description}
      </p>
      <Button onClick={() => redirect(url)} className="cursor-pointer">
        Read More
      </Button>
    </div>
  );
};
export default WhatWeDo;
