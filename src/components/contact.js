'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-3xl" />,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-400',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-3xl" />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="text-3xl" />,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-red-500',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="text-3xl" />,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 -bottom-20 -right-20"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 -top-20 -left-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg">Feel free to reach out for collaborations or just a friendly chat</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect p-8 md:p-12 rounded-3xl text-center"
          >
            <p className="text-xl text-gray-300 mb-8">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 transition-colors duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              Send me an email
            </motion.a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-gray-500"
        >
          <p>© 2024 Yash Kaushik. Built with Next.js and deployed on AWS.</p>
        </motion.div>
      </div>
    </section>
  );
}