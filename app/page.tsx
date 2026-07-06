import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AudioToggle from "@/components/Audio/AudioToggle";


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AudioToggle />
      <Hero />
      <hr className="divider container-cottage" />
      <Projects />
      <hr className="divider container-cottage" />
      <Skills />
      <Experience />
      <hr className="divider container-cottage" />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
