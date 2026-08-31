import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type SectionKey = 'quem-somos' | 'plataforma' | 'ecossistema' | 'blog';

type NavLink = { name: string; anchor: string };
type NavItem = { name: string; section: SectionKey; children?: NavLink[] };

const navItems: NavItem[] = [
  { name: 'Quem Somos', section: 'quem-somos' },
  {
    name: 'Plataforma',
    section: 'plataforma',
    children: [
      { name: 'Módulos Tizza', anchor: 'plataforma' },
      { name: 'Sistema Kaiaki', anchor: 'kaiaki' },
    ],
  },
  { name: 'Ecossistema', section: 'ecossistema' },
  { name: 'Blog', section: 'blog' },
];

interface NavbarProps {
  activeSection: SectionKey;
  onNavigate: (section: SectionKey, anchor?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktopMenu(name);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDesktopMenu(null), 150);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-pmg-navy/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg'
        : 'bg-pmg-navy/80 backdrop-blur-sm py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-6">

        {/* Brand Group with Official Logo */}
        <a
          href="#home"
          className="flex items-center shrink-0 group"
          id="nav-logo"
          onClick={(e) => { e.preventDefault(); onNavigate('quem-somos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <img
            src="https://i.ibb.co/WvtGBSxN/Logo-Tizza-BRANCO-01-1024x461.png"
            alt="Tizza Tecnologia"
            className="h-8 sm:h-9 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.children && openMenu(item.name)}
              onMouseLeave={() => item.children && scheduleClose()}
            >
              <button
                onClick={() => onNavigate(item.section, item.children?.[0]?.anchor)}
                className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider whitespace-nowrap py-2 transition-colors ${
                  activeSection === item.section ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.name}
                {item.children && <ChevronDown size={13} className="opacity-60" />}
              </button>

              {item.children && (
                <AnimatePresence>
                  {openDesktopMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 min-w-[220px] bg-pmg-navy border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2"
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => onNavigate(item.section, child.anchor)}
                          className="block w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap"
                        >
                          {child.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}

          <a
            href="#contato"
            id="nav-cta-btn"
            className="shrink-0 bg-pmg-tizza hover:bg-pmg-tizza/90 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md hover:shadow-pmg-tizza/20 flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Contato</span>
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="nav-mobile-toggle"
          aria-label="Abrir menu"
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full bg-pmg-navy/98 backdrop-blur-xl border-t border-white/10 px-6 py-6 lg:hidden shadow-2xl max-h-[75vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenMobileMenu(openMobileMenu === item.name ? null : item.name)}
                        className="w-full flex items-center justify-between text-sm font-medium text-slate-200 hover:text-pmg-tizza py-2.5 transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${openMobileMenu === item.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openMobileMenu === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 flex flex-col"
                          >
                            {item.children.map((child) => (
                              <button
                                key={child.name}
                                onClick={() => { onNavigate(item.section, child.anchor); setIsMobileMenuOpen(false); }}
                                className="text-left text-sm text-slate-400 hover:text-pmg-tizza py-2 transition-colors"
                              >
                                {child.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button
                      onClick={() => { onNavigate(item.section); setIsMobileMenuOpen(false); }}
                      className="block w-full text-left text-sm font-medium text-slate-200 hover:text-pmg-tizza py-2.5 transition-colors"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <a
                href="#contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-pmg-tizza text-white px-6 py-3 rounded-full font-bold text-center text-xs uppercase tracking-wider mt-3 shadow-lg shadow-pmg-tizza/20"
              >
                Falar com Especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
