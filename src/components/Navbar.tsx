import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/config.ts';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'planos', label: 'Planos' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'sobre', label: 'Sobre a WAS' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#16171A]/75 backdrop-blur-md border-b border-[#1B1C1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element with subtle gold accent) */}
        <button
          onClick={() => handleLinkClick('inicio')}
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
          aria-label="Web Arcanjo Solutions - Página Inicial"
        >
          <div className="w-10 h-10 rounded-sm bg-[#0A0A0B] border border-[#292A2E] overflow-hidden flex items-center justify-center transition-colors group-hover:border-[#C6A15B] shrink-0">
            <img
              src={SITE_CONFIG.assets.logoWas}
              alt="Logo Web Arcanjo Solutions"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-[#F5F4F0] whitespace-nowrap transition-colors">
              WEB <span className="text-[#C6A15B]">ARCANJO</span> SOLUTIONS
            </span>
          </div>
        </button>

        {/* Zone 2: Primary navigation links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium transition-all duration-200 relative py-2 whitespace-nowrap ${
                  isActive
                    ? 'text-[#F5F4F0] font-semibold'
                    : 'text-[#A5A5A8] hover:text-[#F5F4F0]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A15B] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleLinkClick('contato')}
            className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
              currentPage === 'contato'
                ? 'bg-[#E2C98B] text-[#0A0A0B]'
                : 'bg-[#C6A15B] text-[#0A0A0B] hover:bg-[#E2C98B] hover:shadow-[0_0_20px_rgba(198,161,91,0.25)]'
            }`}
          >
            <span>Solicitar orçamento</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#A5A5A8] hover:text-[#F5F4F0] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A15B]"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#16171A]/95 backdrop-blur-md border-b border-[#1B1C1F] px-4 pt-4 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-3 py-2.5 text-sm font-medium rounded-sm transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#1B1C1F] text-[#C6A15B] font-semibold'
                      : 'text-[#A5A5A8] hover:bg-[#111214] hover:text-[#F5F4F0]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#1B1C1F]">
            <button
              onClick={() => handleLinkClick('contato')}
              className="w-full py-3 text-xs font-semibold tracking-wider uppercase bg-[#C6A15B] text-[#0A0A0B] hover:bg-[#E2C98B] rounded-sm flex items-center justify-center gap-2"
            >
              <span>Solicitar orçamento</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
