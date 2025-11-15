import { useState } from "react"
import useDocumentTitle from "../hooks/useDocumentTitle"

export default function SecondAnniversary() {
  useDocumentTitle("Ambismart 2nd Anniversary — Ambismart In The Park")
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <button onClick={() => setIsEnglish(!isEnglish)} className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg shadow-lg transition-all">{!isEnglish ? "Switch to English" : "Ubah ke Bahasa Indonesia"}</button>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark">
        {/* Confetti Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-4 h-4 bg-accent rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-accent-light rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-accent-red rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-4 h-4 bg-accent-light rounded-full animate-bounce"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 py-12 md:py-20">
          {/* Anniversary Badge */}
          <div className="inline-block mb-6 md:mb-8">
            <div className="bg-accent text-accent-red px-6 py-3 rounded-full font-bold text-sm sm:text-base shadow-lg animate-pulse">
              {!isEnglish ? "🎉 Acara Spesial Ulang Tahun 🎉" : "🎉 Anniversary Special Event 🎉"}
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {isEnglish ? 
            <div>
              Celebrating
            <br />
            <span className="text-accent-light animate-pulse drop-shadow-[0_0_20px_rgba(255,184,77,0.8)] drop-shadow-[0_0_40px_rgba(255,149,0,0.6)]">AmbiSmart</span> 2nd Anniversary!
            </div> : 
            <div>
              Perayaan Ulang Tahun ke-2
            <br />
            <span className="text-accent-light animate-pulse drop-shadow-[0_0_20px_rgba(255,184,77,0.8)] drop-shadow-[0_0_40px_rgba(255,149,0,0.6)]">AmbiSmart</span>!
            </div>}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              {/* Dua tahun bersama Anda adalah pencapaian luar biasa! Mari rayakan dengan kegiatan spesial yang penuh
              inspirasi dan pembelajaran. */}
            {isEnglish ? "Being together with you for two years is an outstanding accomplishment! Let's celebrate with special events filled with inspiration and learning." : "Dua tahun bersama Anda adalah pencapaian luar biasa! Mari rayakan dengan kegiatan spesial yang penuh inspirasi dan pembelajaran."}
          </p>

          {/* Event Highlight */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-accent rounded-2xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto mb-8 shadow-2xl">
            <div className="text-6xl sm:text-7xl md:text-8xl mb-4">🌳</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Ambismart In The Park</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 leading-relaxed">
              {isEnglish ? "Join us for a fun and interactive outdoor English learning session!" : "Yuk gabung dengan kami buat belajar bahasa Inggris di luar ruangan yang menyenangkan dan interaktif!"}            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">📅</span>
                <span className="font-semibold text-sm sm:text-base">{isEnglish ? "Sunday, November 23rd 2025" : "Minggu, 23 November 2025"}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">📍</span>
                <span className="font-semibold text-sm sm:text-base">{isEnglish ? "University of Lampung" : "Universitas Lampung" }</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">⏰</span>
                <span className="font-semibold text-sm sm:text-base">{isEnglish ? "08:00 AM" : "08:00 WIB"}</span>
              </div>
            </div>
          </div>

          <button className="px-8 sm:px-10 py-4 sm:py-5 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all shadow-2xl text-base sm:text-lg transform hover:scale-105">
            {isEnglish ? "Register Now - FREE!" : "Daftar Sekarang - GRATIS!"}
          </button>
        </div>
      </section>

      {/* Event Activities */}
      {/* <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Apa yang Akan Kita Lakukan?</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              Berbagai aktivitas seru dan edukatif menanti Anda di acara spesial ini
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-accent">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Interactive Speaking Games</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Latihan berbicara bahasa Inggris melalui games interaktif yang fun dan engaging dengan sesama peserta.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-accent-red">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Role Play Sessions</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Praktik situasi real-life dalam bahasa Inggris melalui role play yang menyenangkan dan edukatif.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-primary">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">English Songs & Stories</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Belajar pronunciation dan vocabulary melalui lagu-lagu dan storytelling dalam bahasa Inggris.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-accent-light">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">English Quiz Competition</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Kompetisi quiz berhadiah menarik untuk menguji kemampuan bahasa Inggris Anda dengan cara yang seru!
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-accent">
              <div className="text-5xl mb-4">🍔</div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Food & Networking</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Nikmati snack gratis sambil berkenalan dan networking dengan fellow English learners.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-accent-red">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Doorprize & Surprises</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Hadiah menarik menanti peserta yang beruntung, plus special surprises dari AmbiSmart!
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              {isEnglish ? "Why you should join Ambismart In The Park?" : "Kenapa kamu harus gabung di Ambismart In The Park"}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              {/* Lebih dari sekadar perayaan, ini adalah kesempatan emas untuk mengembangkan skill Anda. */}
              {isEnglish ? "More than just a celebration, this is a golden opportunity to enhance your skills!" : "Lebih dari sekedar perayaan, ini sebuah kesempatan besar untuk meningkatkan skill kamu!"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex gap-4 p-6 bg-gradient-to-br from-accent/10 to-accent-light/10 rounded-xl border-l-4 border-accent">
              <div className="text-3xl flex-shrink-0">✨</div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{isEnglish ? "100% FREE" : "100% GRATIS"}</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {isEnglish ? "No registration fee! This is our way of showing appreciation to you." : "Gak ada biaya pendaftaran! Ini adalah cara kami mengucapkan terima kasih ke kamu."}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border-l-4 border-primary">
              <div className="text-3xl flex-shrink-0">🎓</div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{isEnglish ? "Improve your Public Speaking Skill" : "Meningkatkan Kemampuan Public Speaking kamu, iya kamu"}</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {/* Tingkatkan kemampuan berbicara di depan umum dalam bahasa Inggris melalui berbagai aktivitas seru. */}
                  {isEnglish ? "Enhance your skill in Public Speaking in English through fun activities." : "Ningkatin kemampuan berbicara Bahasa Inggris kamu di depan umum dengan aktivitas yang pasti seru."}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gradient-to-br from-accent-red/10 to-accent-red/5 rounded-xl border-l-4 border-accent-red">
              <div className="text-3xl flex-shrink-0">👥</div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{isEnglish ? "Meet New Friends!" : "Ketemu Temen Baru!"}</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {/* Bertemu dengan sesama learners, mentor berpengalaman, dan expand your network. */}
                  {isEnglish ? "Meet fellow learners, experienced mentors, and expand your network." : "Ketemu dengan teman-teman yang ingin belajar, jadi relasi kamu makin luas!"}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gradient-to-br from-accent-light/10 to-accent/5 rounded-xl border-l-4 border-accent-light">
              <div className="text-3xl flex-shrink-0">🌟</div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{isEnglish ? "Special Voucher Discount" : "Voucher Diskon Khusus"}</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {/* Dapatkan voucher pembelian paket khusus setelah bergabung di acara ini! */}
                  {isEnglish ? "Get a special voucher after joining the event!" : "Dapetin voucher pembelian paket khusus setelah bergabung di acara ini!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">{isEnglish ? "Don't miss out on this special event!" : "Jangan lewatkan acara ini!"}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 md:mb-10 leading-relaxed">
            {isEnglish ? "Space is limited to the first 100 participants. Register now and secure your spot at AmbiSmart's special 2nd anniversary event!" : "Kuota terbatas untuk 100 peserta pertama. Daftar sekarang dan ikutin Acara Spesial Ulang Tahun Ambismart!"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="px-8 sm:px-10 py-4 sm:py-5 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all shadow-2xl text-base sm:text-lg transform hover:scale-105 w-full sm:w-auto" onClick={() => window.location.href = "https://wa.me/6285280389330?text=Halo%20kak!%20saya%20mau%20tanya%20tentang%20Ambismart%20In%20The%20Park%20Dong"}>
              {isEnglish ? "Register Now" : "Daftar Sekarang"}
            </button>
            <button className="px-8 sm:px-10 py-4 sm:py-5 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all shadow-2xl text-base sm:text-lg transform hover:scale-105 w-full sm:w-auto" onClick={() => window.location.href = "https://wa.me/6285280389330?text=Halo%20kak!%20saya%20mau%20tanya%20tentang%20Ambismart%20In%20The%20Park%20Dong"}>
              {isEnglish ? "More Info" : "Info Lebih Lanjut"}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-white text-sm sm:text-base">
            {/* <div className="flex items-center justify-center gap-2">
              <span>📧</span>
              <span>info@ambismart.id</span>
            </div> */}
            <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => window.location.href = "https://wa.me/6285280389330"}>
              <span>📱</span>
              <span>WhatsApp: +62 852-8038-9330</span>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl sm:text-7xl md:text-8xl mb-6">🎊</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6">{isEnglish ? "Thank You!" : "Terima Kasih!"}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {isEnglish ? "These two years would not have been possible without your support and trust. Thank you for being part of AmbiSmart's journey. Let's continue to grow together towards brilliant academic success! 🚀" 
            : "Dua tahun ini tidak akan berarti tanpa dukungan dan kepercayaan Kamu! Terima kasih sudah menjadi bagian dari perjalanan AmbiSmart. Mari terus tumbuh bersama menuju kesuksesan akademik yang gemilang! 🚀"}
          </p>
        </div>
      </section>
    </div>
  )
}
