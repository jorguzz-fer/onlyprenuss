import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Buildings, UserCircle, UsersThree, FirstAidKit } from '@phosphor-icons/react';

const G = 'linear-gradient(135deg, #C9851C 0%, #F0C040 55%, #D4952A 100%)';
const F = "'Montserrat', sans-serif";

const publicos = [
  {
    icon: Buildings,
    num: '01',
    titulo: 'Empresas de todos os portes',
    descricao: 'Que precisam adequar suas práticas à NR-01 e evitar autuações do Ministério do Trabalho. Seja você uma startup, PME ou grande corporação, a conformidade é obrigatória.',
  },
  {
    icon: UserCircle,
    num: '02',
    titulo: 'Colaboradores e técnicos',
    descricao: 'Que querem entender seus direitos e deveres segundo a legislação vigente, além de obter certificação reconhecida que agrega valor ao currículo e à carreira.',
  },
  {
    icon: UsersThree,
    num: '03',
    titulo: 'Gestores e diretores',
    descricao: 'Que precisam liderar equipes com responsabilidade jurídica e implementar programas de saúde e segurança do trabalho de forma estratégica e documentada.',
  },
  {
    icon: FirstAidKit,
    num: '04',
    titulo: 'Profissionais de RH e SST',
    descricao: 'Que desejam aprofundar o conhecimento em saúde mental corporativa, gerenciamento de riscos psicossociais e criação de ambientes de trabalho mais seguros e saudáveis.',
  },
];

export default function OPParaQuem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      style={{ background: '#07080E', borderTop: '1px solid rgba(212,149,42,0.12)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Large text bg */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          fontWeight: 900,
          color: 'rgba(212,149,42,0.025)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
          whiteSpace: 'nowrap',
        }}>PARA QUEM?</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span style={{ display: 'block', width: 24, height: 1, background: G }} />
            <span className="text-[11px] tracking-[0.3em] uppercase"
              style={{ fontFamily: F, color: '#D4952A' }}>
              Público-alvo
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2,
          }}>
            O treinamento da Only Plenuss{' '}
            <em style={{ fontStyle: 'italic', background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              é para você
            </em>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {publicos.map(({ icon: Icon, num, titulo, descricao }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-6 p-8 transition-all duration-300"
              style={{
                background: 'linear-gradient(160deg, #0F1026 0%, #0B0C1C 100%)',
                border: '1px solid rgba(212,149,42,0.12)',
                borderRadius: '6px',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.35)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(212,149,42,0.06)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.12)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div className="flex-shrink-0">
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '2.5rem', fontWeight: 900, lineHeight: 1,
                  background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  opacity: 0.6,
                }}>{num}</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Icon size={16} color="rgba(212,149,42,0.7)" />
                  <h3 style={{ fontFamily: F, fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {titulo}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed"
                  style={{ fontFamily: F, color: 'rgba(255,255,255,0.92)', fontWeight: 300 }}>
                  {descricao}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-12 flex items-center gap-4 flex-wrap"
        >
          <a
            href="#precos"
            onClick={e => { e.preventDefault(); document.querySelector('#precos')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-200"
            style={{
              fontFamily: F, background: G, color: '#07080E', borderRadius: '4px',
              boxShadow: '0 0 24px rgba(212,149,42,0.3)',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 36px rgba(212,149,42,0.45)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(212,149,42,0.3)'}
          >
            Quero me matricular →
          </a>
          <span className="text-xs" style={{ fontFamily: F, color: 'rgba(255,255,255,0.95)' }}>
            Acesso imediato após a matrícula
          </span>
        </motion.div>
      </div>
    </section>
  );
}
