import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-primary py-10 gap-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 justify-between items-start">
        <div className="flex flex-col gap-5 text-white">
          <h5 className="text-lg font-bold leading-normal capitalize">
            About Us
          </h5>
          <p className="capitalize leading-normal font-normal text-sm">
            At Bayo, we believe great design doesn’t have to be expensive. We’re
            a passionate team of interior designers who turn your space into
            something beautiful, comfortable, and truly yours – all within your
            budget.
          </p>
        </div>

        <div className="flex flex-col gap-5 text-white">
          <h5 className="text-lg font-bold leading-normal capitalize">
            Get In Touch
          </h5>
          <div className="flex flex-col gap-2.5 text-sm ">
            <Link href={"mailto:info@bayointeriors.in"}>
              info@bayointeriors.in
            </Link>
            <p>(+91) 7498485991</p>
            <p>
              Fl no. 101 ,Suraj Surabhi apartment, behind Eisha Pearl , lane no.
              01 , Kakade Nagar , kondhwa , Pune
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 text-white">
          <h5 className="text-lg font-bold leading-normal capitalize">
            Quick Links
          </h5>
          <div className="flex flex-col gap-2.5 text-sm ">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/contact"}>Contact Us</Link>
            <Link href={"/projects"}>Portfolio</Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 text-white">
          <h5 className="text-lg font-bold leading-normal capitalize">
            Studio
          </h5>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link href={"#"}>Terms & Conditions</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="flex w-max items-center justify-center gap-10">
        <Link
          href={"https://www.instagram.com/bayo_interiors/"}
          className="text-3xl text-white"
          target="_blank"
        >
          <FaSquareInstagram />
        </Link>
        <Link
          href={"https://www.facebook.com/BayoInteriors"}
          className="text-3xl text-white"
          target="_blank"
        >
          <FaSquareFacebook />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/shubham-bagade-82a9b8214/"}
          className="text-3xl text-white"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
