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
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-2">
          {Object.entries(categories).map(([key, { name, icon: Icon }]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5 ${
                activeCategory === key
                  ? 'border-primary-500 bg-primary-500/10 text-primary-500 shadow-lg shadow-primary-500/10'
                  : 'border-white/10 bg-dark-100/80 text-gray-300 hover:border-primary-500/40 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-dark-100/80 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-500/40 hover:bg-dark-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-500/30 bg-primary-500/10 text-[10px] font-bold uppercase tracking-widest text-primary-500">
                  {skill.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-white sm:text-base">{skill.name}</h3>
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