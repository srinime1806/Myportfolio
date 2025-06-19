import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8" style={{ marginTop: '75px' }}>
      

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Srineela Reddy M
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-2 animate-fade-in-delay-1">
          Aspiring Full Stack Developer
        </p>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
          Fresh graduate passionate about creating innovative web solutions and eager to contribute to meaningful projects
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-3">
          <a
            href="https://github.com/srinime1806"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-gray-700/50"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/msrineela-reddy-3a2148277"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-gray-700/50"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:msrineelareddy@gmail.com"
            className="p-3 bg-gray-800/50 rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-gray-700/50"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delay-4">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Learn More
          </button>
          <a href="/Resume.pdf" download>
  <button className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800/50 hover:text-white transform hover:scale-105 transition-all duration-300">
    Download Resume
  </button>
</a>

        </div>

        
      </div>
    </section>
  );
};

export default HeroSection;