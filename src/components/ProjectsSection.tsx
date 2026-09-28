import React from 'react';
import { Eye, Github, ExternalLink, Sprout, ShieldCheck, Radio, ShoppingCart, Terminal, Sparkles, BrainCircuit } from 'lucide-react';
import { Project, PORTFOLIO_DATA } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project, openDemoImmediately?: boolean) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-pink-400" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-purple-400" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-5 h-5 text-rose-400" />;
      default:
        return <Terminal className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Work Samples &amp; Code</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f7f5fa] tracking-tight mb-2">
          Featured Projects
        </h2>
        <p className="text-sm text-[#a1a1aa] max-w-2xl">
          Practical applications built to address real-world challenges in application privacy, cognitive knowledge graphs, robotics, and retail automation.
        </p>
      </div>

      {/* 2x2 Clean Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {PORTFOLIO_DATA.projects.map((project) => (
          <div
            key={project.id}
            className="pro-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              {/* Header row with Project Icon & Category */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-pink-500/15 to-purple-500/15 border border-pink-500/25 flex items-center justify-center shadow-sm">
                    {getProjectIcon(project.headerGraphic.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#f7f5fa] group-hover:text-pink-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[11px] text-pink-400 font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {project.headerGraphic.badge && (
                  <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#1b172c] text-purple-300 border border-purple-500/20">
                    {project.headerGraphic.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-[#c9c4d4] leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#181528] text-purple-200 border border-pink-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions: View Details, GitHub & Live Demo */}
            <div className="flex items-center gap-2.5 pt-4 border-t border-pink-500/10">
              <button
                onClick={() => onSelectProject(project, false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:scale-98 transition-all shadow-sm shadow-pink-500/20 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Details</span>
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-[#f7f5fa] hover:text-white bg-[#181528] hover:bg-[#221e38] border border-pink-500/20 transition-all"
              >
                <Github className="w-3.5 h-3.5 text-pink-300" />
                <span>GitHub</span>
              </a>

              {project.liveDemoUrl && (
                project.liveDemoUrl.startsWith('http') ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-emerald-300 hover:text-emerald-200 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-all ml-auto cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Demo ↗</span>
                  </a>
                ) : (
                  <button
                    onClick={() => onSelectProject(project, true)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-emerald-300 hover:text-emerald-200 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-all ml-auto cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Demo</span>
                  </button>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
