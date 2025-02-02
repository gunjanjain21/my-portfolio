import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechBadge = ({ name, isHighlighted }) => (
  <motion.div 
    whileHover={{ scale: 1.1 }}
    animate={{
      backgroundColor: isHighlighted ? '#FF5A5F' : '#f3f4f6',
      color: isHighlighted ? '#ffffff' : '#374151',
    }}
    transition={{ duration: 0.3 }}
    className="tech-badge inline-flex items-center px-3 py-1 rounded-full text-sm mr-2 mb-2 cursor-pointer"
  >
    {name}
  </motion.div>
);

const ExperienceCard = ({ company, logo, role, duration, description, skills, onInView, location }) => {
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      onInView(skills);
    }
  }, [inView, onInView, skills]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="experience-card mb-12 p-6 rounded-xl hover:bg-gray-50"
    >
      <div className="flex items-center mb-4">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-10 h-10 mr-4 flex items-center justify-center"
        >
          <img src={logo} alt={company} className="w-full h-full object-contain" />
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-900">{company}</h3>
      </div>
      
      <div className="ml-14">
        <div className="mb-2">
          <div className="text-gray-700 font-medium">{role}</div>
          <div className="flex justify-between text-gray-500 text-sm">
            <span>{duration}</span>
            <span>{location}</span>
          </div>
        </div>
        
        <ul className="space-y-3 text-gray-600 mb-4">
          {description.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="flex items-start"
            >
              <span className="mr-2">•</span>
              <span className="flex-1">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const [activeSkills, setActiveSkills] = useState([]);

  const experiences = [
    {
      company: 'Centene Corporation',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Centene_Corporation_Logo.svg/640px-Centene_Corporation_Logo.svg.png',
      role: 'Full Stack Software Engineer',
      duration: 'Aug 2024 - Present',
      location: 'San Francisco, CA',
      skills: ['React', 'Next JS','JavaScript', 'Java', 'REST APIs', 'MySQL', 'Node JS', 'Python','SpringBoot'],
      description: [
        'Developed an internal dashboard tool using React and TypeScript that helped visualize all pending claims of users through a single portal, helping increase the speed of debugging by more than 50%.',
        'Developed a tool for managing the deployment of critical updates to production environments, achieving a 95% success rate in first-attempt deployments.',
        'Employed Python, PostgreSQL and Redis to optimize database queries, reducing response times by 40% and improving application performance.',
      ],
    },
    {
      company: 'Temenos',
      logo: 'https://cdn.brandfetch.io/idr1ds4AXc/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
      role: 'Software Developer',
      duration: 'Jan 2022 - Apr 2024',
      location: 'Bengaluru, IN',
      skills: ['jBASE', 'Jenkins', 'CI/CD Pipelines','Selenium', 'Java', 'SpringBoot', 'REST APIs'],
      description: [
        'Worked as a software developer in the Frameworks Development (FDAS) team developing generic framework solutions for global banks, which improved development efficiency by 40%.',
        'Integrated various APIs and third-party services into existing applications.',
        'Engineered a loan interest rate lock feature for Virgin Money Australian Bank, securing predetermined rates for customers and reducing unforeseen interest expenses by 20%, enhancing customer satisfaction and retention',
      ],
    },
    {
      company: 'Capgemini',
      logo: 'https://capgemini.github.io/images/logo-square.png',
      role: 'Senior Software Engineer',
      duration: 'July 2019 - Jan 2022',
      location: 'Bengaluru, IN',
      skills: ['AWS CloudFormation', 'Data Migration', 'Microservices', 'SpringBoot', 'REST APIs', 'AWS Cloud', 'PostgreSQL', 'Next JS', 'C++'],
      description: [
        'Developed a platform that allowed different banks to migrate their on-premise datacenter services to the cloud environment (AWS Cloud) that led to 2M$ average annual savings for customers.',
        'Designed and implemented a front-end platform using JavaScript, NodeJS, and React.JS for banks, enabling easy access to cloud services.',
        'Worked with 5 different banks that migrated to the platform helping lead to a CSAT score of 90%.',
      ],
    },
  ];

  const technologies = [
    'AWS CloudFormation','REST APIs', 'jBASE', 
    'React', 'Node JS',
    'PostgreSQL', 'Data Migration','Microservices',
    'JavaScript', 'Jenkins', 'Next JS', 
    'C++','CI/CD Pipelines', 'AWS Cloud', 
    'MongoDB', 'AWS Lambda', 
    'MySQL', 'Selenium','SpringBoot',
    'Python', 'Java'
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Experience
      </h2>
      
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              {...exp} 
              onInView={(skills) => setActiveSkills(skills)}
            />
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <TechBadge 
                  key={index} 
                  name={tech} 
                  isHighlighted={activeSkills.includes(tech)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};