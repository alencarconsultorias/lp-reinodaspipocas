"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-amber-900/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="text-3xl">🍿</span>
            <span className="text-white font-bold text-lg leading-tight">
              Reino das<br />
              <span className="text-amber-300">Pipocas</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Sabores", href: "#sabores" },
              { label: "Sobre Nós", href: "#sobre" },
              { label: "Depoimentos", href: "#depoimentos" },
              { label: "Contato", href: "#contato" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-amber-100 hover:text-amber-300 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold px-5 py-2 rounded-full transition-colors"
            >
              Peça Agora
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-amber-900 border-t border-amber-700 px-4 pb-4">
          {[
            { label: "Sabores", href: "#sabores" },
            { label: "Sobre Nós", href: "#sobre" },
            { label: "Depoimentos", href: "#depoimentos" },
            { label: "Contato", href: "#contato" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-amber-100 hover:text-amber-300 font-medium py-3 border-b border-amber-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold px-5 py-2 rounded-full text-center transition-colors"
          >
            Peça Agora
          </a>
        </div>
      )}
    </header>
  );
}
