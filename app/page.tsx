import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] text-[#1a1a1a] selection:bg-amber-200 overflow-x-hidden font-sans">
      {/* 1. NAVIGATION COMPONENT */}
      <Header />

      {/* 2. HERO SECTION - VIZUAL IMPACT */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* BACKGROUND IMAGE - Cinematic Honey Macro */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=2000"
            alt="Goldener Honig Hintergrund"
            fill
            priority
            className="object-cover object-center scale-105 brightness-[0.7]"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/80 md:to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-12 pt-20">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-200">
                Ernte 2026 • Streng Limitiert
              </span>
            </div>

            <h1 className="text-6xl md:text-[110px] font-serif leading-[0.85] tracking-tighter mb-10 drop-shadow-2xl">
              Das flüssige <br />
              <span className="italic font-light text-amber-300">Gold</span> der
              Karpaten.
            </h1>

            <p className="mt-6 text-lg md:text-2xl text-stone-200 font-light leading-relaxed max-w-xl opacity-90">
              Roher, unfiltrierter Honig aus unberührter Wildnis. Ein
              Meisterwerk der Natur, direkt vom Imker an Ihren Tisch.
            </p>

            <div className="mt-14 flex flex-col sm:flex-row gap-8">
              <a
                href="#kollektion"
                className="group bg-amber-500 text-stone-950 px-12 py-6 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-500 shadow-2xl flex items-center justify-center gap-3"
              >
                Kollektion Entdecken
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </a>
              <a
                href="#philosophie"
                className="px-12 py-6 rounded-full border border-white/20 backdrop-blur-md text-[11px] uppercase tracking-[0.2em] font-bold text-white hover:bg-white hover:text-black transition-all duration-500 text-center"
              >
                Unsere Philosophie
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Icon */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/50"></div>
        </div>
      </header>

      {/* 3. PHILOSOPHIE - ELEGANT QUOTE */}
      <section id="philosophie" className="py-40 bg-[#FDFCF8]">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <span className="text-amber-700 text-[10px] uppercase tracking-[0.5em] font-black mb-10 block opacity-60">
            Das Erbe der Natur
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-stone-800 leading-[1.2] tracking-tight">
            "In jedem Glas bewahren wir die Stille der Wälder și das reinste
            Handwerk unserer Bienen."
          </h2>
          <div className="mt-16 w-24 h-[1px] bg-stone-300 mx-auto"></div>
        </div>
      </section>

      {/* 4. KOLLEKTION - PREMIUM PRODUCT GRID */}
      <section
        id="kollektion"
        className="py-32 max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl font-serif text-stone-900 tracking-tight">
              Die Selektion
            </h2>
            <p className="text-amber-800 font-medium mt-3 uppercase tracking-[0.2em] text-[10px]">
              Exklusive Jahrgangshonige • Abgefüllt von Hand
            </p>
          </div>
          <div className="h-[1px] flex-grow mx-12 bg-stone-100 hidden md:block"></div>
          <span className="text-stone-400 text-xs font-light italic">
            Limitierte Auflage
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {[
            {
              name: "Akazie",
              note: "Mild & Kristallklar",
              img: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?q=80&w=800",
            },
            {
              name: "Waldgold",
              note: "Herb & Tiefdunkel",
              img: "https://images.unsplash.com/photo-1615485240384-5423c37ca607?q=80&w=800",
            },
            {
              name: "Wildblüte",
              note: "Floral & Unberührt",
              img: "https://images.unsplash.com/photo-1471943311424-646960669fba?q=80&w=800",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative aspect-[3/4] w-full bg-stone-100 rounded-[2.5rem] overflow-hidden mb-10 shadow-sm group-hover:shadow-3xl transition-all duration-1000">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2s] brightness-[0.98]"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-700" />
              </div>
              <h3 className="text-3xl font-serif mb-3 text-stone-900">
                {item.name}
              </h3>
              <p className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-6">
                {item.note}
              </p>
              <div className="w-10 h-[1px] bg-amber-400 group-hover:w-20 transition-all duration-700 ease-in-out" />
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT - THE CALL TO ACTION */}
      <section id="kontakt" className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-stone-900 rounded-[5rem] p-16 md:p-32 text-white text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          {/* Decorative background glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[150px] rounded-full" />

          <h2 className="relative z-10 text-5xl md:text-8xl font-serif mb-10 leading-[1.1] tracking-tighter">
            Ein Gruß aus <br /> dem{" "}
            <span className="italic text-amber-400">Bienenstock.</span>
          </h2>
          <p className="relative z-10 text-stone-400 max-w-lg mx-auto mb-16 font-light text-xl leading-relaxed">
            Sichern Sie sich ein Stück reine Natur. Wir versenden europaweit,
            direkt aus unserer familiengeführten Imkerei.
          </p>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-center items-center">
            <a
              href="https://wa.me/yournumber"
              className="w-full md:w-auto px-14 py-7 bg-amber-500 text-stone-950 rounded-full font-bold text-[12px] tracking-[0.2em] hover:bg-white transition-all duration-500 uppercase shadow-xl"
            >
              WhatsApp Anfrage
            </a>
            <a
              href="mailto:contact@manufactummel.com"
              className="w-full md:w-auto px-14 py-7 border border-white/10 rounded-full font-bold text-[12px] tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 uppercase"
            >
              E-Mail Schreiben
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-stone-100 bg-white">
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-sm font-serif tracking-[0.4em] uppercase font-bold text-stone-900">
            Manufactum Mel
          </span>
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
            © 2026 Manufactum Mel — Artisanal Honey Archive | Romania
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-stone-400">
            <a href="#" className="hover:text-amber-700 transition">
              Impressum
            </a>
            <a href="#" className="hover:text-amber-700 transition">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
