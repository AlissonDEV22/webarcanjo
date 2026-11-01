import React from 'react';
import { ArrowUpRight, MessageCircle, Mail, Instagram } from 'lucide-react';
import { SITE_CONFIG } from '../data/config.ts';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTerms, onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  const handleLink = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0B] border-t border-[#1B1C1F] text-[#A5A5A8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Coluna 1: Logotipo e Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#0A0A0B] border border-[#292A2E] overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src={SITE_CONFIG.assets.logoWas}
                  alt="Logo Web Arcanjo Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-bold tracking-tight text-[#F5F4F0]">
                WEB <span className="text-[#C6A15B]">ARCANJO</span> SOLUTIONS
              </span>
            </div>
            <p className="text-sm text-[#A5A5A8] leading-relaxed max-w-xs">
              {SITE_CONFIG.brand.slogan}
            </p>
            <p className="text-xs text-[#707074] leading-relaxed">
              Criação de sites e presença digital sob medida para empresas, marcas e profissionais autônomos.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0]">
              Navegação
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('inicio')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('servicos')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('planos')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Planos e Valores
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('portfolio')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Portfólio Conceitual
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('sobre')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Sobre a WAS
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contato')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Contato & Orçamento
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos Oficiais */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0]">
              Canais Oficiais
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.contacts.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de entender mais sobre a criação de sites com a Web Arcanjo Solutions.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#A5A5A8] hover:text-[#C6A15B] transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>WhatsApp: {SITE_CONFIG.contacts.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contacts.email}?subject=${encodeURIComponent('Contato via Site — Web Arcanjo Solutions')}`}
                  className="flex items-center gap-2.5 text-[#A5A5A8] hover:text-[#C6A15B] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span className="truncate">E-mail: {SITE_CONFIG.contacts.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#A5A5A8] hover:text-[#C6A15B] transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>Instagram: {SITE_CONFIG.contacts.instagram}</span>
                </a>
              </li>
            </ul>
            <p className="text-xs text-[#707074] pt-1">
              {SITE_CONFIG.contacts.availability}
            </p>
          </div>

          {/* Coluna 4: Chamada para ação */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0]">
              Próximo Projeto
            </p>
            <p className="text-sm text-[#F5F4F0] font-medium leading-snug">
              Vamos tirar seu próximo projeto do papel?
            </p>
            <p className="text-xs text-[#A5A5A8] leading-relaxed">
              Receba uma análise objetiva do escopo mais adequado para o momento do seu negócio.
            </p>
            <div>
              <button
                onClick={() => handleLink('contato')}
                className="w-full py-2.5 px-4 text-xs font-semibold tracking-wider uppercase bg-[#1B1C1F] border border-[#292A2E] text-[#F5F4F0] hover:border-[#C6A15B] hover:text-[#C6A15B] rounded-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Falar com a WAS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Linha divisória inferior e direitos */}
        <div className="mt-12 pt-8 border-t border-[#1B1C1F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#707074]">
          <p>© {currentYear} Web Arcanjo Solutions. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#A5A5A8] transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </button>
            <span className="text-[#292A2E]">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#A5A5A8] transition-colors underline-offset-4 hover:underline"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
