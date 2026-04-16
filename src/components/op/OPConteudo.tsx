import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, HardHat, Brain } from '@phosphor-icons/react';

const G = 'linear-gradient(135deg, #C9851C 0%, #F0C040 55%, #D4952A 100%)';
const F = "'Montserrat', sans-serif";

const tracks = [
  {
    icon: HardHat,
    titulo: 'Visão Técnica — NR-01',
    subtitulo: 'Conformidade legal e segurança do trabalho',
    topicos: [
      'Fundamentos e histórico da Norma Regulamentadora 01',
      'Identificação e gerenciamento de riscos ocupacionais',
      'Elaboração do PGRO — Programa de Gerenciamento de Riscos',
      'Implementação prática em empresas de todos os portes',
      'Responsabilidades legais de gestores e colaboradores',
      'Como identificar e corrigir não-conformidades antes de auditorias',
    ],
  },
  {
    icon: Brain,
    titulo: 'Visão Comportamental & Saúde',
    subtitulo: 'Bem-estar, saúde mental e clima organizacional',
    topicos: [
      'Saúde mental no ambiente de trabalho segundo a NR-01',
      'Como implementar políticas de bem-estar eficazes',
      'Fatores de risco psicossocial e como mitigá-los',
      'Comunicação não-violenta para lideranças e equipes',
      'Reconhecimento e prevenção de burnout corporativo',
      'Construção de uma cultura organizacional saudável',
    ],
  },
];

export default function OPConteudo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="conteudo"
      ref={ref}
      style={{ background: '#0B0C18', borderTop: '1px solid rgba(212,149,42,0.12)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        {/* Header */}
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
              Grade Curricular
            </span>
            <span style={{ display: 'block', width: 24, height: 1, background: G }} />
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2,
          }}>
            O que você vai{' '}
            <em style={{ fontStyle: 'italic', background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              aprender no curso
            </em>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed"
            style={{ fontFamily: F, color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}>
            Nossos cursos combinam conformidade técnica com desenvolvimento humano —
            dois pilares indispensáveis para empresas que respeitam seus colaboradores.
          </p>
        </motion.div>

        {/* Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tracks.map(({ icon: Icon, titulo, subtitulo, topicos }, ti) => (
            <motion.div
              key={ti}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ti * 0.15 }}
              style={{
                background: 'linear-gradient(160deg, #0F1026 0%, #0C0D1E 100%)',
                border: '1px solid rgba(212,149,42,0.15)',
                borderRadius: '6px',
                overflow: 'hidden',
              }}
            >
              {/* Track header */}
              <div className="p-7 pb-6 flex items-start gap-4"
                style={{ borderBottom: '1px solid rgba(212,149,42,0.1)' }}>
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,149,42,0.08)', border: '1px solid rgba(212,149,42,0.2)', borderRadius: '4px' }}>
                  <Icon size={22} color="#D4952A" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {titulo}
                  </h3>
                  <p className="text-xs mt-1" style={{ fontFamily: F, color: 'rgba(212,149,42,0.6)' }}>
                    {subtitulo}
                  </p>
                </div>
              </div>

              {/* Topics */}
              <ul className="p-7 flex flex-col gap-4">
                {topicos.map((topico, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + ti * 0.15 + i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={16} color="#D4952A" weight="fill" className="flex-shrink-0 mt-0.5" style={{ opacity: 0.8 }} />
                    <span className="text-sm leading-snug"
                      style={{ fontFamily: F, color: 'rgba(255,255,255,0.95)', fontWeight: 400 }}>
                      {topico}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-center text-xs"
          style={{ fontFamily: F, color: 'rgba(255,255,255,0.2)' }}
        >
          Conteúdo atualizado conforme as mais recentes alterações da NR-01 e legislação complementar.
        </motion.p>
      </div>
    </section>
  );
}
