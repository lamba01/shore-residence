import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About"

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

      {/* Placeholder sections — to be built next */}
      {/* <section id="about" style={{ minHeight: "100vh", background: "#141414" }} />
      <section id="services" style={{ minHeight: "100vh", background: "#0D0D0D" }} />
      <section id="projects" style={{ minHeight: "100vh", background: "#141414" }} />
      <section id="contact" style={{ minHeight: "100vh", background: "#0D0D0D" }} /> */}
    </main>
  );
}