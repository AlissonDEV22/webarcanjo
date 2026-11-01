import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Layout,
  Compass,
  Sparkles,
  FileCheck,
  Monitor,
  Search,
  Check,
  Shield,
  Layers,
} from 'lucide-react';
import { SITE_CONFIG } from '../data/config.ts';

interface ServicesPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceFilter, setSelectedServiceFilter] = useState<string>('all');

  const getIcon = (id: string) => {
    switch (id) {
      case 'institucionais':
        return <Globe className="w-5 h-5 text-[#C6A15B]" />;
      case 'landing-pages':
        return <Layout className="w-5 h-5 text-[#C6A15B]" />;
      case 'profissionais-autonomos':
        return <Compass className="w-5 h-5 text-[#C6A15B]" />;
      case 'redesign':
        return <Sparkles className="w-5 h-5 text-[#C6A15B]" />;
      case 'arquitetura-conteudo':
        return <FileCheck className="w-5 h-5 text-[#C6A15B]" />;
      case 'configuracao-publicacao':
        return <Monitor className="w-5 h-5 text-[#C6A15B]" />;
      case 'otimizacao-seo':
        return <Search className="w-5 h-5 text-[#C6A15B]" />;
      default:
        return <Globe className="w-5 h-5 text-[#C6A15B]" />;
    }
  };

  const filteredServices = selectedServiceFilter === 'all'
    ? SITE_CONFIG.services
    : SITE_CONFIG.services.filter(s => s.id === selectedServiceFilter);

  return (
    <div className="py-12 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Page Header & Institutional Introduction */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
          <span>Engenharia Digital & Estrutura Comercial</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F4F0] tracking-tight">
          Nossos Serviços
        </h1>
        <p className="text-base sm:text-lg text-[#A5A5A8] leading-relaxed">
          Cada projeto desenvolvido pela Web Arcanjo Solutions é fundamentado em três pilares: identidade visual refinada, comunicação objetiva dos seus serviços e foco no resultado comercial do cliente.
        </p>
        <p className="text-sm text-[#707074] leading-relaxed">
          Trabalhamos com transparência absoluta de escopo. Não prometemos facilidades milagrosas, mas garantimos uma entrega técnica primorosa, funcional e alinhada à maturidade da sua empresa.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-[#1B1C1F] pb-4">
        <button
          onClick={() => setSelectedServiceFilter('all')}
          className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors whitespace-nowrap ${
            selectedServiceFilter === 'all'
              ? 'bg-[#C6A15B] text-[#0A0A0B] font-semibold'
              : 'text-[#A5A5A8] hover:text-[#F5F4F0] hover:bg-[#111214]'
          }`}
        >
          Todos os Serviços
        </button>
        {SITE_CONFIG.services.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedServiceFilter(s.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors whitespace-nowrap ${
              selectedServiceFilter === s.id
                ? 'bg-[#1B1C1F] text-[#C6A15B] border border-[#292A2E]'
                : 'text-[#A5A5A8] hover:text-[#F5F4F0] hover:bg-[#111214]'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* 2. Detailed Service Cards */}
      <div className="space-y-12">
        {filteredServices.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="p-6 sm:p-10 bg-[#111214] border border-[#1B1C1F] rounded-sm space-y-8 relative hover:border-[#292A2E] transition-all"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#1B1C1F]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#1B1C1F] border border-[#292A2E] flex items-center justify-center shrink-0">
                  {getIcon(service.id)}
                </div>
                <div>
                  <span className="font-mono text-xs text-[#C6A15B] font-semibold">
                    SERVIÇO {service.number}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#F5F4F0] mt-0.5">
                    {service.title}
                  </h2>
                </div>
              </div>
              <button
                onClick={() => onNavigate('contato', { requestedService: service.title })}
                className="self-start sm:self-auto px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#1B1C1F] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#0A0A0B] border border-[#292A2E] rounded-xs transition-all flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Solicitar proposta deste serviço</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#A5A5A8] leading-relaxed max-w-4xl">
              {service.fullDescription}
            </p>

            {/* 3 Columns: Deliverables, Target Audience, Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* O que é entregue */}
              <div className="p-4 bg-[#0A0A0B] border border-[#1B1C1F] rounded-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5F4F0]">
                  <Layers className="w-4 h-4 text-[#C6A15B]" />
                  <span>O que é entregue</span>
                </div>
                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#A5A5A8]">
                      <Check className="w-3.5 h-3.5 text-[#C6A15B] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Para quem é indicado */}
              <div className="p-4 bg-[#0A0A0B] border border-[#1B1C1F] rounded-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5F4F0]">
                  <Compass className="w-4 h-4 text-[#C6A15B]" />
                  <span>Para quem é indicado</span>
                </div>
                <p className="text-xs text-[#A5A5A8] leading-relaxed">
                  {service.targetAudience}
                </p>
              </div>

              {/* Benefícios práticos */}
              <div className="p-4 bg-[#0A0A0B] border border-[#1B1C1F] rounded-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5F4F0]">
                  <Shield className="w-4 h-4 text-[#C6A15B]" />
                  <span>Benefícios práticos</span>
                </div>
                <ul className="space-y-2">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#A5A5A8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Scope Note */}
            <div className="pt-2 text-xs text-[#707074] border-t border-[#1B1C1F] flex items-center gap-2">
              <span className="font-semibold text-[#A5A5A8]">Observação sobre o escopo:</span>
              <span>{service.scopeNote}</span>
            </div>
          </article>
        ))}
      </div>

      {/* 3. Methodology & Development Process */}
      <section className="bg-[#111214] border border-[#1B1C1F] rounded-sm p-8 sm:p-12 space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
            Processo de Execução
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4F0] mt-1">
            Como conduzimos o desenvolvimento do seu site
          </h2>
          <p className="mt-2 text-sm text-[#A5A5A8] max-w-2xl">
            Sem processos burocráticos ou prazos intermináveis. Cada etapa possui entregáveis claros e prazos estabelecidos em contrato.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#C6A15B] font-bold">ETAPA 01</span>
            <h3 className="text-sm font-bold text-[#F5F4F0]">Alinhamento & Briefing</h3>
            <p className="text-xs text-[#A5A5A8] leading-relaxed">
              Coleta de requisitos, logotipo, referências visuais e definição das páginas necessárias para o negócio.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#C6A15B] font-bold">ETAPA 02</span>
            <h3 className="text-sm font-bold text-[#F5F4F0]">Estrutura & Conteúdo</h3>
            <p className="text-xs text-[#A5A5A8] leading-relaxed">
              Organização da narrativa comercial, títulos de impacto e hierarquia de cada seção antes do desenvolvimento do código.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#C6A15B] font-bold">ETAPA 03</span>
            <h3 className="text-sm font-bold text-[#F5F4F0]">Desenvolvimento & Revisão</h3>
            <p className="text-xs text-[#A5A5A8] leading-relaxed">
              Construção da interface responsiva e apresentação do link de testes para a rodada de ajustes contratada.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#C6A15B] font-bold">ETAPA 04</span>
            <h3 className="text-sm font-bold text-[#F5F4F0]">Publicação Oficial</h3>
            <p className="text-xs text-[#A5A5A8] leading-relaxed">
              Apontamento de DNS, ativação do certificado de segurança SSL e verificação em dispositivos móveis e navegadores.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Custom Scope CTA */}
      <div className="text-center bg-[#0A0A0B] border border-[#292A2E] rounded-sm p-8 sm:p-12 space-y-4">
        <h2 className="text-xl sm:text-3xl font-bold text-[#F5F4F0]">
          Precisa de um projeto com escopo sob medida?
        </h2>
        <p className="text-sm text-[#A5A5A8] max-w-xl mx-auto">
          Se sua empresa possui demandas específicas que vão além dos pacotes prontos, montamos uma proposta personalizada para a sua operação.
        </p>
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onNavigate('contato', { requestedService: 'Orçamento Personalizado' })}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-[#C6A15B] text-[#0A0A0B] hover:bg-[#E2C98B] rounded-sm transition-all flex items-center gap-2"
          >
            <span>Solicitar orçamento personalizado</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
