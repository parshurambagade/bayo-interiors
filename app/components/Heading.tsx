import Image from "next/image";
import React from "react";

const Heading = ({ heading }: { heading: string }) => {
  return (
    <div className="heading flex gap-8 items-center justify-center">
      <Image
        src={"/left-double-lines.svg"}
        width={102}
        height={12}
        alt="left-double-lines"
      />
      <h4 className="text-center text-text font-semibold leading-normal capitalize text-7xl  ">
        {heading}
      </h4>
      <Image
        src={"/right-double-lines.svg"}
        width={102}
        height={12}
        alt="right-double-lines"
      />
    </div>
  );
};

export default Heading;
