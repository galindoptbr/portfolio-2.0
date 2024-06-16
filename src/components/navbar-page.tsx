"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavbarPage = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-center m-auto max-w-[769px] pt-14">
        <ul className="flex gap-16 md:gap-28 font-bold">
          <li>
            <Link
              href="/"
              replace
              className={`flex transition-colors duration-300 ${
                pathname === "/"
                  ? "text-white border-b-4 border-purple-600"
                  : "text-white hover:text-purple-600"
              }`}
            >
              Feed
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`flex transition-colors duration-300 ${
                pathname === "/about"
                  ? "text-white border-b-4 border-purple-600"
                  : "text-white hover:text-purple-600"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`flex transition-colors duration-300 ${
                pathname === "/projects"
                  ? "text-white border-b-4 border-purple-600"
                  : "text-white hover:text-purple-600"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/links"
              className={`flex transition-colors duration-300 ${
                pathname === "/links"
                  ? "text-white border-b-4 border-purple-600"
                  : "text-white hover:text-purple-600"
              }`}
            >
              Links
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
