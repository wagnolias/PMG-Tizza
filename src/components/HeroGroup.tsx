import React from 'react';
import { ArrowRight, Layers, Database, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroGroup = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-pmg-navy text-white">
      {/* Static Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 tech-gradient" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-pmg-tizza/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-pmg-tizza animate-pulse"></span>
              <span className="text-white font-bold">TIZZA TECNOLOGIA</span>
              <span className="text-slate-400">| Inteligência Digital do Ecossistema PMG</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Inteligência que <span className="text-pmg-tizza">conecta a produção</span>.
            </h1>

            {/* Concise Purpose Statement */}
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-xl mb-8">
              Tecnologia, dados e automação para transformar processos industriais em operações
              mais inteligentes, conectadas e previsíveis.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#plataforma"
                className="bg-pmg-tizza hover:bg-pmg-tizza/90 text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-pmg-tizza/20 flex items-center gap-2 group"
              >
                <span>Conhecer a Plataforma</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contato"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all"
              >
                Falar com Especialista
              </a>
            </div>

            {/* Differentiator Pills */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-3 max-w-lg">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-full px-3.5 py-2">
                Tecnologia & Plataforma
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-full px-3.5 py-2">
                Dados & Automação
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-full px-3.5 py-2">
                Integração de Ecossistema
              </span>
            </div>
          </motion.div>

          {/* Right Column: Diferenciais */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-4">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-300">
                  Camada de Tecnologia PMG
                </div>
                <span className="text-[10px] text-pmg-tizza font-bold bg-pmg-tizza/10 px-2.5 py-1 rounded-full uppercase">
                  Tizza
                </span>
              </div>

              {/* Kaiaki */}
              <a
                href="#kaiaki"
                className="block p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-pmg-tizza/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-pmg-tizza/15 text-pmg-tizza flex items-center justify-center shrink-0">
                      <Layers size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h2 className="text-sm font-bold text-white group-hover:text-pmg-tizza transition-colors">Kaiaki</h2>
                        <span className="text-[10px] text-pmg-tizza bg-pmg-tizza/10 px-1.5 py-0.5 rounded font-bold">1º Produto</span>
                      </div>
                      <p className="text-xs text-slate-400">Conecta o cliente à operação PMG, ponta a ponta</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-pmg-tizza group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>

              {/* CloudFlow */}
              <a
                href="#plataforma"
                className="block p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-blue-400/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                      <Database size={20} />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">CloudFlow</h2>
                      <p className="text-xs text-slate-400">Automação de pré-impressão, redução de erro humano</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>

              {/* Ecossistema */}
              <a
                href="#ecossistema"
                className="block p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-emerald-400/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Ecossistema Conectado</h2>
                      <p className="text-xs text-slate-400">PMG Flexo, PMG Narrow e VP Filmes num só fluxo</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
