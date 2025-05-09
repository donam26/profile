import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Xác định section hiện tại đang active dựa trên vị trí scroll
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#home', id: 'home' },
    { name: 'Giới thiệu', href: '#about', id: 'about' },
    { name: 'Kinh nghiệm', href: '#experience', id: 'experience' },
    { name: 'Dự án', href: '#projects', id: 'projects' },
    { name: 'Liên hệ', href: '#contact', id: 'contact' },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        duration: 0.5 
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-soft py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div 
          variants={logoVariants}
          initial="initial"
          animate="animate"
          className="flex items-center"
        >
          <a 
            href="#home" 
            className="flex items-center space-x-2 font-display font-bold text-xl text-gray-900"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white">
              <span className="font-bold">P</span>
            </div>
            <span className="hidden sm:inline-block">Portfolio</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-1">
            {navLinks.map((link, i) => (
              <motion.li key={link.id} custom={i} variants={navItemVariants}>
                <a
                  href={link.href}
                  className={`relative px-3 py-2 mx-1 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-primary-700'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
          
          <motion.div custom={navLinks.length} variants={navItemVariants}>
            <a
              href="#contact"
              className="ml-5 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium text-sm shadow-sm hover:bg-primary-700 transition-colors duration-300 flex items-center"
            >
              <span>Liên hệ ngay</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </motion.div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md ${
              scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-800 hover:bg-white/10'
            } transition-colors duration-300`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="container-custom py-4">
              <ul className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md font-medium transition-colors ${
                        activeSection === link.id
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium shadow-sm hover:bg-primary-700 transition-colors duration-300"
                >
                  Liên hệ ngay
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 