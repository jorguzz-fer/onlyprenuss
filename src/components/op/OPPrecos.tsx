import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Star } from '@phosphor-icons/react';

const G = 'linear-gradient(135deg, #C9851C 0%, #F0C040 55%, #D4952A 100%)';
const GH = 'linear-gradient(135deg, #E09A2A 0%, #FFD050 55%, #E09A2A 100%)';

const planos = [
  {
    nome: 'START',
    label: 'Essencial',
    destaque: false,
    preco: 'R$ 179',
    parcelamento: '12x de',
    descricao: 'Acesso completo ao conteúdo técnico da NR-01 com certificação incluída.',
    itens: [
      'Acesso ao curso NR-01 para Colaboradores',
      'Certificado de conclusão NR-01',
      'Acesso por 12 meses à plataforma',
      'Material de apoio em PDF',
      'Suporte via e-mail',
    ],
    naoIncluido: [
      'Acesso ao curso de Saúde Mental',
      'Suporte prioritário via WhatsApp',
      'Acesso vitalício',
    ],
    cta: 'Quero o START',
  },
  {
    nome: 'VIP',
    label: 'Completo',
    destaque: true,
    preco: 'R$ 359',
    parcelamento: '12x de',
    descricao: 'Acesso a toda a grade curricular com suporte prioritário e acesso vitalício.',
    itens: [
      'Todos os cursos da plataforma',
      'NR-01 para Colaboradores + Gestores',
      'Saúde Mental no Trabalho',
      'Certificados de todos os cursos',
      'Acesso vitalício à plataforma',
      'Material de apoio completo',
      'Suporte prioritário via WhatsApp',
      'Acesso a novos cursos sem custo adicional',
    ],
    naoIncluido: [],
    cta: 'Quero o VIP',
  },
];

export default function OPPrecos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="precos"
      ref={ref}
      style={{ background: '#07080E', borderTop: '1px solid rgba(212,149,42,0.12)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Glow center */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,149,42,0.06) 0%, transparent 70%)',
      }} />
      {/* Decorative swoosh */}
      <div className="absolute -bottom-32 -left-32 pointer-events-none" style={{
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 70%, rgba(20,25,80,0.6) 0%, transparent 60%)',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28">

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
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#D4952A' }}>
              Planos & Preços
            </span>
            <span style={{ display: 'block', width: 24, height: 1, background: G }} />
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            fontWeight: 700, color: '#FAFAFA', lineHeight: 1.2,
          }}>
            Start ou VIP — você escolhe{' '}
            <em style={{
              fontStyle: 'italic',
              background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>sua experiência</em>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.8)', fontWeight: 300 }}>
            Ambos incluem certificação reconhecida e acesso à plataforma online.
            Escolha o que melhor se adapta à sua necessidade.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {planos.map((plano, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative flex flex-col"
              style={{
                background: plano.destaque
                  ? 'linear-gradient(160deg, #141530 0%, #0C0D22 100%)'
                  : 'linear-gradient(160deg, #0F1022 0%, #0B0C1A 100%)',
                border: plano.destaque ? '1px solid rgba(212,149,42,0.45)' : '1px solid rgba(212,149,42,0.12)',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: plano.destaque ? '0 0 50px rgba(212,149,42,0.1)' : 'none',
              }}
            >
              {/* Top gradient bar */}
              <div style={{
                height: plano.destaque ? 3 : 1,
                background: plano.destaque ? G : 'rgba(212,149,42,0.2)',
              }} />

              {/* Badge */}
              {plano.destaque && (
                <div className="absolute top-5 right-5 flex items-center gap-1 px-2 py-1"
                  style={{ background: G, borderRadius: '3px' }}>
                  <Star size={10} color="#07080E" weight="fill" />
                  <span className="text-[10px] font-bold tracking-wider"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: '#07080E' }}>
                    RECOMENDADO
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Name */}
                <div className="mb-6">
                  <span className="text-[11px] tracking-widest uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(212,149,42,0.6)' }}>
                    {plano.label}
                  </span>
                  <h3 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '1.75rem', fontWeight: 800, color: '#FAFAFA', letterSpacing: '-0.01em',
                  }}>{plano.nome}</h3>
                  <p className="text-xs mt-2 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.8)', fontWeight: 300 }}>
                    {plano.descricao}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-7 pb-7" style={{ borderBottom: '1px solid rgba(212,149,42,0.1)' }}>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.95)' }}>
                      {plano.parcelamento}
                    </span>
                    <span style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '2.25rem', fontWeight: 800, lineHeight: 1,
                      background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>{plano.preco}</span>
                    <span className="text-xs"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.95)' }}>
                      /mês
                    </span>
                  </div>
                  <p className="text-[11px] mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.88)' }}>
                    ou à vista com desconto
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plano.itens.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle size={15} color="#D4952A" weight="fill" className="flex-shrink-0 mt-0.5" />
                      <span className="text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                  {plano.naoIncluido.map((item, j) => (
                    <li key={`n${j}`} className="flex items-start gap-3 opacity-25">
                      <div className="w-[15px] h-[15px] flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div style={{ width: 10, height: 1, background: 'rgba(255,255,255,0.8)' }} />
                      </div>
                      <span className="text-sm line-through"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.8)', fontWeight: 300 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="w-full py-4 text-sm font-bold tracking-widest uppercase transition-all duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: plano.destaque ? G : 'transparent',
                    color: plano.destaque ? '#07080E' : '#D4952A',
                    border: plano.destaque ? 'none' : '1px solid rgba(212,149,42,0.35)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    boxShadow: plano.destaque ? '0 0 24px rgba(212,149,42,0.3)' : 'none',
                  }}
                  onMouseEnter={e => {
                    if (plano.destaque) {
                      (e.currentTarget as HTMLElement).style.background = GH;
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(212,149,42,0.45)';
                    } else {
                      (e.currentTarget as HTMLElement).style.background = G;
                      (e.currentTarget as HTMLElement).style.color = '#07080E';
                      (e.currentTarget as HTMLElement).style.border = 'none';
                    }
                  }}
                  onMouseLeave={e => {
                    if (plano.destaque) {
                      (e.currentTarget as HTMLElement).style.background = G;
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(212,149,42,0.3)';
                    } else {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = '#D4952A';
                      (e.currentTarget as HTMLElement).style.border = '1px solid rgba(212,149,42,0.35)';
                    }
                  }}
                >
                  {plano.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 text-center text-xs"
          style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.88)' }}
        >
          🔒 Pagamento seguro · Certificação incluída · Acesso imediato após confirmação
        </motion.p>
      </div>
    </section>
  );
}
