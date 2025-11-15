export default function Testimonials() {
  const testimonials = [
    {
      name: "Putri Helsa",
      major: "Agribisnis, Universitas Sultan Ageng Tirtayasa",
      package: "Paket SMART Lv.4",
      achievement: "✨ LANCAR SEMHAS",
      quote:
        "Sangat membantu saat saya buntu dengan pembahasan. Simulasi semhas yang kami lakukan sangat bermanfaat dan alhamdulillah semhas saya lancar. Terima kasih atas kesabaran dan dukungan kalian!",
    },
    {
      name: "Riska Nurma",
      major: "Sistem Informasi, Universitas Negeri",
      package: "Paket SMART Lv.3",
      achievement: "🏆 LOLOS BEASISWA",
      quote:
        "Berkat bimbingan AmbiSmart selama 7 sesi, saya berhasil lolos seleksi seminar Young Project 2.0 nasional. Ilmu yang diberikan sangat aplikatif dan mentor-nya sangat supportif.",
    },
    {
      name: "Ahmad Wijaya",
      major: "Teknik Mesin, ITB",
      package: "Paket SMART Lv.2",
      achievement: "🥇 JUARA LOMBA",
      quote:
        "Program ini tidak hanya membantu mengerjakan skripsi, tapi juga memberikan skills yang berguna untuk kompetisi. Alhamdulillah juara kompetisi tingkat nasional!",
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
                <p className="text-sm text-gray-600">{testimonial.major}</p>
                <p className="text-xs text-accent text-black font-semibold mt-1">{testimonial.package}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
