import type { Project } from "@/constants/projects";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="pt-0 overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-lg transition-all duration-300">
      {/* Inner image slider */}
      <div className="relative aspect-video overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: true }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="project-image-swiper h-full w-full">
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <CardHeader className="text-left">
        <CardTitle className="text-xl font-semibold text-card-foreground">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2 justify-start">
        {project.technologies.map((tech, i) => (
          <Badge key={i} variant="secondary" className="px-2 py-1 text-xs">
            {tech}
          </Badge>
        ))}
      </CardContent>

      <CardFooter className="flex gap-3">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button className="w-full font-semibold" size="lg">
            Live Demo
          </Button>
        </a>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="secondary" className="w-full" size="lg">
              GitHub
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
