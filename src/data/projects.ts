import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "3D Product Mockup Generator",
    href: "/projects",
    tags: ["RemixJS", "NestJS", "MySQL", "TailwindCSS"],
    youtubeUrl: "https://www.youtube.com/watch?v=dhZ-nAk4e90",
  },
  {
    index: 1,
    title: "Tech Tonic",
    href: "/projects",
    tags: ["NextJS", "NestJS", "Mongodb", "TailwindCSS"],
    youtubeUrl: "https://www.youtube.com/watch?v=nA58Rqfv9iY",
  },
  {
    index: 2,
    title: "Algorithm Visualizer",
    href: "/projects",
    tags: ["NextJS", "TailwindCSS"],
    youtubeUrl: "https://www.youtube.com/watch?v=VH12Dk0J2zQ",
  },
  {
    index: 3,
    title: "React Meals",
    href: "/projects",
    tags: ["ReactJS", "ExpressJs", "MongoDB", "TailwindCSS"],
    youtubeUrl: "https://www.youtube.com/watch?v=VH12Dk0J2zQ",
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Nerf Based 3D Product Image Rendering System",
    youtubeUrl: "https://www.youtube.com/watch?v=dhZ-nAk4e90", // Replaced with YouTube URL
    description:
      "Built a web app in Remix and NestJs to convert videos into interactive 3D renders using open source NeRF frameworks and cloud services",
    sourceCodeHref: "https://github.com/maaliksaad/MyFyp",
  },
  {
    name: "Tech Tonic",
    youtubeUrl: "https://www.youtube.com/watch?v=nA58Rqfv9iY", // Replaced with YouTube URL
    description:
      "Developed Techtonic, a multi-user blogging platform with dashboards and CRUD operations, utilizing Next.js for the frontend and NestJS for the backend",
    sourceCodeHref: "https://github.com/maaliksaad/TechTonic-frontend",
  },
  {
    name: "Algorithm Visualizer",
    youtubeUrl: "https://www.youtube.com/watch?v=VH12Dk0J2zQ", // Replaced with YouTube URL
    description:
      "This is a progressive web app built with NextJS. This app is used for visualizing different algorithms. The description of these algorithms, their time and space complexity is explained in the app. ",
    sourceCodeHref: "https://github.com/maaliksaad/Oramatismos",
  },
  {
    name: "React Meals",
    youtubeUrl: "https://www.youtube.com/watch?v=SSRzWrPzf-0", // Replaced with YouTube URL
    description:
      "Developed a responsive food ordering web app using React, enabling users to browse menus, add items to cart, and place orders seamlessly.",
    sourceCodeHref: "https://github.com/maaliksaad/React-Meals",
  },
];
