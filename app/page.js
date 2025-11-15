import HomeClient from "./components/HomeClient";
import Footer from "./components/Footer";

async function getProjects() {
  const res = await fetch(
    "http://127.0.0.1:1337/api/projects?populate=images",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full bg-gradient-to-b from-black/50 to-black">
        <img
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6"
          alt="Luxury Real Estate"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Find Your Next Home
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl">
            Curated premium residential projects from top builders across India.
          </p>

          <a
            href="#projects"
            className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Explore All Projects
          </a>
        </div>
      </section>

      {/* INTERACTIVE PART OF HOME */}
      <HomeClient projects={projects} />

    </>
  );
}
