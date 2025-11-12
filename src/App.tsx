import Hero from "./components/hero"
import About from "./components/about"
import Services from "./components/services"
import Testimonials from "./components/testimonials"
import CTA from "./components/cta"
import Footer from "./components/footer"
import "./App.css"

export const metadata = {
  title: "AmbiSmart - From Ambis to Smart!",
  description:
    "Kami membantu siswa mencapai kesuksesan akademik melalui bimbingan intensif dan program paket pembelajaran yang disesuaikan dengan kebutuhan Anda.",
}

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
