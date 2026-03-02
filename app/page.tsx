// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF5]">
      {/* 1. NAV BAR MINIMALIST */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-serif font-bold text-amber-900">
          🍯 Stupina Noastră
        </div>
        <a
          href="#contact"
          className="bg-amber-800 text-white px-5 py-2 rounded-full text-sm font-medium"
        >
          Cere Miere
        </a>
      </nav>

      {/* 2. HERO SECTION - IMPACT VIZUAL */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">
          Produs Artizanal
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-amber-950 mt-4 leading-tight">
          Miere Crudă, Neîncălzită, <br />{" "}
          <span className="italic text-amber-700">Direct din Stup</span>
        </h1>
        <p className="mt-6 text-lg text-amber-900/70 max-w-xl mx-auto">
          Recoltăm mierea manual în zonele nepoluate ale României, păstrând
          toate enzimele și beneficiile intacte.
        </p>
      </header>

      {/* 3. GRID DE PREZENTARE (Beneficii vs Produse) */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Miere de Salcâm",
            desc: "Limpede, florală, nu cristalizează rapid.",
            icon: "🌼",
          },
          {
            title: "Miere de Tei",
            desc: "Aromă intensă, perfectă pentru somn liniștit.",
            icon: "🍃",
          },
          {
            title: "Polen Proaspăt",
            desc: "Multivitamine naturale direct de la albine.",
            icon: "✨",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-3xl border border-amber-100 shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-amber-900">{item.title}</h3>
            <p className="text-amber-800/60 mt-2">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 4. CTA (CALL TO ACTION) */}
      <section id="contact" className="my-20 mx-6">
        <div className="max-w-4xl mx-auto bg-amber-900 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl font-serif mb-6">
            Vrei un borcan de sănătate?
          </h2>
          <p className="mb-8 opacity-80 text-lg">
            Trimite-ne un mesaj sau sună-ne pentru detalii despre stoc și
            livrare.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-400 px-8 py-4 rounded-2xl font-bold transition">
              Sună: 07xx xxx xxx
            </button>
            <button className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-2xl font-bold transition border border-white/20">
              Scrie pe WhatsApp
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
