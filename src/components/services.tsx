export default function Services() {
  const packages = [
    {
      name: "PAKET NEWBIE",
      link: "PAKET%20NEWBIE",
      price: "85k - 120k",
      subtitle: "✨ GARANSI JUDUL DI ACC! ✨",
      description: "Bimbingan intensif untuk penulisan judul penelitian",
      features: [
        "Private Mentoring",
        "Rekomendasi 5 Opsi Judul",
        "Diberikan Database Jurnal & Referensi Acuan",
        "Gap Penelitian",
        "Mind Mapping Judul",
        "Brainstorming Judul",
        "Penentuan Dasar Teori Variabel",
        "3-10 hari chat intensif",
        "GRATIS Tools & Guide",
      ],
      highlight : true,
      color: "accent-light",
    },
    {
      name: "PAKET AMBIS",
      link: "PAKET%20AMBIS",
      price: "100k - 450k",
      subtitle: "✨ BIMBINGAN BAB 1-3 ✨",
      description: "Cocok untuk yang mau SEMPRO",
      features: [
        "Private Mentoring",
        "Rekomendasi jurnal dan referensi berkualitas",
        "Teknik penulisan tinjauan pustaka",
        "Bimbingan Metode Penelitian",
        "Penyusunan Instrumen",
        "Bimbingan Penulisan anti Plagiat",
        "Simulasi Sempro",
        "ANTI GANTI JUDUL PAS SEMPRO",
        "Jaminan PAHAM ditanya Dosen",
        "GRATIS Q&A SEMPRO",
        "GRATIS Template PPT",
        "GRATIS Software Pencari Jurnal",
        "GRATIS Tools & Guide Skripsi",
        "GRATIS Konsultasi Revisi Dosen",
        "5 hari - 1 bulan chat intensif",
      ],
      color: "accent",
    },
    {
      name: "PAKET SMART",
      link: "PAKET%20SMART",
      price: "150k - 500k",
      subtitle: "✨ LULUS LEBIH CEPAT ✨",
      description: "Cocok untuk yang mau SEMHAS atau SIDANG",
      features: [
        "GARANSI ANTI REVISI",
        "Bimbingan intensif Pertahanan bab 1-5",
        "Penyusunan Kuesioner",
        "Teknik Pengumpulan Data",
        "Bimbingan OLAH DATA",
        "GRATIS SOFTWARE OLAH DATA",
        "Bimbingan Hasil & Pembahasan",
        "Teknik Penulisan Kesimpulan",
        "Teknik Penulisan Saran",
        "Pembuatan PPT Sidang Akhir",
        "Simulasi Sidang Akhir",
        "GRATIS Q&A Sidang Skripsi",
        "GRATIS Template PPT",
        "GRATIS Software Pencari Jurnal",
        "GRATIS Tools & Guide Skripsi",
        "GRATIS Konsul Revisi - LULUS",
        "5 hari - 1 bulan chat intensif",
      ],
      color: "primary",
    },
    {
      name: "PAKET SIMULASI",
      link: "PAKET%20SIMULASI",
      price: "85k - 100k",
      subtitle: "✨ SIAP SIDANG TANPA PANIK ✨",
      description: "Persiapan maksimal untuk sidang",
      features: [
        "Latihan Presentasi SIDANG dari pembuka - penutup",
        "Tips & Trik Menjawab Pertanyaan",
        "Latihan Q&A Skripsi",
        "Feedback cara presentasi",
        "Tips & Trik menghadapi dosen ketika sidang",
        "Feedback revisi setelah sidang",
        "Bimbingan revisi setelah sidang",
        "GRATIS Template PPT",
        "GRATIS Template Q&A",
        "GRATIS Tools & Guide Skripsi",
        "Simulasi online atau ppt",
      ],
      color: "accent-red",
    },
    {
      name: "PAKET ANTI REVISI",
      link: "PAKET%20ANTI%20REVISI",
      price: "50k",
      subtitle: "✨ Anti Revisi Oleh Dosen ✨",
      description: "Revisi apa saja yang harus diperbaiki",
      features: [
        "Diberikan revisi apa saja yang harus diperbaiki sebelum mengajukan ke Dosen",
        "Bantuan PARAFRASE anti kena plagiat",
        "Pemahaman mengenai skripsi",
        "Tambahan REFERENSI",
        "GRATIS Template PPT",
        "GRATIS Q&A",
        "GRATIS Software pencari jurnal",
        "1X revisi skripsi (chat intensif)",
      ],
      color: "accent-light",
    },
    {
      name: "PAKET BEASISWA",
      link: "PAKET%20BEASISWA",
      price: "100k - 300k",
      subtitle: "✨ Siap Lolos Beasiswa dengan Persiapan Terbaik ✨",
      description: "1 on 1 Mentoring Beasiswa",
      features: [
        "Pelatihan Tes & Wawancara",
        "Tips & Trik Pembuatan Motivation Letter/Essay yang menojol",
        "Proofreading Essay agar bebas kesalahan",
        "Simulasi & Feedback untuk meningkatkan performa wawancara",
        "Eksklusif Template Q&A Wawancara",
        "GRATIS Konsultasi via Chat kapan saja",
        "GRATIS Tools Lolos Beasiswa",
        "Mentor adalah AWARDEE yang berpengalaman langsung",
        "3 hari - 2 minggu intensif chat",
      ],
      color: "accent",
    },
    {
      name: "PAKET LOMBA",
      link: "PAKET%20LOMBA",
      price: "100k - 300k",
      subtitle: "✨ Bimbingan Langkap untuk Jadi Juara Lomba ✨",
      description: "1 on 1 Mentoring Lomba",
      features: [
        "Bimbingan Pembuatan lomba hingga selesai: Essay/Business Plan/KTI",
        "Tips & Trik menghadapi juri, presentasi dll",
        "Proofreading Essay, dll serta feedback",
        "Diskusi Selama Perlombaan Berlangsung",
        "Materi Relevan dengan Lomba",
        "SIMULASI Presentasi",
        "Eksklusif tools JUARA LOMBA",
        "FREE konsultasi via chat 24/7",
        "Mentor adalah JUARA LOMBA ESSAY, BUSINESS PLAN, BMC, KTI, PODCAST, POSTER, dll",
        "Intensif chat 3 hari - 1 bulan",
      ],
      color: "primary",
    },
    {
      name: "PAKET AKADEMIK",
      link: "PAKET%20AKADEMIK",
      price: "100k - 200k",
      subtitle: "✨ Tuntas Tugas, Tingkatkan Prestasi ✨",
      description: "1-on-1 Mentoring Personal",
      features: [
        "Bimbingan Lengkap Tugas: Membantu dari awal hingga selesai",
        "Feedback Mendalam: revisi tugas untuk hasil maksimal",
        "Konsultasi dan brainstorming untuk solusi terbaik",
        "Mendukung pengerjaan tugas secara efektif",
        "Pengingat Deadline: FREE Konsultasi via Chat 24/7",
        "Simulasi Presentasi Tugas",
        "Eksklusif Template dan Tools Tugas Akademik",
        "Chat intensif 3 hari - 2 minggu dengan prioritas respons",
      ],
      color: "accent-red",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Paket AmbiSmart</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            🎓 Pilih Paket, Sesuaikan Anggaran, Raih Kesuksesan Bersama AmbiSmart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl ${
                pkg.highlight
                  ? "bg-gradient-to-br from-accent to-accent-dark text-white shadow-2xl transform hover:scale-105"
                  : "bg-gray-50 border-2 border-gray-200 hover:border-accent"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-red text-white px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                    TERPOPULER
                  </span>
                </div>
              )}

              <h3 className={`text-xl sm:text-2xl font-bold mb-2 text-primary`}>
                {pkg.name}
              </h3>

              {pkg.subtitle && (
                <p
                  className={`text-xs sm:text-sm font-semibold mb-3 ${pkg.highlight ? "text-accent-light" : "text-black"}`}
                >
                  {/* {pkg.subtitle} */}
                  {pkg.highlight ? <><span className="text-green-800 font-extrabold">✨ GARANSI JUDUL DI ACC! ✨</span></> : pkg.subtitle}
                </p>
              )}

              <p className={`text-sm mb-4 ${pkg.highlight ? "text-black" : "text-gray-600"}`}>{pkg.description}</p>

              <div className={`text-2xl sm:text-3xl font-bold mb-6 ${pkg.highlight ? "text-black" : `text-${pkg.color}`}`}>
                {pkg.price}
              </div>

              <ul className="space-y-2 mb-6 max-h-96 overflow-y-auto">
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-xs sm:text-sm ${pkg.highlight ? "text-black" : "text-gray-700"}`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${pkg.highlight ? "bg-white bg-opacity-30" : "bg-accent bg-opacity-20"}`}
                    >
                      ✓
                    </span>
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* <button
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all text-sm sm:text-base ${
                  pkg.highlight ? "bg-white text-accent hover:bg-gray-100" : "bg-accent text-white hover:bg-accent-dark"
                }`}
              >
                Pilih Paket
              </button> */}
              <a
              href={`https://wa.me/6285280389330?text=Halo%20kak!%20saya%20mau%20tanya%20tentang%20${pkg.link}-nya`}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <span>💬</span>
              <span className="text-white">Tanya Paket Ini</span>
            </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Butuh konsultasi untuk memilih paket yang tepat? Hubungi kami!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285280389330?text=Halo%20kak!%20saya%20mau%20tanya%20tentang%20AmbiSmart."
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <span>💬</span>
              <span className="text-white">Chat WhatsApp</span>
            </a>
            <a
              href="#cta"
              className="px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold rounded-lg transition-all"
            >
              Daftar Sekarang!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
