import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { WelcomeScreen } from "@/components/ui/WelcomeScreen";
import { navLinks } from "@/data/navigation";

export default function Home() {
  return (
    <>
      <WelcomeScreen />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-neutral-black"
      >
        Skip to main content
      </a>

      <Navbar brandName="KURT RUSSEL NITE" links={navLinks} />

      <main id="main-content">
        <Hero />
        <FeaturedProjects />
        <Experience />
        <About />
        <Skills />
      </main>

      <Footer />
    </>
  );
}
