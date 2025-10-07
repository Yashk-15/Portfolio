'use client';

import { motion } from 'framer-motion';
import { FaCloud, FaReact, FaCode } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 top-1/2 right-0 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-8 flex space-x-4">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="text-4xl text-blue-400"
            >
              <FaReact />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
              className="text-4xl text-purple-400"
            >
              <FaCloud />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
              className="text-4xl text-green-400"
            >
              <FaCode />
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            Yash Kaushik
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Full Stack Developer & Cloud Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex space-x-4"
          >
            <a 
              href="#projects" 
              className="glass-effect px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}