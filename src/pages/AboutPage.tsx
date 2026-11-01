import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Eye,
  CheckCircle,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Award,
} from 'lucide-react';
import { SITE_CONFIG } from '../data/config.ts';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: "Profissionalismo",
      description: "Postura ética, compromisso com prazos estipulados e entrega de soluções técnicas sólidas em cada linha de código.",
      icon: <Award className="w-5 h-5 text-[#C6A15B]" />,
    },
    {
      title: "Transparência",
      description: "Clareza total sobre o que está incluído, condições comerciais, custos de provedores terceiros e limites de escopo.",
      icon: <Eye className="w-5 h-5 text-[#C6A15B]" />,
    },
    {
      title: "Atenção aos detalhes",
      description: "Espaçamentos calculados, tipografia balanceada, contraste apurado e navegação fluida em telas de todos os tamanhos.",
      icon: <Sparkles className="w-5 h-5 text-[#C6A15B]" />,
    },
    {
      title: "Compromisso com o cliente",
      description: "Seu sucesso comercial é a métrica principal. Construímos o site para servir como ferramenta ativa de valorização da sua marca.",
      icon: <CheckCircle className="w-5 h-5 text-[#C6A15B]" />,
    },
    {
      title: "Evolução contínua",
      description: "Adoção contínua das melhores práticas de arquitetura web, segurança, padrões de acessibilidade e performance moderna.",
      icon: <TrendingUp className="w-5 h-5 text-[#C6A15B]" />,
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header & Institutional Purpose */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
          <span>Sobre a Web Arcanjo Solutions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F4F0] tracking-tight">
          Tecnologia, design e propósito em cada projeto.
        </h1>
        <p className="text-base sm:text-lg text-[#F5F4F0] leading-relaxed font-medium">
          A Web Arcanjo Solutions nasceu com um propósito claro: ajudar empresas e profissionais a apresentarem seu trabalho de forma mais profissional no ambiente digital.
        </p>
        <p className="text-sm sm:text-base text-[#A5A5A8] leading-relaxed">
          Cada projeto é pensado para comunicar a essência da marca, organizar suas informações e oferecer uma experiência de navegação consistente, sem soluções genéricas ou excessos decorativos artificiais.
        </p>
      </div>

      {/* 2. Brand Ethos & Editorial 2-Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#111214] border border-[#1B1C1F] rounded-sm p-8 sm:p-12">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
            Nossa Filosofia
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4F0]">
            Uma presença digital que transmite a verdadeira estatura da sua empresa
          </h2>
          <p className="text-sm text-[#A5A5A8] leading-relaxed">
            Muitas empresas prestam serviços excepcionais no mundo físico, mas possuem páginas web que transmitem amadorismo ou falta de cuidado. Nosso papel é preencher essa lacuna.
          </p>
          <p className="text-sm text-[#A5A5A8] leading-relaxed">
            Trabalhamos na convergência entre estética contemporânea e funcionalidade real: tipografia nobre, contrastes que facilitam a leitura, tempos de resposta rápidos e caminhos diretos para o visitante entrar em contato.
          </p>
          <div className="pt-2">
            <span className="text-xs font-mono text-[#C6A15B] tracking-wider uppercase font-semibold">
              ESTRATÉGIA. DESIGN. PRESENÇA DIGITAL.
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 bg-[#0A0A0B] border border-[#292A2E] rounded-xs space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0]">
            Compromisso Ético da WAS
          </p>
          <ul className="space-y-3 text-xs text-[#A5A5A8]">
            <li className="flex items-start gap-2.5">
              <span className="text-[#C6A15B] mt-0.5 font-bold">✓</span>
              <span>Propostas comerciais com valores e escopos fechados.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#C6A15B] mt-0.5 font-bold">✓</span>
              <span>Respeito estrito aos prazos acordados a partir do envio dos materiais.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#C6A15B] mt-0.5 font-bold">✓</span>
              <span>Código moderno, responsivo e adaptado para todos os dispositivos.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#C6A15B] mt-0.5 font-bold">✓</span>
              <span>Orientações claras para que você mantenha o controle do seu domínio.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Nossos Valores */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
            Nossos Pilares
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4F0] mt-1">
            Valores que orientam nossa atuação
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#111214] border border-[#1B1C1F] rounded-xs space-y-3 hover:border-[#292A2E] transition-colors"
            >
              <div className="w-10 h-10 rounded-xs bg-[#1B1C1F] border border-[#292A2E] flex items-center justify-center">
                {val.icon}
              </div>
              <h3 className="text-base font-bold text-[#F5F4F0]">{val.title}</h3>
              <p className="text-xs sm:text-sm text-[#A5A5A8] leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Nossa forma de trabalhar */}
      <section className="bg-[#111214] border border-[#1B1C1F] rounded-sm p-8 sm:p-12 space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
            Fluxo Colaborativo
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4F0] mt-1">
            Nossa forma de trabalhar
          </h2>
          <p className="text-sm text-[#A5A5A8] mt-2 max-w-2xl">
            Acreditamos que a tranquilidade do cliente durante o projeto vem de uma comunicação transparente e do alinhamento prévio de expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-5 bg-[#0A0A0B] border border-[#1B1C1F] rounded-xs space-y-2">
            <span className="text-xs font-mono text-[#C6A15B] font-bold">01 / COMUNICAÇÃO DIRETA</span>
            <h3 className="text-sm font-bold text-[#F5F4F0]">Sem intermediários confusos</h3>
            <p className="text-xs text-[#A5A5A8] leading-relaxed">
              Você dialoga diretamente com quem está desenhando e implementando seu projeto, garantindo rapidez e precisão nos ajustes.
            </p>
          </div>

          <div className="p-5 bg-[#0A0A0B] border border-[#1B1C1F] rounded-xs space-y-2">
            <span className="text-xs font-mono text-[#C6A15B] font-bold">02 / ESCOPO DEFINIDO</span>
            <h3 className="text-sm font-bold text-[#F5F4F0]">Alinhamento prévio de entregáveis</h3>
            <p className="text-xs text-[#A5A5A8] leading-relaxed">
              Você recebe uma descrição precisa de cada página, seção e recurso que será implementado antes de iniciar o desenvolvimento.
            </p>
          </div>

          <div className="p-5 bg-[#0A0A0B] border border-[#1B1C1F] rounded-xs space-y-2">
            <span className="text-xs font-mono text-[#C6A15B] font-bold">03 / SUPORTE NA ENTREGA</span>
            <h3 className="text-sm font-bold text-[#F5F4F0]">Acompanhamento na publicação</h3>
            <p className="text-xs text-[#A5A5A8] leading-relaxed">
              Não entregamos apenas arquivos soltos. Garantimos que seu site esteja devidamente publicado em seu domínio próprio e com certificado SSL ativo.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <div className="text-center pt-4">
        <button
          onClick={() => onNavigate('contato')}
          className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#C6A15B] text-[#0A0A0B] hover:bg-[#E2C98B] rounded-sm transition-all shadow-[0_0_20px_rgba(198,161,91,0.2)] inline-flex items-center gap-2"
        >
          <span>Conversar sobre um projeto para sua marca</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
