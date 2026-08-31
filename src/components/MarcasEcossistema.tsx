import React from 'react';
import {
  ArrowRight,
  Check,
  MapPin,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const MarcasEcossistema = () => {
  return (
    <section id="ecossistema" className="py-24 bg-pmg-navy text-white border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-pmg-tizza uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Ecossistema Integrado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            A inteligência digital que conecta o ecossistema
          </h2>
          <p className="text-slate-300 text-base font-light">
            A <strong>Tizza</strong> conecta o cliente à execução física de três empresas: banda larga
            com a PMG Flexo, banda estreita com a PMG Narrow, e filmes com a VP Filmes.
          </p>
        </div>

        {/* 4 Brands Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* 1. TIZZA TECNOLOGIA (DESTAQUE PRINCIPAL) */}
          <div id="tizza" className="rounded-3xl bg-slate-950 text-white border-2 border-pmg-tizza/40 p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pmg-tizza/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-11 flex items-center">
                  <img
                    src="https://i.ibb.co/WvtGBSxN/Logo-Tizza-BRANCO-01-1024x461.png"
                    alt="Logo Tizza Tecnologia"
                    className="h-9 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-pmg-tizza bg-pmg-tizza/20 px-3 py-1 rounded-full border border-pmg-tizza/30">
                  Camada de Tecnologia
                </span>
              </div>

              <div className="text-xs font-bold text-pmg-tizza uppercase tracking-wider mb-2">Tecnologia, Dados & Integração</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Tizza Tecnologia</h3>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                A inteligência digital do PMG Group. Nosso primeiro produto, o Kaiaki, conecta o
                cliente diretamente à operação das empresas de execução física do grupo.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-pmg-tizza shrink-0" />
                  <span>Kaiaki: acompanhamento em tempo real e aprovação remota</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-pmg-tizza shrink-0" />
                  <span>CloudFlow: automação de pré-impressão</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-pmg-tizza shrink-0" />
                  <span>Uma só plataforma para PMG Flexo, PMG Narrow e VP Filmes</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <a href="#plataforma" className="text-xs font-bold text-white hover:text-pmg-tizza uppercase tracking-wider flex items-center gap-1.5 transition-colors">
                <span>Conhecer a Plataforma</span>
                <ArrowRight size={13} />
              </a>
              <span className="text-xs text-slate-400 font-medium">100% Online</span>
            </div>
          </div>

          {/* 2. PMG FLEXO */}
          <div id="pmg-flexo" className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 sm:p-10 flex flex-col justify-between scroll-mt-24 hover:border-rose-400/40 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-11 flex items-center">
                  <img
                    src="https://i.ibb.co/NgZcFb4B/Logo-PMG-FLEXO-BRANCO-E-VERMELHO.png"
                    alt="Logo PMG Flexo"
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-bold text-rose-400 bg-rose-500/15 px-3 py-1 rounded-full uppercase border border-rose-400/30">
                  Banda Larga
                </span>
              </div>

              <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">Embalagens Flexíveis de Grandes Tiragens</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">PMG Flexo Clicheria</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                Clicheria da PMG Group dedicada a embalagens flexíveis de grandes tiragens, com
                matrizes fotopolímeras de última geração e provas certificadas GMG.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-rose-400 shrink-0" />
                  <span>Retícula Everest® até 200 LPI</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-rose-400 shrink-0" />
                  <span>Gravação digital contínua na planta de Vinhedo-SP</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-rose-400 shrink-0" />
                  <span>Provas contratuais GMG OpenColor</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <a
                href="https://wagnolias.github.io/PMG-Flexo-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 px-4 py-2.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 transition-all shadow-md shadow-rose-600/20"
              >
                <span>Visitar PMG Flexo</span>
                <ExternalLink size={13} />
              </a>
              <span className="text-xs text-slate-400 font-medium">Banda Larga</span>
            </div>
          </div>

          {/* 3. PMG NARROW */}
          <div id="pmg-narrow" className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 sm:p-10 flex flex-col justify-between scroll-mt-24 hover:border-sky-400/40 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-11 flex items-center">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/pmg-narrow-logo.png`}
                    alt="Logo PMG Narrow"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <span className="text-[10px] font-bold text-sky-400 bg-sky-500/15 px-3 py-1 rounded-full uppercase border border-sky-400/30">
                  Banda Estreita
                </span>
              </div>

              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">Rótulos & Etiquetas Técnicas</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">PMG Narrow Clicheria</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                Clicheria especializada em banda estreita, com as retículas próprias K2® e Everest®
                para rótulos e etiquetas.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-sky-400 shrink-0" />
                  <span>Tecnologias PMG Narrow: K2® e Everest®</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-sky-400 shrink-0" />
                  <span>Provas contratuais GMG com calibração espectral</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-sky-400 shrink-0" />
                  <span>Atendimento premium e humanizado</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <a
                href="https://wagnolias.github.io/PMG-Narrow/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 px-4 py-2.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 transition-all shadow-md shadow-sky-600/20"
              >
                <span>Visitar PMG Narrow</span>
                <ExternalLink size={13} />
              </a>
              <span className="text-xs text-slate-400 font-medium">Banda Estreita</span>
            </div>
          </div>

          {/* 4. VP FILMES */}
          <div id="vp-filmes" className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 sm:p-10 flex flex-col justify-between scroll-mt-24 hover:border-emerald-400/40 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-11 flex items-center">
                  <img
                    src="https://i.ibb.co/PGDXcCTN/LOGO-VP-AZUL.png"
                    alt="Logo VP Filmes"
                    className="h-10 w-auto object-contain"
                    style={{ filter: 'saturate(4) brightness(1.7) hue-rotate(-22deg)' }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 px-3 py-1 rounded-full uppercase border border-emerald-400/30">
                  Distribuição de Filmes
                </span>
              </div>

              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Filmes Flexíveis para Embalagens</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">VP Filmes</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Distribuidora técnica de filmes flexíveis (BOPP e PEAD) para convertedores, sem volume mínimo obrigatório. Estoque regulador, alta barreira e suporte em Blumenau-SC.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span>BOPP: Transparente, Metalizado, Mate e Branco Cavitado</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span>PEAD: Filmes técnicos para laminação e selagem</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span>Assessoria técnica na especificação ideal para cada substrato</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <a
                href="https://www.vpfilmes.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 transition-all shadow-md shadow-emerald-600/20"
              >
                <span>Acessar vpfilmes.com.br</span>
                <ExternalLink size={13} />
              </a>
              <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                <MapPin size={12} className="text-emerald-400" />
                <span>Blumenau-SC</span>
              </div>
            </div>
          </div>

        </div>

        {/* Ecosystem Overview Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-xs font-bold text-pmg-tizza uppercase tracking-wider mb-2">
              Solução Completa
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Ecossistema Flexográfico: tecnologia, produção e performance
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Inteligência digital com a <strong>Tizza</strong>, banda larga com a <strong>PMG Flexo</strong>, banda estreita com a <strong>PMG Narrow</strong>, filmes com a <strong>VP Filmes</strong>.
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-center">
            <img
              src="https://i.ibb.co/N2f7Yddq/Marcas-da-Pmg.png"
              alt="Marcas da PMG"
              className="max-h-20 sm:max-h-24 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
