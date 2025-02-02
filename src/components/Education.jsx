import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-900 mb-16"
      >
        Education & Awards
      </motion.h2>
      
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Education Column */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 h-fit"
          >
            <div className="flex items-center mb-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mr-4"
              >
                <img 
                  src="https://heyboss.heeyo.ai/user-assets/PuY9zVxH.png"
                  alt="UIUC Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">University of Illinois at Urbana-Champaign</h3>
                <p className="text-gray-600 mt-1">Master of Science in Data Science</p>
                <p className="text-gray-500">2022 - 2024</p>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="ml-20 mt-4"
            >
              <h4 className="font-medium text-gray-700 mb-2">Key Coursework:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Advanced Generative AI</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Intro to Neural Networks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Deep Learning for Healthcare</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Intro to Statistical Learning</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 h-fit"
          >
            <div className="flex items-center mb-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mr-4"
              >
                <img 
                  src="https://heyboss.heeyo.ai/user-assets/9CHMp1GQ.png"
                  alt="ABES Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">ABES Engineering College</h3>
                <p className="text-gray-600 mt-1">Bachelor of Technology in Computer Science</p>
                <p className="text-gray-500">2015 - 2019</p>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="ml-20 mt-4"
            >
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Core Computer Science fundamentals and programming</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Data Structures and Algorithms</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Awards Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* AWS Certification */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300"
          >
            <div className="flex items-center">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mr-4 p-2"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                  alt="AWS Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">AWS Cloud Practitioner</h3>
                <p className="text-gray-600 mt-1">Amazon Web Services</p>
                <p className="text-gray-500">2024</p>
              </div>
            </div>
          </motion.div>

          {/* Microsoft Certification */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300"
          >
            <div className="flex items-center">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mr-4 p-2"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
                  alt="Microsoft Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Front-End Developer Professional Certificate</h3>
                <p className="text-gray-600 mt-1">Microsoft</p>
                <p className="text-gray-500">April 2023</p>
              </div>
            </div>
          </motion.div>

          {/* Oracle Certification */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300"
          >
            <div className="flex items-center">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mr-4 p-2"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" 
                  alt="Oracle Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Oracle Certified Associate</h3>
                <p className="text-gray-600 mt-1">Java SE8 Programmer</p>
                <p className="text-gray-500">May 2020</p>
              </div>
            </div>
          </motion.div>

          {/* Competitive Coding */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300"
          >
            <div className="flex items-start">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 mr-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold"
              >
                {'</>'}
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Competitive Programming</h3>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Secured 127 rank in Google Asia Pacific coding challenge</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>5⭐ on CodeChef (2000+ rating)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Expert on Codeforces (1600+ rating)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Solved 500+ problems across platforms</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};