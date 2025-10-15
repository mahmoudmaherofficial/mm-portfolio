import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";
import type { Project } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

const ProjectSlider = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="bg-background text-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!py-5 project-swiper">
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <ProjectCard project={project} />
              </motion.div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-next !w-6 !h-6 flex items-center justify-center !text-4xl text-muted-foreground"></div>
          <div className="swiper-button-prev !w-6 !h-6 flex items-center justify-center !text-4xl text-muted-foreground"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSlider;
