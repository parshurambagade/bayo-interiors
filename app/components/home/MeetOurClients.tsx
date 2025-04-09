import React from "react";
import Heading from "../Heading";
import Image from "next/image";

const MeetOurClients = () => {
  return (
    <div className="bg-[#f6f7f8] py-10 flex flex-col gap-10">
      <Heading heading="Meet Our Clients" />
      <div className="flex justify-evenly w-full gap-8 items-center">
        <Brand name="Brand Name" tagline="Tagline" logo="/partner-logo.svg" />
        <Brand name="Brand Name" tagline="Tagline" logo="/partner-logo.svg" />
        <Brand name="Brand Name" tagline="Tagline" logo="/partner-logo.svg" />
        <Brand name="Brand Name" tagline="Tagline" logo="/partner-logo.svg" />
        <Brand name="Brand Name" tagline="Tagline" logo="/partner-logo.svg" />
      </div>
    </div>
  );
};

interface IBrand {
  name: string;
  tagline: string;
  logo: string;
}

const Brand = ({ name, tagline, logo }: IBrand) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center w-full max-w-1/12">
      <Image
        src={logo}
        height={20}
        width={20}
        alt={name}
        className="w-full object-cover"
      />
      <p>{name}</p>
      <p>{tagline}</p>
    </div>
  );
};

export default MeetOurClients;
