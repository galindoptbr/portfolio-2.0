import Image from "next/image";

import { IoIosLink } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";

import perfilImage from "@/assets/images/perfil-img.png";
import badge from "@/assets/images/badge.png";
import post1 from "@/assets/images/post1.jpg";
import post2 from "@/assets/images/olavo-scale-wheels.png";

export default function Home() {
  return (
    <>
      {/* Post 1 */}
      <div className="m-auto mt-10 rounded-md max-w-[600px] p-4">
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
            Desenvolvi esse projeto em React com NextJS e Tailwind CSS, e o
            hospedei na Vercel para acessá-lo no meu smartphone como um app
            através do webmanifest. Dessa forma, estou criando minhas próprias
            experiências e me mantendo motivado a estudar todos os dias.
          </p>
          <Image className="mt-4 rounded" src={post1} alt="image post" />
        </div>
        <div className="flex items-center mt-4 gap-4">
          <GoHeartFill size={22} />

          <IoIosLink
            className="text-zinc-400 hover:text-purple-500 cursor-pointer"
            size={22}
          />
        </div>
      </div>

      {/* Post 2 */}
      <div className="m-auto mt-10 rounded-md max-w-[600px] p-4">
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
          <p className="text-2xl font-bold">Olavo Scale Wheels (Freelance)</p>
          <p>
          O projeto foi desenvolvido utilizando NextJS com TypeScript e Tailwind CSS para garantir agilidade e responsividade.

Além do desenvolvimento do site, também criei banners utilizando o Canva Pro para mostrar imagens reais dos produtos.

Optei por hospedar o projeto na Vercel, aproveitando sua integração com o GitHub para facilitar o processo de deploy automatizado.

Para garantir a presença online do cliente, registrei seu domínio na Hostinger e configurei o DNS para apontar para a Vercel, assegurando que o domínio redirecionasse para o projeto hospedado.
          </p>
          <Image className="mt-4 rounded" src={post2} alt="image post" />
        </div>
        <div className="flex items-center mt-4 gap-4">
          <GoHeartFill size={22} />

          <IoIosLink
            className="text-zinc-400 hover:text-purple-500 cursor-pointer"
            size={22}
          />
        </div>
      </div>
    </>
  );
}
