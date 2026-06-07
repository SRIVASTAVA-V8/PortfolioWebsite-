import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-300/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <Code2 className="w-8 h-8 text-primary-500 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-xl font-bold">
              <span className="text-primary-500">&lt;</span>
              <span className="text-white">VS</span>
              <span className="text-primary-500">/&gt;</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 relative group ${
                  activeSection === item ? 'text-primary-500' : 'text-gray-300 hover:text-primary-500'
                }`}
              >
                <span className="text-primary-500 mr-1 text-sm">
                  {String(navItems.indexOf(item) + 1).padStart(2, '0')}.
                </span>
                {item}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 transform origin-left transition-transform duration-300 ${
                  activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left capitalize py-2 px-4 rounded-lg transition-all ${
                  activeSection === item 
                    ? 'bg-primary-500/10 text-primary-500' 
                    : 'text-gray-300 hover:bg-dark-100'
                }`}
              >
                <span className="text-primary-500 mr-2">
                  {String(navItems.indexOf(item) + 1).padStart(2, '0')}.
                </span>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;