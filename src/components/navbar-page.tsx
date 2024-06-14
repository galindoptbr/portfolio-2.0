"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavbarPage = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-center m-auto max-w-[769px] pt-14">
        <ul className="flex gap-28 font-bold">
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
            <Link href="/about"
            className={`flex transition-colors duration-300 ${
              pathname === "/about"
                ? "text-white border-b-4 border-purple-600"
                : "text-white hover:text-purple-600"
            }`}>About</Link>
          </li>
          <li>
            <Link href="/projects"
            className={`flex transition-colors duration-300 ${
              pathname === "/projects"
                ? "text-white border-b-4 border-purple-600"
                : "text-white hover:text-purple-600"
            }`}>Projects</Link>
          </li>
          <li>
            <Link href="/guestbook"
            className={`flex transition-colors duration-300 ${
              pathname === "/guestbook"
                ? "text-white border-b-4 border-purple-600"
                : "text-white hover:text-purple-600"
            }`}>Guestbook</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
