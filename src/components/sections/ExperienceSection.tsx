import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import SectionTitle from "../shared/SectionTitle";
import SectionDescription from "../shared/SectionDescription";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance Projects",
    period: "2024 - Present",
    description:
      "Developing responsive and dynamic web interfaces using React.js, Next.js, Tailwind CSS and Shadcn/ui. Focused on clean UI and reusable component design.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Shadcn/ui", "TypeScript"],
  },
  {
    role: "Web Developer Intern",
    company: "NTG Clarity",
    period: "2023 - 2024",
    description:
      "Collaborated on building landing pages and dashboards with Bootstrap and React. Gained practical experience with REST APIs and Git workflow.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Git"],
  },
];

const ExperienceSection = () => {
  return (
    <section className="relative py-16 bg-background text-foreground" id="experience">
      {/* Subtle timeline line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-55 bottom-0 w-[2px] bg-border/40 hidden md:block"></div>

      <div className="mb-16 text-center">
        <SectionTitle>Experience</SectionTitle>
        <SectionDescription>
          A glimpse into my professional journey and hands-on experience in web development.
        </SectionDescription>
      </div>

      <div className="container relative max-w-5xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            className={`flex flex-col md:flex-row items-start md:items-center !justify-end gap-6 md:gap-3 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}>
            {/* Timeline dot */}
            <span className="relative z-10 hidden w-4 h-4 border-4 rounded-full md:block bg-primary border-background animate-pulse"></span>

            {/* Card */}
            <Card className="w-full md:w-[48%] border border-border/50 bg-card/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-1">
                  <CardTitle className="text-lg font-semibold">{exp.role}</CardTitle>
                  <span className="px-2 py-1 text-xs rounded-md text-muted-foreground bg-muted">{exp.period}</span>
                </div>
                <CardDescription className="text-sm font-medium text-muted-foreground">{exp.company}</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap !justify-start gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="px-2 py-1 text-xs transition-colors bg-secondary/40 hover:bg-secondary/60">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
