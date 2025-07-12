import { Code, Database, Brain, Smartphone, Server, BarChart3, Zap, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "SQL", "Shell Scripting"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Frontend & Backend",
      icon: <Globe className="w-5 h-5" />,
      skills: ["HTML5", "CSS", "JavaScript", "React.js", "Supabase", "Tailwind CSS", "Bootstrap", "REST APIs", "JWT"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data & Analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      skills: ["Power BI", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Platforms",
      icon: <Server className="w-5 h-5" />,
      skills: ["Linux", "Git", "Jupyter", "Agile", "VMware"],
      color: "from-orange-500 to-red-500"
    }
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
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="group relative rounded-xl p-4 transition-all duration-500 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated border effect */}
                <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                     style={{
                       background: `linear-gradient(45deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]}, ${category.color.split(' ')[1]})`,
                       backgroundSize: '300% 300%',
                       animation: 'gradient-shift 2s ease infinite'
                     }} />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`
                      w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} 
                      flex items-center justify-center text-white mb-3 shadow-lg
                    `}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {category.icon}
                  </motion.div>
                  
                  <h3 className="text-lg font-bold mb-3 transition-colors duration-300 text-white group-hover:text-cyan-400">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="flex items-center gap-2 p-1.5 rounded-lg transition-all duration-200 bg-gray-800/40 hover:bg-gray-700/40 border border-gray-700/30"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (index * 0.1) + (skillIndex * 0.05) 
                        }}
                        whileHover={{ x: 3 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`}></div>
                        <span className="text-xs font-medium text-gray-300">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}