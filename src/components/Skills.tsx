{skills.map((skill, index) => (
  <motion.div
    key={index}
    className="group relative"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ 
      duration: 0.4, 
      delay: index * 0.04,
      ease: "easeOut"
    }}
    whileHover={{ 
      scale: 1.04,
      y: -4
    }}
  >
    {/* Skill Card */}
    <div className="relative h-16 rounded-md overflow-hidden bg-gray-200 border border-gray-300 shadow-md transition-all duration-300 group-hover:shadow-xl">
      
      {/* Icon area */}
      <div className="absolute left-0 top-0 w-12 h-full bg-black flex items-center justify-center border-r border-gray-800">
        <span className="text-lg">{skill.icon}</span>
      </div>
      
      {/* Skill text */}
      <div className="ml-12 h-full flex items-center justify-center px-3">
        <span className="text-black font-semibold text-sm font-mono tracking-wide">
          {skill.name}
        </span>
      </div>

      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-md pointer-events-none"
        style={{
          background: `linear-gradient(45deg, ${skill.color}40, transparent)`
        }}
      />

      {/* Scan line effect (matrix style) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: 3
        }}
      />
    </div>
  </motion.div>
))}
