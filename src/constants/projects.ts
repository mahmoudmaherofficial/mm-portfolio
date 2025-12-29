export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
}

const images = (name: string, count: number): string[] => {
  return Array.from(
    { length: count },
    (_, i) =>
      `/projects/${name}/${name}${String(i + 1).padStart(2, "0") || i + 1}.png`
  );
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Activity Watcher",
    images: images("activitywatcher", 11),
    // githubUrl: "https://github.com/mahmoudmaherofficial/Activity-Watcher",
    liveUrl: "https://activity-watcher.netlify.app/",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Shadcn/UI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    description:
      "Full stack MERN application for tracking your team's activities. Manage and monitor team activity data collaboratively. Features include authentication, authorization, a modern UI built with React.js and TailwindCSS, and a RESTful API powered by Express.js and MongoDB.",
  },
  {
    id: 2,
    title: "LuxeLane",
    images: images("luxelane", 7),
    githubUrl: "https://github.com/mahmoudmaherofficial/luxelane-frontend",
    liveUrl: "https://luxelanestore.vercel.app/",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    description:
      "Full stack e-commerce application where you can buy products.It has authentication, authorization, search, filter, sort and pagination functionalities.It has a beautiful UI built with Next.js and TailwindCSS and a RESTful API built with Express.js and MongoDB.",
  },
  {
    id: 3,
    title: "CellStore",
    images: images("cellstore", 4),
    githubUrl: "https://github.com/mahmoudmaherofficial/new-cell-store",
    liveUrl: "https://cell-store.netlify.app/",
    technologies: ["React.js", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
    description:
      "A modern, responsive landing page for a smartphone store, built using React.js and Bootstrap. The design focuses on clean visuals, smooth navigation, and mobile-first responsiveness to provide an engaging shopping experience.",
  },
];
