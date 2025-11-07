import { User } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 sm:py-28">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 w-max ring-1 ring-white/20 backdrop-blur">
            <User className="h-4 w-4" />
            <span className="text-sm/5">Portofolio • Renald Fuji Cahyono</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Renald Fuji Cahyono
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
            Mahasiswa Universitas Slamet Riyadi dengan pengalaman organisasi di desa
            sebagai sekretaris dan pembawa acara. Pernah magang pada bagian
            pengurusan faktur di Bekasi. Terbuka untuk kesempatan kolaborasi dan
            pengalaman baru.
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="#pengalaman"
              className="inline-flex items-center justify-center rounded-lg bg-white text-indigo-700 hover:bg-white/90 px-5 py-3 font-medium shadow-sm transition"
            >
              Lihat Pengalaman
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-500/20 text-white hover:bg-indigo-500/30 px-5 py-3 font-medium ring-1 ring-white/20 transition"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      </div>
    </section>
  );
}
