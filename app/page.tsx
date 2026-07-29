import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <AnimatedBackground />

      <div className="relative z-10 min-h-screen overflow-x-hidden font-sans text-white selection:bg-purple-500/30">
        <Navbar />

        <main id="home">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>

      <ScrollToTop />
    </>
  );
}