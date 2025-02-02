import React from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  // Replace these placeholder links with your actual links
  const linkedinLink = 'https://www.linkedin.com/in/gunjanjain2110/';
  const resumeLink = 'https://drive.google.com/file/d/1sKuKIMix8o5dJHO59keCsZN745RUO8Z7/view?usp=sharing';
  const contactLink = 'mailto:gunjanjain2110@gmail.com';
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 py-4"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-xl font-bold text-gray-900"
          >
            Gunjan
          </motion.div>
          <div className="flex space-x-8">
            {['Linkedin', 'Resume', 'Contact'].map((item) => {
              let href = '#'; // Default href for 'Contact' and fallback

              if (item === 'Linkedin') {
                href = linkedinLink;
              } else if (item === 'Resume') {
                href = resumeLink;
              } else if (item === 'Contact') {
                href = contactLink;
              } 

              return (
                <motion.a
                  key={item}
                  href={href}
                  className="nav-link text-gray-600 hover:text-gray-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target={item === 'Linkedin' || item === 'Resume'|| item === 'Contact' ? "_blank" : undefined} // Open LinkedIn and Resume in new tabs
                  rel={item === 'Linkedin' || item === 'Resume' || item === 'Contact'? "noopener noreferrer" : undefined} // Security best practices for target="_blank"
                >
                  {item}
                </motion.a>
              );
            })}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
