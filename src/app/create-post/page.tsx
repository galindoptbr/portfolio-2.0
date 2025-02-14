"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db, storage } from "../../../src/firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FaCamera } from "react-icons/fa";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [appleStoreLink, setAppleStoreLink] = useState("");
  const [googlePlayLink, setGooglePlayLink] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !image) {
      alert("Título, descrição e imagem são obrigatórios.");
      return;
    }

    setLoading(true);
    try {
      // Upload da imagem para o Firebase Storage
      const imageRef = ref(storage, `posts/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Salvando no Firestore com os novos campos
      await addDoc(collection(db, "posts"), {
        title,
        description,
        imageUrl,
        projectLink: projectLink || null,
        githubLink: githubLink || null,
        appleStoreLink: appleStoreLink || null,
        googlePlayLink: googlePlayLink || null,
        createdAt: serverTimestamp(),
      });

      setLoading(false);
      router.push("/");
    } catch (error) {
      console.error("Erro ao criar post:", error);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-zinc-900 border border-zinc-800 rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Criar Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-zinc-800 p-2 rounded bg-zinc-900"
        />
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-zinc-800 p-2 rounded bg-zinc-900"
        />
        <input
          type="text"
          placeholder="Link do projeto (opcional)"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
          className="border border-zinc-800 p-2 rounded bg-zinc-900"
        />
        <input
          type="text"
          placeholder="Link do GitHub (opcional)"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
          className="border border-zinc-800 p-2 rounded bg-zinc-900"
        />
        <input
          type="text"
          placeholder="Link da Apple Store (opcional)"
          value={appleStoreLink}
          onChange={(e) => setAppleStoreLink(e.target.value)}
          className="border border-zinc-800 p-2 rounded bg-zinc-900"
        />
        <input
          type="text"
          placeholder="Link da Google Play Store (opcional)"
          value={googlePlayLink}
          onChange={(e) => setGooglePlayLink(e.target.value)}
          className="border border-zinc-800 p-2 rounded bg-zinc-900"
        />
        <label className="border border-zinc-800 rounded bg-zinc-900 flex items-center justify-center cursor-pointer h-24 relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <FaCamera size={40} className="text-zinc-500" />
        </label>
        {preview && (
          <img
            src={preview}
            alt="Prévia da imagem"
            className="w-full h-full object-cover rounded"
          />
        )}

        <button
          type="submit"
          className="bg-[#5306BF] font-bold text-white p-2 rounded disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Criando..." : "Criar Post"}
        </button>
      </form>
    </div>
  );
}
