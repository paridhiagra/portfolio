import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeBannerProps {
  onOpenResume?: () => void;
}

export const ResumeBanner: React.FC<ResumeBannerProps> = () => {
  return (
    <section id="resume" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curriculum Vitae</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f7f5fa] tracking-tight mb-2">
          Resume
        </h2>
        <p className="text-sm text-[#a1a1aa] max-w-2xl">
          Comprehensive summary of education, embedded systems &amp; software projects, engineering toolchains, and verified certifications.
        </p>
      </div>

      <div className="pro-card p-6 sm:p-10 relative overflow-hidden border-pink-500/25">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Details */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/30">
                Google Drive Resume
              </span>
              <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Updated 2026
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-[#f7f5fa]">
              {PORTFOLIO_DATA.personal.name} — ECE Undergrad
            </h3>

            <p className="text-sm text-[#c9c4d4] leading-relaxed mb-5 max-w-2xl">
              Electronics Communication Engineering student at PSIT Kanpur (CGPA: 7.37) with hands-on experience in embedded systems, microcontrollers (Arduino, ESP32, Raspberry Pi), IoT, and hardware-software integration.
            </p>

            {/* Quick Resume Badges */}
            <div className="flex flex-wrap gap-2 text-xs text-[#ded9e8] mb-6">
              <span className="px-2.5 py-1 rounded-lg bg-[#181528] border border-pink-500/15">
                🎓 PSIT Kanpur (CGPA: 7.37)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#181528] border border-pink-500/15">
                ⚡ GestraBot &amp; Gesture Robot Car
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#181528] border border-pink-500/15">
                🛒 Smart Trolley (RFID)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#181528] border border-pink-500/15">
                📜 Simplilearn VLSI &amp; Cisco Python
              </span>
            </div>

            {/* Action */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.resumeDriveViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:scale-98 transition-all shadow-md shadow-pink-500/25 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Right Paper Thumbnail Mockup */}
          <div className="lg:col-span-4 flex justify-center">
            <a
              href={PORTFOLIO_DATA.personal.resumeDriveViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-[260px] aspect-[1/1.38] bg-[#0c0a15] rounded-xl border border-pink-500/30 p-4 shadow-xl hover:border-pink-500/60 hover:shadow-pink-500/20 transition-all cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Paper Header */}
              <div className="border-b border-pink-500/20 pb-2 text-center">
                <div className="text-xs font-bold text-white tracking-wide uppercase">
                  Paridhi Agrawal
                </div>
                <div className="text-[9px] text-[#a1a1aa] truncate mt-0.5">
                  +91 7454920347 • {PORTFOLIO_DATA.personal.email}
                </div>
              </div>

              {/* Tiny Mockup Lines */}
              <div className="space-y-2 py-2 opacity-80 group-hover:opacity-100 transition-opacity">
                <div>
                  <div className="h-1.5 w-16 bg-pink-400/80 rounded mb-1" />
                  <div className="h-1 w-full bg-white/15 rounded mb-0.5" />
                  <div className="h-1 w-4/5 bg-white/15 rounded" />
                </div>
                <div>
                  <div className="h-1.5 w-14 bg-pink-400/80 rounded mb-1" />
                  <div className="h-1 w-full bg-white/15 rounded mb-0.5" />
                  <div className="h-1 w-3/4 bg-white/15 rounded" />
                </div>
                <div>
                  <div className="h-1.5 w-12 bg-pink-400/80 rounded mb-1" />
                  <div className="h-1 w-full bg-white/15 rounded mb-0.5" />
                  <div className="h-1 w-5/6 bg-white/15 rounded" />
                </div>
              </div>

              {/* View Overlay on Hover */}
              <div className="pt-2 border-t border-pink-500/20 flex items-center justify-between text-[11px] text-pink-300 font-semibold group-hover:text-white transition-colors">
                <span>View Google Drive Resume</span>
                <ExternalLink className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
