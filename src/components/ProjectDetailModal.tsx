import React from 'react';
import { X, ArrowUpRight, CheckCircle2, Layers, Palette, Users } from 'lucide-react';
import { PortfolioProject } from '../data/config.ts';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#111214] border border-[#292A2E] rounded-sm overflow-hidden flex flex-col shadow-2xl my-auto">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1B1C1F] bg-[#0A0A0B]/80 sticky top-0 z-10 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
              {project.segment}
            </span>
            <span className="text-[#292A2E]">·</span>
            <span className="text-xs text-[#A5A5A8] border border-[#292A2E] px-2 py-0.5 rounded-sm">
              Projeto conceitual
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#A5A5A8] hover:text-[#F5F4F0] rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#C6A15B]"
            aria-label="Fechar detalhes do projeto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable content body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Top Title & Overview */}
          <div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-[#F5F4F0]">
              {project.title}
            </h2>
            <p className="mt-3 text-base text-[#A5A5A8] leading-relaxed">
              {project.shortSummary}
            </p>
          </div>

          {/* Large Mockup Showcase */}
          <div className="relative rounded-sm overflow-hidden border border-[#292A2E] bg-[#0A0A0B]">
            <img
              src={project.image}
              alt={`Mockup da interface para ${project.title}`}
              className="w-full h-auto object-cover max-h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 right-3 bg-[#0A0A0B]/90 backdrop-blur-sm px-3 py-1 border border-[#292A2E] text-[11px] text-[#A5A5A8]">
              Direção de arte & Mockup WAS
            </div>
          </div>

          {/* 2-Column Grid: Concept & Visual Direction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Column 1: Concept & Target Audience */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B] mb-2">
                  <Layers className="w-4 h-4" />
                  <span>Conceito & Racional do Projeto</span>
                </div>
                <p className="text-sm text-[#A5A5A8] leading-relaxed">
                  {project.conceptDescription}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B] mb-2">
                  <Users className="w-4 h-4" />
                  <span>Público-Alvo & Posicionamento</span>
                </div>
                <p className="text-sm text-[#A5A5A8] leading-relaxed">
                  {project.targetAudience}
                </p>
              </div>
            </div>

            {/* Column 2: Visual System & Palette */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B] mb-2">
                  <Palette className="w-4 h-4" />
                  <span>Sistema Visual & Tipografia</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-[#707074]">Tipografia adotada:</span>
                    <p className="text-sm font-medium text-[#F5F4F0]">{project.visualDirection.typography}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#707074]">Estilo de composição:</span>
                    <p className="text-sm text-[#A5A5A8]">{project.visualDirection.style}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#707074] block mb-1.5">Paleta de cores conceituais:</span>
                    <div className="flex items-center gap-2">
                      {project.visualDirection.colors.map((color, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 bg-[#1B1C1F] border border-[#292A2E] px-2 py-1 rounded-sm">
                          <span
                            className="w-3.5 h-3.5 rounded-xs border border-white/10"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-[11px] font-mono text-[#A5A5A8]">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Sections & Deliverables */}
          <div className="pt-6 border-t border-[#1B1C1F] grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] mb-3">
                Estrutura de Seções Recomendada
              </p>
              <ul className="space-y-2">
                {project.recommendedSections.map((sec, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#A5A5A8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] mt-1 shrink-0" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] mb-3">
                Entregáveis Previstos no Escopo
              </p>
              <ul className="space-y-2">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[#F5F4F0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#1B1C1F] bg-[#0A0A0B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#707074] text-center sm:text-left">
            Deseja uma solução com esta qualidade visual para o seu negócio?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#1B1C1F] hover:bg-[#292A2E] text-[#A5A5A8] hover:text-[#F5F4F0] border border-[#292A2E] rounded-sm transition-colors"
            >
              Voltar
            </button>
            <button
              onClick={() => onRequestSimilar(project.title)}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#C6A15B] hover:bg-[#E2C98B] text-[#0A0A0B] rounded-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Solicitar projeto para meu segmento</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
