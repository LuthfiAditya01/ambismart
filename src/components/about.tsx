// import useDocumentTitle from "../hooks/useDocumentTitle";

export default function About() {
  // useDocumentTitle("Tentang — AmbiSmart"); //Contoh Penggunaan
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6">Tentang AmbiSmart</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
              AmbiSmart adalah platform bimbingan akademik terpercaya yang telah membantu lebih dari 100+ mahasiswa
              mencapai kesuksesan mereka. Dengan tim mentor berpengalaman dan metodologi pembelajaran yang terbukti
              efektif, kami siap membimbing Anda menuju prestasi gemilang.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Setiap siswa memiliki keunikan dan kebutuhan yang berbeda. Oleh karena itu, kami menyediakan program
              bimbingan yang dapat disesuaikan dengan gaya belajar dan target akademik Anda.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-accent hover:shadow-xl transition-shadow aspect-square flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-1 md:mb-2">100+</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Siswa Berhasil</p>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-accent-red hover:shadow-xl transition-shadow aspect-square flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-red mb-1 md:mb-2">95%</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Tingkat Kepuasan</p>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow aspect-square flex flex-col justify-center items-center text-center">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold mb-1">Dipandu Oleh</p>
              <h3 className="text-base sm:text-lg md:text-2xl font-bold text-primary">Mentor Berpengalaman</h3>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-accent hover:shadow-xl transition-shadow aspect-square flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-dark mb-1 md:mb-2">24/7</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">Support Tersedia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
