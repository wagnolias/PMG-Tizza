import React, { useState, useEffect } from 'react';
import {
  Building2,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Database,
  Sparkles,
  Users,
  Smartphone,
  Monitor,
  Bot,
  Settings2,
  Link2,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TerminalWindow } from './TerminalWindow';

export const QuemSomosOQueFazemos = () => {
  const [activeTab, setActiveTab] = useState<'quem-somos' | 'o-que-fazemos'>('quem-somos');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#quem-somos') {
        setActiveTab('quem-somos');
      } else if (hash === '#o-que-fazemos') {
        setActiveTab('o-que-fazemos');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const pilaresQuemSomos = [
    {
      icon: <Cpu className="text-pmg-tizza" size={22} />,
      title: "Tecnologia & Plataforma",
      desc: "A camada digital que dá origem ao Kaiaki e aos demais módulos do ecossistema."
    },
    {
      icon: <Database className="text-blue-400" size={22} />,
      title: "Dados & Automação",
      desc: "Cálculo antecipado de consumo, automação de pré-impressão e redução de erro humano."
    },
    {
      icon: <ShieldCheck className="text-emerald-400" size={22} />,
      title: "Integração de Ecossistema",
      desc: "Uma única camada conectando cliente, processos e produção das empresas do PMG Group."
    },
    {
      icon: <Sparkles className="text-purple-400" size={22} />,
      title: "Expansão Contínua",
      desc: "Kaiaki é o primeiro produto — novos módulos nascem da mesma plataforma Tizza."
    }
  ];

  const fluxoEcossistema = [
    {
      title: "Tizza",
      subtitle: "Tecnologia, plataforma, dados e integração",
      icon: <Cpu size={22} />,
      color: "text-pmg-tizza bg-pmg-tizza/15 border-pmg-tizza/30"
    },
    {
      title: "Kaiaki",
      subtitle: "Aplicação que conecta o cliente à operação PMG",
      icon: <Layers size={22} />,
      color: "text-blue-400 bg-blue-500/15 border-blue-400/30"
    },
    {
      title: "PMG Flexo / PMG Narrow / VP Filmes",
      subtitle: "Execução física — clichê, gravação e filmes",
      icon: <Building2 size={22} />,
      color: "text-emerald-400 bg-emerald-500/15 border-emerald-400/30"
    },
    {
      title: "Cliente",
      subtitle: "Acompanha, controla e recebe",
      icon: <Users size={22} />,
      color: "text-purple-400 bg-purple-500/15 border-purple-400/30"
    }
  ];

  const capacidadesTecnicas = [
    { icon: <Smartphone size={18} />, label: "Aplicativos personalizados" },
    { icon: <Monitor size={18} />, label: "Sites responsivos e modernos" },
    { icon: <Bot size={18} />, label: "Soluções com Inteligência Artificial" },
    { icon: <Settings2 size={18} />, label: "Automação de processos" },
    { icon: <Link2 size={18} />, label: "Integração entre sistemas e plataformas" },
    { icon: <BarChart3 size={18} />, label: "Ferramentas digitais para otimizar operações" }
  ];

  const servicosOQueFazemos = [
    {
      id: "kaiaki-produto",
      icon: <Layers className="text-pmg-tizza" size={24} />,
      title: "Sistema Kaiaki",
      tag: "primeiro_produto",
      tagColor: "bg-pmg-tizza/10 text-pmg-tizza border-pmg-tizza/20",
      desc: "Nosso primeiro produto transforma a conexão entre cliente e produção em operação real:",
      bullets: [
        "Acompanhamento de OS em tempo real, do envio à expedição.",
        "Aprovação remota de artes e provas.",
        "Cálculo antecipado de consumo de insumo antes de rodar a máquina."
      ],
      link: "#kaiaki",
      linkText: "Conhecer o Kaiaki"
    },
    {
      id: "cloudflow",
      icon: <Database className="text-blue-500" size={24} />,
      title: "Automação CloudFlow",
      tag: "modulo_automacao",
      tagColor: "bg-blue-50 text-blue-600 border-blue-200",
      desc: "Automação de pré-impressão que reduz o erro humano no processo:",
      bullets: [
        "Processamento automático de arquivos de pré-impressão.",
        "Padronização de parâmetros entre trabalhos.",
        "Menos dependência de e-mail e telefone para abrir uma OS."
      ],
      link: "#plataforma",
      linkText: "Ver Módulos da Plataforma"
    },
    {
      id: "integracao-ecossistema",
      icon: <ShieldCheck className="text-purple-500" size={24} />,
      title: "Integração do Ecossistema",
      tag: "conectividade",
      tagColor: "bg-purple-50 text-purple-600 border-purple-200",
      desc: "A camada que une as empresas do PMG Group numa só experiência para o cliente:",
      bullets: [
        "Mesma plataforma atendendo PMG Flexo, PMG Narrow e VP Filmes.",
        "Rastreamento por status, do pedido à entrega.",
        "Visibilidade de ponta a ponta para o convertedor."
      ],
      link: "#ecossistema",
      linkText: "Ver o Ecossistema PMG"
    }
  ];

  return (
    <section id="apresentacao" className="py-20 bg-pmg-navy circuit-dots text-white relative border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Navigation Tabs Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] font-medium text-pmg-tizza tracking-wide mb-6">
            <span>apresentacao_institucional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 max-w-2xl">
            Conheça a essência da <span className="text-pmg-tizza">Tizza Tecnologia</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mb-8">
            Escolha uma aba: nossa estrutura ou nossas soluções.
          </p>

          {/* Clean Dual Tabs Selector */}
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-lg" role="tablist">
            <button
              id="tab-btn-quem-somos"
              onClick={() => setActiveTab('quem-somos')}
              role="tab"
              aria-selected={activeTab === 'quem-somos'}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'quem-somos'
                  ? 'bg-pmg-tizza text-white shadow-md shadow-pmg-tizza/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Building2 size={16} />
              <span>Quem Somos</span>
            </button>

            <button
              id="tab-btn-o-que-fazemos"
              onClick={() => setActiveTab('o-que-fazemos')}
              role="tab"
              aria-selected={activeTab === 'o-que-fazemos'}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'o-que-fazemos'
                  ? 'bg-pmg-tizza text-white shadow-md shadow-pmg-tizza/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers size={16} />
              <span>O Que Fazemos</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'quem-somos' ? (
            <motion.div
              key="tab-quem-somos"
              id="quem-somos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="scroll-mt-24"
            >
              {/* Introduction Box */}
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-12 mb-10">
                <span className="text-xs font-bold text-pmg-tizza uppercase tracking-widest block mb-2">
                  A Inteligência Digital do Ecossistema PMG
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 max-w-3xl">
                  Desenvolvemos a tecnologia que conecta clientes, processos e produção
                </h3>
                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-4 max-w-3xl">
                  A <strong>Tizza Tecnologia</strong> é a camada de tecnologia e inteligência do
                  PMG Group — dados, automação e integração que conectam clientes, processos e
                  produção em uma única experiência.
                </p>
                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
                  Nosso primeiro produto, o <strong>Kaiaki</strong>, transforma essa conexão em
                  operação: acompanhamento em tempo real, controle de processos e visibilidade de
                  ponta a ponta para quem converte embalagens flexíveis, rótulos e etiquetas.
                </p>
              </div>

              {/* 4 Pillars */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {pilaresQuemSomos.map((pilar, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                        {pilar.icon}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">{pilar.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">{pilar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Arquitetura do Ecossistema — fluxo Tizza -> Kaiaki -> PMG -> Cliente */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 mb-8 circuit-dots">
                <div className="flex items-center gap-2 mb-8 font-mono">
                  <Sparkles size={18} className="text-pmg-tizza" />
                  <span className="text-[11px] font-bold tracking-wide text-slate-300">arquitetura_do_ecossistema</span>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-2">
                  {fluxoEcossistema.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <div className={`flex-1 rounded-2xl border p-5 flex flex-col gap-2 ${item.color}`}>
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <span className="font-mono text-[10px] text-white/40">0{idx + 1}</span>
                        </div>
                        <div className="text-sm font-bold text-white">{item.title}</div>
                        <p className="text-xs text-slate-300 font-light leading-relaxed">{item.subtitle}</p>
                      </div>
                      {idx < fluxoEcossistema.length - 1 && (
                        <div className="flex items-center justify-center shrink-0 text-slate-600">
                          <div className="hidden lg:block w-4 border-t border-dashed border-slate-600" />
                          <ArrowRight size={14} className="hidden lg:block -mx-1" />
                          <ArrowDown size={18} className="lg:hidden" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Quick Contact Link */}
              <div className="mt-10 text-center">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pmg-tizza hover:text-white transition-colors"
                >
                  <span>Falar com a equipe Tizza</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tab-o-que-fazemos"
              id="o-que-fazemos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="scroll-mt-24"
            >
              {/* Grid of Main Service Areas */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {servicosOQueFazemos.map((servico) => (
                  <div
                    key={servico.id}
                    className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-pmg-tizza/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          {servico.icon}
                        </div>
                        <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${servico.tagColor}`}>
                          {servico.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pmg-tizza transition-colors">
                        {servico.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                        {servico.desc}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {servico.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 size={14} className="text-pmg-tizza shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <a
                        href={servico.link}
                        className="text-xs font-bold text-white group-hover:text-pmg-tizza uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                      >
                        <span>{servico.linkText}</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Engenharia Aplicada ao Ecossistema */}
              <div className="mt-10">
                <TerminalWindow label="tizza@engenharia:~">
                  <div className="p-8 sm:p-10">
                    <span className="font-mono text-[11px] font-medium text-pmg-tizza tracking-wide block mb-2">
                      engenharia_aplicada
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 max-w-2xl">
                      Tecnologia que transforma ideias em soluções
                    </h3>
                    <p className="text-slate-300 text-sm font-light leading-relaxed mb-8 max-w-3xl">
                      Criar um aplicativo ou um site hoje vai muito além de colocar uma ideia no ar.
                      Com uso estratégico de Inteligência Artificial, a Tizza desenvolve soluções
                      digitais sob medida para o ecossistema PMG — de aplicativos personalizados a
                      sites responsivos, funcionando em computadores, tablets e celulares.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                      {capacidadesTecnicas.map((cap, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10"
                        >
                          <div className="w-9 h-9 rounded-lg bg-pmg-tizza/10 text-pmg-tizza flex items-center justify-center shrink-0">
                            {cap.icon}
                          </div>
                          <span className="text-xs text-slate-200 font-light">{cap.label}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-slate-400 text-xs font-light leading-relaxed max-w-2xl border-t border-white/10 pt-6">
                      A tecnologia precisa trabalhar a favor do negócio — simplificando processos,
                      melhorando experiências e criando novas possibilidades.
                    </p>
                  </div>
                </TerminalWindow>
              </div>

              {/* Bottom Callout */}
              <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-pmg-tizza/10 border border-pmg-tizza/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Quer conectar sua operação à plataforma Tizza?
                  </h4>
                  <p className="text-xs text-slate-300 font-light">
                    Mostramos como o Kaiaki e os demais módulos se encaixam no seu processo de produção.
                  </p>
                </div>
                <a
                  href="#contato"
                  className="bg-pmg-tizza hover:bg-pmg-tizza/90 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 shadow-lg shadow-pmg-tizza/20"
                >
                  Solicitar Demonstração
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
