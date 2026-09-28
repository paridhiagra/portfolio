import React, { useState } from 'react';
import { Award, CheckCircle2, Database, Cpu, Code2, BrainCircuit, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';

type ParticleShape = 'rect' | 'circle' | 'star' | 'ribbon';

interface ConfettiPiece {
  id: string;
  shape: ParticleShape;
  color: string;
  size: number;
  tx: number;
  ty: number;
  rot: number;
  duration: number;
  delay: number;
}

interface CardBurst {
  id: string;
  certId: string;
  originX: number;
  originY: number;
  particles: ConfettiPiece[];
}

// Portfolio-harmonious palette: pink, purple, violet, cyan, subtle white
const CONFETTI_COLORS = [
  '#f472b6', // pink-400
  '#ec4899', // pink-500
  '#c084fc', // purple-400
  '#a855f7', // purple-500
  '#8b5cf6', // violet-500
  '#22d3ee', // cyan-400
  '#fdf2f8', // subtle warm white
];

const SHAPES: ParticleShape[] = ['rect', 'circle', 'star', 'ribbon'];

export const CertificationsSection: React.FC = () => {
  const [bursts, setBursts] = useState<CardBurst[]>([]);

  const getCertIcon = (id: string) => {
    switch (id) {
      case 'cert-ml':
        return <BrainCircuit className="w-4 h-4 text-pink-400" />;
      case 'cert-sql':
        return <Database className="w-4 h-4 text-purple-400" />;
      case 'cert-vlsi':
        return <Cpu className="w-4 h-4 text-rose-400" />;
      case 'cert-web':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      default:
        return <Award className="w-4 h-4 text-pink-400" />;
    }
  };

  const triggerCelebration = (
    certId: string,
    e?: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    // Determine origin relative to the card container
    let originX = 150;
    let originY = 120;

    if (e && 'currentTarget' in e) {
      const rect = e.currentTarget.getBoundingClientRect();
      if ('clientX' in e && e.clientX !== 0) {
        originX = e.clientX - rect.left;
        originY = e.clientY - rect.top;
      } else if ('touches' in e && e.touches.length > 0) {
        originX = e.touches[0].clientX - rect.left;
        originY = e.touches[0].clientY - rect.top;
      } else {
        originX = rect.width / 2;
        originY = rect.height / 2;
      }
    }

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    // Mobile: 18-22 particles for clean perf; Desktop: 30-36 particles
    const particleCount = isMobile ? 20 : 34;

    const burstId = `burst-${Date.now()}-${Math.random()}`;
    const pieces: ConfettiPiece[] = [];

    for (let i = 0; i < particleCount; i++) {
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];

      // Trajectories: upward, diagonally left/right, and slight downward spread
      // Angle: mostly upward arc from -165deg to -15deg, with occasional lateral scatter
      const angleDeg = -170 + Math.random() * 160;
      const angleRad = (angleDeg * Math.PI) / 180;
      // Distance distance: 40px to 140px on mobile, 50px to 210px on desktop
      const distance = isMobile
        ? 35 + Math.random() * 95
        : 45 + Math.random() * 165;

      const tx = Math.cos(angleRad) * distance;
      const ty = Math.sin(angleRad) * distance;

      // Varied rotation from -360deg to +360deg
      const rot = (Math.random() - 0.5) * 680;
      // Varied duration between 750ms and 1150ms
      const duration = 0.75 + Math.random() * 0.4;
      // Staggered micro-delay 0 to 120ms
      const delay = Math.random() * 0.12;
      // Varied particle size
      const size = isMobile ? 4 + Math.random() * 4 : 5 + Math.random() * 6;

      pieces.push({
        id: `p-${i}-${Math.random()}`,
        shape,
        color,
        size,
        tx,
        ty,
        rot,
        duration,
        delay,
      });
    }

    const newBurst: CardBurst = {
      id: burstId,
      certId,
      originX,
      originY,
      particles: pieces,
    };

    setBursts((prev) => [...prev, newBurst]);

    // Automatically remove after 1200ms so no particles remain on the page
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== burstId));
    }, 1250);
  };

  const renderParticleShape = (piece: ConfettiPiece) => {
    switch (piece.shape) {
      case 'circle':
        return (
          <span
            style={{
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              borderRadius: '9999px',
              display: 'block',
            }}
          />
        );
      case 'star':
        return (
          <svg
            viewBox="0 0 24 24"
            style={{
              width: `${piece.size * 1.5}px`,
              height: `${piece.size * 1.5}px`,
              fill: piece.color,
              display: 'block',
            }}
          >
            <path d="M12 2l2.9 6.2 6.8.6-5.1 4.5 1.5 6.7L12 16.6l-6.1 3.4 1.5-6.7-5.1-4.5 6.8-.6L12 2z" />
          </svg>
        );
      case 'ribbon':
        return (
          <span
            style={{
              width: `${piece.size * 2.2}px`,
              height: `${piece.size * 0.65}px`,
              backgroundColor: piece.color,
              borderRadius: '2px',
              display: 'block',
            }}
          />
        );
      case 'rect':
      default:
        return (
          <span
            style={{
              width: `${piece.size * 1.4}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              borderRadius: '1.5px',
              display: 'block',
            }}
          />
        );
    }
  };

  return (
    <section id="certifications" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Verified Credentials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f7f5fa] tracking-tight mb-2">
          Certifications
        </h2>

        {/* Small centered instruction line below heading */}
        <p className="text-xs sm:text-sm text-[#9b94a8] font-normal flex items-center justify-center sm:justify-start gap-1.5">
          <span>✨ Click a certificate to celebrate the achievement!</span>
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PORTFOLIO_DATA.certifications.map((cert) => {
          // Filter all active bursts originating from this specific card
          const cardBursts = bursts.filter((b) => b.certId === cert.id);

          return (
            <div
              key={cert.id}
              role="button"
              tabIndex={0}
              aria-label={`Celebrate ${cert.title}`}
              onClick={(e) => triggerCelebration(cert.id, e)}
              onTouchStart={(e) => triggerCelebration(cert.id, e)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  triggerCelebration(cert.id);
                }
              }}
              className="pro-card p-6 flex flex-col justify-between relative cursor-pointer select-none"
            >
              {/* Confetti Celebration Bursts Originating Exactly From This Card */}
              {cardBursts.map((burst) => (
                <div
                  key={burst.id}
                  className="absolute pointer-events-none inset-0 overflow-visible z-30"
                  style={{
                    left: `${burst.originX}px`,
                    top: `${burst.originY}px`,
                    width: 0,
                    height: 0,
                  }}
                >
                  {burst.particles.map((piece) => (
                    <div
                      key={piece.id}
                      className="confetti-particle"
                      style={
                        {
                          '--tx': `${piece.tx}px`,
                          '--ty': `${piece.ty}px`,
                          '--rot': `${piece.rot}deg`,
                          animationDuration: `${piece.duration}s`,
                          animationDelay: `${piece.delay}s`,
                        } as React.CSSProperties
                      }
                    >
                      {renderParticleShape(piece)}
                    </div>
                  ))}
                </div>
              ))}

              <div className="relative z-10 pointer-events-none">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500/15 to-purple-500/15 border border-pink-500/25 flex items-center justify-center">
                    {getCertIcon(cert.id)}
                  </div>
                  <span className="text-xs text-pink-300/80 font-medium">{cert.year}</span>
                </div>

                <h3 className="text-base font-semibold text-[#f7f5fa] mb-1">
                  {cert.title}
                </h3>

                <p className="text-xs text-pink-400 font-medium mb-3">
                  {cert.issuer}
                </p>

                {cert.description && (
                  <p className="text-xs text-[#c9c4d4] leading-relaxed mb-4">
                    {cert.description}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-pink-500/10 flex items-center justify-between text-xs relative z-10 pointer-events-none">
                <span className="text-pink-400 font-semibold">
                  Verified Credential
                </span>
                <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
