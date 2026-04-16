import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Brain, HardHat, ChartBar } from '@phosphor-icons/react';

const G = 'linear-gradient(135deg, #C9851C 0%, #F0C040 55%, #D4952A 100%)';
const GH = 'linear-gradient(135deg, #E09A2A 0%, #FFD050 55%, #E09A2A 100%)';
const F = "'Montserrat', sans-serif";

const cursos = [
  {
    icon: Brain,
    categoria: 'Saúde & Bem-Estar',
    titulo: 'Saúde Mental no Trabalho',
    descricao: 'Como implementar políticas eficazes baseadas na Norma NR-01 e direitos do trabalho. Estratégias práticas para gestores e colaboradores.',
    instrutor: 'Andrea Palma',
    instrutorol: 'Psicóloga — 30+ anos de experiência',
    tag: 'Destaque',
  },
  {
    icon: HardHat,
    categoria: 'Conformidade NR-01',
    titulo: 'NR-01 para Colaboradores',
    descricao: 'Curso completo sobre os fundamentos da Norma Regulamentadora 01. Capacitação prática para equipes de todos os níveis hierárquicos.',
    instrutor: 'Katia Conte',
    instrutorol: 'Bacharel em Ciências Contábeis',
    tag: 'Mais Procurado',
  },
  {
    icon: ChartBar,
    categoria: 'Liderança & Gestão',
    titulo: 'NR-01 para Gestores e Diretores',
    descricao: 'Masterclass executiva sobre responsabilidades legais, implementação de PGRO e gestão estratégica de riscos ocupacionais.',
    instrutor: 'Katia Conte',
    instrutorol: 'Bacharel em Ciências Contábeis',
    tag: 'Executivo',
  },
];

export default function OPCursos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="cursos"
      ref={ref}
      style={{ background: '#07080E', borderTop: '1px solid rgba(212,149,42,0.12)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Glow top-right */}
      <div className="absolute top-0 right-0 pointer-events-none" style={{
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(212,149,42,0.06) 0%, transparent 70%)',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span style={{ display: 'block', width: 24, height: 1, background: G }} />
              <span className="text-[11px] tracking-[0.3em] uppercase"
                style={{ fontFamily: F, color: '#D4952A' }}>
                Nossos Cursos
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2, letterSpacing: '-0.01em',
            }}>
              Formação certificada para{' '}
              <em style={{ fontStyle: 'italic', background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                cada nível
              </em>
            </h2>
          </div>
          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase whitespace-nowrap transition-opacity duration-200 hover:opacity-60"
            style={{ fontFamily: F, color: 'rgba(212,149,42,0.7)', fontWeight: 500 }}
          >
            Ver todos os cursos <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cursos.map((curso, i) => {
            const Icon = curso.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="flex flex-col transition-all duration-300 group"
                style={{
                  background: 'linear-gradient(160deg, #0F1026 0%, #0B0C1C 100%)',
                  border: '1px solid rgba(212,149,42,0.12)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.4)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(212,149,42,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.12)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Gold top bar */}
                <div style={{ height: 2, background: G }} />

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon + tag */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center"
                      style={{ background: 'rgba(212,149,42,0.08)', border: '1px solid rgba(212,149,42,0.18)', borderRadius: '4px' }}>
                      <Icon size={22} color="#D4952A" />
                    </div>
                    <span className="text-[10px] tracking-widest uppercase px-2 py-1"
                      style={{
                        fontFamily: F, background: 'rgba(212,149,42,0.1)', color: '#D4952A',
                        border: '1px solid rgba(212,149,42,0.2)', borderRadius: '3px',
                      }}>
                      {curso.tag}
                    </span>
                  </div>

                  <span className="text-[11px] tracking-wider uppercase mb-2"
                    style={{ fontFamily: F, color: 'rgba(212,149,42,0.6)' }}>
                    {curso.categoria}
                  </span>

                  <h3 className="mb-4" style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.3,
                  }}>
                    {curso.titulo}
                  </h3>

                  <p className="text-sm leading-relaxed flex-1" style={{
                    fontFamily: F, color: 'rgba(255,255,255,0.9)', fontWeight: 300,
                  }}>
                    {curso.descricao}
                  </p>

                  <div style={{ height: 1, background: 'rgba(212,149,42,0.1)', margin: '24px 0' }} />

                  {/* Instructor */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 flex items-center justify-center text-xs font-bold rounded-full"
                      style={{
                        background: 'rgba(212,149,42,0.15)', color: '#D4952A',
                        fontFamily: "'Montserrat', sans-serif",
                        border: '1px solid rgba(212,149,42,0.25)', flexShrink: 0,
                      }}>
                      {curso.instrutor.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold"
                        style={{ fontFamily: F, color: 'rgba(255,255,255,0.85)' }}>
                        {curso.instrutor}
                      </div>
                      <div className="text-[11px]"
                        style={{ fontFamily: F, color: 'rgba(255,255,255,0.85)' }}>
                        {curso.instrutorol}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    className="w-full py-3 text-xs font-bold tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2"
                    style={{
                      fontFamily: F,
                      border: '1px solid rgba(212,149,42,0.3)',
                      color: '#D4952A',
                      borderRadius: '4px',
                      background: 'transparent',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = G;
                      (e.currentTarget as HTMLElement).style.color = '#07080E';
                      (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = '#D4952A';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.3)';
                    }}
                  >
                    Conhecer o Curso <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
