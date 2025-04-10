import { Button } from "@/components/ui/button";
import React from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

interface CarouselButtonsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

const CarouselButtons = ({ onPrevClick, onNextClick }: CarouselButtonsProps) => {
  return (
    <div className="w-full flex items-center justify-center  gap-7 mx-auto ">
      <Button variant="ghost" className="text-primary text-lg font-bold capitalize leading-normal flex gap-1 cursor-pointer items-center justify-center" onClick={onPrevClick}>
        <FaChevronCircleLeft />
        <p>Prev</p>
      </Button>
      <Button variant="ghost" className="text-primary text-lg font-bold capitalize leading-normal flex gap-1 cursor-pointer items-center justify-center" onClick={onNextClick}>
        <p>Next</p>
        <FaChevronCircleRight />
      </Button>
    </div>
  );
};

export default CarouselButtons;
