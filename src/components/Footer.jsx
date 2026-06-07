import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = ['home', 'about', 'skills', 'projects', 'contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-200 border-t border-dark-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold">
                <span className="text-primary-500">&lt;</span>
                <span className="text-white">VS</span>
                <span className="text-primary-500">/&gt;</span>
              </span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            {footerLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="capitalize text-gray-400 hover:text-primary-500 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-gray-400">
              &copy; {currentYear} Vaibhavi Srivastava. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;