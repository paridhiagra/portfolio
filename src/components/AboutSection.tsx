import React from 'react';
import { GraduationCap, Terminal, MapPin, Target, Sparkles, HeartHandshake } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Two-Column Clean Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Story &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f7f5fa] tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            A snapshot of my engineering background, current focus areas, and what drives my work every single day.
          </p>
        </div>

        {/* Right Column: Natural Personal Introduction */}
        <div className="lg:col-span-8 space-y-8">
          <div className="pro-card p-6 sm:p-8 relative">
            <p className="text-base sm:text-lg text-[#f7f5fa] leading-relaxed mb-4">
              I am an <strong className="text-pink-300 font-semibold">Electronics &amp; Communication Engineering student</strong> at PSIT Kanpur with a genuine passion for software engineering, intelligent systems, and user-centric design.
            </p>
            <p className="text-sm sm:text-base text-[#c9c4d4] leading-relaxed mb-4">
              My work combines clean code, artificial intelligence, data analytics, and embedded hardware to build practical, aesthetic solutions that solve everyday problems.
            </p>
            <p className="text-sm sm:text-base text-[#c9c4d4] leading-relaxed">
              Whether I&apos;m building machine learning pipelines, crafting responsive frontends, designing electronic circuits with microcontrollers, or practicing DSA and SQL, I love the process of learning by doing and building things people love to use.
            </p>
          </div>

          {/* 4 Clean Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="pro-card-secondary p-5 border border-pink-500/15 hover:border-pink-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#f7f5fa] uppercase tracking-wide">
                  Education
                </span>
              </div>
              <p className="text-sm font-medium text-[#f7f5fa]">
                B.Tech in Electronics &amp; Communication
              </p>
              <p className="text-xs text-pink-300/70 mt-0.5">
                PSIT Kanpur • 2023 — 2027
              </p>
            </div>

            <div className="pro-card-secondary p-5 border border-purple-500/15 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#f7f5fa] uppercase tracking-wide">
                  Core Focus
                </span>
              </div>
              <p className="text-sm font-medium text-[#f7f5fa]">
                Software, AI &amp; Intelligent Systems
              </p>
              <p className="text-xs text-purple-300/70 mt-0.5">
                Full-stack web, data &amp; physical computing
              </p>
            </div>

            <div className="pro-card-secondary p-5 border border-rose-500/15 hover:border-rose-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#f7f5fa] uppercase tracking-wide">
                  Location
                </span>
              </div>
              <p className="text-sm font-medium text-[#f7f5fa]">
                Kanpur, Uttar Pradesh, India
              </p>
              <p className="text-xs text-rose-300/70 mt-0.5">
                Open to remote internships &amp; on-site roles
              </p>
            </div>

            <div className="pro-card-secondary p-5 border border-emerald-500/15 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#f7f5fa] uppercase tracking-wide">
                  Currently Learning
                </span>
              </div>
              <p className="text-sm font-medium text-[#f7f5fa]">
                DSA • Advanced SQL • ML • AWS
              </p>
              <p className="text-xs text-emerald-300/70 mt-0.5">
                Continuous practice &amp; exploration
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
