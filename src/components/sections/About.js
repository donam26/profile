import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaMobileAlt, FaLaptopCode, FaBrain } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    })
  };

  const skills = [
    { 
      category: 'Frontend', 
      icon: <FaLaptopCode />,
      color: 'from-blue-500 to-cyan-400',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      items: ['ReactJS',  'Tailwind CSS', 'Redux', 'Socket.io', 'UI/UX']
    },
    { 
      category: 'Backend', 
      icon: <FaServer />,
      color: 'from-purple-500 to-indigo-500',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      items: ['Laravel', 'REST APIs', 'MySQL',  'PHP']
    },
    { 
      category: 'Database', 
      icon: <FaDatabase />,
      color: 'from-emerald-500 to-green-500',
      textColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      items: ['MySQL', 'Redis']
    },
    { 
      category: 'DevOps & Cloud', 
      icon: <FaServer />,
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
      items: ['AWS', 'Docker', 'Git', 'Nginx', 'Linux']
    },
    { 
      category: 'Soft Skills', 
      icon: <FaBrain />,
      color: 'from-teal-500 to-cyan-500',
      textColor: 'text-teal-600',
      bgColor: 'bg-teal-50',
      items: ['Problem Solving', 'Communication', 'Teamwork', 'Documentation', 'Agile/Scrum', 'Time Management']
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-12 w-80 h-80 bg-secondary-50 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">
            Giới thiệu
          </h2>
          <p className="section-subtitle">Tìm hiểu thêm về tôi và các kỹ năng chuyên môn của tôi</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 blur-sm opacity-20 animate-pulse-slow"></div>
              
              <div className="relative">
                <div className="w-full h-auto max-h-[450px] rounded-xl overflow-hidden shadow-soft">
                  <img 
                    src="/images/avatar.jpg" 
                    alt="Về tôi" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740';
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white shadow-strong p-4 rounded-xl flex flex-col items-center justify-center text-center w-32">
              <span className="block text-3xl font-bold text-primary-600">2+</span>
              <span className="text-sm text-gray-500">Năm kinh nghiệm</span>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="mb-6" variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">
                <span className="gradient-text">Fullstack Developer</span> đam mê với công nghệ
              </h3>
            </motion.div>

            <motion.p 
              className="text-gray-600 mb-5"
              variants={itemVariants}
            >
              Xin chào! Tôi là một Fullstack Developer với 2+ năm kinh nghiệm trong việc xây dựng các ứng dụng web hiện đại. Tôi đam mê tạo ra những trải nghiệm người dùng tuyệt vời kết hợp với các giải pháp kỹ thuật hiệu quả phía sau.
            </motion.p>

            <motion.p 
              className="text-gray-600 mb-8"
              variants={itemVariants}
            >
              Với nền tảng vững chắc về cả frontend và backend, tôi phát triển các ứng dụng đáp ứng hoàn hảo trên mọi thiết bị, tối ưu hiệu suất và có khả năng mở rộng cao. Sự kết hợp giữa thẩm mỹ và chức năng là điều tôi luôn hướng tới trong mọi dự án.
            </motion.p>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-5 text-gray-800 font-display">
                Kỹ năng chuyên môn
              </h4>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
              variants={itemVariants}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  custom={index}
                  variants={fadeInVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`${skill.bgColor} p-4 rounded-xl shadow-soft`}
                >
                  <div className="flex items-center mb-3">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${skill.color} text-white shadow-sm mr-3`}>
                      {skill.icon}
                    </div>
                    <h5 className={`font-medium ${skill.textColor}`}>{skill.category}</h5>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.slice(0, 4).map((item, idx) => (
                      <span 
                        key={idx} 
                        className={`px-2 py-1 bg-white/80 text-xs font-medium rounded-md border border-gray-100 shadow-sm ${skill.textColor}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <a 
                href="#experience" 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                <span>Xem kinh nghiệm làm việc</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 