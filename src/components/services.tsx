export default function Services() {
  const packages = [
    {
      name: "SMART Level 1",
      price: "Rp 500K",
      description: "Paket dasar untuk pemula",
      features: ["4 sesi belajar", "Materi pembelajaran", "Konsultasi via chat", "Sertifikat keikutsertaan"],
      color: "accent-light",
    },
    {
      name: "SMART Level 2",
      price: "Rp 1.2M",
      description: "Paket standar untuk hasil optimal",
      features: ["10 sesi belajar", "Materi lengkap", "Konsultasi video", "Mock exam", "Sertifikat resmi"],
      highlight: true,
      color: "accent",
    },
    {
      name: "SMART Level 3",
      price: "Rp 2M+",
      description: "Paket premium dengan jaminan hasil",
      features: ["16+ sesi belajar", "Mentor dedicated", "Priority support", "Career coaching", "Lifetime access"],
      color: "accent-red",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">PAKET AMBISMART</h2>
          <p className="text-xl text-gray-600">🎓 Pilih Paket, Sesuaikan Anggaran, Raih Kesuksesan Bersama AmbiSmart</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 transition-all duration-300 ${
                pkg.highlight
                  ? "bg-gradient-to-br from-accent to-accent-dark text-white shadow-2xl scale-105"
                  : "bg-gray-50 border-2 border-gray-200 hover:border-accent"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-red text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${pkg.highlight ? "text-black" : "text-primary"}`}>{pkg.name}</h3>
              <p className={`mb-4 ${pkg.highlight ? "text-black" : "text-gray-600"}`}>{pkg.description}</p>

              <div className={`text-4xl font-bold mb-6 ${pkg.highlight ? "text-black" : `text-${pkg.color}`}`}>
                {pkg.price}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-3 ${pkg.highlight ? "text-black" : "text-gray-700"}`}>
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${pkg.highlight ? "bg-white bg-opacity-30" : "bg-accent bg-opacity-20"}`}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  pkg.highlight ? "bg-white text-accent hover:bg-gray-100" : "bg-accent text-white hover:bg-accent-dark"
                }`}
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
