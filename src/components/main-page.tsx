import Image from "next/image";
import React from "react";

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
import Link from "next/link";

export const MainPage = () => {
  return (
    <>
      <div>
        <div className="relative max-w-[769px] m-auto pt-14">
          <Image src={banner} alt="banner gif" />
          <div>
            <Image
              className="w-40 absolute top-56 left-20"
              src={perfilImg}
              alt="perfil image"
            />
          </div>
          <div className="absolute right-20">
            <Link
              href="https://www.linkedin.com/in/galindoptbr/"
              target="_blank"
            >
              <button className="flex justify-center gap-1 items-center mt-5 w-32 h-10 bg-[#5306BF] rounded-full font-semibold">
                Conectar
                <FaLinkedin className="mb-2" size={20} />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mt-24 mr-[345px]">
          <p className=" text-4xl font-extrabold">Galindo Leite</p>
          <Image className="w-8 h-8 mb-2" src={badge} alt="badge" />
        </div>
        <div className="flex flex-col m-auto justify-center gap-1 max-w-[769px] pl-16">
          <p className="mt-2">Reescrevendo minha vida através de códigos ✨</p>
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
          <ul className="flex gap-5 m-auto max-w-[769px] mt-5 text-zinc-400 pr-28">
            <li className="flex gap-2 items-center">
              <FaSuitcase className="mb-1" />
              Available
            </li>
            <li className="flex gap-2 items-center">
              <IoIosLink className="mb-1" size={20} />
              <a className="hover:text-purple-500 cursor-pointer" href="/">
                Links
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaRegFilePdf className="mb-1" />
              <a className="hover:text-purple-500 cursor-pointer" href="/">
                Download CV
              </a>
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
