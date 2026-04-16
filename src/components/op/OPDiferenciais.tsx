import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Certificate, Lightning, Scales, Monitor } from '@phosphor-icons/react';

const G = 'linear-gradient(135deg, #C9851C 0%, #F0C040 55%, #D4952A 100%)';
const F = "'Montserrat', sans-serif";

const diferenciais = [
  { icon: Scales, titulo: 'Conformidade Legal', descricao: 'Todos os nossos cursos são desenvolvidos em conformidade com a legislação trabalhista brasileira, especialmente a NR-01 e suas atualizações.', num: '01' },
  { icon: Certificate, titulo: 'Certificação Reconhecida', descricao: 'Emitimos certificados de capacitação validados, que podem ser apresentados em auditorias, fiscalizações e processos de conformidade empresarial.', num: '02' },
  { icon: Lightning, titulo: 'Metodologia Atualizada', descricao: 'Conteúdos revisados constantemente para refletir as mais recentes alterações normativas e as melhores práticas internacionais de saúde ocupacional.', num: '03' },
  { icon: Monitor, titulo: 'Flexibilidade Online', descricao: 'Plataforma 100% digital com acesso pelo celular, tablet ou computador. Estude no seu ritmo, no horário que for mais conveniente para você e sua equipe.', num: '04' },
];

export default function OPDiferenciais() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      style={{ background: '#07080E', borderTop: '1px solid rgba(212,149,42,0.12)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(212,149,42,0.05) 0%, transparent 60%)',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span style={{ display: 'block', width: 24, height: 1, background: G }} />
            <span className="text-[11px] tracking-[0.3em] uppercase"
              style={{ fontFamily: F, color: '#D4952A' }}>
              Por que a Only Plenuss?
            </span>
            <span style={{ display: 'block', width: 24, height: 1, background: G }} />
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2,
          }}>
            O que nos torna{' '}
            <em style={{ fontStyle: 'italic', background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              diferentes
            </em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {diferenciais.map(({ icon: Icon, titulo, descricao, num }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="p-8 flex flex-col gap-6 relative transition-all duration-300"
              style={{
                background: 'linear-gradient(160deg, #0F1026 0%, #0C0D1E 100%)',
                border: '1px solid rgba(212,149,42,0.12)',
                borderRadius: '6px',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.35)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(212,149,42,0.07)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.12)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <span className="absolute top-4 right-5 select-none pointer-events-none"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '4rem', fontWeight: 900, color: 'rgba(212,149,42,0.05)', lineHeight: 1 }}>
                {num}
              </span>
              <div className="w-12 h-12 flex items-center justify-center"
                style={{ background: 'rgba(212,149,42,0.08)', border: '1px solid rgba(212,149,42,0.2)', borderRadius: '4px' }}>
                <Icon size={22} color="#D4952A" />
              </div>
              <div>
                <h3 className="mb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF' }}>
                  {titulo}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: F, color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}>
                  {descricao}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#cursos"
            onClick={e => { e.preventDefault(); document.querySelector('#cursos')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-3 px-10 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-200"
            style={{
              fontFamily: F, background: G, color: '#07080E', borderRadius: '4px',
              boxShadow: '0 0 24px rgba(212,149,42,0.3)',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 36px rgba(212,149,42,0.45)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(212,149,42,0.3)'}
          >
            Começar agora →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
