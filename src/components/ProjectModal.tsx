import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Cpu,
  Layers,
  Sparkles,
  Play,
  CheckCircle,
  AlertTriangle,
  Radio,
  ShoppingCart,
  ShieldCheck,
  BrainCircuit,
  Network,
  Plus,
  Trash2,
  Heart,
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  initialTab?: 'overview' | 'simulator';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  initialTab = 'overview',
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator'>(initialTab);

  // MindMesh AI Simulator State
  const [meshNodes, setMeshNodes] = useState<string[]>([
    'Neural Networks',
    'Cognitive Architectures',
    'Vector Embeddings',
    'Semantic Synthesis',
  ]);
  const [newConcept, setNewConcept] = useState('');
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [synthesisResult, setSynthesisResult] = useState<string | null>(
    'Synthesized Connection: Neural embeddings bridge cognitive concepts through semantic vector proximity, enabling cross-domain inference.'
  );

  // Veilix Simulator State
  const [selectedPerms, setSelectedPerms] = useState<string[]>([
    'ACCESS_FINE_LOCATION',
    'READ_SMS',
    'RECORD_AUDIO',
  ]);

  // Gesture Robot Simulator State
  const [robotDirection, setRobotDirection] = useState<'STOP' | 'FORWARD' | 'REVERSE' | 'LEFT' | 'RIGHT'>('STOP');
  const [motorPwm, setMotorPwm] = useState(0);

  // Smart Trolley Simulator State
  const [trolleyItems, setTrolleyItems] = useState<Array<{ id: string; name: string; rfid: string; price: number }>>([
    { id: '1', name: 'Almond Milk (1L)', rfid: 'TAG_0x4A19', price: 3.5 },
    { id: '2', name: 'Artisan Bread', rfid: 'TAG_0x8C33', price: 2.25 },
  ]);

  if (!project) return null;

  // MindMesh Add Concept
  const handleAddMeshNode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newConcept.trim()) return;
    if (!meshNodes.includes(newConcept.trim())) {
      setMeshNodes([...meshNodes, newConcept.trim()]);
    }
    setNewConcept('');
  };

  const handleSynthesizeMesh = () => {
    setIsSynthesizing(true);
    setTimeout(() => {
      setIsSynthesizing(false);
      setSynthesisResult(
        `MindMesh Engine analyzed ${meshNodes.length} active nodes. Established 6 high-density relational vectors across concepts with 94.2% semantic coherence.`
      );
    }, 600);
  };

  // Veilix Risk Calculation
  const permRisks: Record<string, { weight: number; desc: string }> = {
    ACCESS_FINE_LOCATION: { weight: 30, desc: 'Tracks precise GPS geocoordinates in background' },
    READ_SMS: { weight: 35, desc: 'Can intercept 2FA OTP codes & private communications' },
    RECORD_AUDIO: { weight: 25, desc: 'Can capture ambient acoustic environment without UI indicator' },
    CAMERA: { weight: 20, desc: 'Full image and video stream sensor ingestion' },
    SYSTEM_ALERT_WINDOW: { weight: 15, desc: 'Can overlay dialogs over banking and credential apps' },
  };

  const calculateVeilixScore = () => {
    const total = selectedPerms.reduce((acc, p) => acc + (permRisks[p]?.weight || 0), 0);
    return Math.min(total, 100);
  };

  // Robot Command
  const handleRobotCommand = (dir: 'STOP' | 'FORWARD' | 'REVERSE' | 'LEFT' | 'RIGHT', pwm: number) => {
    setRobotDirection(dir);
    setMotorPwm(pwm);
  };

  // Trolley Scan
  const availableRfidProducts = [
    { name: 'Organic Olive Oil', rfid: 'TAG_0xE711', price: 8.99 },
    { name: 'Dark Roast Coffee', rfid: 'TAG_0x228B', price: 6.5 },
    { name: 'Rolled Oats (500g)', rfid: 'TAG_0x991C', price: 1.85 },
  ];

  const handleScanProduct = (prod: { name: string; rfid: string; price: number }) => {
    setTrolleyItems((prev) => [...prev, { ...prod, id: Math.random().toString() }]);
  };

  const handleRemoveProduct = (id: string) => {
    setTrolleyItems((prev) => prev.filter((item) => item.id !== id));
  };

  const trolleyTotal = trolleyItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#13111e] border border-pink-500/25 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-pink-500/15 bg-[#181528]/80">
          <div>
            <span className="text-[11px] font-semibold text-pink-400">
              {project.category}
            </span>
            <h2 className="text-xl font-bold text-[#f7f5fa]">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {project.liveDemoUrl && project.liveDemoUrl.startsWith('http') && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-300 hover:text-emerald-200 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-all"
                title="Open Live App"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Site ↗</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#a1a1aa] hover:text-pink-300 rounded-lg hover:bg-white/5 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#a1a1aa] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-5 pt-3 border-b border-pink-500/15 bg-[#13111e]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 ${
              activeTab === 'overview'
                ? 'text-pink-400 border-pink-500'
                : 'text-[#a1a1aa] border-transparent hover:text-white'
            }`}
          >
            Overview &amp; Features
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'text-pink-400 border-pink-500'
                : 'text-[#a1a1aa] border-transparent hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5 text-pink-400" />
            <span>Interactive Demo</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'overview' ? (
            <div className="space-y-6">
              {/* Problem & Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#181528] border border-pink-500/15">
                  <div className="text-xs font-semibold text-pink-400 uppercase tracking-wide mb-1.5">
                    Problem Statement
                  </div>
                  <p className="text-xs sm:text-sm text-[#c9c4d4] leading-relaxed">
                    {project.details.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#181528] border border-purple-500/15">
                  <div className="text-xs font-semibold text-purple-400 uppercase tracking-wide mb-1.5">
                    System Architecture
                  </div>
                  <p className="text-xs sm:text-sm text-[#c9c4d4] leading-relaxed">
                    {project.details.architecture}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#a1a1aa] mb-2.5">
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.details.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#181528] border border-white/[0.04] flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-[#ded9e8] leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#a1a1aa] mb-2">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#181528] text-purple-200 border border-pink-500/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Simulator Tab */
            <div className="space-y-5">
              {/* MindMesh AI Simulator */}
              {project.id === 'mindmesh-ai' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#181528] border border-cyan-500/25">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Network className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-semibold text-[#f7f5fa]">
                          Knowledge Mesh Visualizer ({meshNodes.length} Nodes)
                        </span>
                      </div>
                      <span className="text-[11px] text-cyan-400 font-mono">
                        6 Interconnected Edges
                      </span>
                    </div>

                    {/* Nodes cloud preview */}
                    <div className="flex flex-wrap gap-2 py-2">
                      {meshNodes.map((node, i) => (
                        <span
                          key={node}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gradient-to-r from-cyan-500/15 to-purple-500/15 border border-cyan-500/30 text-cyan-200 flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          <span>{node}</span>
                          {meshNodes.length > 2 && (
                            <button
                              onClick={() => setMeshNodes(meshNodes.filter((n) => n !== node))}
                              className="text-pink-400 hover:text-pink-300 ml-1 cursor-pointer text-xs"
                              title="Remove node"
                            >
                              ×
                            </button>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Add New Node Form */}
                  <form onSubmit={handleAddMeshNode} className="flex gap-2">
                    <input
                      type="text"
                      value={newConcept}
                      onChange={(e) => setNewConcept(e.target.value)}
                      placeholder="Add concept node (e.g., Vector DB, Quantum Logic)..."
                      className="flex-1 px-3 py-2 rounded-xl bg-[#181528] border border-pink-500/20 text-white text-xs placeholder-[#817c91] focus:outline-none focus:border-cyan-400"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#181528] border border-pink-500/30 hover:border-cyan-400 text-xs text-white font-medium flex items-center gap-1.5 cursor-pointer transition-all"
                    >
                      <Plus className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Add Node</span>
                    </button>
                  </form>

                  <button
                    onClick={handleSynthesizeMesh}
                    disabled={isSynthesizing}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-xs font-semibold transition-all cursor-pointer shadow-md shadow-pink-500/20 flex items-center justify-center gap-2"
                  >
                    <BrainCircuit className="w-3.5 h-3.5" />
                    <span>{isSynthesizing ? 'Synthesizing Graph Connections...' : 'Synthesize Graph Intelligence'}</span>
                  </button>

                  {synthesisResult && (
                    <div className="p-3.5 rounded-xl bg-[#181528] border border-cyan-500/30 text-xs text-[#f7f5fa] leading-relaxed">
                      <span className="text-cyan-400 font-semibold block mb-1">
                        Semantic Reasoning Engine
                      </span>
                      {synthesisResult}
                    </div>
                  )}
                </div>
              )}

              {/* Veilix AI Simulator */}
              {project.id === 'veilix-ai' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/50 to-pink-950/40 border border-emerald-500/30 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Live Production Deployment Online</span>
                      </div>
                      <div className="text-[11px] text-[#c9c4d4] mt-0.5">
                        Experience the full AI scanner with real models on Vercel.
                      </div>
                    </div>
                    <a
                      href="https://veilix-ai.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all shrink-0 shadow-sm"
                    >
                      Open veilix-ai.vercel.app ↗
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-[#181528] border border-pink-500/15 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#a1a1aa]">Estimated Risk Score</div>
                      <div className="text-2xl font-bold text-[#f7f5fa]">
                        {calculateVeilixScore()} / 100
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-[#13111e] font-medium text-pink-300 border border-pink-500/25">
                      {calculateVeilixScore() > 60 ? 'High' : calculateVeilixScore() > 30 ? 'Moderate' : 'Low'} Risk
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {Object.entries(permRisks).map(([perm, data]) => {
                      const isSelected = selectedPerms.includes(perm);
                      return (
                        <div
                          key={perm}
                          onClick={() => {
                            setSelectedPerms((prev) =>
                              isSelected ? prev.filter((p) => p !== perm) : [...prev, perm]
                            );
                          }}
                          className={`p-2.5 rounded-xl border cursor-pointer text-xs flex items-center justify-between transition-colors ${
                            isSelected
                              ? 'bg-pink-950/30 border-pink-500/40 text-white'
                              : 'bg-[#181528] border-white/[0.04] text-[#a1a1aa]'
                          }`}
                        >
                          <div>
                            <span className="font-mono font-medium">{perm}</span>
                            <span className="text-[11px] text-[#817c91] ml-2 block sm:inline">{data.desc}</span>
                          </div>
                          <span className="font-semibold text-pink-300">+{data.weight}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Gesture Robot Simulator */}
              {project.id === 'gesture-robot' && (
                <div className="space-y-4 text-center">
                  <div className="p-4 rounded-xl bg-[#181528] border border-pink-500/15">
                    <div className="text-xs text-[#a1a1aa]">Current Command</div>
                    <div className="text-xl font-bold text-pink-400 mt-1">{robotDirection}</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
                    <div />
                    <button
                      onClick={() => handleRobotCommand('FORWARD', 220)}
                      className="p-3 rounded-xl bg-[#181528] hover:bg-[#221e38] text-white text-xs font-semibold border border-pink-500/20"
                    >
                      ▲ FWD
                    </button>
                    <div />
                    <button
                      onClick={() => handleRobotCommand('LEFT', 180)}
                      className="p-3 rounded-xl bg-[#181528] hover:bg-[#221e38] text-white text-xs font-semibold border border-pink-500/20"
                    >
                      ◄ LEFT
                    </button>
                    <button
                      onClick={() => handleRobotCommand('STOP', 0)}
                      className="p-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold"
                    >
                      STOP
                    </button>
                    <button
                      onClick={() => handleRobotCommand('RIGHT', 180)}
                      className="p-3 rounded-xl bg-[#181528] hover:bg-[#221e38] text-white text-xs font-semibold border border-pink-500/20"
                    >
                      RIGHT ►
                    </button>
                    <div />
                    <button
                      onClick={() => handleRobotCommand('REVERSE', 200)}
                      className="p-3 rounded-xl bg-[#181528] hover:bg-[#221e38] text-white text-xs font-semibold border border-pink-500/20"
                    >
                      ▼ REV
                    </button>
                    <div />
                  </div>
                </div>
              )}

              {/* Smart Trolley Simulator */}
              {project.id === 'smart-trolley' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#181528] border border-pink-500/15 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#a1a1aa]">Cart Subtotal</div>
                      <div className="text-2xl font-bold text-emerald-400">${trolleyTotal.toFixed(2)}</div>
                    </div>
                    <span className="text-xs text-[#a1a1aa]">{trolleyItems.length} Items</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {availableRfidProducts.map((prod) => (
                      <button
                        key={prod.rfid}
                        onClick={() => handleScanProduct(prod)}
                        className="p-2.5 rounded-xl bg-[#181528] hover:bg-[#221e38] border border-pink-500/15 text-left text-xs flex justify-between items-center"
                      >
                        <div>
                          <div className="font-medium text-[#f7f5fa]">{prod.name}</div>
                          <div className="text-[10px] text-[#817c91] font-mono">{prod.rfid}</div>
                        </div>
                        <span className="text-pink-300 font-semibold">${prod.price.toFixed(2)}</span>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-1.5 max-h-36 overflow-y-auto">
                    {trolleyItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-2 rounded-lg bg-[#181528] border border-white/[0.04] text-xs flex items-center justify-between"
                      >
                        <span className="text-[#ded9e8]">{item.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-white">${item.price.toFixed(2)}</span>
                          <button
                            onClick={() => handleRemoveProduct(item.id)}
                            className="text-[#817c91] hover:text-rose-400 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
