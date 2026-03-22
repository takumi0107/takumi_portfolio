import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p style={{ textAlign: "center", fontFamily: "monospace", fontSize: 11, color: "#374151", letterSpacing: "0.2em" }}>
          © 2026 TAKUMI KOTOBUKI · BUILT WITH NEXT.JS + THREE.JS
        </p>
      </footer>
    </main>
  );
}
