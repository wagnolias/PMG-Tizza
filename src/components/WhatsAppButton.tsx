import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton = () => (
  <a
    href="#contato"
    aria-label="Falar com um especialista Tizza Tecnologia"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center justify-center"
  >
    <MessageSquare size={26} />
    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-pmg-navy px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
      Fale com um especialista agora
    </span>
  </a>
);
