import React from 'react';
import { Download, MapPin, Mail, Briefcase, Calendar } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const infoItems = [
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Mail, label: 'Email', value: personalInfo.email },
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
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Software Engineer with 1+ year of experience at Infosys, including full-stack development with the MEAN stack during an internship
              and enterprise application development with AS400/RPGLE in a full-time role. Skilled in Angular, Node.js, Express.js, MongoDB, REST
              APIs, and JWT authentication, with working knowledge of Agile/SDLC practices. Seeking Full Stack Developer opportunities focused
              on MEAN/MERN technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-dark-100 rounded-xl p-6">
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-6 h-6 text-primary-500 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/Vaibhavi-Srivastava-Resume.pdf" download="Vaibhavi-Srivastava-Resume.pdf"
             className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
            <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          <div className="relative">
          <div className="bg-dark-100 border border-slate-700 rounded-2xl p-8 shadow-xl">

          <div className="mb-8">
           <p className="text-sm text-primary-500 font-semibold uppercase tracking-wider">
            My Journey
           </p>

            <h3 className="text-2xl font-bold text-white mt-2">
              From Learning to Building
            </h3>
          </div>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-700"></div>
            <div className="relative flex gap-5 pb-8">
              <div className="relative z-10 w-4 h-4 mt-1 rounded-full bg-primary-500 ring-4 ring-dark-100 flex-shrink-0"></div>
            <div>
              <span className="text-sm font-medium text-primary-500">
               2025
              </span>
             <h4 className="text-lg font-semibold text-white mt-1">
               MEAN Stack Internship
             </h4>
             <p className="text-sm text-slate-400 mt-1 leading-relaxed">
              Built full-stack web applications and gained hands-on
              experience with modern development practices.
             </p>
            </div>
          </div>

            <div className="relative flex gap-5 pb-8">
             <div className="relative z-10 w-4 h-4 mt-1 rounded-full bg-primary-500 ring-4 ring-dark-100 flex-shrink-0"></div>
             <div>
               <span className="text-sm font-medium text-primary-500">
               2025
                </span>

                <h4 className="text-lg font-semibold text-white mt-1">
                   Joined Infosys
                </h4>

                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                  Began my professional journey working in an enterprise
                  development environment.
               </p>
              </div>
            </div>

              <div className="relative flex gap-5">
                <div className="relative z-10 w-4 h-4 mt-1 rounded-full bg-primary-500 ring-4 ring-dark-100 flex-shrink-0"></div>
                <div>
                  <span className="text-sm font-medium text-primary-500">
                    Present
                 </span>

                  <h4 className="text-lg font-semibold text-white mt-1">
                  Growing as a Full Stack Developer
                    </h4>

                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                   Continuously learning, building projects, and strengthening
                   my skills in modern web development.
                  </p>
                </div>
              </div>

        </div>
        </div>
       </div>       
          </div>
      </div>
    </section>
  );
};

export default About;