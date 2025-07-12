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
      {/* Background Grid + Matrix Code */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse" />

        <motion.div 
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div 
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-slate-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3], x: [0, -30, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Matrix-style falling code */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400/10 text-xs font-mono"
              style={{ left: `${Math.random() * 100}%`, top: '-10px' }}
              animate={{ y: ['0vh', '110vh'] }}
              transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, delay: Math.random() * 5, ease: 'linear' }}
            >
              {Math.random() > 0.5 ? 'const dev = () => {' : 'function build() {'}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center">
          <AnimatedSection direction="down">
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md mb-4 border border-blue-500/20 bg-black/80"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative z-10 flex items-center gap-2">
                <motion.div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <Code className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium text-white">Available for Frontend, AI & Data Roles</span>
                <Terminal className="w-3 h-3 text-slate-400" />
              </div>
            </motion.div>
          </AnimatedSection>

          {/* ...Remaining unchanged content... */}

        </div>
      </div>
    </section>
  );
}
