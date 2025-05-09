import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaUserTie } from 'react-icons/fa';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const experiences = {
    work: [
      {
        title: 'Back-end Developer',
        company: 'NetbaseJSC',
        period: '03/2024 - Hiện tại',
        description: 'Xây dựng hệ thống CRM, tích hợp các mô hình của OpenAI để tạo trợ lý ảo cho các chức năng của hệ thống. Triển khai cơ sở hạ tầng trên AWS, tối ưu hiệu suất ',
        skills: ['Laravel', 'React', 'AWS', 'Docker', 'Redis'],
        achievements: [
          'Tích hợp các mô hình của OpenAI để tạo trợ lý ảo cho các chức năng của hệ thống',
          'Triển khai cơ sở hạ tầng trên AWS, tối ưu hiệu suất',
          'Tối ưu hóa hệ thống quản lý nhân sự của công ty',
          'Xây dựng hệ thống chat doanh nghiệp với whatsapp',
          'Triển khai và xây dựng hạ tầng trên AWS',
          'Link sản phẩm: https://cloodo.com/en/project/whatsapp-crm#pricing'
        ]
      },
      {
        title: 'Front-end Developer',
        company: 'DCV',
        period: '03/2023 - 08/2023',
        description: 'Được đào tạo về các công nghệ Front-end, từ căn bản đến nâng cao.',
        skills: [ 'HTML', 'CSS', 'JavaScript', 'Git'],
        achievements: [
          
        ]
      }
    ],
    education: [
     
      {
        title: 'Cử nhân Công nghệ Thông tin',
        institution: 'Đại học Thủ đô Hà Nội',
        period: '2020 - 2024',
        description: 'Chuyên ngành Kỹ thuật phần mềm. ',
        achievements: [
          'GPA: 3.17/4.0',
          'Dự án tốt nghiệp: Xây dựng ứng dụng mạng xã hội-chatapp cho sinh viên',
          'Giải thưởng nghiên cứu khoa học với đề tài nhà thông minh'
        ]
      }
    ],
    certifications: [
      {
        title: 'Toeic 450',
        institution: 'Toeic',
        period: '2025',
        description: 'Khả năng đọc hiểu tài liệu tiếng Anh.',
        badgeUrl: '/images/aws-badge.png'
      },
      
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  const tabVariants = {
    inactive: { borderColor: 'transparent' },
    active: { 
      borderColor: '#0ea5e9',
      transition: { duration: 0.3 }
    }
  };

  // Tab controls
  const tabs = [
    { id: 'work', label: 'Công việc', icon: <FaBriefcase /> },
    { id: 'education', label: 'Học vấn', icon: <FaGraduationCap /> },
    { id: 'certifications', label: 'Chứng chỉ', icon: <FaCode /> }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary-50 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-secondary-50 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">
            Kinh nghiệm làm việc
          </h2>
          <p className="section-subtitle">
            Quá trình học tập và kinh nghiệm chuyên môn của tôi
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base border-b-2 ${
                  activeTab === tab.id
                    ? 'text-primary-700 bg-primary-50 border-primary-500'
                    : 'text-gray-600 hover:text-primary-600 border-transparent hover:bg-gray-100'
                } transition-all duration-300`}
                onClick={() => setActiveTab(tab.id)}
                variants={tabVariants}
                animate={activeTab === tab.id ? 'active' : 'inactive'}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="mr-2">{tab.icon}</span>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
          key={activeTab}
        >
          {activeTab === 'work' && (
            <div className="relative py-8">
              {/* Timeline Line */}
              <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500 to-secondary-500 opacity-20"></div>
              
              {experiences.work.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="mb-20 last:mb-0"
                >
                  <div className="relative flex flex-col sm:flex-row items-center">
                    {/* Timeline Dot - kết hợp với ngày tháng */}
                    <div className="order-1 sm:w-1/2 w-full pb-4 sm:pb-0">
                      <div className="flex items-center justify-end sm:pr-8 sm:pl-0 pl-12">
                        <div 
                          className={`w-full bg-white rounded-xl shadow-soft p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 
                                     ${index % 2 === 0 ? 'sm:text-right' : 'sm:hidden'}`}>
                          <div className="flex sm:flex-col flex-row sm:items-end items-start justify-between mb-4">
                            <div className="sm:order-2 order-1">
                              <h3 className="text-xl font-bold text-gray-800 font-display">{exp.title}</h3>
                              <p className="text-primary-600 font-medium">{exp.company}</p>
                            </div>
                            <span className="sm:order-1 order-2 px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-2 sm:mb-3 sm:ml-0 ml-4">
                              {exp.period}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{exp.description}</p>
                          
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Kỹ năng:</h4>
                            <div className="flex flex-wrap gap-2 sm:justify-end">
                              {exp.skills.map((skill, idx) => (
                                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Thành tựu:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-gray-600 text-sm flex items-start sm:justify-end">
                                  <span className="sm:order-2 h-1.5 w-1.5 rounded-full bg-primary-500 sm:ml-2 mr-2 mt-1.5"></span>
                                  <span className="sm:order-1">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center dot */}
                    <div 
                      className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary-500 shadow-md z-10"
                    ></div>
                    
                    {/* Right side content */}
                    <div className="order-1 sm:w-1/2 w-full">
                      <div className="flex items-center sm:pl-8 pl-12">
                        <div 
                          className={`w-full bg-white rounded-xl shadow-soft p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300
                                     ${index % 2 === 1 ? 'sm:text-left' : 'sm:hidden'}`}>
                          <div className="flex sm:flex-col flex-row items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 font-display">{exp.title}</h3>
                              <p className="text-primary-600 font-medium">{exp.company}</p>
                            </div>
                            <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-2 sm:mb-3 sm:ml-0 ml-4">
                              {exp.period}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{exp.description}</p>
                          
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Kỹ năng:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, idx) => (
                                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Thành tựu:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-gray-600 text-sm flex items-start">
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2 mt-1.5"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="relative py-8">
              {/* Timeline Line */}
              <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary-500 to-primary-500 opacity-20"></div>
              
              {experiences.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="mb-20 last:mb-0"
                >
                  <div className="relative flex flex-col sm:flex-row items-center">
                    {/* Left side content */}
                    <div className="order-1 sm:w-1/2 w-full pb-4 sm:pb-0">
                      <div className="flex items-center justify-end sm:pr-8 sm:pl-0 pl-12">
                        <div 
                          className={`w-full bg-white rounded-xl shadow-soft p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 
                                     ${index % 2 === 0 ? 'sm:text-right' : 'sm:hidden'}`}>
                          <div className="flex sm:flex-col flex-row sm:items-end items-start justify-between mb-4">
                            <div className="sm:order-2 order-1">
                              <h3 className="text-xl font-bold text-gray-800 font-display">{edu.title}</h3>
                              <p className="text-secondary-600 font-medium">{edu.institution}</p>
                            </div>
                            <span className="sm:order-1 order-2 px-3 py-1 bg-secondary-50 text-secondary-700 text-sm font-medium rounded-full mb-2 sm:mb-3 sm:ml-0 ml-4">
                              {edu.period}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{edu.description}</p>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Thành tựu học tập:</h4>
                            <ul className="space-y-1">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-gray-600 text-sm flex items-start sm:justify-end">
                                  <span className="sm:order-2 h-1.5 w-1.5 rounded-full bg-secondary-500 sm:ml-2 mr-2 mt-1.5"></span>
                                  <span className="sm:order-1">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center dot */}
                    <div 
                      className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-secondary-500 shadow-md z-10"
                    ></div>
                    
                    {/* Right side content */}
                    <div className="order-1 sm:w-1/2 w-full">
                      <div className="flex items-center sm:pl-8 pl-12">
                        <div 
                          className={`w-full bg-white rounded-xl shadow-soft p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300
                                     ${index % 2 === 1 ? 'sm:text-left' : 'sm:hidden'}`}>
                          <div className="flex sm:flex-col flex-row items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 font-display">{edu.title}</h3>
                              <p className="text-secondary-600 font-medium">{edu.institution}</p>
                            </div>
                            <span className="px-3 py-1 bg-secondary-50 text-secondary-700 text-sm font-medium rounded-full mb-2 sm:mb-3 sm:ml-0 ml-4">
                              {edu.period}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{edu.description}</p>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Thành tựu học tập:</h4>
                            <ul className="space-y-1">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-gray-600 text-sm flex items-start">
                                  <span className="h-1.5 w-1.5 rounded-full bg-secondary-500 mr-2 mt-1.5"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiences.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <div className="h-36 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center p-4">
                    <img 
                      src={cert.badgeUrl} 
                      alt={cert.title} 
                      className="h-24 w-auto mx-auto"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740`;
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-800 font-display">{cert.title}</h3>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                        {cert.period}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{cert.institution}</p>
                    <p className="text-gray-500 text-sm mt-3">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="#projects" 
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            <span>Xem các dự án của tôi</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 