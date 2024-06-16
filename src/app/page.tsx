"use client";

import { useState } from "react";
import Image from "next/image";

import { IoIosLink } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { MdOutlinePushPin } from "react-icons/md";

import perfilImage from "@/assets/images/perfil-img.png";
import badge from "@/assets/images/badge.png";
import post1 from "@/assets/images/carwash.jpg";
import post2 from "@/assets/images/olavo-scale-wheels.png";
import post3 from "@/assets/images/WhatsApp Image 2024-06-16 at 16.57.57_d23043db.jpg";
import Link from "next/link";

export default function Home() {
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [liked3, setLiked3] = useState(false);
  const [liked4, setLiked4] = useState(false);

  const handleLike1 = () => {
    setLiked1(!liked1);
  };
  const handleLike2 = () => {
    setLiked2(!liked2);
  };
  const handleLike3 = () => {
    setLiked3(!liked3);
  };
  const handleLike4 = () => {
    setLiked4(!liked4);
  };

  return (
    <>
      {/* Post 1 */}
      <div className="m-auto mt-10 rounded-md max-w-[600px] p-4">
        <div className="flex items-center gap-1 mb-2 italic text-zinc-500 ml-2">
        <MdOutlinePushPin />
          <p>post fixed</p>
        </div>
        <div className="flex gap-4 ">
          <Image className="w-12" src={perfilImage} alt="image perfil" />
          <div>
            <div className="flex gap-1">
              <p className="font-bold">Galindo Leite</p>
              <Image className="w-5 h-5" src={badge} alt="badge" />
            </div>
            <p className="text-sm text-zinc-500">• 17 Jun 2024</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-2xl font-bold">Car Wash Project 💦🚗</p>
          <p>
          I've participated in a few interviews and I'm always eliminated from the list.
 process due to lack of experience. So I asked myself: how am I going to
 gain experience if they don't give me a chance? <br /> <br />
 From this reflection, I started thinking about how programming
 I could solve problems in my daily life. Currently, I work in
 a car wash on Saturdays to supplement my income. There,
 we fill out a form by hand and, at the end of the day, we do the math
 to close the box. This gave me the idea to create an app for
 register the cars we wash and generate a report with one click
 at the end of the day. <br /> <br />
 I developed this project in React with NextJS and Tailwind CSS, and the
 I hosted it on Vercel to access it on my smartphone as an app
 through webmanifest.
          </p>
          <Image className="mt-4 rounded" src={post1} alt="image post" />
        </div>
        <div className="flex items-center mt-4 gap-4">
          <button onClick={handleLike2}>
            <GoHeartFill
              size={22}
              className={liked2 ? "text-red-600" : "text-white"}
            />
          </button>
          <Link href="https://lava-rapido-project.vercel.app/" target="_blank">
            <IoIosLink
              className="text-zinc-400 hover:text-purple-500 cursor-pointer"
              size={22}
            />
          </Link>
        </div>
      </div>
      {/* Post 2 */}
      <div className="m-auto mt-5 md:mt-10 rounded-md max-w-[600px] p-4">
        <div className="flex gap-4 ">
          <Image className="w-12" src={perfilImage} alt="image perfil" />
          <div>
            <div className="flex gap-1">
              <p className="font-bold">Galindo Leite</p>
              <Image className="w-5 h-5" src={badge} alt="badge" />
            </div>
            <p className="text-sm text-zinc-500">• 28 Mai 2024</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-2xl font-bold">Olavo Scale Wheels (Freelancer)</p>
          <p>
          I was hired by a client who sells 3D wheels for cars
 HotWheels, with the aim of creating a website to showcase your products
 and reach a wider audience across Europe. <br /> <br />
 The project was developed using NextJS with TypeScript and
 Tailwind CSS to ensure agility and responsiveness. <br /> <br />
 In addition to developing the website, I also created banners using
 Canva Pro to show real product images. <br /> <br />
 I chose to host the project at Vercel, taking advantage of its integration
 with GitHub to facilitate the automated deployment process.{" "}
 <br /> <br />
 To ensure the client's online presence, I registered their domain on
 Hostinger and configured the DNS to point to Vercel, ensuring
 for the domain to redirect to the hosted project. <br /> <br />
 This project represented a rewarding challenge for me, being the
 first time someone trusted their investment for me to create
 something for him. <br /> <br />
 I completed all the work in just 7 days, dedicating my nights
 after working hours at the factory. <br /> <br />
 Note: Products and some content will still be added
 as soon as the customer makes them available.
          </p>
          <Image className="mt-4 rounded" src={post2} alt="image post" />
        </div>
        <div className="flex items-center mt-4 gap-4">
          <button onClick={handleLike3}>
            <GoHeartFill
              size={22}
              className={liked3 ? "text-red-600" : "text-white"}
            />
          </button>

          <Link href="https://www.olavoscalewheels.com/" target="_blank">
            <IoIosLink
              className="text-zinc-400 hover:text-purple-500 cursor-pointer"
              size={22}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
