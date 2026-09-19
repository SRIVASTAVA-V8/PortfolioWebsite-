import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const roles = ['Software Developer', 'Full Stack Engineer', 'Problem Solver'];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const period = 2000;

  useEffect(() => {
    const currentRole = roles[loopNum % roles.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.substring(0, text.length + 1);
        setText(nextText);

        if (nextText === currentRole) {
          setTimeout(() => setIsDeleting(true), period);
        }
        return;
      }

      if (text.length > 0) {
        setText(currentRole.substring(0, text.length - 1));
        return;
      }

      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
    }, isDeleting ? 80 : 130);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.location.hash = 'contact';
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.location.hash = 'projects';
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com', label: 'Twitter' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-slide-in">
            <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-primary-500">Available for work</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-4xl font-mono mb-6 h-12 sm:h-16">
            <span className="text-secondary-500">&gt; </span>
            <span className="text-primary-500">{text}</span>
            <span className="animate-pulse">_</span>
          </div>

          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg mb-8 animate-slide-up px-2" style={{ animationDelay: '0.1s' }}>
            {personalInfo.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 get-in-touch-btn"
              type="button"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToProjects}
              className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 px-8 py-3 rounded-lg font-semibold transition-all view-work-btn"
              type="button"
            >
              View Work
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 animate-slide-up px-4" style={{ animationDelay: '0.8s' }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

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