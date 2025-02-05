import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechBadge = ({ name, isHighlighted }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 1,
      scale: 1,
      backgroundColor: isHighlighted ? '#FF5A5F' : '#f3f4f6',
      color: isHighlighted ? '#ffffff' : '#374151',
    }}
    // transition={{
      // duration: 0.6, 
      // ease: "easeInOut",
    // }}
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
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} // Slow and smooth transition
      className="experience-card mb-12 p-6 rounded-xl hover:bg-gray-50 snap-start"
    >
      <div className="flex items-center mb-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} // Slow and smooth transition
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
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} // Slow and smooth transition
              className="flex items-start"
            >
              <span className="mr-2">•</span>
              <div className="flex-1">
                {typeof item === 'string' ? (
                  <span>{item}</span>
                ) : (
                  <>
                    <span>{item.mainPoint}</span>
                    {item.subPoints && item.subPoints.length > 0 && (
                      <ul className="list-disc ml-5 mt-2 space-y-2">
                        {item.subPoints.map((subPoint, subIndex) => (
                          <motion.li
                            key={subIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: (index + (subIndex * 0.1) + 1) * 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} // Slow and smooth transition
                            className="flex items-start"
                          >
                            <span className="mr-2">•</span>
                            <span className="flex-1">{subPoint}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
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
      skills: ['React', 'Next JS', 'JavaScript', 'Java', 'REST APIs', 'MySQL', 'Node JS', 'Python', 'SpringBoot'],
      description: [
        'Worked as part of the Claims Infrastructure team, designing and implementing scalable backend services that process 100+ claims per minute, handling XXXM$ in transactions.',
        'Developed a claims visualization dashboard that consolidated data from 10+ portals, reducing manual effort and improving operational efficiency.',
        'Optimized API performance and database queries, enhancing system responsiveness and scalability for real-time claims processing.',
        'Collaborated with cross-functional teams to improve claim validation and adjudication workflows, ensuring regulatory compliance and reducing processing delays.',
      ],
    },
    {
      company: 'Temenos',
      logo: 'https://cdn.brandfetch.io/idr1ds4AXc/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
      role: 'Software Developer',
      duration: 'Jan 2022 - Apr 2024',
      location: 'Bengaluru, IN',
      skills: ['jBASE', 'Jenkins', 'CI/CD Pipelines', 'Selenium', 'Java', 'SpringBoot', 'REST APIs'],
      description: [
        {
          mainPoint: 'Worked in the platform team, where I developed and optimized a high-frequency trading (HFT) platform for US stock markets (CME, NASDAQ), enhancing execution speed and strategy testing capabilities.',
          subPoints: [
            'Designed and implemented a low-latency order execution system, enabling traders to execute trades at ultra-fast speeds.',
            'Built market simulators and a heuristic engine to replicate real-world trading conditions, allowing traders and QA teams to test strategies under race conditions.',
          ],
        },
        'Worked on designing and implementing generic backend frameworks for global banks, including reusable modules for authentication, transaction processing, and reporting.',
        'Implemented rate lock feature for MEBank Australia that allowed customers of MEBank to freeze the interest rates on loans for pre-defined period that led to an increase in business of over XXM$ over a period of 1 year.',
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
        {
          mainPoint: 'Developed a platform that allowed different banks to migrate their on-premise datacenter services to the cloud environment (AWS Cloud), leading to $2M in average annual savings for customers.',
          subPoints: [
            'Backend: Designed and developed two microservices: one for authentication of users and cloud services by integrating with the company\'s LDAP server, and another for storing and managing metadata related to team onboarding and deployed services.',
            'Frontend: Built a UI-based platform that enabled users to deploy their services using a lift-and-shift model, simplifying cloud migration through an intuitive interface.',
          ],
        },
        'Worked with 5+ different banks to help them on-board the platform and save over XXM$ in savings by moving away from on premise data centers.',
      ],
    },
  ];

  const technologies = [
    'AWS CloudFormation', 'REST APIs', 'jBASE',
    'React', 'Node JS',
    'PostgreSQL', 'Data Migration', 'Microservices',
    'JavaScript', 'Jenkins', 'Next JS',
    'C++', 'CI/CD Pipelines', 'AWS Cloud',
    'MongoDB', 'AWS Lambda',
    'MySQL', 'Selenium', 'SpringBoot',
    'Python', 'Java'
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto snap-y snap-mandatory">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Experience
      </h2>

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 snap-y snap-mandatory">
        <div className="lg:col-span-2 snap-start">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              {...exp}
              onInView={(skills) => setActiveSkills(skills)}
            />
          ))}
        </div>

        <div className="lg:col-span-1 snap-start">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} // Slow and smooth transition
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