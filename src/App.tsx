import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { TermsModal } from './components/TermsModal.tsx';
import { PrivacyModal } from './components/PrivacyModal.tsx';
import { ProjectDetailModal } from './components/ProjectDetailModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { PlansPage } from './pages/PlansPage.tsx';
import { PortfolioPage } from './pages/PortfolioPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { SITE_CONFIG, PortfolioProject } from './data/config.ts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('inicio');
  const [navParams, setNavParams] = useState<any>({});
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Update document title dynamically based on active page
  useEffect(() => {
    const titles: Record<string, string> = {
      inicio: 'Web Arcanjo Solutions | Criação de Sites Profissionais',
      servicos: 'Serviços de Criação & Engenharia Digital | Web Arcanjo Solutions',
      planos: 'Planos e Valores Transparentes | Web Arcanjo Solutions',
      portfolio: 'Portfólio & Projetos Conceituais | Web Arcanjo Solutions',
      sobre: 'Sobre a Web Arcanjo Solutions | Propósito e Valores',
      contato: 'Solicitar Orçamento & Atendimento | Web Arcanjo Solutions',
    };
    document.title = titles[currentPage] || 'Web Arcanjo Solutions';
  }, [currentPage]);

  const handleNavigate = (page: string, params: any = {}) => {
    setCurrentPage(page);
    setNavParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProjectById = (projectId: string) => {
    const found = SITE_CONFIG.portfolioProjects.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleRequestSimilarProject = (projectTitle: string) => {
    setSelectedProject(null);
    handleNavigate('contato', { requestedService: `Projeto similar a: ${projectTitle}` });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0B] text-[#F5F4F0] selection:bg-[#C6A15B]/30 selection:text-[#E2C98B]">
      {/* 1. Global Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* 2. Page Content */}
      <main className="flex-grow">
        {currentPage === 'inicio' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProject={handleOpenProjectById}
          />
        )}
        {currentPage === 'servicos' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'planos' && (
          <PlansPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'portfolio' && (
          <PortfolioPage
            onOpenProject={(proj) => setSelectedProject(proj)}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'sobre' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'contato' && (
          <ContactPage
            initialPlan={navParams.selectedPlan}
            initialService={navParams.requestedService}
          />
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* 4. Modals */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilarProject}
      />

      {/* 5. Discrete Quick Floating WhatsApp Trigger */}
      <aside aria-label="Acesso rápido WhatsApp" className="fixed bottom-6 left-6 z-40">
        <a
          href={`https://wa.me/${SITE_CONFIG.contacts.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de conversar com a equipe da Web Arcanjo Solutions.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#111214] hover:bg-[#1B1C1F] text-[#F5F4F0] border border-[#292A2E] hover:border-[#2A7250] px-3.5 py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          aria-label="Abrir atendimento no WhatsApp"
        >
          <div className="w-6 h-6 rounded-full bg-[#2A7250] flex items-center justify-center text-[#F5F4F0]">
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline-block">
            WhatsApp WAS
          </span>
        </a>
      </aside>
    </div>
  );
}
