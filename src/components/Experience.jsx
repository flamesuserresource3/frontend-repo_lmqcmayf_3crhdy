import { FileText, Mic, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Sekretaris Organisasi Desa",
    org: "Desa (Organisasi Kepemudaan)",
    period: "—",
    icon: FileText,
    points: [
      "Mengelola surat-menyurat dan notulensi rapat",
      "Menyusun arsip dan dokumentasi kegiatan",
      "Koordinasi administrasi dengan perangkat desa",
    ],
  },
  {
    title: "Pembawa Acara (MC)",
    org: "Kegiatan Desa",
    period: "—",
    icon: Mic,
    points: [
      "Memimpin jalannya acara dengan bahasa yang komunikatif",
      "Membangun suasana dan menjaga alur kegiatan",
      "Berkoordinasi dengan panitia untuk kelancaran acara",
    ],
  },
  {
    title: "Magang Pengurusan Faktur",
    org: "Bekasi",
    period: "—",
    icon: Building2,
    points: [
      "Membantu proses pembuatan dan pengecekan faktur",
      "Verifikasi data administratif dan pelaporan",
      "Mendukung tim dalam alur dokumen dan arsip",
    ],
  },
];

export default function Experience() {
  return (
    <section id="pengalaman" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
          Pengalaman
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{exp.title}</p>
                    <p className="text-sm text-gray-500">{exp.org}</p>
                  </div>
                </div>
                <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-1">
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
