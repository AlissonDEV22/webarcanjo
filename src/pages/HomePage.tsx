import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  Sparkles,
  Smartphone,
  Compass,
  FileCheck,
  Monitor,
  Layout,
  Search,
  ChevronRight,
} from 'lucide-react';
import { SITE_CONFIG } from '../data/config.ts';

interface HomePageProps {
  onNavigate: (page: string, params?: any) => void;
  onOpenProject: (projectId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenProject }) => {
  const [activeDeviceTab, setActiveDeviceTab] = useState<'desktop' | 'mobile'>('desktop');
  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');

  const getServiceIcon = (id: string) => {
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

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-8 overflow-hidden">
        {/* Subtle background ambient gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#C6A15B]/5 via-transparent to-transparent pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Brand Signature */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111214] border border-[#292A2E] rounded-xs text-[11px] font-semibold tracking-widest uppercase text-[#C6A15B]">
              <span>{SITE_CONFIG.brand.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F4F0] leading-[1.15]" style={{ textWrap: 'balance' }}>
              Seu negócio merece uma presença digital extraordinária.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#A5A5A8] leading-relaxed max-w-2xl mx-auto font-normal">
              Criamos sites profissionais que valorizam sua marca, apresentam seus serviços com clareza e ajudam sua empresa a conquistar novas oportunidades.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('planos')}
                className="w-full sm:w-auto px-7 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#C6A15B] text-[#0A0A0B] hover:bg-[#E2C98B] rounded-sm transition-all duration-200 shadow-[0_0_25px_rgba(198,161,91,0.2)] flex items-center justify-center gap-2"
              >
                <span>Conheça nossos planos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contato')}
                className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#111214] hover:bg-[#1B1C1F] text-[#F5F4F0] hover:text-[#C6A15B] border border-[#292A2E] hover:border-[#C6A15B] rounded-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Solicite um orçamento</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual Showcase Composition */}
          <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
            {/* Outer display frame */}
            <div className="bg-[#111214] border border-[#292A2E] rounded-sm p-2 sm:p-3 shadow-2xl relative">
              {/* Window Header */}
              <div className="flex items-center justify-between gap-2 px-2.5 sm:px-3 py-2 border-b border-[#1B1C1F] mb-2 bg-[#0A0A0B] overflow-hidden">
                <div className="flex items-center gap-1.5 shrink min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#292A2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#292A2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#292A2E]" />
                  </div>
                  <span className="ml-1 text-[11px] font-mono text-[#707074] truncate hidden sm:inline">
                    webarcanjosolutions.com.br
                  </span>
                  <span className="ml-1 text-[10px] font-mono text-[#707074] truncate sm:hidden">
                    was.com.br
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <button
                    onClick={() => {
                      if (activeDeviceTab !== 'desktop') {
                        setSlideDirection('left');
                        setActiveDeviceTab('desktop');
                      }
                    }}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-semibold rounded-xs transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap ${
                      activeDeviceTab === 'desktop'
                        ? 'bg-[#1B1C1F] text-[#C6A15B] border border-[#292A2E] shadow-sm'
                        : 'text-[#707074] hover:text-[#A5A5A8] hover:bg-[#111214]'
                    }`}
                    aria-label="Visualizar site na tela de computador desktop"
                  >
                    <Monitor className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => {
                      if (activeDeviceTab !== 'mobile') {
                        setSlideDirection('right');
                        setActiveDeviceTab('mobile');
                      }
                    }}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-semibold rounded-xs transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap ${
                      activeDeviceTab === 'mobile'
                        ? 'bg-[#1B1C1F] text-[#C6A15B] border border-[#292A2E] shadow-sm'
                        : 'text-[#707074] hover:text-[#A5A5A8] hover:bg-[#111214]'
                    }`}
                    aria-label="Visualizar o mesmo site na tela do celular smartphone"
                  >
                    <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Main Showcase Image with Directional Slide Transition */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-xs bg-[#0A0A0B] border border-[#1B1C1F]">
                <AnimatePresence initial={false} custom={slideDirection}>
                  {activeDeviceTab === 'desktop' ? (
                    <motion.div
                      key="desktop-screen"
                      custom={slideDirection}
                      variants={{
                        enter: (dir: string) => ({
                          x: dir === 'right' ? '100%' : '-100%',
                          opacity: 0.2,
                        }),
                        center: {
                          x: 0,
                          opacity: 1,
                          transition: {
                            x: { type: 'spring', stiffness: 220, damping: 26 },
                            opacity: { duration: 0.3 },
                          },
                        },
                        exit: (dir: string) => ({
                          x: dir === 'right' ? '-100%' : '100%',
                          opacity: 0.2,
                          transition: {
                            x: { type: 'spring', stiffness: 220, damping: 26 },
                            opacity: { duration: 0.3 },
                          },
                        }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={SITE_CONFIG.assets.showcaseDesktop}
                        alt="Site institucional profissional rodando na tela do computador desktop"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />

                      {/* Overlaid floating badge */}
                      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#0A0A0B]/90 backdrop-blur-md border border-[#292A2E] p-4 rounded-sm max-w-sm hidden sm:block">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                          <Monitor className="w-3.5 h-3.5" />
                          <span>Versão Desktop</span>
                        </div>
                        <p className="mt-1 text-xs text-[#A5A5A8] leading-relaxed">
                          Layout amplo, tipografia equilibrada e navegação estratégica para computadores e monitores de alta resolução.
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="mobile-screen"
                      custom={slideDirection}
                      variants={{
                        enter: (dir: string) => ({
                          x: dir === 'right' ? '100%' : '-100%',
                          opacity: 0.2,
                        }),
                        center: {
                          x: 0,
                          opacity: 1,
                          transition: {
                            x: { type: 'spring', stiffness: 220, damping: 26 },
                            opacity: { duration: 0.3 },
                          },
                        },
                        exit: (dir: string) => ({
                          x: dir === 'right' ? '-100%' : '100%',
                          opacity: 0.2,
                          transition: {
                            x: { type: 'spring', stiffness: 220, damping: 26 },
                            opacity: { duration: 0.3 },
                          },
                        }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={SITE_CONFIG.assets.showcaseMobile}
                        alt="O mesmo site institucional profissional rodando na tela do celular smartphone"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />

                      {/* Overlaid floating badge */}
                      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#0A0A0B]/90 backdrop-blur-md border border-[#292A2E] p-4 rounded-sm max-w-sm hidden sm:block">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                          <Smartphone className="w-3.5 h-3.5" />
                          <span>Versão Mobile</span>
                        </div>
                        <p className="mt-1 text-xs text-[#A5A5A8] leading-relaxed">
                          100% responsivo para toque, carregamento rápido e navegação sem cortes ou distorções em smartphones.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Quick trust metrics row below showcase */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-[#111214] border border-[#1B1C1F] rounded-xs">
                <span className="block text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">100% Responsivo</span>
                <span className="text-xs text-[#707074]">Celular, Tablet e Desktop</span>
              </div>
              <div className="p-3 bg-[#111214] border border-[#1B1C1F] rounded-xs">
                <span className="block text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">Sem Modelos Genéricos</span>
                <span className="text-xs text-[#707074]">Identidade própria</span>
              </div>
              <div className="p-3 bg-[#111214] border border-[#1B1C1F] rounded-xs">
                <span className="block text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">WhatsApp & Contato</span>
                <span className="text-xs text-[#707074]">Comunicação direta</span>
              </div>
              <div className="p-3 bg-[#111214] border border-[#1B1C1F] rounded-xs">
                <span className="block text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">Domínio e Publicação</span>
                <span className="text-xs text-[#707074]">Configuração inclusa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE POSICIONAMENTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
              <span>Posicionamento Estratégico</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F4F0] leading-tight" style={{ textWrap: 'balance' }}>
              Mais do que um site. Uma extensão da sua marca.
            </h2>
            <p className="text-sm sm:text-base text-[#A5A5A8] leading-relaxed">
              No mercado atual, o site da sua empresa é o primeiro ponto de contato que muitos clientes e parceiros terão com o seu trabalho. Uma página amadora ou desatualizada gera desconfiança imediata.
            </p>
            <p className="text-sm sm:text-base text-[#A5A5A8] leading-relaxed">
              Na Web Arcanjo Solutions, desenvolvemos presenças digitais desenhadas para refletir a verdadeira competência do seu negócio, organizando suas soluções com clareza e elegância.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#111214] border border-[#1B1C1F] rounded-xs space-y-1">
                <p className="text-xs font-semibold text-[#F5F4F0]">Credibilidade e confiança</p>
                <p className="text-xs text-[#707074]">
                  Transmita solidez e postura profissional logo nos primeiros 5 segundos de visita.
                </p>
              </div>
              <div className="p-4 bg-[#111214] border border-[#1B1C1F] rounded-xs space-y-1">
                <p className="text-xs font-semibold text-[#F5F4F0]">Comunicação clara dos serviços</p>
                <p className="text-xs text-[#707074]">
                  Seu cliente entende exatamente o que sua empresa entrega, sem ruídos ou jargões vazios.
                </p>
              </div>
              <div className="p-4 bg-[#111214] border border-[#1B1C1F] rounded-xs space-y-1">
                <p className="text-xs font-semibold text-[#F5F4F0]">Experiência consistente</p>
                <p className="text-xs text-[#707074]">
                  Navegação rápida, responsiva e fluida em smartphones, tablets e notebooks.
                </p>
              </div>
              <div className="p-4 bg-[#111214] border border-[#1B1C1F] rounded-xs space-y-1">
                <p className="text-xs font-semibold text-[#F5F4F0]">Foco em conversão</p>
                <p className="text-xs text-[#707074]">
                  Estrutura pensada para facilitar o contato imediato de potenciais compradores.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Art & Architectural Display */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#292A2E] bg-[#111214] shadow-2xl">
              <img
                src={SITE_CONFIG.assets.architectureMockup}
                alt="Mockup conceitual de arquitetura e presença digital"
                className="w-full h-auto object-cover max-h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-[#0A0A0B]/90 border-t border-[#1B1C1F] flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#F5F4F0]">Projeto Conceitual Axon</p>
                  <p className="text-[11px] text-[#707074]">Arquitetura de informação & Design sob medida</p>
                </div>
                <button
                  onClick={() => onOpenProject('axon-arquitetura')}
                  className="px-3 py-1.5 text-xs text-[#C6A15B] hover:text-[#E2C98B] border border-[#292A2E] hover:border-[#C6A15B] rounded-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Ver projeto</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE SERVIÇOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
            <span>Soluções Especializadas</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F4F0]">
                O que construímos para o seu negócio
              </h2>
              <p className="mt-2 text-sm text-[#A5A5A8] max-w-xl">
                Soluções desenhadas para cada estágio e necessidade da sua presença digital, da primeira landing page ao portal institucional completo.
              </p>
            </div>
            <button
              onClick={() => onNavigate('servicos')}
              className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B] hover:text-[#E2C98B] flex items-center gap-2 group whitespace-nowrap self-start md:self-auto"
            >
              <span>Ver todos os detalhes dos serviços</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Services Grid (7 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.services.map((service, index) => {
            const isMarquee = index === 0;
            return (
              <div
                key={service.id}
                className={`group p-6 sm:p-8 bg-[#111214] border border-[#1B1C1F] hover:border-[#292A2E] rounded-sm transition-all duration-300 flex flex-col justify-between ${
                  isMarquee ? 'lg:col-span-2 bg-gradient-to-br from-[#111214] via-[#111214] to-[#1B1C1F]/40' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-sm bg-[#1B1C1F] border border-[#292A2E] flex items-center justify-center group-hover:border-[#C6A15B] transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="font-mono text-xs text-[#707074]">{service.number}</span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#F5F4F0] group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#A5A5A8] leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#1B1C1F]">
                  <button
                    onClick={() => onNavigate('servicos')}
                    className="text-xs font-medium text-[#C6A15B] group-hover:text-[#E2C98B] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Conhecer escopo do serviço</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SEÇÃO DE DIFERENCIAIS */}
      <section className="bg-[#111214] border-y border-[#1B1C1F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
              Compromisso com o Padrão
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-[#F5F4F0]">
              Excelência em cada detalhe.
            </h2>
            <p className="mt-2 text-sm text-[#A5A5A8]">
              Acreditamos que a credibilidade de um negócio é construída na precisão de sua apresentação comercial e no respeito ao cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.differentials.map((diff) => (
              <div
                key={diff.number}
                className="p-6 bg-[#0A0A0B] border border-[#1B1C1F] rounded-xs space-y-3"
              >
                <span className="font-mono text-xs text-[#C6A15B] font-bold">
                  {diff.number}.
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#F5F4F0]">
                  {diff.title}
                </h3>
                <p className="text-xs text-[#A5A5A8] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRÉVIA DOS PLANOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
            Investimento Transparente
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F4F0]">
            Planos com escopo claro e definido
          </h2>
          <p className="text-sm text-[#A5A5A8]">
            Valores fixos sem surpresas no decorrer do projeto. Escolha a alternativa ideal para a fase da sua empresa.
          </p>
        </div>

        {/* 2 Plans side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SITE_CONFIG.plans.map((plan) => {
            const isProfessional = plan.id === 'profissional';
            return (
              <div
                key={plan.id}
                className={`relative p-8 rounded-sm bg-[#111214] border transition-all duration-300 flex flex-col justify-between ${
                  isProfessional
                    ? 'border-[#C6A15B]/60 shadow-[0_0_30px_rgba(198,161,91,0.08)]'
                    : 'border-[#1B1C1F] hover:border-[#292A2E]'
                }`}
              >
                {/* Badge if available */}
                {plan.badge && (
                  <div className="absolute -top-3 right-6 bg-[#C6A15B] text-[#0A0A0B] text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-xs">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F4F0]">{plan.name}</h3>
                    <p className="mt-1 text-xs text-[#A5A5A8]">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 pb-4 border-b border-[#1B1C1F]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-[#A5A5A8]">R$</span>
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#F5F4F0] tracking-tight font-mono">
                        {plan.price}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#707074]">{plan.periodLabel}</span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {plan.features.slice(0, 6).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#F5F4F0]">
                        <Check className="w-3.5 h-3.5 text-[#C6A15B] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-6">
                  <button
                    onClick={() => onNavigate('contato', { selectedPlan: plan.name })}
                    className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                      isProfessional
                        ? 'bg-[#C6A15B] text-[#0A0A0B] hover:bg-[#E2C98B]'
                        : 'bg-[#1B1C1F] text-[#F5F4F0] hover:bg-[#292A2E] border border-[#292A2E]'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('planos')}
            className="text-xs font-semibold uppercase tracking-wider text-[#A5A5A8] hover:text-[#C6A15B] transition-colors underline-offset-4 hover:underline"
          >
            Comparar todos os recursos na tabela detalhada →
          </button>
        </div>
      </section>

      {/* 6. SEÇÃO DE PROCESSO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
            Metodologia Estruturada
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F4F0]">
            Do primeiro contato à publicação.
          </h2>
          <p className="text-sm text-[#A5A5A8] max-w-xl">
            Um fluxo transparente e organizado, eliminando dúvidas e garantindo que o resultado final atenda com precisão às necessidades da sua empresa.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {SITE_CONFIG.processSteps.map((p, idx) => (
            <div
              key={p.step}
              className="p-6 bg-[#111214] border border-[#1B1C1F] rounded-xs space-y-4 relative group hover:border-[#292A2E] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-[#C6A15B]">
                  {p.step}
                </span>
                <span className="text-[11px] font-mono text-[#707074]">Fase {idx + 1}</span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#F5F4F0]">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-[#A5A5A8] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CHAMADA FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#111214] via-[#1B1C1F] to-[#111214] border border-[#292A2E] rounded-sm p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B]">
              Inicie Hoje Sua Presença Digital
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F4F0]">
              Vamos construir a presença digital da sua empresa?
            </h2>
            <p className="text-sm sm:text-base text-[#A5A5A8]">
              Conte-nos sobre seu negócio e descubra a melhor solução para sua marca.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contato')}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#C6A15B] text-[#0A0A0B] hover:bg-[#E2C98B] rounded-sm transition-all duration-200 shadow-[0_0_25px_rgba(198,161,91,0.2)] flex items-center justify-center gap-2"
              >
                <span>Falar com a WAS</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/${SITE_CONFIG.contacts.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de conversar sobre um projeto com a Web Arcanjo Solutions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#0A0A0B] text-[#F5F4F0] hover:text-[#C6A15B] border border-[#292A2E] hover:border-[#C6A15B] rounded-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>WhatsApp Comercial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
