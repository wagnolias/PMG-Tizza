import React from 'react';

interface TerminalWindowProps {
  label: string;
  status?: string;
  className?: string;
  children: React.ReactNode;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ label, status = 'online', className = '', children }) => (
  <div className={`rounded-2xl border border-white/10 terminal-chrome shadow-2xl overflow-hidden font-mono ${className}`}>
    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
      </div>
      <span className="text-[10px] text-slate-400 tracking-wide">{label}</span>
      <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {status}
      </span>
    </div>
    {children}
  </div>
);
