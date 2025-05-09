import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaMobileAlt, FaServer, FaDatabase } from 'react-icons/fa';

const Projects = () => {
  // State để lọc dự án
  const [filter, setFilter] = useState('all');
  
  // Danh sách các dự án
  const projects = [
    {
      id: 1,
      title: 'Whatsapp CRM',
      description: 'Hệ thống chat doanh nghiệp với whatsapp, tích hợp các chức năng phản hồi , hỗ trợ của mô hình AI, quản lý hệ thống chat realtime với khách hàng, chia phân khúc khách hàng quản lý, quản lý mẫu tin nhắn mà Meata cung cấp',
      image: 'https://media-cloodo.s3.amazonaws.com/Report_Leads_3e8360a930.png?updated_at=2023-06-16T03:54:08.447Z',
      tags: ['Laravel', 'ReactJS', 'MySQL', 'AWS'],
      category: 'web',
      features: [
        'Giao diện người dùng trực quan, đáp ứng trên mọi thiết bị',
        'Hệ thống thanh toán tích hợp nhiều phương thức',
        'Quản lý kho hàng thời gian thực',
        'Tìm kiếm và lọc sản phẩm nâng cao',
        'Dashboard quản trị với biểu đồ và báo cáo'
      ],
      links: {
        demo: 'https://cloodo.com/en/project/whatsapp-crm#pricing',
        case_study: '#'
      }
    },
    {
      id: 2,
      title: 'Ứng dụng Quản lý Dự án',
      description: 'Ứng dụng giúp quản lý dự án với tính năng phân công công việc, theo dõi tiến độ, và giao tiếp nhóm thời gian thực.',
      image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740',
      tags: ['Next.js', 'Socket.IO', 'MongoDB', 'Express', 'JWT'],
      category: 'web',
      features: [
        'Giao diện kéo thả trực quan cho kanban board',
        'Biểu đồ Gantt để theo dõi tiến độ dự án',
        'Hệ thống thông báo và nhắc nhở tự động',
        'Chat thời gian thực giữa thành viên'
      ],
      links: {
        demo: 'https://hacma.vn/',
        case_study: '#'
      }
    },
    {
      id: 3,
      title: 'App Theo Dõi Sức Khỏe',
      description: 'Ứng dụng di động giúp người dùng theo dõi sức khỏe, hoạt động thể chất, và chế độ dinh dưỡng hàng ngày.',
      image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740',
      tags: ['React Native', 'Firebase', 'Redux', 'Health API'],
      category: 'mobile',
      features: [
        'Đồng bộ hóa với các thiết bị theo dõi sức khỏe',
        'Biểu đồ và thống kê trực quan',
        'Lịch trình luyện tập và kế hoạch dinh dưỡng',
        'Thông báo nhắc nhở và động viên'
      ],
      links: {
        demo: 'https://example.com/health-app',
        github: 'https://github.com/yourusername/health-tracker',
        case_study: '#'
      }
    },
    {
      id: 4,
      title: 'Hệ thống Backend cho IoT',
      description: 'Backend API và hệ thống quản lý cho các thiết bị IoT, hỗ trợ xử lý dữ liệu thời gian thực và điều khiển từ xa.',
      image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740',
      tags: ['Node.js', 'MQTT', 'WebSockets', 'InfluxDB', 'Docker'],
      category: 'backend',
      features: [
        'Xử lý hàng triệu thông điệp từ thiết bị mỗi ngày',
        'Dashboard quản lý trực quan',
        'API RESTful cho các ứng dụng client',
        'Phân tích dữ liệu và cảnh báo thông minh'
      ],
      links: {
        demo: 'https://example.com/iot-platform',
        github: 'https://github.com/yourusername/iot-platform',
        case_study: '#'
      }
    },
    {
      id: 5,
      title: 'CRM cho Doanh Nghiệp Nhỏ',
      description: 'Hệ thống CRM đơn giản nhưng đầy đủ chức năng, giúp doanh nghiệp nhỏ quản lý khách hàng và cơ hội bán hàng.',
      image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740',
      tags: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
      category: 'web',
      features: [
        'Quản lý khách hàng và liên hệ',
        'Theo dõi cơ hội bán hàng và pipeline',
        'Lịch sử tương tác và ghi chú',
        'Báo cáo và thống kê kinh doanh'
      ],
      links: {
        demo: 'https://example.com/simple-crm',
        github: 'https://github.com/yourusername/simple-crm',
        case_study: '#'
      }
    },
    {
      id: 6,
      title: 'Chatbot AI Hỗ Trợ Khách Hàng',
      description: 'Chatbot thông minh tích hợp vào website, có khả năng trả lời câu hỏi và hỗ trợ khách hàng 24/7.',
      image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740',
      tags: ['Python', 'TensorFlow', 'NLP', 'Flask', 'React'],
      category: 'ai',
      features: [
        'Học máy từ lịch sử hội thoại',
        'Hiểu ngôn ngữ tự nhiên và ngữ cảnh',
        'Tích hợp dễ dàng với các nền tảng website',
        'Dashboard quản lý và phân tích cuộc hội thoại'
      ],
      links: {
        demo: 'https://example.com/ai-chatbot',
        github: 'https://github.com/yourusername/ai-chatbot',
        case_study: '#'
      }
    }
  ];
  
  // Danh sách filter
  const filters = [
    { id: 'all', label: 'Tất cả', icon: <FaLaptopCode /> },
    { id: 'web', label: 'Web App', icon: <FaLaptopCode /> },
    { id: 'mobile', label: 'Mobile App', icon: <FaMobileAlt /> },
    { id: 'backend', label: 'Backend', icon: <FaServer /> },
  ];
  
  // Lọc dự án theo danh mục
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -bottom-64 -right-64 w-[500px] h-[500px] bg-primary-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-secondary-50 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">
            Dự án nổi bật
          </h2>
          <p className="section-subtitle">
            Một số dự án gần đây mà tôi đã thực hiện
          </p>
        </motion.div>
        
        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative overflow-hidden group h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-2">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors duration-300"
                          aria-label="GitHub repository"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors duration-300"
                          aria-label="Live demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 font-display">{project.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="px-6 pb-6 mt-auto">
                <a 
                  href={project.links.case_study} 
                  className="block w-full py-2 px-4 text-center bg-primary-50 text-primary-700 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors duration-300"
                >
                  Xem chi tiết
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Show more projects button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            <span>Liên hệ với tôi</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 