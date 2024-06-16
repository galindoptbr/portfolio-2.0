import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RxVercelLogo } from "react-icons/rx";

export const Footer = () => {
  return (
    <>
      <div className="flex gap-5 justify-center mt-10">
        <Link href="https://www.linkedin.com/in/galindoptbr/" target="_blank">
          <FaLinkedin className="hover:bg-zinc-600 w-[45px] h-[45px] p-2 rounded" />
        </Link>
        <Link
          href="https://www.instagram.com/galindoptbr/?next=%2F"
          target="_blank"
        >
          <FaInstagram className="hover:bg-zinc-600 w-[45px] h-[45px] p-2 rounded" />
        </Link>
        <Link href="https://github.com/galindoptbr" target="_blank">
          <FaGithub className="hover:bg-zinc-600 w-[45px] h-[45px] p-2 rounded" />
        </Link>
        <Link href="https://vercel.com/galindoptbrs-projects" target="_blank">
          <RxVercelLogo className="hover:bg-zinc-600 w-[45px] h-[45px] p-2 rounded" />
        </Link>
      </div>
      <div className="text-center text-sm text-zinc-500 italic mt-2 mb-10">
        <p>Galindo ⓒ 2024</p>
      </div>
    </>
  );
};
