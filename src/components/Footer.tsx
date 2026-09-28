import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-pink-500/15 bg-[#0b0a12] py-8 text-xs text-[#a1a1aa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#f7f5fa]">{PORTFOLIO_DATA.personal.name}</span>
          <span>•</span>
          <span className="text-pink-300/80">ECE • AI • Data</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-pink-400">
            <span>Built with care</span>
            <Heart className="w-3 h-3 fill-pink-400 text-pink-400" />
          </span>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-6 font-medium">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="hover:text-pink-300 transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right Copyright */}
        <div className="text-[#817c91]">
          &copy; {new Date().getFullYear()} Paridhi Agrawal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
