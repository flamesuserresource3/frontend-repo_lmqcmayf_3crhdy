export default function Contact() {
  return (
    <section id="kontak" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl ring-1 ring-gray-200/70 p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Kontak
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Tertarik untuk bekerja sama atau memiliki peluang yang cocok? Saya
            terbuka untuk diskusi lebih lanjut.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <a
              href="mailto:renaldfuji@example.com"
              className="block rounded-xl bg-gray-50 hover:bg-gray-100 transition p-5 ring-1 ring-gray-200"
            >
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-900">renaldfuji@example.com</p>
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl bg-gray-50 hover:bg-gray-100 transition p-5 ring-1 ring-gray-200"
            >
              <p className="text-sm text-gray-500">WhatsApp</p>
              <p className="font-medium text-gray-900">+62 812-3456-7890</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
