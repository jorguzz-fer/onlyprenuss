import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';

const G = 'linear-gradient(135deg, #C9851C 0%, #F0C040 55%, #D4952A 100%)';
const GH = 'linear-gradient(135deg, #E09A2A 0%, #FFD050 55%, #E09A2A 100%)';

const beneficios = [
  'Certificação NR-01 reconhecida pelo Ministério do Trabalho',
  'Instrutores com décadas de experiência de campo',
  'Acesso vitalício ao conteúdo após a matrícula',
  'Suporte direto com especialistas durante o curso',
];

export default function OPHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#07080E' }}
    >
      {/* Deep radial glow — blue-purple center */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 80% at 50% 40%, rgba(30,35,90,0.7) 0%, transparent 70%)',
      }} />

      {/* Gold glow — right side behind photo */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 85% 50%, rgba(212,149,42,0.12) 0%, transparent 65%)',
      }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(212,149,42,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(212,149,42,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* Decorative swoosh — bottom left */}
      <div className="absolute -bottom-32 -left-32 pointer-events-none" style={{
        width: 520,
        height: 520,
        borderRadius: '50%',
        border: '80px solid transparent',
        background: 'transparent',
        boxShadow: 'inset 0 0 0 2px rgba(212,149,42,0.12)',
        transform: 'rotate(-25deg)',
        filter: 'blur(1px)',
      }} />
      <div className="absolute -bottom-20 -left-20 pointer-events-none" style={{
        width: 360,
        height: 360,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 70%, rgba(212,149,42,0.10) 0%, transparent 60%)',
      }} />

      {/* Decorative swoosh — top right */}
      <div className="absolute -top-40 -right-40 pointer-events-none" style={{
        width: 600,
        height: 600,
        borderRadius: '50%',
        border: '60px solid transparent',
        boxShadow: 'inset 0 0 0 1px rgba(212,149,42,0.08)',
        transform: 'rotate(15deg)',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span style={{ display: 'block', width: 28, height: 1, background: G }} />
              <span className="text-[11px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#D4952A' }}>
                Only Plenuss Consultoria
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                lineHeight: 1.15,
                color: '#FAFAFA',
                fontWeight: 800,
                letterSpacing: '-0.02em',
              }}
            >
              Capacite sua equipe e{' '}
              <em style={{
                fontStyle: 'italic',
                background: G,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                conquiste a conformidade
              </em>{' '}
              com a NR-01
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-6 text-base leading-loose max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}
            >
              Faça parte de um seleto grupo de empresas que protege seus
              colaboradores e se mantém em conformidade com a legislação
              trabalhista — com a assessoria de quem entende do assunto.
            </motion.p>

            {/* Checklist */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-col gap-3"
            >
              {beneficios.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={18} color="#D4952A" weight="fill" className="flex-shrink-0 mt-0.5" />
                  <span className="text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(180,185,220,0.7)', fontWeight: 300 }}>
                    {b}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#precos"
                onClick={e => { e.preventDefault(); document.querySelector('#precos')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-200 group"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: G,
                  color: '#07080E',
                  borderRadius: '4px',
                  boxShadow: '0 0 30px rgba(212,149,42,0.35), 0 4px 16px rgba(0,0,0,0.4)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = GH;
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(212,149,42,0.5), 0 4px 20px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = G;
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(212,149,42,0.35), 0 4px 16px rgba(0,0,0,0.4)';
                }}
              >
                Quero me Matricular
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#conteudo"
                onClick={e => { e.preventDefault(); document.querySelector('#conteudo')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-200"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  border: '1px solid rgba(212,149,42,0.4)',
                  color: 'rgba(212,149,42,0.85)',
                  borderRadius: '4px',
                  background: 'rgba(212,149,42,0.04)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#D4952A';
                  (e.currentTarget as HTMLElement).style.color = '#F0C040';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(212,149,42,0.10)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.4)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(212,149,42,0.85)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(212,149,42,0.04)';
                }}
              >
                Ver conteúdo
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-10 flex items-center gap-6 flex-wrap"
              style={{ borderTop: '1px solid rgba(212,149,42,0.15)', paddingTop: 20 }}
            >
              {[
                { num: '6+', label: 'Cursos' },
                { num: '6', label: 'Instrutores' },
                { num: '100%', label: 'Online' },
                { num: 'NR-01', label: 'Certificado' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.1rem', fontWeight: 700,
                    background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>{s.num}</span>
                  <span className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.95)' }}>{s.label}</span>
                  {i < 3 && <span style={{ marginLeft: 12, color: 'rgba(212,149,42,0.2)', fontSize: 18 }}>·</span>}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — instructor photo area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto" style={{ maxWidth: 460 }}>
              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 z-10 pointer-events-none" style={{
                width: 80, height: 80,
                borderTop: '2px solid transparent',
                borderLeft: '2px solid transparent',
                backgroundImage: `${G}, ${G}`,
                backgroundOrigin: 'border-box',
                backgroundClip: 'border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'destination-out',
                maskComposite: 'exclude',
              }} />
              {/* Simpler corner accents */}
              <div className="absolute -top-3 -left-3 z-10 pointer-events-none" style={{
                width: 60, height: 2,
                background: G,
                opacity: 0.8,
              }} />
              <div className="absolute -top-3 -left-3 z-10 pointer-events-none" style={{
                width: 2, height: 60,
                background: G,
                opacity: 0.8,
              }} />
              <div className="absolute -bottom-3 -right-3 z-10 pointer-events-none" style={{
                width: 60, height: 2,
                background: G,
                opacity: 0.8,
              }} />
              <div className="absolute -bottom-3 -right-3 z-10 pointer-events-none" style={{
                width: 2, height: 60,
                background: G,
                right: -3, bottom: -3,
                opacity: 0.8,
              }} />

              {/* Photo container */}
              <div className="relative overflow-hidden" style={{
                borderRadius: '4px',
                border: '1px solid rgba(212,149,42,0.25)',
                aspectRatio: '4/5',
                background: 'linear-gradient(160deg, #0F1130 0%, #07080E 100%)',
                boxShadow: '0 0 60px rgba(212,149,42,0.12), inset 0 0 60px rgba(20,25,70,0.5)',
              }}>
                {/* Glow circles inside */}
                <div style={{
                  position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
                  width: 200, height: 200, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(212,149,42,0.12) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                {/* Geometric gold shape */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div style={{ position: 'relative', width: 120, height: 120 }}>
                    <div style={{
                      position: 'absolute', inset: 0,
                      border: '1px solid rgba(212,149,42,0.25)',
                      transform: 'rotate(45deg)', borderRadius: '4px',
                    }} />
                    <div style={{
                      position: 'absolute', inset: 20,
                      border: '1px solid rgba(212,149,42,0.12)',
                      transform: 'rotate(45deg)', borderRadius: '4px',
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '2rem',
                        background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text', fontWeight: 700,
                      }}>OP</span>
                    </div>
                  </div>
                  <span className="text-xs tracking-[0.2em] uppercase text-center px-8" style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: 'rgba(212,149,42,0.2)',
                  }}>
                    Adicione a foto do<br />instrutor principal aqui
                  </span>
                </div>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5" style={{
                  background: 'linear-gradient(to top, #07080E 0%, rgba(7,8,14,0.7) 60%, transparent 100%)',
                }} />

                {/* Info badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4" style={{
                  background: 'rgba(7,8,14,0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(212,149,42,0.25)',
                  borderRadius: '4px',
                }}>
                  <div className="text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: '#D4952A' }}>
                    Instrutora Destaque
                  </div>
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif", color: '#FAFAFA',
                    fontSize: '1rem', fontWeight: 600,
                  }}>Katia Conte</div>
                  <div className="text-xs mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.85)' }}>
                    Especialista NR-01 · Ciências Contábeis
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, rgba(212,149,42,0.5))' }}
        />
      </motion.div>
    </section>
  );
}
