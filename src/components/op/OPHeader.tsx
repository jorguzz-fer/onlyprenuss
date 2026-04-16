import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const G = 'linear-gradient(135deg, #C9851C 0%, #F0C040 55%, #D4952A 100%)';
const F = "'Montserrat', sans-serif";

const navLinks = [
  { label: 'Cursos', href: '#cursos' },
  { label: 'Instrutores', href: '#instrutores' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export default function OPHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(7,8,14,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,149,42,0.15)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" onClick={e => handleNavClick(e, '#hero')} className="flex flex-col leading-none group">
            <span className="font-bold tracking-tight group-hover:opacity-90 transition-opacity"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1.35rem',
                background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                letterSpacing: '-0.01em',
              }}>
              ONLY PLENUS$
            </span>
            <span className="text-[10px] tracking-[0.28em] uppercase"
              style={{ fontFamily: F, color: 'rgba(212,149,42,0.45)' }}>
              Consultoria
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="text-[13px] tracking-widest uppercase transition-colors duration-200"
                style={{ fontFamily: F, color: 'rgba(255,255,255,0.88)', fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#D4952A')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.88)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href="#contato"
              onClick={e => handleNavClick(e, '#contato')}
              className="px-5 py-2 text-[12px] font-bold tracking-wider uppercase transition-all duration-200"
              style={{
                fontFamily: F,
                background: G, color: '#07080E',
                borderRadius: '4px',
                boxShadow: '0 0 16px rgba(212,149,42,0.25)',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(212,149,42,0.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(212,149,42,0.25)'}
            >
              Cadastrar / Login
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
            {mobileOpen ? <X size={24} color="#D4952A" /> : <List size={24} color="#D4952A" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-20"
            style={{ background: 'rgba(7,8,14,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={e => handleNavClick(e, link.href)}
                  className="text-2xl tracking-widest uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: 'rgba(255,255,255,0.95)' }}>
                  {link.label}
                </a>
              ))}
              <a href="#contato" onClick={e => handleNavClick(e, '#contato')}
                className="mt-4 px-8 py-3 text-sm font-bold tracking-wider uppercase"
                style={{ fontFamily: F, background: G, color: '#07080E', borderRadius: '4px' }}>
                Cadastrar / Login
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
