import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/config.ts';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#111214] border border-[#292A2E] rounded-sm p-6 sm:p-8 overflow-y-auto flex flex-col shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-[#1B1C1F]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C6A15B]" />
            <h2 id="terms-title" className="text-lg font-bold text-[#F5F4F0]">
              Termos de Uso e Condições Comerciais
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#A5A5A8] hover:text-[#F5F4F0] rounded-sm transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-5 text-sm text-[#A5A5A8] leading-relaxed">
          <p>
            Estes termos e condições regem o acesso a este site e a contratação dos serviços prestados pela{' '}
            <strong className="text-[#F5F4F0]">{SITE_CONFIG.brand.fullName} ({SITE_CONFIG.brand.shortName})</strong>.
          </p>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F4F0] mb-1">1. Objeto da Prestação de Serviços</h3>
            <p>
              A WAS atua no desenvolvimento e estruturação de websites institucionais, landing pages e soluções digitais sob medida para empresas e profissionais. As características e limites de cada projeto são formalizados na proposta comercial enviada ao cliente.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F4F0] mb-1">2. Início do Desenvolvimento e Prazos</h3>
            <p>
              A contagem do prazo de entrega inicia-se exclusivamente após a confirmação do pagamento acordado e o envio completo de todos os materiais indispensáveis pelo cliente (logotipo em alta definição, textos base, imagens e referências).
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F4F0] mb-1">3. Rodadas de Ajustes e Escopo</h3>
            <p>
              Cada plano contratado inclui um número determinado de rodadas de revisão (1 rodada para o plano Essencial e 2 rodadas para o plano Profissional). Ajustes adicionais, solicitações de novas seções ou alterações que divirjam substancialmente do briefing original serão orçados à parte.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F4F0] mb-1">4. Domínios, Hospedagens e Custos de Terceiros</h3>
            <p>
              Custos relacionados ao registro de domínios anuais (ex: Registro.br) e contratação de servidores de hospedagem pertencem a provedores terceiros e são de responsabilidade direta do contratante. A WAS realiza a configuração técnica e apontamento de DNS correspondente.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F4F0] mb-1">5. Propriedade Intelectual e Publicação</h3>
            <p>
              Após a quitação integral do valor acordado, os direitos de uso do site finalizado e de seus códigos-fonte pertencem ao cliente, resguardado à WAS o direito de exibição do projeto final em seu portfólio institucional.
            </p>
          </div>

          <div className="pt-4 border-t border-[#1B1C1F] text-xs text-[#707074]">
            Última atualização: Outubro de 2026. Em caso de dúvidas comerciais, entre em contato via {SITE_CONFIG.contacts.email}.
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#1B1C1F] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#1B1C1F] hover:bg-[#292A2E] text-[#F5F4F0] border border-[#292A2E] rounded-sm transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
