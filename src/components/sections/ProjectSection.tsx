import { projects } from "@/constants/projects";
import ProjectSlider from "../ProjectSlider";
import SectionTitle from "../shared/SectionTitle";
import SectionDescription from "../shared/SectionDescription";

const ProjectSection = () => {
  return (
    <section className="py-16" id="projects">
      <div className="mb-6">
        <SectionTitle>Featured Projects</SectionTitle>
        <SectionDescription>
          A collection of my latest web projects - where I combined modern technologies and creative solutions to
          deliver real value.
        </SectionDescription>
      </div>
      <ProjectSlider projects={projects} />
    </section>
  );
};

export default ProjectSection;
