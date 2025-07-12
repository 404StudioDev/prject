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
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: "-30px" }}
      className="group relative transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1"
    >
      {/* 🌀 Glowing Gradient Border on Hover */}
      <div className="relative rounded-lg p-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-[length:400%_400%] animate-gradient-x shadow-md group-hover:shadow-pink-500/20 transition-all duration-300">
        {/* 💻 Card Container */}
        <div className="rounded-lg bg-black p-4 h-full group-hover:shadow-lg group-hover:shadow-purple-500/10 transition duration-300">
          {/* 📸 Image */}
          <div className="relative overflow-hidden rounded-md mb-3">
            <img
              src={image}
              alt={title}
              className="w-full h-28 object-cover rounded"
            />
            <div className="absolute top-2 right-2 z-20">
              <div className="p-1.5 rounded bg-gray-900/80 border border-gray-700/50">
                <ExternalLink className="w-3 h-3 text-gray-300" />
              </div>
            </div>
          </div>

          {/* 🧠 Info */}
          <h3 className="text-sm font-semibold text-white line-clamp-1">
            {title}
          </h3>
          <p className="text-xs text-gray-400 line-clamp-2">{description}</p>

          {/* 🛠️ Tech */}
          <div className="flex flex-wrap gap-1 mt-2">
            {tech.slice(0, 4).map((item, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[10px] rounded bg-gray-800/60 border border-gray-700/50 text-gray-300"
              >
                {item}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="px-2 py-0.5 text-[10px] rounded bg-gray-800/60 border border-gray-700/50 text-gray-400">
                +{tech.length - 4}
              </span>
            )}
          </div>

          {/* Clickable Overlay */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-30"
            aria-label={`View ${title} project`}
          />
        </div>
      </div>
    </motion.div>
  );
}
