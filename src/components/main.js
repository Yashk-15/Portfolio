'use client';

import { motion } from 'framer-motion';
import { FaCloud, FaReact, FaCode, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import { SiAwsamplify, SiVercel } from 'react-icons/si';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-bl from-black via-blue-950 to-blue-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-800 rounded-full blur-3xl opacity-20 -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-black rounded-full blur-2xl opacity-30 top-1/3 right-0 animate-pulse delay-1000"></div>
        <div className="absolute w-44 h-44 bg-blue-600 rounded-full blur-2xl opacity-20 bottom-20 left-20 animate-pulse delay-500"></div>
        <div className="absolute w-40 h-40 bg-blue-500 rounded-full blur-2xl opacity-25 top-2/3 right-32 animate-pulse delay-700"></div>
      </div>

      {/* Floating tech icons */}
      <motion.div
        className="absolute left-16 top-32 text-6xl text-blue-400 z-10"
        animate={{ y: [0, 30, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaHtml5 />
      </motion.div>
      <motion.div
        className="absolute right-24 top-44 text-6xl text-yellow-300 z-10"
        animate={{ y: [0, -30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaJs />
      </motion.div>
      <motion.div
        className="absolute left-40 bottom-28 text-6xl text-blue-500 z-10"
        animate={{ x: [0, 35, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCss3Alt />
      </motion.div>
      <motion.div
        className="absolute right-36 bottom-20 text-6xl text-white z-10"
        animate={{ y: [0, 24, 0], x: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiVercel />
      </motion.div>
      <motion.div
        className="absolute right-16 top-10 text-6xl text-orange-400 z-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiAwsamplify />
      </motion.div>
      <motion.div
        className="absolute left-10 bottom-10 text-6xl text-gray-400 z-10"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaGithub />
      </motion.div>

      <div className="relative z-20 container mx-auto px-4 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-8 flex space-x-6">
            {/* Core Icons */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl text-blue-400"
            >
              <FaReact />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="text-4xl text-blue-200"
            >
              <FaCloud />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="text-4xl text-blue-500"
            >
              <FaCode />
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900 text-transparent bg-clip-text"
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
              className="glass-effect px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 text-white border border-blue-500 bg-black/40"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-black px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 text-white"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


