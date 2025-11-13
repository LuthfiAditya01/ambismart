
import Footer from "./components/footer"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard"

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
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
