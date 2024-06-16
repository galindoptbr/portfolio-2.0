import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <>
      <div className="m-auto mt-10 rounded-md max-w-[600px] p-4">
        <div className="mt-5">
          <p className="text-3xl font-bold mb-10">
            If you are looking for a link maybe it is here 👇🏼
          </p>
          <div>
            <Link
              className="italic text-purple-500 hover:border-b-2 hover:border-purple-500"
              href="https://www.olavoscalewheels.com/"
              target="_blank"
            >
              Olavo Scale Wheels
            </Link>
            <p className="text-zinc-500 text-md italic">My last freelancer as a web developer</p>
          </div>
          <div>
            <Link
              className="italic text-purple-500 hover:border-b-2 hover:border-purple-500"
              href="https://github.com/galindoptbr/lava-rapido-project"
              target="_blank"
            >
              Car Wash Project
            </Link>
            <p className="text-zinc-500 text-md italic">My personal project for a car wash</p>
          </div>
          <div>
            <Link
              className="italic text-purple-500 hover:border-b-2 hover:border-purple-500"
              href="https://www.zucagram.com/pages"
              target="_blank"
            >
              Zucagram Social Media
            </Link>
            <p className="text-zinc-500 text-md italic">A Social Network for Brazilian immigrants</p>
          </div>
          <div>
            <Link
              className="italic text-purple-500 hover:border-b-2 hover:border-purple-500"
              href="/CV-Galindo-2024.pdf"
              target="_blank"
            >
              Resume
            </Link>
            <p className="text-zinc-500 text-md italic">My last resume </p>
          </div>
          <div>
            <Link
              className="italic text-purple-500 hover:border-b-2 hover:border-purple-500"
              href="https://www.linkedin.com/in/galindoptbr/"
              target="_blank"
            >
              Linkedin
            </Link>
            <p className="text-zinc-500 text-md italic">
              My profile on Linkedin
            </p>
          </div>
          <div>
            <Link
              className="italic text-purple-500 hover:border-b-2 hover:border-purple-500"
              href="https://github.com/galindoptbr"
              target="_blank"
            >
              Github
            </Link>
            <p className="text-zinc-500 text-md italic">My profile on Github</p>
          </div>
          <div>
            <Link
              className="italic text-purple-500 hover:border-b-2 hover:border-purple-500"
              href="https://vercel.com/galindoptbrs-projects"
              target="_blank"
            >
              Vercel
            </Link>
            <p className="text-zinc-500 text-md italic">
              My projects on Vercel
            </p>
          </div>
          <div>
            <Link
              className="italic text-purple-500 hover:border-b-2 hover:border-purple-500"
              href="https://www.instagram.com/galindoptbr/"
              target="_blank"
            >
              Instagram
            </Link>
            <p className="text-zinc-500 text-md italic">
              My personal profile on Instagram
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
