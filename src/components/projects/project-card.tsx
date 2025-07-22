import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons";

export interface ProjectCardProps {
  name: string;
  youtubeUrl: string; // Changed from favicon and videoUrl
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const getEmbedUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&showinfo=0&rel=0`;
  };

  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{ type: "spring", duration: 0.4 }}
      className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
    >
      <div className="aspect-video w-full overflow-hidden">
        <iframe
          src={getEmbedUrl(props.youtubeUrl)}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-3 text-foreground sm:p-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold">{props.name}</span>
        </div>
        <div className="mt-3">
          <p className="text-xs md:text-sm">{props.description}</p>
        </div>
        <div className="mt-6 flex items-center justify-end gap-6">
          <a
            href={props.sourceCodeHref}
            target="_blank"
            className="flex items-center gap-1 text-xs underline md:text-sm"
          >
            <GithubIcon className="h-5 w-5" /> Source code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
