"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0f0f0f] border-b border-[#222] text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold">
          Realatte
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/projects" className="hover:text-gray-300 transition">Projects</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] px-6 py-4 space-y-4 border-t border-[#222]">
          <Link onClick={() => setMenuOpen(false)} href="/" className="block hover:text-gray-300">Home</Link>
          <Link onClick={() => setMenuOpen(false)} href="/projects" className="block hover:text-gray-300">Projects</Link>
          <Link onClick={() => setMenuOpen(false)} href="/about" className="block hover:text-gray-300">About</Link>
          <Link onClick={() => setMenuOpen(false)} href="/contact" className="block hover:text-gray-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}
