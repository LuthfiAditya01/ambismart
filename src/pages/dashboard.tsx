// import { About, CTA, Footer, Hero, Services, Testimonials } from "../components/";
import About from "../components/about";
import CTA from "../components/cta";
import Hero from "../components/hero";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Dashboard() {
    useDocumentTitle("Ambismart - From Ambis to Smart!");
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <CTA />
        </>
    )
}