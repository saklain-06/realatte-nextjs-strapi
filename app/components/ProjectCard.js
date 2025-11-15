"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ id, title, city, price, image }) {
    console.log("CARD LINK ID:", id);

    const [liked, setLiked] = useState(false);

  // Safely build image URL
  const imageUrl =
    image?.formats?.medium?.url ||
    image?.formats?.small?.url ||
    image?.url;

  return (
    <Link href={`/project/${id}`}>
  <div className="border p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
 
    <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
      {imageUrl && (
      <img
      src={`http://127.0.0.1:1337${imageUrl}`}
      alt={title}
      className="w-full h-48 object-cover rounded mb-3"
    />
    
     
      )}

      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-gray-600">{city}</p>
      <p className="text-green-600 font-semibold">{price}</p>

      <button
        className={`mt-3 px-3 py-1 rounded ${
          liked ? "bg-red-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setLiked(!liked)}
      >
        {liked ? "♥ Liked" : "♡ Like"}
      </button>
    </div>
    </div>
    </Link>
  );
  


}