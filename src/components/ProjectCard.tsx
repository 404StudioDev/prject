import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  tech: string[];
  image: string;
  isDark: boolean;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  href,
  tech,
  image,
  isDark,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true, margin: "-30px" }}
      className="group relative h-full"
    >
      {/* 🎨 Animated Border Matching Dark Theme */}
      <div
        className="absolute -inset-0.5 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(120deg, #6d28d9, #3b82f6, #06b6d4, #9333ea)",
          backgroundSize: "600% 600%",
          animation: "gradient-shift 2.5s linear infinite",
        }}
      />

      {/* 🌑 Card Content */}
      <div className="relative h-full rounded-lg overflow-hidden bg-gray-950/95 backdrop-blur-sm transition-all duration-300 group-hover:transform group-hover:scale-[1.02] group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
        {/* Image container */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* ⚡ Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* External link icon */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
            <div className="p-1.5 rounded-lg bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-lg">
              <ExternalLink className="w-3 h-3 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          {/* Title */}
          <h3 className="text-base font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-1">
            {title}
          </h3>

          {/* Description */}
          <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1 pt-2">
            {tech.slice(0, 4).map((techItem, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-0.5 text-xs font-medium rounded-md bg-gray-800/60 text-gray-300 border border-gray-700/50 transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white hover:border-purple-400/50"
              >
                {techItem}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-gray-800/60 text-gray-400 border border-gray-700/50">
                +{tech.length - 4}
              </span>
            )}
          </div>

          {/* Link overlay */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`View ${title} project`}
          />
        </div>
      </div>
    </motion.div>
  );
}
