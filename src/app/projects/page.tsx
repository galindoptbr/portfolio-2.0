/* eslint-disable react/no-unescaped-entities */

import React from "react";

import post1 from "@/assets/images/carwash.jpg";
import post2 from "@/assets/images/olavo-scale-wheels.png";
import post3 from "@/assets/images/zucagram-app.png";

import Image from "next/image";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { FaApple, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      {/* Project 1 */}
      <div className="m-auto mt-10 rounded-md max-w-[600px] p-4">
        <div className="mt-5">
          <p className="text-2xl font-bold">Olavo Scale Wheels (freelance)</p>
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
          <Link href="https://www.olavoscalewheels.com/" target="_blank">
            <IoIosLink
              className="text-zinc-400 hover:text-purple-500 cursor-pointer"
              size={22}
            />
          </Link>
          <Link
            href="https://github.com/galindoptbr/olavo-nobre"
            target="_blank"
          >
            <FaGithub
              className="text-zinc-400 hover:text-purple-500 cursor-pointer"
              size={22}
            />
          </Link>
        </div>
      </div>
      {/* Project 2 */}
      <div className="m-auto mt-5 md:mt-10 rounded-md max-w-[600px] p-4">
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
          <Link href="https://lava-rapido-project.vercel.app/" target="_blank">
            <IoIosLink
              className="text-zinc-400 hover:text-purple-500 cursor-pointer"
              size={22}
            />
          </Link>
          <Link
            href="https://github.com/galindoptbr/lava-rapido-project"
            target="_blank"
          >
            <FaGithub
              className="text-zinc-400 hover:text-purple-500 cursor-pointer"
              size={22}
            />
          </Link>
        </div>
      </div>
      {/* Project 3 */}
      <div className="m-auto mt-5 md:mt-10 rounded-md max-w-[600px] p-4">
        <div className="mt-5">
          <p className="text-2xl font-bold">Zucagram Social Network (Founder)</p>
          <p>
          I always knew I would do something great, I just didn't know exactly what.
 and when. On August 15, 2023, I founded Zucagram, a network
 social organization aimed at Brazilian immigrants and those who dream of
 immigrate. Initially, it was just a project to consolidate my
 studies in React and create a support space for Brazilians in
 Portugal. <br /> <br />
 After just two months, Zucagram already had almost 300 users
 and my mind was buzzing with new ideas. It was then that I realized the
 Zucagram's growth potential. <br /> <br />
 At this stage, my friend and mentor Felício Santos had already helped me
 countless times with technical challenges that I couldn't solve
 alone. Recognizing my limitations, I invited him to join
 to the project, transforming it from a simple study project into a
 startup. <br /> <br />
 Our goal now is to reach all Brazilians around the world
 world, creating a solid community where we can share
 our stories and experiences, offer help with information and
 even in person, if necessary. Because, if you are Brazilian, where
 wherever you are, you are not alone... <br /> <br />
 Today, with almost ten months of existence, Zucagram is about to
 reach your first thousand users. The website has been completely
 restructured, we are now in the Apple Store and, by the end of the month,
 we will also be on the Play Store. <br /> <br />
 I invite you all to get to know Zucagram, especially if you
 You are an immigrant or have the dream of living abroad.
          </p>
          <Image className="mt-4 rounded" src={post3} alt="image post" />
        </div>
        <div className="flex items-center mt-4 gap-4">
          <Link href="https://www.zucagram.com/pages" target="_blank">
            <IoIosLink
              className="text-zinc-400 hover:text-purple-500 cursor-pointer"
              size={22}
            />
          </Link>
          <Link
            href="https://apps.apple.com/pt/app/zucagram/id6503670083"
            target="_blank"
          >
            <FaApple
              className="text-zinc-400 hover:text-purple-500 cursor-pointer"
              size={22}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
