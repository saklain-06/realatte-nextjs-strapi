import LeadForm from "@/app/components/LeadForm";
import ProjectHero from "@/app/components/ProjectHero";

export async function getProject(documentId) {
  const res = await fetch(
    `http://127.0.0.1:1337/api/projects/${documentId}?populate=images`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data;
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const p = await getProject(id);

  const firstImage = p.images?.[0];
  const imageUrl =
    firstImage?.formats?.large?.url ||
    firstImage?.formats?.medium?.url ||
    firstImage?.url;

  return (
    <div className="bg-[#0f0f0f] min-h-screen pb-20 text-white">

      {/* HERO */}
      <ProjectHero title={p.title} imageUrl={imageUrl} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <div className="md:col-span-2 space-y-10">

          {/* Highlights */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#2a2a2a]">
            <h2 className="text-2xl font-semibold mb-4">Project Highlights</h2>

            <div className="space-y-2 text-[#c7c7c7]">
              <p><b className="text-white">City:</b> {p.city}</p>
              <p><b className="text-white">Price:</b> {p.price}</p>
              <p><b className="text-white">Status:</b> {p.projectStatus}</p>
              <p><b className="text-white">Builder:</b> {p.builder}</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] leading-relaxed">
            <h2 className="text-2xl font-semibold mb-4">About the Project</h2>

            {p.description?.map((para, index) => (
              <p key={index} className="text-[#c7c7c7] mb-4">
                {para.children[0].text}
              </p>
            ))}
          </div>

        </div>

        {/* RIGHT SECTION – Sticky Lead Form */}
        <div className="md:col-span-1">
          <div className="sticky top-10">
            <div className="bg-white text-black p-6 rounded-xl shadow-lg">
              <LeadForm projectTitle={p.title} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
