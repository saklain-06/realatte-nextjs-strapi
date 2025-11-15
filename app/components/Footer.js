export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#1f1f1f] text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Realatte</h2>
          <p className="text-sm text-gray-400 leading-6">
            India's leading real-estate performance marketing agency, partnering
            with top developers to deliver high-intent customers using digital excellence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* CITIES */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Cities</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Goa</li>
            <li>Bangalore</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">📸</a>
            <a href="#" className="hover:text-white">🐦</a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-[#1f1f1f] pt-6">
        © {new Date().getFullYear()} Realatte. All rights reserved.
      </div>
    </footer>
  );
}
