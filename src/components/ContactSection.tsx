import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { TerminalWindow } from './TerminalWindow';

export const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    marcaInteresse: 'Tizza Tecnologia (Sistema Kaiaki)',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pmg-tizza/10 text-pmg-tizza font-mono text-[11px] font-medium tracking-wide mb-4">
                atendimento
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-pmg-navy tracking-tight mb-4">
                Fale com nossos especialistas
              </h2>
              <p className="text-slate-600 text-base font-light mb-8">
                Prontos para mostrar como o Kaiaki e os demais módulos da plataforma se conectam à
                sua operação.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3 p-5 bg-white rounded-2xl border border-slate-200/80 mb-6">
                <a
                  href="mailto:contato@tizzatecnologia.com.br"
                  className="flex items-center gap-3 text-slate-700 hover:text-pmg-tizza transition-colors"
                >
                  <div className="w-9 h-9 bg-pmg-tizza/10 text-pmg-tizza rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">E-mail Comercial</div>
                    <div className="text-xs font-bold text-pmg-navy">contato@tizzatecnologia.com.br</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <TerminalWindow label="tizza@contato:~">
            <div className="p-8 sm:p-10 text-white relative overflow-hidden">

              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-pmg-tizza/20 text-pmg-tizza mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mensagem enviada com sucesso!</h3>
                  <p className="text-slate-300 text-sm max-w-sm mx-auto mb-6">
                    Agradecemos o contato, <strong>{formData.nome}</strong>. Nossa equipe técnica responderá prontamente.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        nome: '',
                        empresa: '',
                        email: '',
                        telefone: '',
                        marcaInteresse: 'Tizza Tecnologia (Sistema Kaiaki)',
                        mensagem: ''
                      });
                    }}
                    className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-xs font-semibold transition-all"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-[10px] font-mono font-bold tracking-wide text-pmg-tizza">solicitacao_online</span>
                    <h3 className="text-2xl font-bold text-white">Solicite atendimento ou cotação</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">Nome *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:border-pmg-tizza focus:bg-white/10 outline-none transition-all" 
                          placeholder="Seu nome" 
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">Empresa / Convertedor *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:border-pmg-tizza focus:bg-white/10 outline-none transition-all" 
                          placeholder="Nome da sua empresa" 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">E-mail Corporativo *</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:border-pmg-tizza focus:bg-white/10 outline-none transition-all" 
                          placeholder="voce@empresa.com.br" 
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">Telefone / WhatsApp</label>
                        <input 
                          type="tel" 
                          value={formData.telefone}
                          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:border-pmg-tizza focus:bg-white/10 outline-none transition-all" 
                          placeholder="(11) 99999-9999" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">Operação / Solução de Interesse</label>
                      <select
                        value={formData.marcaInteresse}
                        onChange={(e) => setFormData({ ...formData, marcaInteresse: e.target.value })}
                        className="w-full bg-slate-800 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:border-pmg-tizza outline-none transition-all"
                      >
                        <option value="Tizza Tecnologia (Sistema Kaiaki)">Tizza Tecnologia (Sistema Kaiaki)</option>
                        <option value="Tizza Tecnologia (CloudFlow)">Tizza Tecnologia (CloudFlow)</option>
                        <option value="PMG Flexo (Banda Larga)">PMG Flexo (Banda Larga)</option>
                        <option value="PMG Narrow (Banda Estreita / Rótulos)">PMG Narrow (Banda Estreita / Rótulos)</option>
                        <option value="VP Filmes (Distribuição BOPP / PEAD)">VP Filmes (Distribuição BOPP / PEAD)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">Mensagem ou Descrição da Demanda</label>
                      <textarea 
                        rows={3}
                        value={formData.mensagem}
                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:border-pmg-tizza focus:bg-white/10 outline-none transition-all" 
                        placeholder="Descreva brevemente sua necessidade..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-pmg-tizza hover:bg-pmg-tizza/90 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-pmg-tizza/20 flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      <span>Enviar Solicitação</span>
                    </button>
                  </form>
                </>
              )}
            </div>
            </TerminalWindow>
          </div>

        </div>
      </div>
    </section>
  );
};
