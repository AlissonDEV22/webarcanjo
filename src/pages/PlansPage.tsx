import React from 'react';
import {
  Check,
  X,
  ArrowUpRight,
  ShieldCheck,
  HelpCircle,
  FileText,
  Clock,
  Server,
  Wrench,
} from 'lucide-react';
import { SITE_CONFIG } from '../data/config.ts';

interface PlansPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const PlansPage: React.FC<PlansPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
          <span>Investimento Transparente</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F4F0] tracking-tight">
          Escolha a solução ideal para o seu negócio.
        </h1>
        <p className="text-base sm:text-lg text-[#A5A5A8] leading-relaxed">
          Duas propostas, um mesmo compromisso: qualidade, clareza e profissionalismo.
        </p>
      </div>

      {/* 2. Side-by-side Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {SITE_CONFIG.plans.map((plan) => {
          const isProf = plan.id === 'profissional';
          return (
            <div
              key={plan.id}
              className={`relative p-8 sm:p-10 rounded-sm bg-[#111214] border transition-all duration-300 flex flex-col justify-between ${
                isProf
                  ? 'border-[#C6A15B]/70 shadow-[0_0_35px_rgba(198,161,91,0.08)]'
                  : 'border-[#1B1C1F] hover:border-[#292A2E]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 right-8 bg-[#C6A15B] text-[#0A0A0B] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-xs">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#F5F4F0]">{plan.name}</h2>
                  <p className="mt-2 text-xs sm:text-sm text-[#A5A5A8] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-[#1B1C1F]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-semibold text-[#A5A5A8]">R$</span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#F5F4F0] tracking-tight font-mono">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-xs text-[#707074] mt-1 block">
                    {plan.periodLabel}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A5A5A8]">
                    O que está incluído:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F4F0]">
                        <Check className="w-4 h-4 text-[#C6A15B] mt-0.5 shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6">
                <button
                  onClick={() => onNavigate('contato', { selectedPlan: plan.name })}
                  className={`w-full py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    isProf
                      ? 'bg-[#C6A15B] text-[#0A0A0B] hover:bg-[#E2C98B] shadow-[0_0_20px_rgba(198,161,91,0.2)]'
                      : 'bg-[#1B1C1F] text-[#F5F4F0] hover:bg-[#292A2E] border border-[#292A2E] hover:border-[#C6A15B]'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Comparativo de Planos (Tabela Detalhada) */}
      <section className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
            Matriz Comparativa
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4F0]">
            Comparativo detalhado de recursos
          </h2>
          <p className="text-xs sm:text-sm text-[#A5A5A8]">
            Analise lado a lado o escopo técnico de cada plano para tomar a decisão correta.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-sm border border-[#1B1C1F] bg-[#111214]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1B1C1F] bg-[#0A0A0B]">
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#A5A5A8] w-2/5">
                  Recurso / Entregável
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] w-3/10">
                  Plano Essencial
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#C6A15B] w-3/10">
                  Plano Profissional
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1B1C1F] text-xs sm:text-sm">
              {SITE_CONFIG.comparisonRows.map((row, i) => (
                <tr key={i} className="hover:bg-[#1B1C1F]/40 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-[#F5F4F0]">{row.feature}</p>
                    <p className="text-xs text-[#707074] mt-0.5">{row.detail}</p>
                  </td>
                  <td className="py-4 px-6 text-[#A5A5A8]">
                    {row.essencial.includes('Não incluído') ? (
                      <span className="text-[#707074] flex items-center gap-1.5">
                        <X className="w-4 h-4 text-neutral-600" />
                        <span>Não incluído</span>
                      </span>
                    ) : (
                      <span className="text-[#F5F4F0] flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-[#C6A15B]" />
                        <span>{row.essencial}</span>
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 font-medium text-[#F5F4F0]">
                    <span className="flex items-center gap-1.5 text-[#E2C98B]">
                      <Check className="w-4 h-4 text-[#C6A15B]" />
                      <span>{row.profissional}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View (eliminating horizontal overflow) */}
        <div className="md:hidden space-y-4">
          {SITE_CONFIG.comparisonRows.map((row, i) => (
            <div key={i} className="p-4 bg-[#111214] border border-[#1B1C1F] rounded-xs space-y-3">
              <div>
                <p className="text-xs font-bold text-[#F5F4F0]">{row.feature}</p>
                <p className="text-[11px] text-[#707074]">{row.detail}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1B1C1F] text-xs">
                <div className="p-2 bg-[#0A0A0B] rounded-xs">
                  <span className="text-[10px] uppercase font-semibold text-[#707074] block mb-1">
                    Essencial
                  </span>
                  <span className={row.essencial.includes('Não incluído') ? 'text-[#707074]' : 'text-[#F5F4F0]'}>
                    {row.essencial}
                  </span>
                </div>
                <div className="p-2 bg-[#0A0A0B] border border-[#C6A15B]/30 rounded-xs">
                  <span className="text-[10px] uppercase font-semibold text-[#C6A15B] block mb-1">
                    Profissional
                  </span>
                  <span className="text-[#F5F4F0] font-medium">
                    {row.profissional}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Condições Comerciais Transparentes */}
      <section className="bg-[#111214] border border-[#1B1C1F] rounded-sm p-6 sm:p-10 space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
          <ShieldCheck className="w-4 h-4" />
          <span>Condições Comerciais & Diretrizes de Contratação</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {SITE_CONFIG.commercialTerms.map((term, i) => (
            <div key={i} className="p-4 bg-[#0A0A0B] border border-[#1B1C1F] rounded-xs space-y-1.5">
              <h3 className="text-xs sm:text-sm font-bold text-[#F5F4F0]">
                {term.title}
              </h3>
              <p className="text-xs text-[#A5A5A8] leading-relaxed">
                {term.description}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#1B1C1F]/60 border border-[#292A2E] rounded-xs text-xs text-[#A5A5A8] flex items-start gap-3">
          <HelpCircle className="w-4 h-4 text-[#C6A15B] mt-0.5 shrink-0" />
          <span>
            Tem alguma necessidade fora do padrão apresentado? Conversamos sobre seu escopo e montamos uma proposta formalizada sem custo prévio.
          </span>
        </div>
      </section>

      {/* 5. Bottom Navigation CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => onNavigate('contato')}
          className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#C6A15B] text-[#0A0A0B] hover:bg-[#E2C98B] rounded-sm transition-all shadow-[0_0_20px_rgba(198,161,91,0.2)] inline-flex items-center gap-2"
        >
          <span>Solicitar proposta oficial</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
