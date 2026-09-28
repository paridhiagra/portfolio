import React from 'react';
import { Github, Code2, Terminal, ExternalLink, Linkedin, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ProfilesSection: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <Github className="w-5 h-5 text-pink-400" />;
      case 'LeetCode':
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'HackerRank':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-pink-400" />;
    }
  };

  const allProfiles = [
    ...PORTFOLIO_DATA.profiles,
    {
      platform: 'LinkedIn',
      handle: PORTFOLIO_DATA.personal.linkedinHandle,
      url: PORTFOLIO_DATA.personal.linkedin,
      icon: 'Linkedin',
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Platforms &amp; Repositories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f7f5fa] tracking-tight mb-2">
          Code • Build • Learn
        </h2>
        <p className="text-sm text-[#a1a1aa] max-w-2xl">
          Verified profiles across open-source code repositories, competitive programming platforms, and professional networks.
        </p>
      </div>

      {/* 4 Clean Columns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {allProfiles.map((profile) => (
          <div
            key={profile.platform}
            className="pro-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-pink-500/15 to-purple-500/15 border border-pink-500/20 flex items-center justify-center">
                  {getIcon(profile.platform)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#f7f5fa]">
                    {profile.platform}
                  </h3>
                  <p className="text-xs text-pink-300/70 font-mono">
                    {profile.handle}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2.5 px-3 rounded-xl text-xs font-medium text-[#f7f5fa] hover:text-white bg-[#181528] hover:bg-[#221e38] border border-pink-500/20 hover:border-pink-500/40 flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-pink-300" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
