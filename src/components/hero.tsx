"use client"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary-dark flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-red opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Wujudkan Impian Akademik Anda
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Bersama AmbiSmart, raih kesuksesan dalam skripsi, beasiswa, dan kompetisi akademik. Program bimbingan
              intensif kami telah membantu ribuan mahasiswa meraih prestasi gemilang.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-transform hover:scale-105 shadow-lg">
              Mulai Belajar Sekarang
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all">
              Lihat Paket Kami
            </button>
          </div>
        </div>

        <div className="relative h-96 md:h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Decorative chart visualization */}
            <div className="flex items-flex-end justify-center gap-6 h-full">
              <div
                className="w-16 md:w-24 bg-gradient-to-t from-accent to-accent-light rounded-t-lg shadow-lg transform hover:scale-105 transition-transform"
                style={{ height: "40%" }}
              ></div>
              <div
                className="w-16 md:w-24 bg-gradient-to-t from-accent to-accent-light rounded-t-lg shadow-lg transform hover:scale-105 transition-transform"
                style={{ height: "60%" }}
              ></div>
              <div
                className="w-16 md:w-24 bg-gradient-to-t from-accent to-accent-light rounded-t-lg shadow-lg transform hover:scale-105 transition-transform"
                style={{ height: "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
