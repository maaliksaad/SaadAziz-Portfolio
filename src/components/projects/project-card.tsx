import { motion } from "framer-motion";
import { GithubIcon, ArrowTopRight } from "@/components/icons";

export interface ProjectCardProps {
  name: string;
  youtubeUrl: string;
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
  tags?: string[];
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
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <iframe
          src={getEmbedUrl(props.youtubeUrl)}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-3 text-foreground sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold md:text-base">
            {props.name}
          </span>
        </div>

        {props.tags && (
          <div className="mt-2 flex flex-wrap gap-2">
            {props.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-medium text-accent md:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-3">
          <p className="text-xs text-muted-foreground md:text-sm">
            {props.description}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-end gap-4 md:gap-6">
          <a
            href={props.sourceCodeHref}
            target="_blank"
            className="flex items-center gap-1 text-xs underline underline-offset-2 hover:text-accent md:text-sm"
          >
            <GithubIcon className="h-5 w-5" /> Source code
          </a>
          {props.liveWebsiteHref && (
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              className="flex items-center gap-1 text-xs font-medium text-accent underline underline-offset-2 hover:text-accent/80 md:text-sm"
            >
              <ArrowTopRight className="h-4 w-4" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
