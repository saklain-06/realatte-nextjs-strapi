"use client";

import { useState } from "react";
import Link from "next/link";
import { builders } from "../data/builders";

export default function HomeClient({ projects }) {
  const [selectedBuilder, setSelectedBuilder] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");

  // ------------------ FILTER LOGIC ------------------
  let filteredProjects = projects;

  if (city) {
    filteredProjects = filteredProjects.filter(
      (p) => p.city.trim().toLowerCase() === city.toLowerCase()
    );
  }

  if (selectedBuilder) {
    filteredProjects = filteredProjects.filter(
      (p) =>
        p.builder &&
        p.builder.trim().toLowerCase() === selectedBuilder.toLowerCase()
    );
  }

  if (status) {
    filteredProjects = filteredProjects.filter(
      (p) =>
        p.projectStatus &&
        p.projectStatus.trim().toLowerCase() === status.toLowerCase()
    );
  }

  if (searchQuery) {
    filteredProjects = filteredProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.builder &&
          p.builder.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  // ---------------------------------------------------

  return (
    <>
      {/* ------------------- SEARCH SECTION ------------------- */}
      <section className="bg-[#121212] py-10 border-b border-[#222]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Search Properties</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project / builder"
              className="bg-[#1c1c1c] p-3 rounded-lg border border-[#333]"
            />

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-[#1c1c1c] p-3 rounded-lg border border-[#333]"
            >
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Goa">Goa</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-[#1c1c1c] p-3 rounded-lg border border-[#333]"
            >
              <option value="">Project Status</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {(searchQuery || city || status || selectedBuilder) && (
            <button
              className="mt-4 bg-white text-black px-4 py-2 rounded"
              onClick={() => {
                setSearchQuery("");
                setCity("");
                setStatus("");
                setSelectedBuilder(null);
              }}
            >
              Reset Filters
            </button>
          )}
       
     
        

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
            {filteredProjects.map((p) => {
              const img =
                p.images?.[0]?.formats?.medium?.url || p.images?.[0]?.url;

              return (
                <Link
                  href={`/project/${p.documentId}`}
                  key={p.id}
                  className="block bg-[#1a1a1a] border border-[#262626] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform"
                >
                  {img && (
                    <img
                      src={`http://127.0.0.1:1337${img}`}
                      className="w-full h-56 object-cover"
                      alt={p.title}
                    />
                  )}

                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                    <p className="text-gray-400 text-sm">{p.city}</p>
                    <p className="text-green-400 font-semibold mt-2">{p.price}</p>

                    <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-[#333] text-gray-300">
                      {p.projectStatus}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------- BUILDER FILTER SECTION ------------------- */}
      <section className="py-14 bg-[#121212] border-b border-[#222]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Top Builders</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {builders.map((b, index) => (
              <div
                key={index}
                onClick={() => setSelectedBuilder(b.name)}
                className={`flex flex-col items-center bg-[#1a1a1a] border ${
                  selectedBuilder === b.name
                    ? "border-green-500"
                    : "border-[#262626]"
                } rounded-xl p-6 hover:scale-105 transition cursor-pointer`}
              >
                <img
                  src={b.logo}
                  alt={b.name}
                  className="w-20 h-20 object-contain mb-4"
                />
                <p className="text-lg font-medium">{b.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
