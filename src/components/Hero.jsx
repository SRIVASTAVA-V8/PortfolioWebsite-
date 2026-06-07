import React, { useState, useEffect } from 'react';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const roles = ['Software Developer', 'Full Stack Engineer', 'Problem Solver'];
  const period = 2000;

  useEffect(() => {
    const timer = setTimeout(() => {
      tick();
    }, 100);
    return () => clearTimeout(timer);
  }, [text]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);
    
    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  // METHOD 1: Direct DOM manipulation with multiple approaches
  const scrollToContact = () => {
    console.log("=== SCROLL TO CONTACT CALLED ===");
    
    // Approach 1: Get element by ID
    let element = document.getElementById('contact');
    
    // Approach 2: If not found, try querySelector
    if (!element) {
      element = document.querySelector('#contact');
    }
    
    // Approach 3: If still not found, try finding any section with contact in ID
    if (!element) {
      element = document.querySelector('section[id*="contact" i]');
    }
    
    if (element) {
      console.log("Found contact element, scrolling now...");
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    } else {
      console.error("Could not find contact element");
      // Emergency fallback: use window.location
      window.location.hash = 'contact';
    }
  };

  const scrollToProjects = () => {
    console.log("=== SCROLL TO PROJECTS CALLED ===");
    
    // Approach 1: Get element by ID
    let element = document.getElementById('projects');
    
    // Approach 2: If not found, try querySelector
    if (!element) {
      element = document.querySelector('#projects');
    }
    
    // Approach 3: If still not found, try finding any section with projects in ID
    if (!element) {
      element = document.querySelector('section[id*="project" i]');
    }
    
    if (element) {
      console.log("Found projects element, scrolling now...");
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    } else {
      console.error("Could not find projects element");
      // Emergency fallback: use window.location
      window.location.hash = 'projects';
    }
  };

  // Check if sections exist when component mounts
  useEffect(() => {
    console.log("Hero mounted - checking for sections:");
    console.log("Contact section exists:", !!document.getElementById('contact'));
    console.log("Projects section exists:", !!document.getElementById('projects'));
    
    // Log all section IDs for debugging
    const sections = document.querySelectorAll('section[id]');
    console.log("All sections found:", Array.from(sections).map(s => s.id));
    
    // Test if buttons are being rendered
    const getInTouchBtn = document.querySelector('.get-in-touch-btn');
    const viewWorkBtn = document.querySelector('.view-work-btn');
    console.log("Get In Touch button in DOM:", !!getInTouchBtn);
    console.log("View Work button in DOM:", !!viewWorkBtn);
  }, []);

  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative  pt-16">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-500/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-slide-in">
            <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-primary-500">Available for work</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Animated Role */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-mono mb-6 h-16">
            <span className="text-secondary-500">&gt; </span>
            <span className="text-primary-500">{text}</span>
            <span className="animate-pulse">_</span>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {personalInfo.bio}
          </p>

          {/* CTA Buttons - Added explicit classes and inline onClick */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {<button 
              onClick={(e) => {
                e.preventDefault();
                console.log("Get In Touch button clicked directly");
                scrollToContact();
              }}
              className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 get-in-touch-btn"
              type="button"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            }
            <button 
              onClick={(e) => {
                e.preventDefault();
                console.log("View Work button clicked directly");
                scrollToProjects();
              }}
              className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 px-8 py-3 rounded-lg font-semibold transition-all view-work-btn"
              type="button"
            >
              View Work
            </button>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {personalInfo.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div> */}

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
              <FiGithub className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
              <FiTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-400 text-sm">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;