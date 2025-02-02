import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { ScrollProgress } from './components/ScrollProgress';

export const App = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
      </main>
    </motion.div>
  );
};