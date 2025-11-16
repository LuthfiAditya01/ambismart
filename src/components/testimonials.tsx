export default function Testimonials() {
  const testimonials = [
    {
      name: "Putri Helsa",
      major: "Agribisnis, Universitas Sultan Ageng Tirtayasa",
      package: "Paket SMART Lv.4",
      achievement: "✨ LANCAR SEMHAS",
      quote:
        "ga nyesel ikutan ambismart soalnya ngebantu bangett waktu pas lagi buntu buntunya ngerjain bagian pembahasan, terus seru jugaa kita nyobain simulasi buat semhas dan alhamdulillah lancar semhasnya berkat udah belajar h-2 semhas bareng teteh teteh yang baikk baik inii, sama makasih ya tehh udah mau nungguin aku yang sangat amat ngarett diwaktuu, yang seharusnya selesainya mungkin udah dari lama tapi baru selesai karna ada beberapa hal. pokonyaa terbaik dehhh, makasih banyak ya teteh teteh🌻🌻",
    },
    {
      name: "Putri Ayu Lestari",
      major: "Peserta Duta Bahasa Indonesia Provinsi Lampung Tahun 2025",
      // package: "Paket SMART Lv.3",
      achievement: "🏆 Juara 1 Putri Duta Bahasa Provinsi Lampung",
      quote:
        "Kamu pernah ngerasain ga, belajar tapi gak sadar? Kurang lebih perasaan itu yang aku rasakan waktu belajar di AmbiSmart. Dengan ngobrol santai, berbagi cerita dan keresahan, dan ketawa bareng, ternyata itulah bagian belajarnya. Hasilnya juga diluar dugaanku, aku jadi merasa lebih siap dan mengenal diriku. Dari AmbiSmart juga, aku menyadari bahwa segala tujuan bisa kita capai dengan langkah awal mengenali diri dengan sebaik mungkin. Maka, untuk kamu ayo coba juga untuk belajar disini! Rasakan suasana menyenangkan, tanpa pusing dan drama belajar kaku, tapi hasilnya nomor satu!",
    },
    {
      name: "Arif Nurul Al Aziz",
      major: "Peserta Duta Bahasa Indonesia Provinsi Lampung Tahun 2025",
      // package: "Paket SMART Lv.3",
      achievement: "🏆 Juara 2 Putra Duta Bahasa Provinsi Lampung",
      quote:
        "AmbiSmart bener-bener membantu saya untuk mempersiapkan penilaian dalam pemilihan Duta Bahasa Provinsi Lampung 2025. Terutama pada wawancara akhir, bersama AmbiSmart saya diberikan ruang diskusi, membedah total persiapan dan krida, serta mematangkan kesiapan dalam menjawab berbagai jenis pertanyaan terkait. Saya sangat merekomendasikan AmbiSmart untuk mempersiapkan diri dalam menempuh segala jenis prestasi.",
    },
    {
      name: "Salsabilla Najwa Az-Zahra",
      major: "Peserta Duta Bahasa Indonesia Provinsi Lampung Tahun 2025",
      // package: "Paket SMART Lv.3",
      achievement: "🏆 Juara 2 Putri Duta Bahasa Provinsi Lampung",
      quote:
        "Apapun kegiatannya, AmbiSmart jawabannya. Berbagi cerita juga keresahan, diterima baik di sini. Rasanya seperti memiliki kakak kandung namun tak sedarah. AmbiSmart juga menjadi salah satu tempat belajar terbaik untuk mengejar segala impian kalian. Jadi, mari bersinar bersama AmbiSmart!",
    },
    {
      name: "Nur Intan Permatasari Gumay",
      major: "Kedokteran - Universitas Ciputra",
      package: "Paket SMART Lv.2",
      achievement: "✨ LANCAR SEMPRO",
      quote:
        "Makasih banyak buat tutor2 di ambissmart atas sharing ilmunya tentang tata cara presentasi sidang dan gambaran menulis penelitian, Alhamdulillah semproku dah selesai bismillah revisi dan bab 5 dan 6 lancar thankyouu kakkele",
    },
    {
      name: "Dea Ayu Ardelia",
      major: "Agribisnis - Universitas Sultan Ageng Tirtayasa",
      // package: "Paket SMART Lv.2",
      achievement: "🥇 Lulusan Terbaik",
      quote:
        "Makasih banyak buat tutor2 di ambissmart atas sharing ilmunya tentang tata cara presentasi sidang dan gambaran menulis penelitian, Alhamdulillah semproku dah selesai bismillah revisi dan bab 5 dan 6 lancar thankyouu kakkele",
    },
  ]

  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">TESTIMONI AMBISQUAD</h2>
          <p className="text-xl text-gray-600">
            <span className="text-primary font-bold">SKRIPSI CEPAT WISUDA, JUARA LOMBA, LOLOS BEASISWA</span> 😍
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-accent"
            >
              <div className="mb-4">
                <p className="text-sm text-accent-red font-bold">{testimonial.achievement}</p>
                <p className="text-gray-600 text-sm mt-2">{testimonial.quote}</p>
              </div>

              <div className="border-t pt-4 mt-6">
                <p className="font-bold text-primary">{testimonial.name}</p>
                {testimonial.major ? <>
                <p className="text-sm text-gray-600">{testimonial.major}</p></> : null}
                {testimonial.package ? <>
                <p className="text-xs text-accent text-black font-semibold mt-1">{testimonial.package}</p></> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
