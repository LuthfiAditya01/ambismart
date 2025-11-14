import { useNavigate } from "react-router-dom"
import useDocumentTitle from "../hooks/useDocumentTitle"

export default function NotFound() {    
    useDocumentTitle("AmbiSmart - 404 Not Found");
  const navigate = useNavigate()

  return (
    <section className="min-h-screen bg-linear-to-br from-primary via-primary to-primary-dark flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent-red opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 py-12">
        <div className="space-y-6 md:space-y-8">
          {/* 404 Number */}
          <div className="relative">
            <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white opacity-20">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl sm:text-7xl md:text-8xl">🔍</div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Halaman Tidak Ditemukan</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed px-4">
              Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan. Mari kembali ke halaman utama dan
              temukan program bimbingan terbaik untuk kesuksesan akademik Anda!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => navigate("/")}
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all shadow-lg text-sm sm:text-base w-full sm:w-auto"
            >
              Kembali ke Beranda
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all text-sm sm:text-base w-full sm:w-auto"
            >
              Halaman Sebelumnya
            </button>
          </div>

          {/* Suggestions */}
          <div className="pt-8 space-y-3">
            <p className="text-gray-300 text-sm sm:text-base">Mungkin Anda mencari:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => navigate("/#about")}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all text-xs sm:text-sm"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => navigate("/#services")}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all text-xs sm:text-sm"
              >
                Paket Bimbingan
              </button>
              <button
                onClick={() => navigate("/#testimonials")}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all text-xs sm:text-sm"
              >
                Testimoni
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
