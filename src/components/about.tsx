export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Tentang AmbiSmart</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              AmbiSmart adalah platform bimbingan akademik terpercaya yang telah membantu lebih dari 1000+ mahasiswa
              mencapai kesuksesan mereka. Dengan tim mentor berpengalaman dan metodologi pembelajaran yang terbukti
              efektif, kami siap membimbing Anda menuju prestasi gemilang.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Setiap siswa memiliki keunikan dan kebutuhan yang berbeda. Oleh karena itu, kami menyediakan program
              bimbingan yang dapat disesuaikan dengan gaya belajar dan target akademik Anda.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-bold text-accent mb-2">1000+</h3>
              <p className="text-gray-600 font-semibold">Siswa Berhasil</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent-red hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-bold text-accent-red mb-2">95%</h3>
              <p className="text-gray-600 font-semibold">Tingkat Kepuasan</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-600 font-semibold">Mentor Berpengalaman</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-bold text-accent mb-2">24/7</h3>
              <p className="text-gray-600 font-semibold">Support Tersedia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
