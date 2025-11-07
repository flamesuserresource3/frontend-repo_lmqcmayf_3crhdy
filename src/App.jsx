import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold">Renald Fuji Cahyono</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#tentang" className="hover:text-indigo-600">Tentang</a>
            <a href="#pengalaman" className="hover:text-indigo-600">Pengalaman</a>
            <a href="#kontak" className="hover:text-indigo-600">Kontak</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Renald Fuji Cahyono. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
