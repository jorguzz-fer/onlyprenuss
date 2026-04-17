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
      style={{ background: '#06070D' }}
    >
      {/* ── Background atmosphere ── */}

      {/* Deep blue radial on left */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 80% at 15% 60%, rgba(18,28,90,0.75) 0%, transparent 65%)',
      }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(212,149,42,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(212,149,42,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '72px 72px',
      }} />

      {/* ── RIGHT SIDE: Photo + geometric lights ── */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none">

        {/* Golden chevron / triangle light ray — behind team */}
        <svg
          viewBox="0 0 600 900"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.85 }}
        >
          <defs>
            <linearGradient id="rayGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9851C" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#F0C040" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#D4952A" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="rayBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A3A8A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0A1850" stopOpacity="0.05" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Main golden diamond / chevron shape */}
          <polygon
            points="580,0 580,900 200,450"
            fill="url(#rayGold)"
          />
          {/* Secondary bigger sweep */}
          <polygon
            points="600,0 600,900 120,450"
            fill="url(#rayGold)"
            opacity="0.4"
          />
          {/* Blue accent left edge */}
          <polygon
            points="320,0 120,450 320,900 200,900 0,450 200,0"
            fill="url(#rayBlue)"
            opacity="0.6"
          />
          {/* Thin gold border line */}
          <line x1="200" y1="450" x2="600" y2="0" stroke="#F0C040" strokeWidth="1.5" opacity="0.5" filter="url(#glow)" />
          <line x1="200" y1="450" x2="600" y2="900" stroke="#F0C040" strokeWidth="1.5" opacity="0.5" filter="url(#glow)" />
        </svg>

        {/* Ambient glow behind where team will be */}
        <div style={{
          position: 'absolute',
          top: '10%', right: '5%',
          width: '75%', height: '80%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(30,50,130,0.45) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />

        {/* Gold floor glow */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: '10%', right: 0,
          height: '30%',
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,149,42,0.18) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }} />

        {/* Team photo — PNG with alpha channel */}
        <img
          src="/team/8.png"
          alt="Equipe Only Plenuss"
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            height: '100%',
            width: 'auto',
            maxWidth: 'none',
            objectFit: 'contain',
            objectPosition: 'bottom center',
            filter: 'saturate(1.05) contrast(1.02) brightness(1.02) drop-shadow(0 0 40px rgba(212,149,42,0.15))',
          }}
        />

        {/* Fade left edge so image blends into content */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, bottom: 0,
          width: '35%',
          background: 'linear-gradient(to right, #06070D 0%, rgba(6,7,13,0.5) 60%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Fade bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '12%',
          background: 'linear-gradient(to top, #06070D 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* ── LEFT: Text content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        <div className="max-w-[52%]">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex items-center gap-3 mb-7"
          >
            <span style={{ width: 24, height: 1.5, background: G, display: 'block', borderRadius: 2 }} />
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#D4952A',
              fontWeight: 600,
            }}>
              Treinamentos Corporativos NR-01
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(2.2rem, 4.2vw, 3.75rem)',
              lineHeight: 1.1,
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}
          >
            Capacite sua equipe<br />
            e conquiste a{' '}
            <span style={{
              background: G,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              conformidade
            </span>
            <br />com a NR-01.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.55 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.7,
              maxWidth: 420,
              marginTop: '1.25rem',
              fontWeight: 400,
            }}
          >
            Um programa completo para proteger seus colaboradores
            e manter sua empresa em conformidade com a legislação
            trabalhista vigente.
          </motion.p>

          {/* Checklist */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
          >
            {beneficios.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.35 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}
              >
                <CheckCircle size={16} color="#D4952A" weight="fill" style={{ flexShrink: 0, marginTop: 3 }} />
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 400,
                }}>{b}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.88, duration: 0.5 }}
            style={{ marginTop: '2.25rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <a
              href="#precos"
              onClick={e => { e.preventDefault(); document.querySelector('#precos')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2.25rem',
                background: G,
                color: '#06070D',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                boxShadow: '0 0 40px rgba(212,149,42,0.4), 0 4px 20px rgba(0,0,0,0.5)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = GH;
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 55px rgba(212,149,42,0.6), 0 4px 24px rgba(0,0,0,0.5)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = G;
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(212,149,42,0.4), 0 4px 20px rgba(0,0,0,0.5)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Quero me Matricular
              <ArrowRight size={14} />
            </a>

            <a
              href="#conteudo"
              onClick={e => { e.preventDefault(); document.querySelector('#conteudo')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                border: '1px solid rgba(212,149,42,0.35)',
                color: 'rgba(212,149,42,0.9)',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                background: 'rgba(212,149,42,0.04)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#D4952A';
                (e.currentTarget as HTMLElement).style.background = 'rgba(212,149,42,0.10)';
                (e.currentTarget as HTMLElement).style.color = '#F0C040';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.35)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(212,149,42,0.04)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(212,149,42,0.9)';
              }}
            >
              Ver Conteúdo
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.5 }}
            style={{
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(212,149,42,0.12)',
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { num: '6+', label: 'Cursos' },
              { num: '6', label: 'Instrutores' },
              { num: '100%', label: 'Online' },
              { num: 'NR-01', label: 'Certificado' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  background: G,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}>{s.num}</span>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, transparent, rgba(212,149,42,0.45))' }}
        />
      </motion.div>
    </section>
  );
}
