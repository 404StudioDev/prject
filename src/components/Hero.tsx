import { Eye, MessageCircle, ArrowDown, Github, Linkedin, Code, Terminal, Zap, BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface HeroProps {
  isDark: boolean;
  onNavigateToBlog: () => void;
}

export default function Hero({ isDark, onNavigateToBlog }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* 🌌 Dark Space Background Effects */}
      <div className="absolute inset-0">
        {/* Animated cyber grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>
        
        {/* Floating space orbs - more subtle */}
        <motion.div 
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-indigo-500/8 to-slate-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Matrix-style falling code effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400/15 text-xs font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px'
              }}
              animate={{
                y: ['0vh', '110vh']
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'linear'
              }}
            >
              {Math.random() > 0.5 ? 'const dev = () => {' : 'function build() {'}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center">
          {/* 🚀 Developer Status Badge */}
          <AnimatedSection direction="down">
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md mb-4 relative overflow-hidden border border-blue-500/20"
              style={{
                background: 'rgba(0, 0, 0, 0.8)'
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative z-10 flex items-center gap-2">
                <motion.div 
                  className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Code className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium text-white">
                  Available for Frontend, AI & Data Roles
                </span>
                <Terminal className="w-3 h-3 text-slate-400" />
              </div>
            </motion.div>
          </AnimatedSection>

          {/* 💫 Main Heading with Cool Font */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="mb-4">
              <motion.h1 
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-white font-normal" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Hi, I'm </span>
                <motion.span 
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* 🎨 Cool Futuristic Font for Shashwat */}
                  <span 
                    className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-black tracking-wider relative"
                    style={{ 
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '1.1em',
                      textShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    SHASHWAT
                    
                    {/* Glowing underline effect */}
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-full"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                      style={{
                        boxShadow: '0 0 10px rgba(6, 182, 212, 0.6), 0 0 20px rgba(6, 182, 212, 0.4)'
                      }}
                    />
                    
                    {/* Subtle glow effect behind text */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-indigo-400/20 blur-xl -z-10"
                      style={{
                        transform: 'scale(1.2)',
                        opacity: 0.6
                      }}
                    />
                  </span>
                </motion.span>
              </motion.h1>
              
              {/* 🎯 Role Tags - Much smaller */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base font-medium mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div 
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Code className="w-3 h-3 text-blue-400" />
                  <span className="text-blue-400 font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Frontend Developer</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Zap className="w-3 h-3 text-cyan-400" />
                  <span className="text-cyan-400 font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>AI Enthusiast</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Terminal className="w-3 h-3 text-indigo-400" />
                  <span className="text-indigo-400 font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Data Storyteller</span>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* 🎨 Tagline - Much smaller */}
          <AnimatedSection direction="up" delay={0.4}>
            <motion.p 
              className="text-sm md:text-base mb-6 max-w-3xl mx-auto leading-relaxed text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Transforming ideas into{' '}
              <span className="text-blue-400 font-medium">elegant digital experiences</span>
              {' '}through{' '}
              <span className="text-cyan-400 font-medium">innovative code</span>
              {', '}
              <span className="text-indigo-400 font-medium">smart AI solutions</span>
              {', and '}
              <span className="text-emerald-400 font-medium">data-driven insights</span>
            </motion.p>
          </AnimatedSection>

          {/* 🚀 Enhanced CTA Buttons with Gradient Background - Smaller */}
          <AnimatedSection direction="up" delay={0.6}>
            <div className="relative mb-8">
              {/* Gradient background for buttons area */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/10 to-indigo-500/5 rounded-2xl blur-xl" />
              
              <motion.div 
                className="relative flex flex-col sm:flex-row items-center justify-center gap-3 p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {/* Primary Button - View Resume */}
                <motion.a
                  href="/Shashwat_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm overflow-hidden"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {/* Animated gradient background */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 opacity-90"
                    style={{
                      backgroundSize: '300% 300%',
                      animation: 'gradient-shift 4s ease infinite'
                    }}
                  />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 via-cyan-400/50 to-indigo-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center gap-2 text-white">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Eye className="w-4 h-4" />
                    </motion.div>
                    <span>View Resume</span>
                    
                    {/* Animated arrow */}
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      →
                    </motion.div>
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
                </motion.a>
                
                {/* Blog Button */}
                <motion.button
                  onClick={onNavigateToBlog}
                  className="group relative flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm backdrop-blur-md border transition-all duration-300 overflow-hidden"
                  style={{
                    background: 'rgba(0, 0, 0, 0.8)',
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                    fontFamily: 'Rajdhani, sans-serif'
                  }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated border effect */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(45deg, #10b981, #06b6d4, #8b5cf6, #10b981)',
                      backgroundSize: '300% 300%',
                      animation: 'gradient-shift 3s ease infinite'
                    }}
                  />
                  <div className="absolute inset-[1px] rounded-lg bg-black/90 backdrop-blur-md" />
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center gap-2 text-white group-hover:text-emerald-400 transition-colors duration-300">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <BookOpen className="w-4 h-4" />
                    </motion.div>
                    <span>Read Blog</span>
                    
                    {/* Animated pulse */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                </motion.button>
                
                {/* Secondary Button - Let's Connect */}
                <motion.a
                  href="#contact"
                  className="group relative flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm backdrop-blur-md border transition-all duration-300 overflow-hidden"
                  style={{
                    background: 'rgba(0, 0, 0, 0.8)',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    fontFamily: 'Rajdhani, sans-serif'
                  }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated border effect */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(45deg, #3b82f6, #06b6d4, #6366f1, #3b82f6)',
                      backgroundSize: '300% 300%',
                      animation: 'gradient-shift 3s ease infinite'
                    }}
                  />
                  <div className="absolute inset-[1px] rounded-lg bg-black/90 backdrop-blur-md" />
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center gap-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </motion.div>
                    <span>Let's Connect</span>
                    
                    {/* Animated pulse */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                </motion.a>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* 🔗 Enhanced Social Links - Smaller */}
          <AnimatedSection direction="up" delay={0.8}>
            <motion.div 
              className="flex items-center justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {[
                { icon: Github, href: "https://github.com/Scriptzstarling", label: "GitHub", color: "from-gray-600 to-gray-800" },
                { icon: Linkedin, href: "https://linkedin.com/in/shashwat8w00", label: "LinkedIn", color: "from-blue-600 to-blue-800" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2.5 rounded-lg transition-all duration-300 backdrop-blur-md border border-slate-600/30 overflow-hidden"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  style={{ background: 'rgba(0, 0, 0, 0.6)' }}
                >
                  {/* Animated border */}
                  <div 
                    className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-r ${social.color}`}
                    style={{
                      backgroundSize: '300% 300%',
                      animation: 'gradient-shift 2s ease infinite'
                    }}
                  />
                  <div className="absolute inset-[1px] rounded-lg bg-black/80 backdrop-blur-md" />
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                </motion.a>
              ))}
            </motion.div>
          </AnimatedSection>

          {/* 📍 Scroll Indicator - Smaller */}
          <AnimatedSection direction="up" delay={1}>
            <motion.div
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <span className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="p-1.5 rounded-full border border-gray-600/30 bg-gray-800/30 backdrop-blur-sm"
              >
                <ArrowDown className="w-3 h-3 text-gray-400" />
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>

      {/* 🌟 Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </section>
  );
}