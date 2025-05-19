"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, Heart } from "lucide-react";

export default function Navbar() {
  /* ───────────── state ───────────── */
  const [menuOpen, setMenuOpen] = useState(false);
  const [whiteMode, setWhiteMode] = useState(false); // ← dark vs white glass
  const navRef = useRef<HTMLElement | null>(null);

  /* ───────────── watch #collab ───────────── */
  useEffect(() => {
    const target = document.querySelector("#collab");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setWhiteMode(entry.isIntersecting); // trigger when in view
      },
      {
        threshold: 0, // even 1px in view will trigger
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "/browse-properties", label: "Browse Properties" },
    { href: "/about-damac", label: "About Damac" },
    { href: "/dhub", label: "DHub" },
    { href: "/blogs", label: "Blogs" },
  ];

  /* ───────────── render ───────────── */
  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 w-full border-b shadow-lg font-sans font-medium transition-colors duration-300
        ${
          whiteMode
            ? "bg-white/80 backdrop-blur-md text-black border-black/10"
            : "bg-white/10 backdrop-blur-md text-white border-white/10"
        }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo (swap file) */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src={whiteMode ? "/damac-black.webp" : "/damac-white.webp"}
            alt="Damac Logo"
            className="w-28 transition-opacity duration-300"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex space-x-8 text-sm">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative hover:text-yellow-400 transition-colors duration-300
                           before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0
                           before:bg-yellow-400 before:transition-all before:duration-300 hover:before:w-full"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right-hand icons (desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <Link
            href="/search"
            className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300"
          >
            <span>Search</span>
            <Search size={20} strokeWidth={1.7} />
          </Link>

          <Link
            href="/favorites"
            aria-label="Favorites"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            <Heart size={20} strokeWidth={1.7} />
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6">
          <ul className="flex flex-col space-y-4 text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-yellow-400 transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/search"
                onClick={() => setMenuOpen(false)}
                className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300"
              >
                <Search size={20} strokeWidth={1.7} />
                <span>Search</span>
              </Link>
            </li>
            <li>
              <Link
                href="/favorites"
                onClick={() => setMenuOpen(false)}
                className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300"
              >
                <Heart size={20} strokeWidth={1.7} />
                <span>Favorites</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
