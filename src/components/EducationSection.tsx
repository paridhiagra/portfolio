import React from 'react';
import { BookOpen, Calendar, MapPin, School, GraduationCap, Award, Sparkles, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Academic Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f7f5fa] tracking-tight mb-2">
          Education
        </h2>
        <p className="text-sm text-[#a1a1aa] max-w-2xl">
          Academic foundation spanning higher secondary schooling to engineering graduation.
        </p>
      </div>

      {/* Main B.Tech Card with soft rose border */}
      <div className="pro-card p-6 sm:p-8 mb-6 border-pink-500/25 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-pink-500/10">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/30 mb-3">
              {education.degree}
            </div>

            <h3 className="text-2xl font-bold text-[#f7f5fa] mb-1">
              {education.institution}
            </h3>

            <p className="text-sm text-purple-300 font-medium">
              {education.branch}
            </p>
          </div>

          <div className="flex flex-col lg:items-end gap-1.5 text-xs text-[#a1a1aa]">
            <div className="flex items-center gap-1.5 text-[#f7f5fa] font-semibold">
              <Calendar className="w-3.5 h-3.5 text-pink-400" />
              <span>{education.timeline}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>{education.location}</span>
            </div>
          </div>
        </div>

        {/* Coursework */}
        <div className="pt-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#a1a1aa] mb-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-pink-400" />
            <span>Relevant Coursework &amp; Subject Areas</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="px-2.5 py-1 rounded-lg text-xs bg-[#181528] text-purple-200 border border-pink-500/10 hover:border-pink-500/30 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Schooling: 12th & 10th Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Class 12th */}
        <div className="pro-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#1b172c] text-pink-300 border border-pink-500/20">
                Class 12th • 73.3%
              </span>
              <span className="text-xs text-[#a1a1aa]">2022 — 2023</span>
            </div>

            <h3 className="text-lg font-bold text-[#f7f5fa] mb-1">
              SSD Educational Academy
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-emerald-400">CBSE Board</span>
              <span className="text-xs text-[#817c91]">• Mainpuri, Uttar Pradesh</span>
            </div>

            <p className="text-xs text-[#c9c4d4] leading-relaxed">
              Senior secondary education completed with 73.3% under CBSE Board with focus on science, mathematics, and problem solving.
            </p>
          </div>
        </div>

        {/* Class 10th */}
        <div className="pro-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#1b172c] text-purple-300 border border-purple-500/20">
                Class 10th • 92.3%
              </span>
              <span className="text-xs text-[#a1a1aa]">2020 — 2021</span>
            </div>

            <h3 className="text-lg font-bold text-[#f7f5fa] mb-1">
              Baba International School
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-emerald-400">CBSE Board</span>
              <span className="text-xs text-[#817c91]">• Mainpuri, Uttar Pradesh</span>
            </div>

            <p className="text-xs text-[#c9c4d4] leading-relaxed">
              Secondary school certificate completed under CBSE curriculum with 92.3% aggregate distinction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
