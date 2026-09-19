import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { FiGithub, FiLinkedin} from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { useForm } from '@formspree/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [state, handleSubmit] = useForm('xdekkqjq');
  const contactMethods = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/SRIVASTAVA-V8', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/vaibhavi-srivastava-19126824a/', label: 'LinkedIn' }
  ];

 
   useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  }, [state.succeeded]);
  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value, }); };

 const handleFormSubmit = (e) => {
  e.preventDefault();
  handleSubmit(formData);
};

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's work together!</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm currently available for freelance work or full-time positions.
                Feel free to reach out if you have any questions or just want to connect!
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-3 p-4 bg-dark-100 rounded-xl sm:flex-row sm:items-center sm:gap-4"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <method.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-400">{method.label}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="font-medium hover:text-primary-500 transition-colors break-all"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="font-medium break-words">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 sm:w-10 sm:h-10 bg-dark-100 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="w-full space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-100 border border-dark-100 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-100 border border-dark-100 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-base"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-100 border border-dark-100 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-base"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-100 border border-dark-100 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none text-base"
            ></textarea>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {state.submitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {state.succeeded && (
              <div className="flex items-center gap-2 text-secondary-500 bg-secondary-500/10 p-3 rounded-lg animate-slide-up">
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {state.errors && (
              <div className="text-red-400 bg-red-500/10 p-3 rounded-lg">
                Something went wrong while sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;