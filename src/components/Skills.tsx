import { Code, Database, Brain, Smartphone, Server, BarChart3, Zap, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const skills = [
    // Programming Languages
    { name: "Python", icon: "🐍", color: "#3776ab" },
    { name: "JavaScript", icon: "JS", color: "#f7df1e", textColor: "#000" },
    { name: "TypeScript", icon: "TS", color: "#3178c6" },
    { name: "SQL", icon: "🗃️", color: "#336791" },
    { name: "Shell", icon: "💻", color: "#4eaa25" },
    
    // Frontend Technologies
    { name: "React", icon: "⚛️", color: "#61dafb" },
    { name: "HTML5", icon: "🌐", color: "#e34f26" },
    { name: "CSS3", icon: "🎨", color: "#1572b6" },
    { name: "Tailwind CSS", icon: "🌊", color: "#06b6d4" },
    { name: "Bootstrap", icon: "🅱️", color: "#7952b3" },
    
    // Backend & APIs
    { name: "Node.js", icon: "📗", color: "#339933" },
    { name: "REST APIs", icon: "🔗", color: "#ff6b35" },
    { name: "JWT", icon: "🔐", color: "#000000" },
    { name: "Supabase", icon: "⚡", color: "#3ecf8e" },
    { name: "Flask", icon: "🌶️", color: "#000000" },
    
    // Data & Analytics
    { name: "Power BI", icon: "📊", color: "#f2c811" },
    { name: "Pandas", icon: "🐼", color: "#150458" },
    { name: "NumPy", icon: "🔢", color: "#013243" },
    { name: "Matplotlib", icon: "📈", color: "#11557c" },
    { name: "Scikit-learn", icon: "🤖", color: "#f7931e" },
    
    // Tools & Platforms
    { name: "Git", icon: "📝", color: "#f05032" },
    { name: "Linux", icon: "🐧", color: "#fcc624" },
    { name: "Jupyter", icon: "📓", color: "#f37626" },
    { name: "VMware", icon: "🖥️", color: "#607078" },
    { name: "Agile", icon: "🔄", color: "#0052cc" }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Space background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-300 backdrop-blur-sm">
            <Zap className="w-3 h-3" />
            Technical Arsenal
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <p className="text-sm max-w-2xl mx-auto leading-relaxed text-gray-300">
            Advanced toolkit for building cutting-edge applications and intelligent solutions
          </p>
        </AnimatedSection>
        
        {/* Skills Grid - Matching the image layout */}
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.02,
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                {/* Card with black border and light gray background */}
                <div className="relative bg-gray-200 border-2 border-black rounded-lg p-3 h-16 flex items-center gap-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  {/* Icon container with colored background */}
                  <div 
                    className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm"
                    style={{ 
                      backgroundColor: skill.color,
                      color: skill.textColor || '#ffffff'
                    }}
                  >
                    {skill.icon}
                  </div>
                  
                  {/* Skill name */}
                  <span className="text-black font-semibold text-sm truncate">
                    {skill.name}
                  </span>
                  
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}