import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Smart Assignment Checker",
    href: "/projects",
    tags: [
      "NextJS",
      "NestJS",
      "MongoDB",
      "TypeScript",
      "Mongoose",
      "TailwindCSS",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=tLLQjr-e5Dw",
  },
  {
    index: 1,
    title: "3D Product Mockup Generator",
    href: "/projects",
    tags: ["RemixJS", "NestJS", "MySQL", "TailwindCSS"],
    youtubeUrl: "https://www.youtube.com/watch?v=dhZ-nAk4e90",
  },

  {
    index: 2,
    title: "Tech Tonic",
    href: "/projects",
    tags: ["NextJS", "NestJS", "Mongodb", "TailwindCSS"],
    youtubeUrl: "https://www.youtube.com/watch?v=nA58Rqfv9iY",
  },
  {
    index: 3,
    title: "Engineering and Architectural Diagram Management System",
    href: "/projects",
    tags: ["NextJS", "NestJS", "TailwindCSS"],
    youtubeUrl: "https://www.youtube.com/watch?v=ckgp1IVc_I8",
  },
  {
    index: 4,
    title: "Algorithm Visualizer",
    href: "/projects",
    tags: ["NextJS", "TailwindCSS"],
    youtubeUrl: "https://www.youtube.com/watch?v=VH12Dk0J2zQ",
  },
  {
    index: 5,
    title: "React Meals",
    href: "/projects",
    tags: ["ReactJS", "ExpressJs", "MongoDB", "TailwindCSS"],
    youtubeUrl: "https://www.youtube.com/watch?v=VH12Dk0J2zQ",
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Smart Assignment Checker",
    youtubeUrl: "https://www.youtube.com/watch?v=tLLQjr-e5Dw",
    description:
      "Developed a multi-dashboard assignment checker for teachers and students where assignments can be created, assigned, submited and auto-graded using Agentic AI with proper constructive feedback",
    sourceCodeHref: "https://github.com/maaliksaad/AssignCheck",
    liveWebsiteHref: "https://smart-assignment-checker.vercel.app/",
    tags: [
      "NextJS",
      "NestJS",
      "MongoDB",
      "TypeScript",
      "Mongoose",
      "TailwindCSS",
    ],
  },
  {
    name: "Nerf Based 3D Product Image Rendering System",
    youtubeUrl: "https://www.youtube.com/watch?v=dhZ-nAk4e90",
    description:
      "Built a web app in Remix and NestJs to convert videos into interactive 3D renders using open source NeRF frameworks and cloud services",
    sourceCodeHref: "https://github.com/maaliksaad/MyFyp",
    tags: ["RemixJS", "NestJS", "MySQL", "TailwindCSS"],
  },

  {
    name: "Tech Tonic",
    youtubeUrl: "https://www.youtube.com/watch?v=nA58Rqfv9iY",
    description:
      "Developed Techtonic, a multi-user blogging platform with dashboards and CRUD operations, utilizing Next.js for the frontend and NestJS for the backend",
    sourceCodeHref: "https://github.com/maaliksaad/TechTonic-frontend",
    tags: ["NextJS", "NestJS", "MongoDB", "TailwindCSS"],
  },
  {
    name: "Engineering and Architectural Diagram Management System",
    youtubeUrl: "https://www.youtube.com/watch?v=ckgp1IVc_I8",
    description:
      " Developed a collaborative diagram management system for engineers and architects with real-time annotations, color coding, and multi-user interaction support in Next.js and Nest.js .",
    sourceCodeHref: "https://github.com/maaliksaad/Planscan",
    tags: ["NextJS", "NestJS", "TailwindCSS"],
  },
  {
    name: "Algorithm Visualizer",
    youtubeUrl: "https://www.youtube.com/watch?v=VH12Dk0J2zQ",
    description:
      "This is a progressive web app built with NextJS. This app is used for visualizing different algorithms. The description of these algorithms, their time and space complexity is explained in the app. ",
    sourceCodeHref: "https://github.com/maaliksaad/Oramatismos",
    tags: ["NextJS", "TailwindCSS"],
  },
  {
    name: "React Meals",
    youtubeUrl: "https://www.youtube.com/watch?v=SSRzWrPzf-0",
    description:
      "Developed a responsive food ordering web app using React, enabling users to browse menus, add items to cart, and place orders seamlessly.",
    sourceCodeHref: "https://github.com/maaliksaad/React-Meals",
    tags: ["ReactJS", "ExpressJs", "MongoDB", "TailwindCSS"],
  },
];
