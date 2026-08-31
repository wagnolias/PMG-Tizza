import React from 'react';
import { Sparkles, Layers, Database, ShieldCheck, Check } from 'lucide-react';

export const PlataformaModulos = () => {
  return (
    <section id="plataforma" className="py-24 bg-slate-50 circuit-dots text-pmg-dark relative overflow-hidden border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-pmg-tizza uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Plataforma Tizza</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pmg-navy tracking-tight mb-4">
            Uma plataforma, múltiplos módulos
          </h2>
          <p className="text-slate-600 text-base font-light">
            O Kaiaki é o primeiro produto construído sobre a plataforma Tizza — não a definição
            da empresa. Novos módulos nascem da mesma base de dados e integração.
          </p>
        </div>

        {/* 3 Core Modules */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">

          {/* 1. KAIAKI */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 flex flex-col justify-between hover:border-pmg-tizza/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-pmg-tizza/10 text-pmg-tizza flex items-center justify-center font-black">
                  <Layers size={22} />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wide text-pmg-tizza bg-pmg-tizza/10 px-3 py-1 rounded-full">
                  1o_produto
                </span>
              </div>

              <h3 className="text-2xl font-bold text-pmg-navy mb-1">Kaiaki</h3>
              <div className="text-xs font-semibold text-pmg-tizza mb-4">Aplicação de Produção 100% Online</div>

              <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                Conecta o cliente diretamente à operação PMG — do envio do arquivo à expedição do
                trabalho pronto.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-pmg-tizza shrink-0" />
                  <span>Acompanhamento de OS por status, em tempo real</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-pmg-tizza shrink-0" />
                  <span>Aprovação remota de artes e provas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-pmg-tizza shrink-0" />
                  <span>Cálculo antecipado de consumo de insumo</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-center">
              <span className="text-[11px] font-mono text-slate-500">tizza::produto</span>
            </div>
          </div>

          {/* 2. CLOUDFLOW */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 flex flex-col justify-between hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-black">
                  <Database size={22} />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wide text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  automacao
                </span>
              </div>

              <h3 className="text-2xl font-bold text-pmg-navy mb-1">CloudFlow</h3>
              <div className="text-xs font-semibold text-blue-600 mb-4">Automação de Pré-Impressão</div>

              <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                Reduz o erro humano no processo, automatizando etapas que antes dependiam de
                e-mail e telefone.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-blue-600 shrink-0" />
                  <span>Processamento automático de arquivos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-blue-600 shrink-0" />
                  <span>Padronização de parâmetros entre trabalhos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-blue-600 shrink-0" />
                  <span>Menos dependência de contato manual pra abrir OS</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-center">
              <span className="text-[11px] font-mono text-blue-600">tizza::modulo</span>
            </div>
          </div>

          {/* 3. INTEGRAÇÃO DE ECOSSISTEMA */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 flex flex-col justify-between hover:border-emerald-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">
                  <ShieldCheck size={22} />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wide text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                  integracao
                </span>
              </div>

              <h3 className="text-2xl font-bold text-pmg-navy mb-1">Integração de Ecossistema</h3>
              <div className="text-xs font-semibold text-emerald-600 mb-4">Uma Só Experiência para o Cliente</div>

              <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                A mesma plataforma conecta o cliente às três empresas de execução física do
                PMG Group.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>PMG Flexo, PMG Narrow e VP Filmes num só fluxo</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>Rastreamento por status, do pedido à entrega</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>Visibilidade de ponta a ponta para o convertedor</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-center">
              <span className="text-[11px] font-mono text-emerald-600">tizza::camada</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
