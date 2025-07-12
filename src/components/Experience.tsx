import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface ExperienceProps {
  isDark: boolean;
}

export default function Experience({ isDark }: ExperienceProps) {
  const achievements = [
    "Developed dynamic UIs with HTML/CSS/JS",
    "Integrated REST APIs, improved page performance",
    "Boosted mobile engagement with responsive design",
    "Participated in Agile development cycles"
  ];

  return (
    <section id="experience" className="py-16 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Simplified background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
        {/* Simplified grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 text-green-300 backdrop-blur-sm">
            <Briefcase className="w-3 h-3" />
            Professional Journey
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent">
            Work Experience
          </h2>
          
          <p className="text-sm max-w-2xl mx-auto leading-relaxed text-gray-300">
            Real-world experience building scalable applications and innovative solutions
          </p>
        </AnimatedSection>
        
        {/* Experience Card - Optimized */}
        <AnimatedSection className="max-w-4xl mx-auto">
          <motion.div
            className="group relative rounded-xl p-6 transition-all duration-300 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {/* Simplified border effect */}
            <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-purple-500" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                {/* Company logo/icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Experience details */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors duration-300">
                        Frontend Developer Intern
                      </h3>
                      <p className="text-blue-400 font-semibold text-base mb-1">E Square Systems</p>
                    </div>
                    
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      <Calendar className="w-3 h-3" />
                      April – May 2024
                    </div>
                  </div>
                  
                  {/* Key achievements - Simplified animations */}
                  <div className="space-y-3">
                    <h4 className="text-base font-semibold mb-2 text-gray-200">
                      Key Achievements & Responsibilities:
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-2">
                      {achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-2 rounded-lg bg-gray-800/40 border border-gray-700/30"
                        >
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                          <p className="text-xs leading-relaxed text-gray-300">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills used - Simplified */}
                  <div className="mt-4">
                    <h4 className="text-base font-semibold mb-2 text-gray-200">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {['HTML/CSS', 'JavaScript', 'REST APIs', 'Responsive Design', 'Agile'].map((skill, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/50 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}