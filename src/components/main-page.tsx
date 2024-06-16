import Image from "next/image";
import React from "react";
import Link from "next/link";

import banner from "@/assets/images/banner-gif.gif";
import perfilImg from "@/assets/images/perfil-img.png";
import badge from "@/assets/images/badge.png";

import {
  FaLinkedin,
  FaRegCalendarAlt,
  FaRegFilePdf,
  FaSuitcase,
} from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

export const MainPage = () => {
  return (
    <>
      <div>
        <div className="relative max-w-[769px] m-auto md:pt-14">
          <Image src={banner} alt="banner gif" />
          <div>
            <Image
              className="w-40 absolute top-10 left-10 md:top-56 md:left-20"
              src={perfilImg}
              alt="perfil image"
            />
          </div>
          <div className="absolute right-10 md:right-20">
            <Link
              href="https://www.linkedin.com/in/galindoptbr/"
              target="_blank"
            >
              <button className="flex justify-center gap-1 items-center mt-5 w-32 h-10 bg-[#5306BF] rounded-full font-semibold">
                Connect
                <FaLinkedin className="mb-2" size={20} />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mt-24 mr-[50px] md:mr-[345px]">
          <p className=" text-4xl font-extrabold">Galindo Leite</p>
          <Image className="w-8 h-8 mb-2" src={badge} alt="badge" />
        </div>
        <div className="flex flex-col m-auto justify-center gap-1 max-w-[769px] px-5 md:pl-16">
          <p className="mt-2">Rewriting my life through code ✨</p>
          <p>
            Frontend Developer | HTML | CSS | JavaScript | Typescript | React |
            NextJS | Taiwindcss
          </p>
          <p className="flex gap-2 items-center">
            Zucagram Founder{" "}
            <IoIosLink
              size={22}
              className="text-zinc-400 hover:text-purple-500 cursor-pointer"
            />
          </p>
        </div>
        <div className="flex">
          <ul className="grid grid-cols-2 mt-3 md:flex md:gap-5 md:m-auto md:max-w-[769px] md:mt-5 text-zinc-400 pl-5 md:pr-28">
            <li className="flex gap-2 items-center">
              <FaSuitcase className="mb-1" />
              Available
            </li>
            <li className="flex gap-2 items-center">
              <IoIosLink className="mb-1" size={20} />
              <Link
                className="hover:text-purple-500 cursor-pointer"
                href="/links"
              >
                Links
              </Link>
            </li>
            <li className="flex gap-2 items-center">
              <FaRegFilePdf className="mb-1" />
              <Link
                className="hover:text-purple-500 cursor-pointer"
                href="/CV-Galindo-2024.pdf"
                target="_blank"
              >
                Download CV
              </Link>
            </li>
            <li className="flex gap-2 items-center">
              <FaRegCalendarAlt className="mb-1" />2 years of experience
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
