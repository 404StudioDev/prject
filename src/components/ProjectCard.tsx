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
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true, margin: "-30px" }}
      className="group relative transition-transform duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1"
    >
      {/* 🌈 Moving Border with Neon Glow */}
      <div className="p-[1.5px] rounded-xl animate-gradient-x bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:300%_300%] shadow-soft group-hover:shadow-lg transition-shadow duration-500">
        {/* 🖤 Inner Card */}
        <div className="rounded-xl bg-black p-4 h-full transition-all duration-500 ease-in-out card-hover">
          {/* 📸 Image Section */}
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

          {/* 🔤 Title + Description */}
          <h3 className="text-sm font-semibold text-white line-clamp-1">{title}</h3>
          <p className="text-xs text-gray-400 line-clamp-2">{description}</p>

          {/* 🛠️ Technologies Used */}
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

          {/* 🔗 Clickable Overlay */}
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
