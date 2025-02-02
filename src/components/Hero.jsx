import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Hero = () => {
  const bubbles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Randomly Moving Water Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bubbles.map((_, index) => {
          const randomSize = 20 + Math.random() * 40;
          const randomXStartPosition = Math.random() * 100;
          const randomYStartPosition = Math.random() * 100;
          const randomDuration = 2 + Math.random() * 2;
          const randomDelay = Math.random() * 3;
          const randomXOffset = (Math.random() - 0.5) * 40;
          const randomYOffset = (Math.random() - 0.5) * 30;

          return (
            <motion.div
              key={index}
              className="absolute"
              initial={{
                left: `${randomXStartPosition}%`,
                top: `${randomYStartPosition}%`,
                opacity: 0.7,
              }}
              animate={{
                x: [`${randomXOffset}px`, `-${randomXOffset}px`, `${randomXOffset}px`],
                y: [`${randomYOffset}px`, `-${randomYOffset}px`, `${randomYOffset}px`],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeInOut",
              }}
              style={{
                clipPath: 'inset(0% -5% 0% -5%)',
              }}
            >
              <motion.div
                className={`rounded-full`}
                style={{
                  width: `${randomSize}px`,
                  height: `${randomSize}px`,
                  background: `radial-gradient(circle at 60% 40%, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0) 20%),
                             radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.8), rgba(173, 216, 230, 0.3) 15%, rgba(255, 255, 255, 0) 30%),
                             radial-gradient(circle at 70% 60%, rgba(255, 182, 193, 0.7), rgba(255, 182, 193, 0.2) 15%, rgba(255, 255, 255, 0) 30%),
                             radial-gradient(circle at 40% 20%, rgba(255, 248, 220, 0.9), rgba(255, 248, 220, 0.4) 10%, rgba(255, 255, 255, 0) 25%)`,
                  border: '1px solid rgba(16, 15, 15, 0.38)' // Subtle white border for definition
                }}
              >
                 <motion.div // Inner white highlight
                    className="absolute rounded-full"
                    style={{
                      top: '15%',
                      left: '20%',
                      width: randomSize * 0.2, // Adjust size relative to bubble size
                      height: randomSize * 0.2,
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', // White highlight
                      filter: 'blur(2px)', // Slight blur for softer highlight
                    }}
                  />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Background animations (circles) - kept as is, adjust if needed */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"
          animate={{
            x: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Hero Text and Lottie Animation Content */}
      <div className="flex flex-col lg:flex-row items-start justify-between relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl relative z-10"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-4"
          >
            Hey there,
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
              delay: 0.2
            }}
          >
            I'm Gunjan Jain,
          </motion.h1>
          <motion.p
            className="mt-6 text-xl text-gray-600 max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Debugging Life, One Stack at a Time!
          </motion.p>
          <motion.div
            className="space-y-4 text-gray-600 max-w-2xl"
          >
            <p>
              Full-stack software engineer with 5.5 years of experience—basically, I turn coffee into code, errors into lessons, and requirements into reality (after a few refactors, of course!)
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="lg:w-2/3 mt-8 lg:mt-0 scale-125 transform lg:translate-x-32"
          style={{
            animation: 'float 6s ease-in-out infinite',
          }}
        >
          <DotLottieReact
            src="https://lottie.host/c5023e37-6793-47a3-b9b5-9c135726e41f/39pXbteQDo.lottie"
            loop
            autoplay
          />
        </motion.div>
      </div>

      {/* Yellow Circle - kept as is, adjust if needed */}
      <motion.div
        className="absolute top-1/3 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Bottom Gradient Line - kept as is */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent max-w-5xl mx-auto"></div>
      </div>

      {/* Global Styles - kept as is */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px) scale(1.25) translateX(8rem);
          }
          50% {
            transform: translateY(-20px) scale(1.25) translateX(8rem);
          }
          100% {
            transform: translateY(0px) scale(1.25) translateX(8rem);
          }
        }
      `}</style>
    </section>
  );
};