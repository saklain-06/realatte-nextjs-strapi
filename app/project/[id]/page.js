import LeadForm from "@/app/components/LeadForm";


export async function getProject(documentId) {
    const res = await fetch(
      `http://127.0.0.1:1337/api/projects/${documentId}?populate=images`,
      { cache: "no-store" }
    );
  
    const data = await res.json();
    return data.data;
  }
  
  export default async function ProjectPage({ params }) {
    // ⬅️ FIX: unwrap the params Promise
    const { id } = await params;
  
    console.log("➡️ Unwrapped Route ID:", id);
  
    const project = await getProject(id);
  
    console.log("➡️ Project Returned From API:", project);
  
    if (!project) {
      return <div className="p-6 text-red-500">Project not found</div>;
    }
  
    const p = project;
  
    const firstImage = p.images?.[0];
    const imageUrl =
      firstImage?.formats?.medium?.url ||
      firstImage?.formats?.small?.url ||
      firstImage?.url;
  
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{p.title}</h1>
  
        {imageUrl && (
          <img
            src={`http://127.0.0.1:1337${imageUrl}`}
            alt={p.title}
            className="w-full rounded-lg shadow mb-6"
          />
        )}
  
        <p><b>City:</b> {p.city}</p>
        <p><b>Price:</b> {p.price}</p>
        <p><b>Status:</b> {p.projectStatus}</p>
        <p><b>Builder:</b> {p.builder}</p>
        
  
        <h2 className="text-2xl font-semibold mt-8 mb-3">Description</h2>
        <div className="prose">
          {p.description?.map((para, index) => (
            <p key={index}>{para.children[0].text}</p>
          ))}

<LeadForm projectTitle={p.title} />

        </div>


      </div>
      
    );
  }
  