"use client";

import { useState, useEffect } from "react";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [cityFilter, setCityFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [builderFilter, setBuilderFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");


  async function fetchProjects() {
    const res = await fetch("http://127.0.0.1:1337/api/projects?populate=images");
    const data = await res.json();
    setProjects(data.data);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  

  // Filter logic
  const filteredProjects = projects
  .filter((p) =>
    cityFilter === "All" ? true : p.city.trim() === cityFilter
  )
  .filter((p) =>
    builderFilter === "All"
      ? true
      : p.builder && p.builder.trim() === builderFilter
  )
  .filter((p) =>
    statusFilter === "All"
      ? true
      : p.projectStatus && p.projectStatus.trim() === statusFilter
  )
  .filter((p) =>
    p.title.toLowerCase().includes(searchText.toLowerCase()) ||
    p.city.toLowerCase().includes(searchText.toLowerCase()) ||
    p.price.toLowerCase().includes(searchText.toLowerCase()) ||
    (p.builder && p.builder.toLowerCase().includes(searchText.toLowerCase()))
  );



  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects (Live from Strapi)</h1>

      <div className="mb-6">
  <input
    type="text"
    placeholder="Search projects..."
    className="border p-2 rounded w-full md:w-1/3"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
</div>


      <div className="mb-6">
  <label className="font-semibold mr-3">Filter by City:</label>

  <select
    className="border p-2 rounded"
    value={cityFilter}
    onChange={(e) => setCityFilter(e.target.value)}
  >
    <option value="All">All Cities</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Pune">Pune</option>
    <option value="Goa">Goa</option>
  </select>
</div>

<div className="mb-6">
  <label className="font-semibold mr-3">Filter by Builder:</label>

  <select
    className="border p-2 rounded"
    value={builderFilter}
    onChange={(e) => setBuilderFilter(e.target.value)}
  >
    <option value="All">All Builders</option>
    <option value="Lodha">Lodha</option>
    <option value="Godrej">Godrej</option>
    <option value="Brigade">Brigade</option>
  </select>
</div>

<div className="mb-6">
  <label className="font-semibold mr-3">Filter by Status:</label>

  <select
    className="border p-2 rounded"
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
  >
    <option value="All">All Status</option>
    <option value="Upcoming">Upcoming</option>
    <option value="Ongoing">Ongoing</option>
    <option value="Completed">Completed</option>
  </select>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((p) => (

          <ProjectCard
            key={p.id}
            id={p.documentId}
            title={p.title}
            city={p.city}
            price={p.price}
            image={p.images?.[0]}  // pass first image
          />
        ))}
      </div>
    </div>
  );
}
