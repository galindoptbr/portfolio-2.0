/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import React from "react";

import distinction from "@/assets/images/distinction.jpg";
import post3 from "@/assets/images/WhatsApp Image 2024-06-16 at 16.57.57_d23043db.jpg";

const AboutPage = () => {
  return (
    <>
      <div className="m-auto mt-10 rounded-md max-w-[600px] p-4">
        <div className="mt-5">
          <p className="text-2xl font-bold">Hello 👋🏽</p>
          <p>
            Greetings! I'm an avid frontend programmer with 3 years of dedicated
            experience in studying and working on projects in this realm. My
            skill set includes HTML, CSS, JavaScript, ReactJS, NextJS and
            Taiwindcss, allowing me to craft interactive and responsive
            interfaces across various devices. <br /> <br />
            Additionally, I have additional proficiency in technologies like
            Bootstrap, which allows me to efficiently design elegant and
            functional layouts. I also have knowledge in Vercel, taking
            advantage of its integration with GitHub to facilitate the automated
            deployment process. <br /> <br />
            Additionally, I use Figma and Canva as design tools, which allow me
            to create prototypes and collaborate with designers to create
            visually appealing and intuitive interfaces.
          </p>
          <Image className="mt-4 rounded" src={post3} alt="image post" />
          <p className="text-zinc-400 text-sm text-center italic mt-2">
            Me and my two children Valentina and Otto
          </p>
          <p className="text-2xl font-bold mt-10">Background 🪖</p>
          <p>
            I was a military in the Brazilian Army for 8 years. There, I
            specialized in communications maintenance and participated in
            several projects, such as SisBol (a system for creating military
            changes and Internal Bulletins), where I received the following
            decoration as recognition:
          </p>

          <Image className="mt-4 rounded" src={distinction} alt="image post" />

          <p className="mt-5">
            I'm very happy to have you here, if you want to know more about me,
            send me a message on any of the social networks below 👇🏼{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
