import type { ReactNode } from "react";
import LogoLoop from "../LogoLoop";
import SectionTitle from "../shared/SectionTitle";
import SectionDescription from "../shared/SectionDescription";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiVite,
  SiJest,
  SiFramer,
  SiBootstrap,
  SiShadcnui,
} from "react-icons/si";

const techLogos: { node: ReactNode; title: string; href: string }[] = [
  {
    node: <SiReact />,
    title: "React",
    href: "https://reactjs.org/",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://html.spec.whatwg.org/",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    node: <SiStyledcomponents />,
    title: "Styled Components",
    href: "https://styled-components.com/",
  },
  {
    node: <SiSass />,
    title: "Sass",
    href: "https://sass-lang.com/",
  },
  {
    node: <SiRedux />,
    title: "Redux",
    href: "https://redux.js.org/",
  },
  {
    node: <SiVite />,
    title: "Vite",
    href: "https://vitejs.dev/",
  },
  {
    node: <SiJest />,
    title: "Jest",
    href: "https://jestjs.io/",
  },
  {
    node: <SiFramer />,
    title: "Framer Motion",
    href: "https://www.framer.com/motion/",
  },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com/",
  },
  {
    node: <SiShadcnui />,
    title: "Shadcn/ui",
    href: "https://ui.shadcn.com/",
  },
];

const TechStackSection = () => {
  return (
    <section className="py-16" id="projects">
      <div className="mb-12">
        <SectionTitle>Skills & Technologies</SectionTitle>
        <SectionDescription>
          An overview of the key skills and technologies I use to build robust, modern, and performant web applications.
        </SectionDescription>
      </div>
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Technology partners"
      />
    </section>
  );
};

export default TechStackSection;
