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
      {/* 🔁 Animated Border */}
      <div
        className="absolute -inset-0.5 rounded-xl animate-[moveBorder_4s_linear_infinite] z-0 opacity-90"
        style={{
          background:
            "linear-gradient(270deg, #9333ea, #3b82f6, #06b6d4, #9333ea)",
          backgroundSize: "600% 600%",
          filter: "blur(6px)",
        }}
      />

      {/* 💻 Card Content */}
      <div className="relative z-10 h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-950 to-gray-900 backdrop-blur-md border border-gray-800 shadow-md transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-purple-500/20">
        {/* 🖼️ Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <div className="p-1.5 rounded-lg bg-gray-900/80 border border-gray-700/50">
              <ExternalLink className="w-3 h-3 text-gray-300" />
            </div>
          </div>
        </div>

        {/* 📄 Info */}
        <div className="p-4 space-y-2">
          <h3 className="text-base font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-1">
            {title}
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 pt-2">
            {tech.slice(0, 4).map((techItem, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-0.5 text-xs font-medium rounded-md bg-gray-800/60 text-gray-300 border border-gray-700/50"
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

          {/* Invisible link layer */}
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
