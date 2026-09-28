/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { HackathonsSection } from './components/HackathonsSection';
import { ProfilesSection } from './components/ProfilesSection';
import { ResumeBanner } from './components/ResumeBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectModalTab, setProjectModalTab] = useState<'overview' | 'simulator'>('overview');

  const handleOpenProject = (project: Project, openDemoImmediately = false) => {
    setSelectedProject(project);
    setProjectModalTab(openDemoImmediately ? 'simulator' : 'overview');
  };

  return (
    <div className="w-full min-h-screen bg-[#0b0a12] bg-ambient-glow bg-tech-grid text-[#f7f5fa] relative selection:bg-pink-500/30 selection:text-pink-200 overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* Clean Two-Column Hero */}
        <HeroSection />

        {/* About Me */}
        <AboutSection />

        {/* Technical Skills */}
        <SkillsSection />

        {/* Featured Projects */}
        <ProjectsSection onSelectProject={handleOpenProject} />

        {/* Education */}
        <EducationSection />

        {/* Certifications */}
        <CertificationsSection />

        {/* Hackathons & Activities */}
        <HackathonsSection />

        {/* Coding Profiles */}
        <ProfilesSection />

        {/* Resume Banner (Direct Google Drive Access) */}
        <ResumeBanner />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        initialTab={projectModalTab}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
