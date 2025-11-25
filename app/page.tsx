import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { TechPartners } from "@/components/sections/TechPartners";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <BusinessModel />
        <TechPartners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
