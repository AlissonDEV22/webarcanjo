import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Mail,
  Instagram,
  Send,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  Clock,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { SITE_CONFIG } from '../data/config.ts';

interface ContactPageProps {
  initialService?: string;
  initialPlan?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService, initialPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    service: initialPlan || initialService || 'Plano Profissional (R$ 1.149,90)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({ ...prev, service: initialPlan }));
    } else if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialPlan, initialService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Por favor, informe seu nome completo.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Informe um endereço de e-mail válido.';
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.trim().replace(/\D/g, '').length < 10) {
      errs.whatsapp = 'Informe um número de WhatsApp com DDD válido (mínimo 10 dígitos).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Por favor, escreva uma breve mensagem sobre o que seu negócio precisa.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const formattedBriefing = `*SOLICITAÇÃO DE ORÇAMENTO — WEB ARCANJO SOLUTIONS*
• *Nome:* ${formData.name}
• *Empresa:* ${formData.company || 'Não informada'}
• *E-mail:* ${formData.email}
• *WhatsApp:* ${formData.whatsapp}
• *Interesse:* ${formData.service}
• *Detalhes da necessidade:*
${formData.message}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleSendWhatsApp = () => {
    const url = `https://wa.me/${SITE_CONFIG.contacts.whatsappNumber}?text=${encodeURIComponent(formattedBriefing)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Solicitação de Orçamento: ${formData.service} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(formattedBriefing);
    window.location.href = `mailto:${SITE_CONFIG.contacts.email}?subject=${subject}&body=${body}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedBriefing);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
          <span>Atendimento & Orçamento Oficial</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F4F0] tracking-tight">
          Seu próximo projeto começa com uma conversa.
        </h1>
        <p className="text-base sm:text-lg text-[#A5A5A8] leading-relaxed">
          Explique brevemente o que sua empresa precisa. Vamos entender seu objetivo e indicar o caminho mais adequado.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Official Channels & Information */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-6 sm:p-8 bg-[#111214] border border-[#1B1C1F] rounded-sm space-y-6">
            <h2 className="text-lg font-bold text-[#F5F4F0] border-b border-[#1B1C1F] pb-4">
              Canais Oficiais Diretos
            </h2>

            {/* WhatsApp */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#707074] font-semibold">
                WhatsApp Comercial
              </span>
              <a
                href={`https://wa.me/${SITE_CONFIG.contacts.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de conversar sobre um projeto com a Web Arcanjo Solutions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#0A0A0B] border border-[#292A2E] hover:border-[#C6A15B] rounded-xs flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xs bg-[#1B1C1F] flex items-center justify-center text-[#C6A15B] group-hover:bg-[#C6A15B] group-hover:text-[#0A0A0B] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#F5F4F0] block">
                      {SITE_CONFIG.contacts.whatsappDisplay}
                    </span>
                    <span className="text-[11px] text-[#A5A5A8]">Atendimento imediato via chat</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#707074] group-hover:text-[#C6A15B] transition-colors" />
              </a>
            </div>

            {/* E-mail */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#707074] font-semibold">
                E-mail Comercial
              </span>
              <a
                href={`mailto:${SITE_CONFIG.contacts.email}?subject=${encodeURIComponent('Contato via Site — Web Arcanjo Solutions')}`}
                className="p-4 bg-[#0A0A0B] border border-[#292A2E] hover:border-[#C6A15B] rounded-xs flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xs bg-[#1B1C1F] flex items-center justify-center text-[#C6A15B] group-hover:bg-[#C6A15B] group-hover:text-[#0A0A0B] transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-sm font-semibold text-[#F5F4F0] block truncate">
                      {SITE_CONFIG.contacts.email}
                    </span>
                    <span className="text-[11px] text-[#A5A5A8]">Envio de propostas e anexos</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#707074] group-hover:text-[#C6A15B] transition-colors shrink-0 ml-2" />
              </a>
            </div>

            {/* Instagram */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#707074] font-semibold">
                Instagram Oficial
              </span>
              <a
                href={SITE_CONFIG.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#0A0A0B] border border-[#292A2E] hover:border-[#C6A15B] rounded-xs flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xs bg-[#1B1C1F] flex items-center justify-center text-[#C6A15B] group-hover:bg-[#C6A15B] group-hover:text-[#0A0A0B] transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#F5F4F0] block">
                      {SITE_CONFIG.contacts.instagram}
                    </span>
                    <span className="text-[11px] text-[#A5A5A8]">Acompanhe lançamentos e conceitos</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#707074] group-hover:text-[#C6A15B] transition-colors" />
              </a>
            </div>
          </div>

          {/* Operating hours & scope notice */}
          <div className="p-6 bg-[#0A0A0B] border border-[#1B1C1F] rounded-xs space-y-3 text-xs text-[#A5A5A8]">
            <div className="flex items-center gap-2 text-[#F5F4F0] font-semibold">
              <Clock className="w-4 h-4 text-[#C6A15B]" />
              <span>Horário de Atendimento</span>
            </div>
            <p>{SITE_CONFIG.contacts.availability}</p>
            <div className="flex items-center gap-2 text-[#F5F4F0] font-semibold pt-2">
              <MapPin className="w-4 h-4 text-[#C6A15B]" />
              <span>Abrangência</span>
            </div>
            <p>{SITE_CONFIG.contacts.location}</p>
          </div>
        </div>

        {/* Right Column: Commercial Briefing Form / Confirmation View */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 bg-[#111214] border border-[#1B1C1F] rounded-sm relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h2 className="text-xl font-bold text-[#F5F4F0]">
                    Formulário de Orçamento
                  </h2>
                  <p className="mt-1 text-xs text-[#A5A5A8]">
                    Preencha os dados abaixo para estruturar sua solicitação. Nenhum dado é repassado a terceiros.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] block">
                      Seu Nome <span className="text-[#C6A15B]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Carlos Eduardo"
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#0A0A0B] border rounded-xs text-[#F5F4F0] placeholder-[#707074] focus:outline-none focus:ring-1 focus:ring-[#C6A15B] ${
                        errors.name ? 'border-red-500' : 'border-[#292A2E]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                  </div>

                  {/* Empresa */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] block">
                      Nome da Empresa / Projeto
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ex: Valente Arquitetura"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0A0A0B] border border-[#292A2E] rounded-xs text-[#F5F4F0] placeholder-[#707074] focus:outline-none focus:ring-1 focus:ring-[#C6A15B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* E-mail */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] block">
                      E-mail Comercial <span className="text-[#C6A15B]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="carlos@empresa.com.br"
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#0A0A0B] border rounded-xs text-[#F5F4F0] placeholder-[#707074] focus:outline-none focus:ring-1 focus:ring-[#C6A15B] ${
                        errors.email ? 'border-red-500' : 'border-[#292A2E]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] block">
                      WhatsApp com DDD <span className="text-[#C6A15B]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#0A0A0B] border rounded-xs text-[#F5F4F0] placeholder-[#707074] focus:outline-none focus:ring-1 focus:ring-[#C6A15B] ${
                        errors.whatsapp ? 'border-red-500' : 'border-[#292A2E]'
                      }`}
                    />
                    {errors.whatsapp && <p className="text-[11px] text-red-400">{errors.whatsapp}</p>}
                  </div>
                </div>

                {/* Serviço desejado */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] block">
                    Serviço ou Plano Desejado <span className="text-[#C6A15B]">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#0A0A0B] border border-[#292A2E] rounded-xs text-[#F5F4F0] focus:outline-none focus:ring-1 focus:ring-[#C6A15B]"
                  >
                    <option value="Plano Essencial (R$ 699,90)">Plano Essencial (R$ 699,90 — até 3 seções/páginas)</option>
                    <option value="Plano Profissional (R$ 1.149,90)">Plano Profissional (R$ 1.149,90 — até 6 páginas)</option>
                    <option value="Landing Page de Alta Conversão">Landing Page de Alta Conversão</option>
                    <option value="Redesign e Modernização de Site Existente">Redesign e Modernização de Site Existente</option>
                    <option value="Site para Profissional Autônomo / Liberal">Site para Profissional Autônomo / Liberal</option>
                    <option value="Orçamento Personalizado sob Medida">Orçamento Personalizado sob Medida</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] block">
                    Detalhes do Projeto <span className="text-[#C6A15B]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte sobre sua empresa, os serviços que deseja apresentar, se já tem domínio ou logotipo, e suas expectativas de prazo."
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#0A0A0B] border rounded-xs text-[#F5F4F0] placeholder-[#707074] focus:outline-none focus:ring-1 focus:ring-[#C6A15B] ${
                      errors.message ? 'border-red-500' : 'border-[#292A2E]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-400">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-bold uppercase tracking-wider bg-[#C6A15B] text-[#0A0A0B] hover:bg-[#E2C98B] rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(198,161,91,0.2)]"
                  >
                    <span>Prosseguir com a solicitação</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[11px] text-[#707074] text-center mt-2">
                    Você poderá enviar diretamente pelo WhatsApp ou por E-mail na próxima etapa.
                  </p>
                </div>
              </form>
            ) : (
              /* REAL INTERACTIVE SUBMISSION CONFIRMATION (No fake server simulation) */
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-start gap-3 p-4 bg-[#0A0A0B] border border-[#C6A15B]/40 rounded-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#F5F4F0]">
                      Solicitação Estruturada com Sucesso!
                    </h3>
                    <p className="mt-1 text-xs text-[#A5A5A8] leading-relaxed">
                      Para garantir agilidade sem dependência de robôs ou caixas de spam, escolha abaixo como prefere despachar esta solicitação diretamente para nossa equipe comercial.
                    </p>
                  </div>
                </div>

                {/* Formatted Transcript Box */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#707074]">
                      Resumo da Solicitação:
                    </span>
                    <button
                      onClick={handleCopy}
                      className="text-xs text-[#C6A15B] hover:text-[#E2C98B] flex items-center gap-1 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar texto</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 bg-[#0A0A0B] border border-[#1B1C1F] rounded-xs text-xs font-mono text-[#F5F4F0] whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                    {formattedBriefing}
                  </pre>
                </div>

                {/* Real Dispatch Action Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleSendWhatsApp}
                    className="w-full py-3.5 text-xs font-bold uppercase tracking-wider bg-[#C6A15B] text-[#0A0A0B] hover:bg-[#E2C98B] rounded-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(198,161,91,0.2)]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar agora via WhatsApp Comercial</span>
                  </button>

                  <button
                    onClick={handleSendEmail}
                    className="w-full py-3 text-xs font-semibold uppercase tracking-wider bg-[#1B1C1F] hover:bg-[#292A2E] text-[#F5F4F0] border border-[#292A2E] rounded-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#C6A15B]" />
                    <span>Enviar agora por E-mail</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full py-2 text-xs text-[#707074] hover:text-[#A5A5A8] transition-colors"
                  >
                    ← Editar dados do formulário
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
