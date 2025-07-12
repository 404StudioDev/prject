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
    className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    <div className="flex flex-col items-center gap-6 px-4 py-6 rounded-3xl bg-black/50 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] w-[72px]">
      {navItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`
            relative p-3 rounded-xl transition-all duration-300 group focus:outline-none
            ${activeSection === item.id 
              ? 'text-white'
              : 'text-gray-400 hover:text-white'
            }
          `}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          aria-label={item.label}
        >
          {/* Active Glow Indicator */}
          {activeSection === item.id && (
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/30 to-blue-500/30 blur-sm"
              layoutId="activeTab"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )}

          {/* Icon */}
          <div className="relative z-10">
            <item.icon className="w-5 h-5" />
          </div>

          {/* Tooltip */}
          <div className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-gray-700 shadow-md">
            {item.label}
            <div className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-900 border-t border-l border-gray-700 rotate-45"></div>
          </div>
        </motion.button>
      ))}
    </div>
  </motion.nav>
);
}