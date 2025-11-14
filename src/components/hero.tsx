"use client";
// import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Hero() {
  // useDocumentTitle("Home — AmbiSmart"); //Contoh Penggunaan
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-accent-primary to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent-red opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 py-12 md:py-0">
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight">Wujudkan Impian Akademik Anda</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">Bersama AmbiSmart, raih kesuksesan dalam skripsi, beasiswa, dan kompetisi akademik. Program bimbingan intensif kami telah membantu ribuan mahasiswa meraih prestasi gemilang.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all shadow-lg text-sm sm:text-base"
              onClick={() => (window.location.href = "#services")}>
              Mulai Belajar Sekarang
            </button>
            <button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all shadow-lg text-sm sm:text-base"
              onClick={() => (window.location.href = "#about")}>
              Apa itu AmbiSmart?
            </button>
          </div>
        </div>

        <div className="relative h-64 sm:h-80 md:h-96 lg:h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Decorative chart visualization */}
            <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-6 h-full px-4">
              <div
                className="w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-t from-accent to-accent-light rounded-t-lg shadow-lg transform hover:scale-105 transition-transform"
                style={{ height: "40%" }}></div>
              <div
                className="w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-t from-accent to-accent-light rounded-t-lg shadow-lg transform hover:scale-105 transition-transform"
                style={{ height: "60%" }}></div>
              <div
                className="w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-t from-accent to-accent-light rounded-t-lg shadow-lg transform hover:scale-105 transition-transform"
                style={{ height: "80%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
