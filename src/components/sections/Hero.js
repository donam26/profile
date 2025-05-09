import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaLaptopCode, FaServer, FaDatabase, FaMobileAlt, FaTools } from 'react-icons/fa';
import avatar from '../../assets/images/avatar.jpg';
const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const controls = useAnimation();
  
  // Typing effect
  const [text, setText] = useState("");
  const fullText = "Đỗ Hoàng Nam";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTypingComplete(true);
        controls.start("visible");
      }
    }, 150);
    
    return () => clearInterval(interval);
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 45 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { 
        type: 'spring',
        damping: 15,
        stiffness: 80,
        delay: 0.2
      }
    }
  };

  const decorationVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.5
      }
    }
  };

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaEnvelope size={20} />, url: 'mailto:your.email@example.com', label: 'Email' }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: i => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.6 + (i * 0.1),
        duration: 0.5
      } 
    })
  };

  const skillBadges = [
    { icon: <FaLaptopCode />, name: 'ReactJS', color: 'bg-blue-100 text-blue-600' },
    { icon: <FaServer />, name: 'Laravel', color: 'bg-green-100 text-green-600' },
    { icon: <FaDatabase />, name: 'MySQL', color: 'bg-purple-100 text-purple-600' },
    { icon: <FaDatabase />, name: 'Linux', color: 'bg-purple-100 text-purple-600' },
  ];

  const backgroundShapes = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light pt-16 pb-12">
      {/* Background particles and shapes */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        variants={decorationVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated background shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mix-blend-multiply opacity-70 blur-xl animate-pulse-slow"></div>
        <div className="absolute -left-32 top-1/4 w-72 h-72 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full mix-blend-multiply opacity-70 blur-xl animate-pulse-slow"></div>
        <div className="absolute right-10 bottom-20 w-64 h-64 bg-gradient-to-br from-blue-50 to-blue-200 rounded-full mix-blend-multiply opacity-60 blur-lg"></div>
        <div className="absolute left-1/3 bottom-1/4 w-40 h-40 bg-gradient-to-br from-yellow-50 to-yellow-200 rounded-full mix-blend-multiply opacity-60 blur-lg"></div>
        
        {/* Floating shapes */}
        {backgroundShapes.map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${Math.floor(Math.random() * 8) + 4} h-${Math.floor(Math.random() * 8) + 4} 
                        ${i % 2 === 0 ? 'bg-primary-200' : 'bg-secondary-200'} 
                        rounded-${i % 3 === 0 ? 'full' : 'lg'} opacity-${Math.floor(Math.random() * 3) + 2}0`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 5 + 10,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Text Content - 3 columns on large screens */}
          <motion.div 
            className="lg:col-span-3 order-2 lg:order-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={textVariants} className="mb-3">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium shadow-soft animate-float">
                <span className="inline-block mr-2">👨‍💻</span>
                Fullstack Developer
              </span>
            </motion.div>
            
            <motion.h1 
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
            >
              <span className="block mb-2">Xin chào, tôi là</span>
              <div className="relative inline-block">
                <span className="gradient-text text-5xl md:text-6xl lg:text-7xl">
                  {text}
                </span>
                {!typingComplete && (
                  <span className="absolute right-0 top-0 h-full w-1 bg-primary-500 animate-blink"></span>
                )}
              </div>
            </motion.h1>
            
            <motion.p 
              variants={textVariants}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Tôi là một Fullstack Developer chuyên về Laravel & React, 
              với kinh nghiệm 2+ năm trong việc phát triển ứng dụng web hiệu suất cao 
              và giao diện người dùng hiện đại.
            </motion.p>
            
            {/* Skill badges */}
            <motion.div
              variants={textVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {skillBadges.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full ${skill.color} text-sm font-medium shadow-soft`}
                  whileHover={{ scale: 1.05, translateY: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.8 + (index * 0.1) } }}
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={textVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a 
                href="#projects" 
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Xem các dự án
                <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn-secondary relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Liên hệ với tôi</span>
                <span className="absolute inset-0 h-full w-0 bg-primary-50 transition-all duration-300 group-hover:w-full -z-0"></span>
              </motion.a>
            </motion.div>
            
            <motion.div 
              variants={textVariants}
              className="mt-10 flex space-x-5 justify-center lg:justify-start"
            >
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center text-gray-700 hover:text-primary-600 hover:shadow-md transition-all duration-300"
                  custom={i}
                  initial="initial"
                  animate="animate"
                  variants={fadeIn}
                  title={link.label}
                  aria-label={link.label}
                  whileHover={{ 
                    scale: 1.15, 
                    backgroundColor: "#f8fafc", 
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Image Content - 2 columns on large screens */}
          <motion.div
            className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Điều chỉnh kích thước container ảnh để nhỏ hơn trên màn hình nhỏ */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-500 via-secondary-500 to-blue-500 blur opacity-40 animate-gradient-xy group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Small dots pattern - làm nhỏ hơn trên mobile */}
              <div className="absolute -right-4 sm:-right-6 -bottom-4 sm:-bottom-6 h-16 sm:h-24 w-16 sm:w-24 rounded-full bg-secondary-100 flex items-center justify-center">
                <motion.div 
                  className="text-secondary-700 font-bold"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="w-14 sm:w-20 h-14 sm:h-20">
                    <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M18,2 a16,16 0 1,1 0,32 a16,16 0 1,1 0,-32" id="circle" />
                    <text fontSize="3.5px">
                      <textPath href="#circle">
                        FULLSTACK DEVELOPER • LARAVEL • REACT • AWS •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
              </div>
              
              {/* Abstract lines - ẩn trên mobile để tiết kiệm không gian */}
              <div className="absolute -left-8 -top-8 w-20 sm:w-28 h-20 sm:h-28 opacity-70 hidden sm:block">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    d="M10 90 L90 10" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                  <motion.path 
                    d="M20 90 L90 20" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                  <motion.path 
                    d="M30 90 L90 30" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                  />
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <div className="relative bg-white rounded-xl overflow-hidden shadow-strong p-3 border border-gray-100">
                {/* Giảm kích thước ảnh trên màn hình nhỏ với chiều rộng tối đa */}
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-50 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px]">
                  <img 
                    src={avatar} 
                    alt="Developer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740';
                    }}
                  />
                </div>
                
                {/* Experience badge - làm nhỏ hơn trên mobile */}
                <div className="absolute -right-2 sm:-right-4 bottom-2 sm:bottom-4 bg-white shadow-lg px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl flex items-center transform rotate-2">
                  <motion.div 
                    className="bg-primary-50 text-primary-700 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 font-medium text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                  >
                    <span className="font-semibold mr-1 text-base sm:text-lg">2+</span>năm kinh nghiệm
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Cuộn xuống</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            >
              <FaArrowDown className="text-primary-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 