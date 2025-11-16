export default function CTA() {
  return (
    <section id="cta" className="py-20 px-4 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Siap Meraih Kesuksesan?</h2>
        <p className="text-xl text-gray-100 mb-8 leading-relaxed">
          Jangan biarkan kesempatan emas ini berlalu. Bergabunglah dengan ribuan siswa yang telah merasakan transformasi
          akademik bersama AmbiSmart.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all hover:scale-105 shadow-lg text-lg" onClick={() => (window.location.href = "https://bit.ly/PendaftaranAmbiSmart")}>
            Daftar Sekarang
          </button>
          <span className="text-white font-bold text-lg">Atau</span>
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:scale-105 transition-all text-lg" onClick={() => (window.location.href = "https://wa.me/6285280389330")}>
            Hubungi Kami! 
          </button>
        </div>
      </div>
    </section>
  )
}
