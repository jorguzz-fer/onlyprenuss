import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Medal, Users, BookOpen, Globe } from '@phosphor-icons/react';

const G = 'linear-gradient(135deg, #C9851C 0%, #F0C040 55%, #D4952A 100%)';

const stats = [
  { icon: BookOpen, num: '6+', label: 'Cursos Certificados' },
  { icon: Users, num: '6', label: 'Instrutores Especialistas' },
  { icon: Medal, num: 'NR-01', label: 'Conformidade Legal' },
  { icon: Globe, num: '3', label: 'Idiomas Disponíveis' },
];

export default function OPSobre() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="sobre"
      ref={ref}
      style={{
        background: '#0B0C18',
        borderTop: '1px solid rgba(212,149,42,0.12)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative swoosh bottom-right */}
      <div className="absolute -bottom-40 -right-40 pointer-events-none" style={{
        width: 480,
        height: 480,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 70% 70%, rgba(212,149,42,0.07) 0%, transparent 60%)',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span style={{ display: 'block', width: 24, height: 1, background: G }} />
              <span className="text-[11px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#D4952A' }}>
                Quem Somos
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#FAFAFA',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}>
              Excelência em{' '}
              <em style={{ fontStyle: 'italic', background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                formação corporativa
              </em>{' '}
              há mais de uma década
            </h2>

            <div style={{
              width: 48, height: 2,
              background: G,
              marginTop: 24, marginBottom: 24,
            }} />

            <p className="text-base leading-loose mb-6" style={{
              fontFamily: "'DM Sans', sans-serif",
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 300,
            }}>
              A Only Plenuss Consultoria nasce da convergência entre experiência
              técnica e inovação pedagógica. Somos uma plataforma especializada
              em treinamentos certificados que preparam empresas e profissionais
              para os desafios da conformidade normativa e do bem-estar corporativo.
            </p>

            <p className="text-base leading-loose" style={{
              fontFamily: "'DM Sans', sans-serif",
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 300,
            }}>
              Nossos cursos atendem às exigências da NR-01, saúde mental no
              ambiente de trabalho e gestão de pessoas — com instrutores que
              trazem décadas de vivência no campo para cada módulo.
            </p>

            <div className="mt-10">
              <a
                href="#cursos"
                onClick={e => { e.preventDefault(); document.querySelector('#cursos')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-all duration-200"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
              >
                Ver nossos cursos →
              </a>
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, num, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="p-8 flex flex-col gap-4 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #0F1126 0%, #0C0D1E 100%)',
                  border: '1px solid rgba(212,149,42,0.15)',
                  borderRadius: '4px',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.4)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(212,149,42,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.15)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-sm"
                  style={{ background: 'rgba(212,149,42,0.1)', border: '1px solid rgba(212,149,42,0.2)' }}>
                  <Icon size={20} color="#D4952A" />
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.75rem', fontWeight: 700, lineHeight: 1,
                    background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>{num}</div>
                  <div className="text-xs tracking-wide mt-1" style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: 'rgba(255,255,255,0.95)',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>{label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
