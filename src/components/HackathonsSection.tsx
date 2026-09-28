import React from 'react';
import { Trophy, Users, Palette, Sparkles, Paintbrush, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HackathonsSection: React.FC = () => {
  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'HACKATHON':
        return <Trophy className="w-3.5 h-3.5 text-purple-400" />;
      case 'CREATIVE EXCELLENCE':
        return <Paintbrush className="w-3.5 h-3.5 text-pink-400" />;
      case 'PROFESSIONAL BODY':
        return <Users className="w-3.5 h-3.5 text-cyan-400" />;
      case 'LEADERSHIP':
        return <Palette className="w-3.5 h-3.5 text-rose-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-pink-400" />;
    }
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Leadership &amp; Community</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f7f5fa] tracking-tight mb-2">
          Hackathons &amp; Activities
        </h2>
        <p className="text-sm text-[#a1a1aa] max-w-2xl">
          Collaborative problem solving, design leadership, creative arts, and professional technical involvement.
        </p>
      </div>

      {/* Grid: 4 clean cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PORTFOLIO_DATA.activities.map((item) => (
          <div
            key={item.id}
            className="pro-card p-6 flex flex-col justify-between"
          >
            <div>
              {/* Header row */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1.5 text-xs font-medium text-pink-300">
                  {getBadgeIcon(item.badge)}
                  <span>{item.badge}</span>
                </div>
                <span className="text-xs text-[#817c91]">
                  {item.dateOrYear}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#f7f5fa] mb-1">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-xs text-pink-400 font-medium mb-3">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs text-[#c9c4d4] leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            {/* Bottom Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-pink-500/10">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md text-[11px] bg-[#181528] text-purple-200 border border-pink-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
