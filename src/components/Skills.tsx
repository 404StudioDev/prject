import { Code, Database, Brain, Smartphone, Server, BarChart3, Zap, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90, color: "#61dafb" },
        { name: "TypeScript", level: 85, color: "#3178c6" },
        { name: "JavaScript", level: 95, color: "#f7df1e" },
        { name: "Tailwind CSS", level: 90, color: "#06b6d4" },
        { name: "HTML5/CSS3", level: 95, color: "#e34f26" },
      ]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 80, color: "#339933" },
        { name: "Python", level: 85, color: "#3776ab" },
        { name: "REST APIs", level: 90, color: "#ff6b35" },
        { name: "Supabase", level: 85, color: "#3ecf8e" },
        { name: "Flask", level: 75, color: "#000000" },
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Power BI", level: 90, color: "#f2c811" },
        { name: "Pandas", level: 85, color: "#150458" },
        { name: "NumPy", level: 80, color: "#013243" },
        { name: "Matplotlib", level: 85, color: "#11557c" },
        { name: "SQL", level: 90, color: "#336791" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Globe className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 90, color: "#f05032" },
        { name: "Linux", level: 80, color: "#fcc624" },
        { name: "Jupyter", level: 85, color: "#f37626" },
        { name: "VMware", level: 75, color: "#607078" },
        { name: "Agile", level: 85, color: "#0052cc" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Professional background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gray-900/50 border border-gray-700/50 text-gray-300 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-400" />
            Technical Expertise
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300">
            Comprehensive expertise across modern development stack, from frontend interfaces to backend systems and data analytics
          </p>
        </AnimatedSection>
        
        {/* Skills Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} delay={categoryIndex * 0.1}>
              <motion.div
                className="group relative rounded-2xl p-8 bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="group/skill"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute top-0 left-0 h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                        />
                        
                        {/* Glow effect */}
                        <motion.div
                          className="absolute top-0 left-0 h-full rounded-full opacity-50 blur-sm"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}