import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, Copy, Check, Sparkles, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    if (PORTFOLIO_DATA.personal.phone) {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Say Hello</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f7f5fa] tracking-tight mb-2">
          Let&apos;s Connect
        </h2>
        <p className="text-sm text-[#a1a1aa] max-w-2xl">
          I&apos;m open to opportunities, collaborations, and interesting projects. Feel free to reach out via email or send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Channels (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="pro-card p-6 sm:p-7 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <h3 className="text-base font-bold text-[#f7f5fa]">
                  Direct Channels
                </h3>
                <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
              </div>

              <div className="space-y-3">
                {/* Phone Item */}
                {PORTFOLIO_DATA.personal.phone && (
                  <div className="p-4 rounded-xl bg-[#181528] border border-pink-500/15 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/25 flex items-center justify-center text-pink-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] text-[#a1a1aa] font-medium">
                          Phone Number
                        </div>
                        <a
                          href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                          className="text-xs sm:text-sm font-semibold text-[#f7f5fa] hover:text-pink-300 transition-colors"
                        >
                          {PORTFOLIO_DATA.personal.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyPhone}
                      className="p-1.5 rounded-lg text-[#a1a1aa] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                      title="Copy phone"
                    >
                      {copiedPhone ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                )}

                {/* Email Item */}
                <div className="p-4 rounded-xl bg-[#181528] border border-pink-500/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/25 flex items-center justify-center text-pink-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#a1a1aa] font-medium">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="text-xs sm:text-sm font-semibold text-[#f7f5fa] hover:text-pink-300 transition-colors"
                      >
                        {PORTFOLIO_DATA.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-[#a1a1aa] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#181528] border border-pink-500/15 flex items-center justify-between hover:border-pink-500/35 transition-all block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#a1a1aa] font-medium">
                        LinkedIn Profile
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#f7f5fa]">
                        {PORTFOLIO_DATA.personal.linkedinHandle}
                      </span>
                    </div>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#181528] border border-pink-500/15 flex items-center justify-between hover:border-pink-500/35 transition-all block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/25 flex items-center justify-center text-rose-400">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#a1a1aa] font-medium">
                        GitHub
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#f7f5fa] font-mono">
                        {PORTFOLIO_DATA.personal.githubHandle}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <p className="mt-8 text-xs text-[#a1a1aa] leading-relaxed">
              Available for technical internships, student research collaborations, and project discussions.
            </p>
          </div>
        </div>

        {/* Right Column: Send a Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="pro-card p-6 sm:p-8">
            <h3 className="text-base font-bold text-[#f7f5fa] mb-5">
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-11 h-11 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-3 shadow-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#f7f5fa] mb-1">Message Sent ✨</h4>
                <p className="text-xs text-[#a1a1aa] max-w-sm">
                  Thank you for reaching out. Paridhi will receive your message and respond promptly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#c9c4d4] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Alex Johnson"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#181528] border border-pink-500/20 text-[#f7f5fa] placeholder-[#817c91] text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c9c4d4] mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#181528] border border-pink-500/20 text-[#f7f5fa] placeholder-[#817c91] text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c9c4d4] mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Say hello, share an opportunity, or collaborate on a project..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#181528] border border-pink-500/20 text-[#f7f5fa] placeholder-[#817c91] text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md shadow-pink-500/25"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
