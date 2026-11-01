import React from 'react';
import { X, Lock } from 'lucide-react';
import { SITE_CONFIG } from '../data/config.ts';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#111214] border border-[#292A2E] rounded-sm p-6 sm:p-8 overflow-y-auto flex flex-col shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-[#1B1C1F]">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#C6A15B]" />
            <h2 id="privacy-title" className="text-lg font-bold text-[#F5F4F0]">
              Política de Privacidade (LGPD)
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
            A <strong className="text-[#F5F4F0]">{SITE_CONFIG.brand.fullName}</strong> preza pela transparência, sigilo e proteção dos dados pessoais de seus clientes e visitantes, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F4F0] mb-1">1. Coleta de Dados</h3>
            <p>
              Coletamos apenas as informações estritamente necessárias fornecidas voluntariamente pelo usuário através dos canais de contato ou formulário comercial (nome, e-mail, telefone/WhatsApp e dados da empresa).
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F4F0] mb-1">2. Finalidade do Tratamento</h3>
            <p>
              Os dados coletados destinam-se exclusivamente ao atendimento de solicitações de orçamento, esclarecimento de dúvidas técnicas, emissão de propostas comerciais e execução do contrato de desenvolvimento do website.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F4F0] mb-1">3. Compartilhamento e Sigilo</h3>
            <p>
              A WAS não vende, aluga ou compartilha suas informações pessoais com terceiros para fins de marketing. Os dados podem ser compartilhados unicamente com prestadores técnicos sob sigilo estritamente necessários para o projeto (ex: registro de domínio em nome do cliente).
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F5F4F0] mb-1">4. Direitos do Titular</h3>
            <p>
              Você tem o direito de solicitar a confirmação, o acesso, a correção ou a exclusão de seus dados pessoais armazenados por nós a qualquer momento, mediante solicitação para o e-mail {SITE_CONFIG.contacts.email}.
            </p>
          </div>

          <div className="pt-4 border-t border-[#1B1C1F] text-xs text-[#707074]">
            Em conformidade com a legislação brasileira. Dúvidas: {SITE_CONFIG.contacts.email}.
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
