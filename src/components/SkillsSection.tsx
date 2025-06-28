import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Zap } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'frontend',
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "HTML/CSS" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" }
      ]
    },
    {
      id: 'backend',
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Python" },
       
      ]
    },
    {
      id: 'database',
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MySQL" },
       
      ]
    },
    {
      id: 'tools',
      title: "Tools & Technologies",
      icon: <Zap className="w-6 h-6" />,
      skills: [
        { name: "Git & GitHub" },
        { name: "VS Code" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Technologies I've learned and worked with during my studies and personal projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r from-blue-500 to-purple-600 text-white`
                  : `bg-gray-700 text-gray-300`
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories
            .filter(category => !activeCategory || category.id === activeCategory)
            .map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="px-4 py-2 bg-gray-700 rounded-full text-sm text-white/80"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
