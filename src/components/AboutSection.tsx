import React from 'react';
import { Code, Coffee, Lightbulb, Target, BookOpen, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Learning to write maintainable, readable code following best practices"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Eager to learn new technologies and adapt to changing requirements"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Focused on delivering quality solutions and meeting project deadlines"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative mindset with strong communication skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a recent Computer Science graduate, I'm passionate about web development and 
                creating digital solutions that make a difference. My journey began during college 
                where I discovered my love for coding through various projects and coursework.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I've been actively learning modern web technologies including React, Node.js, and 
                cloud platforms through online courses, personal projects, and internships. 
                I believe in continuous learning and staying updated with the latest industry trends.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm excited to start my professional career and contribute to innovative projects 
                while continuing to grow as a developer. I'm particularly interested in full-stack 
                development and creating user-friendly applications.
              </p>
            </div>
          </div>

          {/* Right side - Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        

      
      </div>
    </section>
  );
};

export default AboutSection;