import React, { useState } from 'react';
import { skills } from '../data/portfolioData';
import { Code2, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const categories = {
    frontend: { name: 'Frontend', icon: Code2, data: skills.frontend },
    backend: { name: 'Backend', icon: Server, data: skills.backend },
    tools: { name: 'Tools', icon: Wrench, data: skills.tools }
  };

  const currentSkills = categories[activeCategory].data;

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, { name, icon: Icon }]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${
                activeCategory === key
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-dark-100 text-gray-400 hover:bg-primary-500/20'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-100 rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <span className="text-primary-500 font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-dark-300 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="w-full h-full bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Always learning and exploring new technologies to stay ahead of the curve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;