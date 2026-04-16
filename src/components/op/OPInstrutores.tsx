import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { LinkedinLogo } from '@phosphor-icons/react';

const G = 'linear-gradient(135deg, #C9851C 0%, #F0C040 55%, #D4952A 100%)';
const F = "'Montserrat', sans-serif";

const instrutores = [
  { nome: 'Katia Conte', especialidade: 'Especialista NR-01', cargo: 'Bacharel em Ciências Contábeis', bio: 'Referência nacional em treinamentos de conformidade com NR-01, Katia já capacitou equipes em dezenas de empresas de todos os portes. Sua metodologia combina rigor técnico com didática acessível.', iniciais: 'KC', destaque: true, tag: 'Instrutora Principal' },
  { nome: 'Andrea Palma', especialidade: 'Psicologia Organizacional', cargo: 'Psicóloga — 30+ anos de experiência', bio: 'Com mais de três décadas dedicadas à saúde mental corporativa, Andrea é pioneira em programas de bem-estar baseados nas normas regulamentadoras. Palestrante e autora reconhecida na área.', iniciais: 'AP', destaque: true, tag: 'Instrutora de Saúde Mental' },
  { nome: 'Mirian Raquel Santos', especialidade: 'Consultoria Financeira', cargo: 'Economista', bio: 'Economista com trajetória sólida em consultoria empresarial, com foco na sustentabilidade financeira de pequenas e médias empresas e conformidade com obrigações trabalhistas.', iniciais: 'MR', destaque: false, tag: 'Instrutora' },
  { nome: 'Manoel Peixoto', especialidade: 'Segurança do Trabalho', cargo: 'Técnico em SST', bio: 'Especialista em normas regulamentadoras com vasta experiência em campo. Atua na implementação de programas de prevenção de riscos e treinamento de brigadas de emergência.', iniciais: 'MP', destaque: false, tag: 'Instrutor' },
  { nome: 'Eduardo Ferreira', especialidade: 'Gestão de Pessoas', cargo: 'Administrador de Empresas', bio: 'Administrador com especialização em gestão estratégica de pessoas e liderança organizacional. Consultor em programas de desenvolvimento de liderança e cultura corporativa.', iniciais: 'EF', destaque: false, tag: 'Instrutor' },
  { nome: 'Yuri Alexander', especialidade: 'Saúde Ocupacional', cargo: 'Fisioterapeuta do Trabalho', bio: 'Especializado em ergonomia e bem-estar ocupacional, Yuri traduz as exigências normativas em práticas concretas de prevenção de lesões e melhoria do ambiente de trabalho.', iniciais: 'YA', destaque: false, tag: 'Instrutor' },
];

function Card({ inst, index, inView }: { inst: typeof instrutores[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.09 }}
      className="flex gap-5 p-6 transition-all duration-300"
      style={{
        background: inst.destaque ? 'linear-gradient(160deg, #141530 0%, #0F102A 100%)' : 'linear-gradient(160deg, #0F1026 0%, #0B0C1C 100%)',
        border: inst.destaque ? '1px solid rgba(212,149,42,0.35)' : '1px solid rgba(212,149,42,0.1)',
        borderRadius: '6px',
        boxShadow: inst.destaque ? '0 0 30px rgba(212,149,42,0.08)' : 'none',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.4)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(212,149,42,0.1)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = inst.destaque ? 'rgba(212,149,42,0.35)' : 'rgba(212,149,42,0.1)';
        (e.currentTarget as HTMLElement).style.boxShadow = inst.destaque ? '0 0 30px rgba(212,149,42,0.08)' : 'none';
      }}
    >
      {/* Avatar */}
      <div className="flex-shrink-0 flex items-center justify-center font-bold rounded-sm"
        style={{
          width: inst.destaque ? 68 : 54, height: inst.destaque ? 68 : 54,
          background: 'linear-gradient(135deg, rgba(212,149,42,0.2), rgba(212,149,42,0.06))',
          border: '1px solid rgba(212,149,42,0.25)',
          color: '#D4952A',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: inst.destaque ? '1.2rem' : '0.95rem',
        }}>
        {inst.iniciais}
      </div>

      <div className="flex flex-col gap-2 min-w-0">
        <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 inline-block w-fit"
          style={{
            fontFamily: F, background: inst.destaque ? 'rgba(212,149,42,0.12)' : 'rgba(212,149,42,0.06)',
            color: '#D4952A', border: '1px solid rgba(212,149,42,0.18)', borderRadius: '2px',
          }}>
          {inst.tag}
        </span>
        <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: inst.destaque ? '1.1rem' : '1rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.3 }}>
          {inst.nome}
        </h3>
        <span className="text-xs" style={{ fontFamily: F, color: 'rgba(212,149,42,0.65)' }}>
          {inst.especialidade} · {inst.cargo}
        </span>
        <p className="text-xs leading-relaxed" style={{ fontFamily: F, color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}>
          {inst.bio}
        </p>
        <div className="flex items-center justify-between pt-1">
          <button className="text-[11px] tracking-wider uppercase transition-colors duration-200"
            style={{ fontFamily: F, color: 'rgba(212,149,42,0.5)' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#D4952A'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(212,149,42,0.5)'}>
            Ver perfil completo →
          </button>
          <button className="transition-opacity duration-200 hover:opacity-70" style={{ color: 'rgba(212,149,42,0.4)' }}>
            <LinkedinLogo size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function OPInstrutores() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const destaques = instrutores.filter(i => i.destaque);
  const outros = instrutores.filter(i => !i.destaque);

  return (
    <section
      id="instrutores"
      ref={ref}
      style={{ background: '#0B0C18', borderTop: '1px solid rgba(212,149,42,0.12)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 pointer-events-none" style={{
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(30,35,90,0.5) 0%, transparent 70%)',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span style={{ display: 'block', width: 24, height: 1, background: G }} />
            <span className="text-[11px] tracking-[0.3em] uppercase"
              style={{ fontFamily: F, color: '#D4952A' }}>
              Corpo Docente
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2,
            }}>
              Conheça seus{' '}
              <em style={{ fontStyle: 'italic', background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                professores
              </em>
            </h2>
            <p className="text-sm max-w-xs"
              style={{ fontFamily: F, color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>
              Especialistas com décadas de experiência real, não apenas teoria.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {destaques.map((inst, i) => <Card key={inst.nome} inst={inst} index={i} inView={inView} />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {outros.map((inst, i) => <Card key={inst.nome} inst={inst} index={i + 2} inView={inView} />)}
        </div>
      </div>
    </section>
  );
}
