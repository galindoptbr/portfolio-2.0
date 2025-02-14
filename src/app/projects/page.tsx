"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { db } from "../../../src/firebase/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { IoIosLink } from "react-icons/io";
import { FaGithub, FaApple, FaGooglePlay } from "react-icons/fa";
import { ReadMore } from "@/components/readMore";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt?: any;
  projectLink?: string;
  githubLink?: string;
  appleStoreLink?: string;
  googlePlayLink?: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Project))
      );
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="m-auto mt-10 rounded-md max-w-[600px] p-4">
      {projects.length === 0 && (
        <p className="text-center text-zinc-500">Nenhum projeto encontrado.</p>
      )}

      {projects.map((project) => (
        <div key={project.id} className="mb-10">
          {/* Título do Projeto */}
          <div className="mt-5">
            <p className="text-2xl font-bold">{project.title}</p>
            <ReadMore text={project.description} />
            <Image
              className="mt-4 rounded"
              src={project.imageUrl}
              alt="Imagem do projeto"
              width={600}
              height={400}
            />
          </div>

          {/* Links */}
          <div className="flex items-center mt-4 gap-4">
            {project.projectLink && (
              <Link href={project.projectLink} target="_blank">
                <IoIosLink
                  className="text-zinc-400 hover:text-purple-500 cursor-pointer"
                  size={22}
                />
              </Link>
            )}

            {project.githubLink && (
              <Link href={project.githubLink} target="_blank">
                <FaGithub
                  className="text-zinc-400 hover:text-purple-500 cursor-pointer"
                  size={22}
                />
              </Link>
            )}

            {project.appleStoreLink && (
              <Link href={project.appleStoreLink} target="_blank">
                <FaApple
                  className="text-zinc-400 hover:text-purple-500 cursor-pointer"
                  size={22}
                />
              </Link>
            )}

            {project.googlePlayLink && (
              <Link href={project.googlePlayLink} target="_blank">
                <FaGooglePlay
                  className="text-zinc-400 hover:text-purple-500 cursor-pointer"
                  size={18}
                />
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
