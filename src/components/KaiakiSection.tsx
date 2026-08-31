import React, { useState, useEffect } from 'react';
import { Database, Zap, Layers, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TerminalWindow } from './TerminalWindow';

const SCREENS = [
  {
    src: `${import.meta.env.BASE_URL}assets/kaiaki-login.png`,
    label: 'Login',
    caption: 'Acesso Seguro ao Sistema'
  },
  {
    src: 'https://i.ibb.co/wZtcZnWf/kaiaki2.png',
    label: 'Módulos',
    caption: 'Todos os Módulos do Dashboard'
  },
  {
    src: `${import.meta.env.BASE_URL}assets/kaiaki-trabalhos.png`,
    label: 'Painel de Produção',
    caption: 'Trabalhos por Status (OS, Montagem, Gravação...)'
  },
  {
    src: `${import.meta.env.BASE_URL}assets/kaiaki-aprovacao.png`,
    label: 'Fila de Aprovação',
    caption: 'Aprovação Remota de Artes e Provas'
  }
];

export const KaiakiSection = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % SCREENS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeScreen]);

  return (
    <section id="kaiaki" className="py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#009FE3]/30 text-[#009FE3] font-mono text-[11px] font-medium tracking-wide mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009FE3] animate-pulse" />
              <span>1o_produto_tizza</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-pmg-navy tracking-tight mb-4">
              Sistema <span className="text-[#009FE3]">Kaiaki</span>: Gestão e RIP 100% Online
            </h2>

            <p className="text-slate-600 text-base font-light leading-relaxed mb-8">
              A aplicação que conecta o cliente diretamente à operação do <strong>PMG Group</strong> — PMG Flexo, PMG Narrow e VP Filmes — com rastreabilidade total de pedidos, aprovação remota de provas e agilidade máxima de entrega.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8 font-mono">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-[11px] font-bold text-pmg-navy mb-0.5">aprovacao_3d</div>
                <div className="text-[11px] text-slate-500 font-sans">Visualização de prova em tempo real</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-[11px] font-bold text-pmg-navy mb-0.5">preflight_compare</div>
                <div className="text-[11px] text-slate-500 font-sans">Conferência visual de alterações</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-[11px] font-bold text-pmg-navy mb-0.5">rastreamento_os</div>
                <div className="text-[11px] text-slate-500 font-sans">Status da gravação em tempo real</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-[11px] font-bold text-pmg-navy mb-0.5">cloud_storage</div>
                <div className="text-[11px] text-slate-500 font-sans">Acervo técnico seguro em nuvem</div>
              </div>
            </div>

            <a 
              href="#contato"
              className="bg-[#009FE3] hover:bg-[#008ecb] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-lg shadow-[#009FE3]/25"
            >
              <span>Solicitar Acesso ao Kaiaki</span>
              <ArrowRight size={13} />
            </a>
          </div>
          
          {/* Right Column: App Preview as Terminal Window */}
          <div className="lg:col-span-6">
            <TerminalWindow label="kaiaki.tizzatecnologia.com.br">
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {SCREENS.map((screen, i) => (
                    <button
                      key={screen.label}
                      onClick={() => setActiveScreen(i)}
                      className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                        activeScreen === i
                          ? 'bg-[#009FE3] text-white shadow-sm'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                      }`}
                    >
                      {screen.label}
                    </button>
                  ))}
                </div>
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl border border-white/10 shadow-sm bg-white overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={SCREENS[activeScreen].src}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      src={SCREENS[activeScreen].src}
                      className="absolute inset-0 w-full h-full object-contain p-3"
                      alt={`Kaiaki - ${SCREENS[activeScreen].label}`}
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 px-1">
                  <span>{SCREENS[activeScreen].caption}</span>
                  <span className="font-semibold text-[#009FE3]">acesso_100pct_web</span>
                </div>
              </div>
            </TerminalWindow>
          </div>

        </div>
      </div>
    </section>
  );
};
