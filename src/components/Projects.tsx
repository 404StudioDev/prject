import { Code } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

interface ProjectsProps {
  isDark: boolean;
}

const projects = [
  // ... (your project list remains the same)
];

export default function Projects({ isDark }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-black">
      {/* 🌀 Floating Blurs + Matrix Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 💻 Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gray-900/60 border border-gray-700/50 text-gray-300 backdrop-blur-sm">
            <Code className="w-4 h-4 text-cyan-400" />
            <span className="font-mono">./projects</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent font-mono">
            &lt;Featured Projects /&gt;
          </h2>

          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300 font-mono">
            <span className="text-cyan-400">// </span>
            Built using <span className="text-purple-400">React</span>, <span className="text-pink-400">Python</span>, and <span className="text-blue-400">Power BI</span>
          </p>
        </AnimatedSection>

        {/* 🧠 Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              isDark={isDark}
              index={index}
            />
          ))}
        </div>

        {/* 🔗 View All CTA */}
        <AnimatedSection className="text-center mt-16" delay={0.5}>
          <motion.a
            href="https://github.com/Scriptzstarling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 backdrop-blur-sm border border-cyan-500/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-4 h-4" />
            <span className="text-sm">View All Projects</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
