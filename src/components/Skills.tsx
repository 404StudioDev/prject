import { Code, Database, Brain, Smartphone, Server, BarChart3, Zap, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const skills = [
    // Row 1
    { name: "React", icon: "⚛️", color: "#61dafb" },
    { name: "JavaScript", icon: "🟨", color: "#f7df1e" },
    { name: "TypeScript", icon: "🔷", color: "#3178c6" },
    { name: "Python", icon: "🐍", color: "#3776ab" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    
    // Row 2
    { name: "HTML5", icon: "🌐", color: "#e34f26" },
    { name: "CSS3", icon: "🎨", color: "#1572b6" },
    { name: "Tailwind", icon: "💨", color: "#06b6d4" },
    { name: "SQL", icon: "🗄️", color: "#336791" },
    { name: "Git", icon: "📝", color: "#f05032" },
    
    // Row 3
    { name: "Power BI", icon: "📊", color: "#f2c811" },
    { name: "Pandas", icon: "🐼", color: "#150458" },
    { name: "NumPy", icon: "🔢", color: "#013243" },
    { name: "Flask", icon: "🌶️", color: "#000000" },
    { name: "Supabase", icon: "⚡", color: "#3ecf8e" },
    
    // Row 4
    { name: "Linux", icon: "🐧", color: "#fcc624" },
    { name: "Docker", icon: "🐳", color: "#2496ed" },
    { name: "REST API", icon: "🔗", color: "#ff6b35" },
    { name: "JWT", icon: "🔐", color: "#000000" },
    { name: "Jupyter", icon: "📓", color: "#f37626" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Coder background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        {/* Matrix-style grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating code snippets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400/10 text-xs font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'easeInOut'
              }}
            >
              {['const', 'function', 'import', 'export', 'class', 'async'][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gray-900/50 border border-gray-700/50 text-gray-300 backdrop-blur-sm">
            <Code className="w-4 h-4 text-green-400" />
            <span className="font-mono">./skills</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent font-mono">
            &lt;Technologies /&gt;
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300 font-mono">
            <span className="text-green-400">// </span>
            My technical arsenal for building modern applications
          </p>
        </AnimatedSection>
        
        {/* Skills Grid - Exact layout from image */}
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                {/* Card with exact styling from image */}
                <div className="relative h-16 rounded-lg overflow-hidden bg-gray-200 border-2 border-black shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-green-500/20">
                  {/* Icon section - black background */}
                  <div className="absolute left-0 top-0 w-12 h-full bg-black flex items-center justify-center border-r-2 border-black">
                    <span className="text-lg">{skill.icon}</span>
                  </div>
                  
                  {/* Text section - light background */}
                  <div className="ml-12 h-full flex items-center justify-center px-3">
                    <span className="text-black font-semibold text-sm font-mono tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"
                    style={{
                      background: `linear-gradient(45deg, ${skill.color}40, transparent)`
                    }}
                  />
                  
                  {/* Matrix-style scan line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                </div>
                
                {/* Terminal-style tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black border border-green-400 text-green-400 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-mono whitespace-nowrap z-10">
                  <span className="text-green-400">$</span> {skill.name.toLowerCase()}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
        
        {/* Terminal-style footer */}
        <AnimatedSection className="text-center mt-16" delay={0.5}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/80 border border-green-400/50 text-green-400 font-mono text-sm backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>skills.length = {skills.length}</span>
            <span className="text-gray-500">// Always learning more...</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}