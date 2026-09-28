import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'education', 'certifications', 'resume', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0b0a12]/90 backdrop-blur-md border-b border-pink-500/15 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Brand: Girlish, Elegant & Personal */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-60 blur-xs group-hover:opacity-100 transition duration-300 animate-pulse-glow" />
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform">
                PA
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-[#f7f5fa] tracking-tight group-hover:text-pink-300 transition-colors flex items-center gap-1.5">
                {PORTFOLIO_DATA.personal.name}
                <Sparkles className="w-3.5 h-3.5 text-pink-400 group-hover:rotate-45 transition-transform duration-300" />
              </span>
              <span className="text-[11px] text-pink-300/80 font-medium tracking-wide">
                ECE • AI • Data Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  activeSection === link.id
                    ? 'text-pink-300 font-semibold'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-400 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action: Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.resumeDriveViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:scale-98 transition-all shadow-md shadow-pink-500/20 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={PORTFOLIO_DATA.personal.resumeDriveViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-500/30"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#a1a1aa] hover:text-white hover:bg-[#181528] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-pink-500/20 bg-[#13111e] rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                    activeSection === link.id
                      ? 'bg-pink-500/20 text-pink-300 font-semibold'
                      : 'text-[#a1a1aa] hover:bg-[#181528] hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-white/10">
                <a
                  href={PORTFOLIO_DATA.personal.resumeDriveViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
