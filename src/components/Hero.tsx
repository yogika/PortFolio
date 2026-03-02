import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['ABOUT', 'PROJECTS', 'SKILLS', 'CONTACT'];

  const handleNavClick = (item: string) => {
    const id = item.toLowerCase();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      {/* Header */}
      <header className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="tracking-wider"
        >
          YOGIKA
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex gap-6 lg:gap-12"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => handleNavClick(item)}
              className="text-sm text-neutral-800 hover:text-neutral-900 transition-colors tracking-wider font-bold"
            >
              {item}
            </motion.button>
          ))}
        </motion.nav>

        {/* Mobile Hamburger Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-neutral-800 bg-white hover:bg-purple-100 transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-neutral-800" />
          ) : (
            <Menu className="w-6 h-6 text-neutral-800" />
          )}
        </motion.button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden relative z-10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-6">
              <nav className="bg-white border-2 border-neutral-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item)}
                    className="w-full text-left px-6 py-4 text-sm text-neutral-800 hover:bg-purple-100 transition-colors tracking-wider font-bold border-b-2 border-neutral-800 last:border-b-0"
                  >
                    {item}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-emerald-400 border-2 border-neutral-800 mb-6 sm:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <span className="text-xs sm:text-sm tracking-widest text-neutral-900">DATA SCIENCE STUDENT</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[80px] sm:text-[120px] md:text-[180px] leading-none tracking-tight text-neutral-900 mb-6 sm:mb-8"
        >
          YOGIKA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl text-neutral-600 max-w-xl mb-8 sm:mb-12"
        >
          Transforming data into insights through machine learning and analytics
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-500 text-white border-4 border-neutral-800 hover:bg-purple-600 transition-colors tracking-wider shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-sm sm:text-base"
          >
            VIEW PROJECTS
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-400 text-neutral-900 border-4 border-neutral-800 hover:bg-teal-500 transition-colors tracking-wider shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-sm sm:text-base"
          >
            GET IN TOUCH
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <div className="text-xs text-neutral-500 tracking-widest">SCROLL</div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-neutral-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}
