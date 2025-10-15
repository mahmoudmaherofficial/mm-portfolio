import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import TechStackSection from "./components/sections/TechStackSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/shared/footer/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <ProjectSection />
      <TechStackSection />
      <ExperienceSection />
      <ContactSection />
      <Footer/>
    </main>
  );
};

export default App;
