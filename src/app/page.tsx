"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { db } from "../../src/firebase/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { IoIosLink } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { MdOutlinePushPin } from "react-icons/md";
import { FaGithub, FaApple, FaGooglePlay } from "react-icons/fa";
import perfilImage from "@/assets/images/perfil-image.png";
import badge from "@/assets/images/badge.png";
import { ReadMore } from "@/components/readMore";

type Post = {
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

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Post))
      );
    });

    return () => unsubscribe();
  }, []);

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <div className="m-auto mt-10 rounded-md max-w-[600px] p-4">
      {posts.length === 0 && (
        <p className="text-center text-zinc-500">Nenhum post encontrado.</p>
      )}

      {posts.map((post) => (
        <div key={post.id} className="mb-10">
          {/* Fixado no topo */}
          <div className="flex items-center gap-1 mb-2 italic text-zinc-500 ml-2">
            <MdOutlinePushPin />
            <p>post fixed</p>
          </div>

          {/* Cabeçalho do Post */}
          <div className="flex gap-4">
            <Image className="w-12" src={perfilImage} alt="image perfil" />
            <div>
              <div className="flex gap-1">
                <p className="font-bold">Galindo Leite</p>
                <Image className="w-5 h-5" src={badge} alt="badge" />
              </div>
              <p className="text-sm text-zinc-500">
                •{" "}
                {new Date(post.createdAt?.seconds * 1000).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Conteúdo do Post */}
          <div className="mt-5">
            <p className="text-2xl font-bold">{post.title}</p>
            <ReadMore text={post.description} />
            <Image
              className="mt-4 rounded"
              src={post.imageUrl}
              alt="image post"
              width={600}
              height={400}
            />
          </div>

          {/* Ações e Links */}
          <div className="flex items-center mt-4 gap-4">
            <button onClick={() => toggleLike(post.id)}>
              <GoHeartFill
                size={22}
                className={likedPosts[post.id] ? "text-red-600" : "text-white"}
              />
            </button>

            {post.projectLink && (
              <Link href={post.projectLink} target="_blank">
                <IoIosLink
                  className="text-zinc-400 hover:text-purple-500 cursor-pointer"
                  size={22}
                />
              </Link>
            )}

            {post.githubLink && (
              <Link href={post.githubLink} target="_blank">
                <FaGithub
                  className="text-zinc-400 hover:text-purple-500 cursor-pointer"
                  size={22}
                />
              </Link>
            )}

            {post.appleStoreLink && (
              <Link href={post.appleStoreLink} target="_blank">
                <FaApple
                  className="text-zinc-400 hover:text-purple-500 cursor-pointer"
                  size={22}
                />
              </Link>
            )}

            {post.googlePlayLink && (
              <Link href={post.googlePlayLink} target="_blank">
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
