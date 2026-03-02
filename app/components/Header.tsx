"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg py-3 shadow-sm border-b border-stone-100"
          : "bg-white/40 backdrop-blur-md py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* LOGO SECTION - Design Minimalist */}
        <Link
          href="/"
          className="group flex items-center gap-4 transition-all duration-300"
        >
          <div
            className={`relative transition-all duration-500 ${
              isScrolled ? "w-14 h-14" : "w-20 h-20 md:w-24 md:h-24"
            }`}
          >
            <Image
              src="/logo.png"
              alt="Manufactum Mel Logo"
              fill
              className="object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif tracking-[0.2em] text-sm uppercase font-bold transition-colors duration-500 ${
                isScrolled ? "text-stone-900" : "text-stone-800"
              }`}
            >
              Manufactum
            </span>
            <span className="text-[9px] tracking-[0.4em] uppercase text-amber-700 font-medium">
              Premium Honey
            </span>
          </div>
        </Link>

        {/* NAVIGATION - Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-700">
            <a
              href="#philosophie"
              className="hover:text-amber-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-amber-600 hover:after:w-full after:transition-all"
            >
              Philosophie
            </a>
            <a
              href="#kollektion"
              className="hover:text-amber-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-amber-600 hover:after:w-full after:transition-all"
            >
              Kollektion
            </a>
          </div>

          <a
            href="#kontakt"
            className={`ml-4 px-7 py-2.5 text-[10px] uppercase tracking-widest font-bold rounded-full transition-all duration-500 ${
              isScrolled
                ? "bg-stone-900 text-white hover:bg-amber-700 shadow-lg"
                : "bg-white text-stone-900 hover:bg-stone-900 hover:text-white shadow-md border border-stone-200"
            }`}
          >
            Kontakt
          </a>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <button className="md:hidden group p-2">
          <div className="w-6 h-0.5 bg-stone-900 mb-1.5 transition-all group-hover:w-4"></div>
          <div className="w-6 h-0.5 bg-stone-900 transition-all"></div>
        </button>
      </div>
    </nav>
  );
}
