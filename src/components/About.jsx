import React from 'react';
import { Download, MapPin, Mail, Phone, Briefcase, Calendar } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const infoItems = [
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Mail, label: 'Email', value: personalInfo.email },
    // { icon: Phone, label: 'Phone', value: personalInfo.phone },
    { icon: Briefcase, label: 'Experience', value: personalInfo.experience },
    { icon: Calendar, label: 'Availability', value: personalInfo.availability },
  ];

  return (
    <section id="about" className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate software developer with a strong foundation in modern web technologies. 
              My journey in tech started 1 year ago, and since then, I've been dedicated to crafting 
              elegant solutions to complex problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and continuously learning new technologies. 
              When I'm not coding, you can find me contributing to open source, mentoring junior developers, 
              or exploring the latest tech trends.
            </p>
            
            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-dark-100 rounded-xl p-6">
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Button */}
            <button className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="relative bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl overflow-hidden">
              <div className="aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4 animate-bounce">👨‍💻</div>
                  <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-white/80">{personalInfo.role}</p>
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-dark-100 rounded-lg p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-mono">Open for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;