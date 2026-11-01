import React, { useState } from 'react';
import { ArrowUpRight, Filter, Layers, Info } from 'lucide-react';
import { SITE_CONFIG, PortfolioProject } from '../data/config.ts';

interface PortfolioPageProps {
  onOpenProject: (project: PortfolioProject) => void;
  onNavigate: (page: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenProject, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'architecture', label: 'Arquitetura' },
    { id: 'clinic', label: 'Saúde & Estética' },
    { id: 'restaurant', label: 'Gastronomia' },
    { id: 'corporate', label: 'Consultoria & Serviços' },
    { id: 'store', label: 'Design de Produtos' },
    { id: 'professional', label: 'Profissional Liberal' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? SITE_CONFIG.portfolioProjects
    : SITE_CONFIG.portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
          <span>Direção Visual & Identidade</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F4F0] tracking-tight">
          Portfólio & Projetos Conceituais
        </h1>
        <p className="text-base sm:text-lg text-[#A5A5A8] leading-relaxed">
          Explore demonstrações de projetos em diferentes segmentos de mercado. Cada conceito reflete nosso padrão visual, com atenção minuciosa à tipografia, espaçamento e arquitetura de telas.
        </p>

        {/* Disclaimer note on Conceptual Projects (transparent and ethical) */}
        <div className="p-4 bg-[#111214] border border-[#292A2E] rounded-xs flex items-start gap-3 text-xs text-[#A5A5A8]">
          <Info className="w-4 h-4 text-[#C6A15B] mt-0.5 shrink-0" />
          <span>
            <strong className="text-[#F5F4F0]">Nota de Transparência:</strong> Os projetos desta galeria são demonstrações autorais desenvolvidas pela Web Arcanjo Solutions para ilustrar capacidades estéticas e soluções arquiteturais para cada nicho. Não vinculamos empresas fictícias como clientes reais.
          </span>
        </div>
      </div>

      {/* 2. Category Filter Controls */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#1B1C1F] pb-4">
        <div className="flex items-center gap-1.5 text-xs text-[#707074] mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>Segmentos:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors whitespace-nowrap ${
              activeCategory === cat.id
                ? 'bg-[#C6A15B] text-[#0A0A0B] font-semibold'
                : 'text-[#A5A5A8] hover:text-[#F5F4F0] hover:bg-[#111214]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3. Projects Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group bg-[#111214] border border-[#1B1C1F] hover:border-[#292A2E] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300"
          >
            <div>
              {/* Image Container with Mockup */}
              <div className="relative aspect-[4/3] bg-[#0A0A0B] overflow-hidden border-b border-[#1B1C1F]">
                <img
                  src={project.image}
                  alt={`Mockup da interface do projeto ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-[#0A0A0B]/90 backdrop-blur-sm border border-[#292A2E] px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-[#C6A15B] rounded-xs">
                  {project.segment}
                </div>
                <div className="absolute top-3 right-3 bg-[#0A0A0B]/90 backdrop-blur-sm border border-[#292A2E] px-2 py-0.5 text-[10px] text-[#A5A5A8] rounded-xs">
                  Conceito
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <h2 className="text-lg font-bold text-[#F5F4F0] group-hover:text-white transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#A5A5A8] leading-relaxed line-clamp-3">
                  {project.shortSummary}
                </p>

                {/* Palette indicator dots */}
                <div className="pt-2 flex items-center gap-1.5">
                  <span className="text-[11px] text-[#707074] mr-1">Paleta:</span>
                  {project.visualDirection.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-3 h-3 rounded-full border border-white/20"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenProject(project)}
                className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#1B1C1F] hover:bg-[#292A2E] text-[#F5F4F0] hover:text-[#C6A15B] border border-[#292A2E] hover:border-[#C6A15B] rounded-xs transition-all flex items-center justify-center gap-2"
              >
                <span>Ver projeto</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* 4. Bottom Custom Proposal CTA */}
      <div className="bg-[#111214] border border-[#1B1C1F] rounded-sm p-8 sm:p-12 text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-[#F5F4F0]">
          Seu segmento não está representado aqui?
        </h2>
        <p className="text-xs sm:text-sm text-[#A5A5A8] leading-relaxed">
          Cada projeto da Web Arcanjo Solutions é desenvolvido a partir do zero com direção visual única para o seu nicho e posicionamento comercial.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contato')}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-[#C6A15B] text-[#0A0A0B] hover:bg-[#E2C98B] rounded-sm transition-all inline-flex items-center gap-2"
          >
            <span>Conversar sobre meu nicho</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
