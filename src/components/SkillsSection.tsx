import React, { useState } from 'react';
import { Code2, Globe, Cpu, CircuitBoard, Wrench, Sparkles, Search, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4 text-pink-400" />,
  Globe: <Globe className="w-4 h-4 text-purple-400" />,
  Cpu: <Cpu className="w-4 h-4 text-rose-400" />,
  CircuitBoard: <CircuitBoard className="w-4 h-4 text-emerald-400" />,
  Wrench: <Wrench className="w-4 h-4 text-amber-400" />,
  Sparkles: <Sparkles className="w-4 h-4 text-pink-400" />,
};

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'programming', label: 'Programming' },
    { id: 'web-dev', label: 'Web Dev' },
    { id: 'data-ai', label: 'Data & AI' },
    { id: 'embedded', label: 'Embedded & IoT' },
    { id: 'tools', label: 'Tools' },
    { id: 'learning-skills', label: 'Learning' },
  ];

  const filteredSkills = PORTFOLIO_DATA.skills.filter((category) => {
    const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;
    const matchesSearch =
      searchTerm.trim() === '' ||
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f7f5fa] tracking-tight mb-2">
            Technical Skills
          </h2>
          <p className="text-sm text-[#a1a1aa] max-w-2xl">
            Practical competencies developed across academic coursework, projects, and personal exploration.
          </p>
        </div>

        {/* Clean Search Input with subtle pink focus */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-pink-400/60" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search skills (e.g., Python, React)..."
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-[#13111e] border border-pink-500/20 text-[#f7f5fa] placeholder-[#817c91] focus:outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/30 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-sm shadow-pink-500/20'
                : 'bg-[#181528] text-[#c9c4d4] hover:text-white hover:bg-[#221e38] border border-pink-500/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3x2 Clean Grid of Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((category) => (
          <div
            key={category.id}
            className="pro-card p-6 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500/15 to-purple-500/15 border border-pink-500/25 flex items-center justify-center">
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="text-base font-semibold text-[#f7f5fa]">
                    {category.title}
                  </h3>
                </div>
                <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#1b172c] text-pink-300 border border-pink-500/20">
                  {category.badge}
                </span>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {category.skills.map((skill) => {
                  const isHighlighted =
                    searchTerm.trim() !== '' &&
                    skill.toLowerCase().includes(searchTerm.toLowerCase());
                  return (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        isHighlighted
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-sm'
                          : 'bg-[#1a172a] text-[#ded9e8] border border-pink-500/10 hover:border-pink-500/30'
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Description note */}
            <div className="pt-3 border-t border-pink-500/10 text-xs text-[#a1a1aa] flex items-center justify-between">
              <span>{category.footer}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
