import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaFacebookF } from 'react-icons/fa';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    // Giả lập gửi form thành công sau 1.5 giây
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form sau khi gửi thành công
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Sau 3 giây, ẩn thông báo thành công
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  // Animation variants
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
  
  // Thông tin liên hệ
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-primary-500" />,
      title: 'Địa chỉ',
      details: 'Hà Nội, Việt Nam',
      link: 'https://goo.gl/maps/yourlocation'
    },
    {
      icon: <FaPhoneAlt className="text-primary-500" />,
      title: 'Điện thoại',
      details: '+84 934 510 161',
      link: 'tel:+84934510161'
    },
    {
      icon: <FaEnvelope className="text-primary-500" />,
      title: 'Email',
      details: 'hnam26.do@gmail.com',
      link: 'mailto:hnam26.do@gmail.com'
    }
  ];
  
  // Social media
  const socialMedia = [
    { icon: <FaGithub />, name: 'GitHub', link: 'https://github.com/donam26' },
    { icon: <FaFacebookF />, name: 'Facebook', link: 'https://www.facebook.com/hoang.nam.64632' }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute top-40 -left-20 w-60 h-60 bg-secondary-50 rounded-full opacity-70 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">
            Liên hệ với tôi
          </h2>
          <p className="section-subtitle">
            Gửi tin nhắn nếu bạn có bất kỳ câu hỏi hoặc đề xuất hợp tác nào
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-bold mb-6 font-display">Thông tin liên hệ</h3>
              <p className="text-gray-600 mb-6">
                Bạn có thể liên hệ với tôi qua các phương thức bên dưới hoặc sử dụng form để gửi tin nhắn trực tiếp.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-white shadow-soft rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800 mb-1">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.details}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="text-xl font-bold mb-4 font-display">Mạng xã hội</h3>
              <div className="flex space-x-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white shadow-soft rounded-lg flex items-center justify-center text-gray-700 hover:text-primary-600 hover:shadow-md transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-soft p-8 border border-gray-100"
            >
              {/* Success message */}
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 mb-6">
                  Tin nhắn của bạn đã được gửi thành công! Tôi sẽ phản hồi trong thời gian sớm nhất.
                </div>
              )}
              
              {/* Error message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-6">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                      placeholder="Nhập họ tên của bạn"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Tiêu đề
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    placeholder="Tiêu đề tin nhắn"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Nội dung
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    placeholder="Nhập nội dung tin nhắn của bạn..."
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full py-3 px-6 text-white font-medium rounded-lg ${
                      submitting ? 'bg-gray-400' : 'bg-primary-600 hover:bg-primary-700'
                    } transition-colors duration-300 flex items-center justify-center`}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Đang gửi...
                      </>
                    ) : (
                      'Gửi tin nhắn'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
        
     
      </div>
    </section>
  );
};

export default Contact; 