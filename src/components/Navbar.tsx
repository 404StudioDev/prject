import { Home, User, Code, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavbarProps {
  isDark: boolean;
}

export default function Navbar({ isDark }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: User, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Wider navbar with better spacing */}
      <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              relative p-3 rounded-lg transition-all duration-300 group
              ${activeSection === item.id 
                ? 'bg-white/20 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
              }
            `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={item.label}
          >
            {/* Active indicator with smoother animation */}
            {activeSection === item.id && (
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/30 to-purple-500/30"
                layoutId="activeTab"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
            
            {/* Icon with proper sizing */}
            <div className="relative z-10">
              <item.icon className="w-5 h-5" />
            </div>
            
            {/* Tooltip with better positioning */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-black/90 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-gray-700">
              {item.label}
              {/* Tooltip arrow - better positioning */}
              <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black/90 border-l border-t border-gray-700 rotate-45"></div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}