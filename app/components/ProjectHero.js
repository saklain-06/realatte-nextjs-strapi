export default function ProjectHero({ title, imageUrl }) {
    return (
      <div className="relative w-full h-[45vh] md:h-[60vh] overflow-hidden rounded-xl mb-10">
        
        {/* Background Image */}
        <img
          src={`http://127.0.0.1:1337${imageUrl}`}
          alt={title}
          className="w-full h-full object-cover brightness-[0.75]"
        />
  
        {/* Matte Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>
  
        {/* Title */}
        <div className="absolute bottom-6 left-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg tracking-tight">
            {title}
          </h1>
        </div>
      </div>
    );
  }
  