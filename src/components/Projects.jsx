import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A responsive personal portfolio site built with React and Tailwind CSS.',
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'Todo List App',
    description: 'A full-featured todo list app with local storage and smooth UI.',
    link: 'https://your-todo-app.com',
  },
  {
    title: 'Weather Finder',
    description: 'Real-time weather app using OpenWeather API and Tailwind.',
    link: 'https://your-weather-app.com',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
      <div className='flex justify-end pr-8 md:pr-20 pt-6 mx-25'>
        <Navbar />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-10 text-purple-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          My Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-xl p-6 border border-purple-700 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-purple-400 hover:text-white font-medium transition-colors duration-300"
              >
                Visit Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
