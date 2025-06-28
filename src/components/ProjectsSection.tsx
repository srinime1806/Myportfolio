import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills. Features smooth animations and modern design.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/srinime1806/Myportfolio.git",
      liveUrl: "https://srineela-portfolio.vercel.app/",
      featured: true,
      type: "Personal Project"
    },
    {
      id: 2,
      title: "Quizzy",
      description: "Quizzy is a fun and fast-paced quiz app where users can test their knowledge, challenge friends, and learn new things through exciting games. It’s designed to make learning enjoyable with instant feedback, scores, and a variety of topics to explore.",
      image: "images.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/srinime1806/Quizzy.git",
      liveUrl: "https://quizzy-project.vercel.app/",
      featured: true,
      type: "API Integration"
    },
    {
      id: 3,
      title: "StegaNest",
      description: "Steganest is a smart app that lets you hide secret messages inside pictures. It uses encryption and clever coding so only people with the right password can read the hidden information.",
      image: "steganest.jpeg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/jkplearner/StegaNest.git",
      liveUrl: "stega-nest.vercel.app",
      featured: true,
      type: "Learning Project"
    },
    {
      id: 4,
      title: "Data Analytics Project",
      description: "A project that involves collecting, analyzing, and visualizing data to find useful insights. It uses tools like Python to support decision-making through data-driven conclusions.",
      image: "da pic.jpeg",
      technologies: ["Python"],
      githubUrl: "https://github.com/srinime1806/Data-Analytics.git",
      liveUrl: "#",
      featured: false,
      type: "College Project"
    },
   /* {
      id: 5,
      title: "Recipe Finder App",
      description: "A recipe search application using TheMealDB API. Users can search for recipes, view ingredients, and save favorites. Built to practice API integration.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "CSS Modules", "Recipe API", "Local Storage"],
      githubUrl: "https://github.com/johndoe/recipe-finder",
      liveUrl: "https://recipe-finder-demo.vercel.app",
      featured: false,
      type: "Practice Project"
    },
    {
      id: 6,
      title: "Calculator App",
      description: "A scientific calculator built with vanilla JavaScript. Features basic arithmetic operations, scientific functions, and a clean user interface.",
      image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/johndoe/calculator",
      liveUrl: "https://calculator-demo.netlify.app",
      featured: false,
      type: "Beginner Project"
    }*/
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of projects I've built during my learning journey, showcasing my growth as a developer
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 bg-gray-800/80 text-white px-2 py-1 rounded text-xs">
                    {project.type}
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-400 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-16 bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              My Learning Journey
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Each project represents a step in my learning journey. From simple HTML/CSS websites to 
              full-stack applications, I'm constantly challenging myself to learn new technologies and improve my skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
             
              <div className="flex items-center px-4 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                <span>Always Learning</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                <span>Open to Feedback</span>
              </div>
            </div>
          </div>
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/srinime1806"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;