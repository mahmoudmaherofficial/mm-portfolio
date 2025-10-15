import { ArrowRight } from "lucide-react";
import DarkVeil from "@/components/DarkVeil";
import TextPressure from "@/components/TextPressure";
import TextType from "@/components/TextType";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex items-center min-h-screen isolate">
      <div className="lg:hidden absolute -top-140 left-0 right-0 bottom-0 -z-10">
        <DarkVeil noiseIntensity={0.03} scanlineIntensity={0.12} scanlineFrequency={12} warpAmount={5} speed={1} />
      </div>
      <div className="hidden lg:block absolute inset-0 -z-10">
        <DarkVeil noiseIntensity={0.03} scanlineIntensity={0.12} scanlineFrequency={12} warpAmount={5} speed={1} />
      </div>

      <section
        className="container grid items-center grid-cols-1 gap-10 py-12 lg:grid-cols-2 sm:py-16"
        aria-label="Hero Content">
        <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
          <aside
            className="inline-flex items-center gap-2 px-3 py-1 mx-auto border rounded-full lg:mx-0 border-white/15 bg-white/5"
            aria-label="Availability">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-white/80">Available for freelance projects</span>
          </aside>

          <header className="w-full mb-4">
            <h1 className="sr-only">Mahmoud Maher - Frontend Developer</h1>
            <TextPressure
              text="Mahmoud Maher"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={32}
            />
            <TextType
              text={["Frontend Developer", "Specialized in Next.js & React.js"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              style={{ fontSize: "20px", fontWeight: "200" }}
            />
          </header>

          <p className="mx-auto lg:mx-0 max-w-[60ch] text-pretty text-white/75 leading-relaxed">
            Junior frontend developer crafting immersive, high-performance web experiences with modern React,
            TypeScript, and motion-first design.
          </p>

          <nav
            className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 lg:justify-start"
            aria-label="Primary">
            <a href="#projects">
              <Button
                size={"lg"}
                className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-md w-full sm:w-auto px-6 py-3">
                View Projects <ArrowRight />
              </Button>
            </a>
            <a href="#contact">
              <Button size={"lg"} variant={"outline"} className="rounded-full text-md w-full sm:w-auto px-6 py-3">
                Contact Me
              </Button>
            </a>
          </nav>
        </div>

        <aside className="relative order-1 mx-auto lg:order-2" aria-label="Profile Image">
          <div className="pt-6 overflow-hidden drop-shadow-2xl w-75 md:w-sm">
            <img src="me.png" alt="Mahmoud Maher" className="transition-all" />
          </div>
        </aside>
      </section>
    </section>
  );
};

export default HeroSection;
