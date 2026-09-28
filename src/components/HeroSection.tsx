import React from 'react';
import {
  ArrowRight,
  Github,
  MapPin,
  GraduationCap,
  Building2,
  Sparkles,
  Heart,
  Coffee,
  Code2,
  Cpu,
  Brain,
  Database,
  Radio,
  Layers,
  Mail,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28 min-h-[88vh] flex items-center overflow-hidden">
      {/* Background Animated Floating Glow Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-pink-500/10 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/10 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Centered content container: 1200–1280px */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN (~55%) ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Girlish Eyebrow with Sparkle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-medium w-fit mb-5 shadow-sm shadow-pink-500/10 hover:border-pink-500/50 transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin-slow" />
              <span>ECE Student • Developer • Problem Solver</span>
            </div>

            {/* Large Heading with Gradient Text */}
            <div className="mb-3">
              <p className="text-sm sm:text-base text-pink-300/80 font-medium tracking-wide mb-1 flex items-center gap-2">
                <span>Hi, I&apos;m</span>
                <span className="inline-block animate-bounce">✨</span>
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] shimmer-text">
                {PORTFOLIO_DATA.personal.name}
              </h1>
            </div>

            {/* Sub-headline */}
            <h2 className="text-lg sm:text-xl font-semibold text-purple-300 mb-5 flex items-center gap-2">
              <span>Electronics &amp; Communication Engineering Student</span>
            </h2>

            {/* Clean Description */}
            <p className="text-base text-[#d4d0dc] max-w-xl leading-relaxed mb-8">
              I build practical solutions using software, data, AI, and intelligent systems. I love turning complex logic into aesthetic, high-impact digital experiences.
            </p>

            {/* Action Buttons: View Projects & GitHub */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:scale-95 transition-all shadow-md shadow-pink-500/25 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-[#f7f5fa] hover:text-white bg-[#181528] hover:bg-[#221e38] border border-pink-500/20 hover:border-pink-500/50 hover:shadow-md hover:shadow-pink-500/10 active:scale-95 transition-all cursor-pointer"
              >
                <Github className="w-4 h-4 text-pink-300" />
                <span>GitHub</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-[#a1a1aa] hover:text-pink-300 hover:bg-[#181528] border border-transparent hover:border-pink-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-pink-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Small Personal Information Row */}
            <div className="pt-6 border-t border-pink-500/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#a1a1aa]">
              <div className="flex items-center gap-1.5 hover:text-pink-300 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                <span>Kanpur, India</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-purple-300 transition-colors">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                <span>B.Tech ECE (2023–27)</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>PSIT Kanpur</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (~45%) with Dynamic Animated Cards & Floating Badges ================= */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative">
            
            {/* Animated Floating Badges around the cards (Cute & Technical) */}
            <div className="hidden sm:flex absolute -top-5 -left-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181528]/90 border border-pink-500/30 backdrop-blur-md shadow-lg shadow-pink-500/15 animate-float-slow text-[11px] font-medium text-pink-300">
              <Brain className="w-3.5 h-3.5 text-pink-400" />
              <span>AI &amp; Smart Models</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-4 -left-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181528]/90 border border-purple-500/30 backdrop-blur-md shadow-lg shadow-purple-500/15 animate-float-reverse text-[11px] font-medium text-purple-300" style={{ animationDelay: '1s' }}>
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>Embedded Hardware</span>
            </div>

            <div className="w-full max-w-md space-y-4 relative">
              
              {/* Profile Card with floating hover effect & glowing border */}
              <div className="pro-card p-6 sm:p-7 relative overflow-hidden group hover:shadow-xl hover:shadow-pink-500/15 transition-all">
                {/* Subtle rotating background ring */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full border border-dashed border-pink-500/20 animate-spin-slow pointer-events-none" />

                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    {/* Animated Monogram Avatar */}
                    <div className="relative group/avatar">
                      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 opacity-70 blur group-hover/avatar:opacity-100 transition duration-300 animate-pulse-glow" />
                      <div className="relative w-13 h-13 rounded-2xl bg-[#13111e] p-[2px]">
                        <div className="w-full h-full bg-[#13111e] rounded-2xl flex items-center justify-center font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-200">
                          PA
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-bold text-[#f7f5fa]">
                          Paridhi Agrawal
                        </h3>
                        <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400 animate-pulse" />
                      </div>
                      <p className="text-xs text-pink-300/80 font-medium">
                        ECE • AI • Data
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-500/30 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Open to Roles
                  </span>
                </div>

                <p className="text-xs text-[#c9c4d4] leading-relaxed mb-4">
                  Passionate engineering student crafting thoughtful software, intelligent models, and clean electronics hardware.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {['C++', 'Python', 'React', 'SQL', 'Embedded IoT', 'Machine Learning'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#1a172c] text-purple-200 border border-pink-500/15 hover:border-pink-500/40 hover:scale-105 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Aesthetic Code Card with typing shine and coffee badge */}
              <div className="pro-card p-5 font-mono text-xs text-[#a1a1aa] bg-[#0f0d19] border border-pink-500/20 hover:border-pink-500/40 transition-colors">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-pink-500/15">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-400/80 animate-pulse" />
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="text-[11px] text-pink-300/70 ml-2">paridhi.ts</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-pink-400/80 font-sans">
                    <Coffee className="w-3 h-3 animate-bounce" />
                    <span>code &amp; create</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p>
                    <span className="text-pink-400 font-semibold">const</span>{' '}
                    <span className="text-[#f7f5fa]">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-rose-300">&quot;Paridhi Agrawal&quot;</span>,
                  </p>
                  <p className="pl-4">
                    passions: [<span className="text-pink-300">&quot;AI&quot;</span>, <span className="text-purple-300">&quot;Data&quot;</span>, <span className="text-rose-300">&quot;Web&quot;</span>, <span className="text-cyan-300">&quot;IoT&quot;</span>],
                  </p>
                  <p className="pl-4">
                    education: <span className="text-purple-300">&quot;B.Tech ECE, PSIT Kanpur&quot;</span>,
                  </p>
                  <p className="pl-4">
                    mindset: <span className="text-amber-300">&quot;Curious, creative &amp; driven ✨&quot;</span>
                  </p>
                  <p>&#125;;</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
