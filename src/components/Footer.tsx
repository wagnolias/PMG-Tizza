import React from 'react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pmg-navy text-white border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Brand block */}
          <div className="lg:col-span-1">
            <img
              src="https://i.ibb.co/WvtGBSxN/Logo-Tizza-BRANCO-01-1024x461.png"
              alt="Tizza Tecnologia"
              className="h-8 w-auto object-contain mb-4"
              referrerPolicy="no-referrer"
            />
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-5">
              A inteligência digital do ecossistema PMG Group.
            </p>
            <a
              href="https://wagnolias.github.io/PMG-Group-A/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-5 group w-fit"
            >
              <span className="text-[11px] text-slate-400 font-light">Uma empresa do ecossistema</span>
              <img
                src={`${import.meta.env.BASE_URL}assets/pmg-group-white.png`}
                alt="PMG Group"
                className="h-4 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#apresentacao" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#plataforma" className="hover:text-white transition-colors">Plataforma</a></li>
              <li><a href="#ecossistema" className="hover:text-white transition-colors">Ecossistema</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Ecossistema</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="https://wagnolias.github.io/PMG-Flexo-2/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  PMG Flexo <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a href="https://wagnolias.github.io/PMG-Narrow/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  PMG Narrow <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.vpfilmes.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  VP Filmes <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Contato</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>contato@tizzatecnologia.com.br</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2026 Tizza Tecnologia · CNPJ em processo de atualização</span>
          <button onClick={scrollToTop} className="hover:text-white transition-colors">
            Inteligência que conecta a produção
          </button>
        </div>

      </div>
    </footer>
  );
};
