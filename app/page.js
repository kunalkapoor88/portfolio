"use client";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-0">
      <Header />
      <section id='hero' className="snap-start">
        <Hero />
      </section>
      <section id='about' className="snap-center pt-[2vh]">
        <About />
      </section>
      <section id='education' className="snap-center pt-[2vh]">
        <Education/>
      </section>
      <section id='experience' className="snap-center pt-[2vh]">
        <Experience/>
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      </main>
    
  );
}
