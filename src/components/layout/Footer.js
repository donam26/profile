import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Kinh nghiệm', href: '#experience' },
    { name: 'Dự án', href: '#projects' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub size={18} />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin size={18} />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaEnvelope size={18} />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 opacity-90"></div>
      
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 blur-3xl"></div>
      </div>
      
      <div className="relative pt-16 pb-12">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-800"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={childVariants}>
              <h3 className="text-xl font-bold font-display text-white mb-4 relative inline-block">
                Portfolio
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded"></span>
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Một trang web portfolio hiện đại, thể hiện kỹ năng và dự án của tôi với giao diện độc đáo và trải nghiệm người dùng tuyệt vời.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                    title={link.label}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={childVariants}>
              <h3 className="text-xl font-bold font-display text-white mb-4 relative inline-block">
                Liên kết nhanh
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded"></span>
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center text-sm py-1"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={childVariants}>
              <h3 className="text-xl font-bold font-display text-white mb-4 relative inline-block">
                Liên hệ
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded"></span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start text-gray-400 group">
                  <div className="mt-1 mr-3 p-2 bg-gray-800 rounded-lg group-hover:bg-primary-600 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-primary-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm">Hà Nội, Việt Nam</span>
                </div>
                <div className="flex items-start text-gray-400 group">
                  <div className="mt-1 mr-3 p-2 bg-gray-800 rounded-lg group-hover:bg-primary-600 transition-colors duration-300">
                    <FaEnvelope className="text-primary-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm">your.email@example.com</span>
                </div>
                <div className="flex items-start text-gray-400 group">
                  <div className="mt-1 mr-3 p-2 bg-gray-800 rounded-lg group-hover:bg-primary-600 transition-colors duration-300">
                    <FaPhoneAlt className="text-primary-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm">+84 123 456 789</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={childVariants}>
              <h3 className="text-xl font-bold font-display text-white mb-4 relative inline-block">
                Đăng ký nhận tin
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded"></span>
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Nhận thông tin mới nhất về các dự án và bài viết của tôi.
              </p>
              <form className="space-y-2">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Nhập email của bạn" 
                    className="w-full py-2 px-4 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                >
                  Đăng ký
                </button>
              </form>
            </motion.div>
          </motion.div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Portfolio. Mọi quyền được bảo lưu.
            </p>
            <div className="flex items-center justify-center text-gray-500 text-sm">
              <span>Được phát triển với </span>
              <FaHeart className="mx-1 text-red-500" />
              <span> bởi <span className="text-primary-400 ml-1 font-medium">Đỗ Hoàng Nam</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 