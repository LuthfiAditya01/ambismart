
import Footer from "./components/footer"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import NotFound from "./pages/404"
import SecondAnniversary from "./pages/2ndyear"

export const metadata = {
  title: "AmbiSmart - From Ambis to Smart!",
  description:
    "Kami membantu siswa mencapai kesuksesan akademik melalui bimbingan intensif dan program paket pembelajaran yang disesuaikan dengan kebutuhan Anda.",
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/2nd" element={<SecondAnniversary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
