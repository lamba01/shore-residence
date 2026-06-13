import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shore Residence Limited | Strategic Real Estate & Investment",
  description:
    "Shore Residence Limited acquires, develops, and manages high-value real estate in strategic locations. Explore investment opportunities and completed projects.",
};

export default function Home() {
  return (
    <main style={{ background: "#0D0D0D", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
