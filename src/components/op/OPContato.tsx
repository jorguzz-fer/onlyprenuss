import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Envelope, Phone, InstagramLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react';

const G = 'linear-gradient(135deg, #C9851C 0%, #F0C040 55%, #D4952A 100%)';
const GH = 'linear-gradient(135deg, #E09A2A 0%, #FFD050 55%, #E09A2A 100%)';
const F = "'Montserrat', sans-serif";

export default function OPContato() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(212,149,42,0.15)',
    borderRadius: '4px',
    padding: '14px 16px',
    color: '#FFFFFF',
    fontFamily: F,
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: F,
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.85)',
    marginBottom: '8px',
    fontWeight: 500,
  };

  return (
    <section
      id="contato"
      ref={ref}
      style={{ background: '#07080E', borderTop: '1px solid rgba(212,149,42,0.12)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="absolute -top-32 -right-32 pointer-events-none" style={{
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,149,42,0.05) 0%, transparent 70%)',
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
            <span className="text-[11px] tracking-[0.3em] uppercase" style={{ fontFamily: F, color: '#D4952A' }}>
              Fale Conosco
            </span>
            <span style={{ display: 'block', width: 24, height: 1, background: G }} />
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2 }}>
            Entre em{' '}
            <em style={{ fontStyle: 'italic', background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              contato
            </em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h3 className="mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.25rem', fontWeight: 600, color: '#FFFFFF' }}>
                Only Plenuss Consultoria
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: F, color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}>
                Estamos prontos para atender empresas e profissionais que buscam
                capacitação certificada e conformidade com as normas trabalhistas.
              </p>
            </div>

            {[
              { icon: Envelope, label: 'E-mail', value: 'consultoria.onlyplenuss@gmail.com' },
              { icon: Phone, label: 'Telefone / WhatsApp', value: '(11) 94733-5278' },
            ].map(({ icon: Icon, label, value }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,149,42,0.08)', border: '1px solid rgba(212,149,42,0.2)', borderRadius: '4px' }}>
                  <Icon size={18} color="#D4952A" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider mb-0.5"
                    style={{ fontFamily: F, color: 'rgba(255,255,255,0.95)' }}>{label}</div>
                  <div className="text-sm font-medium" style={{ fontFamily: F, color: 'rgba(255,255,255,0.85)' }}>{value}</div>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-3">
              {[InstagramLogo, LinkedinLogo].map((Icon, i) => (
                <button key={i}
                  className="w-10 h-10 flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(212,149,42,0.08)', border: '1px solid rgba(212,149,42,0.2)', borderRadius: '4px', color: '#D4952A' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = G; (e.currentTarget as HTMLElement).style.color = '#07080E'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(212,149,42,0.08)'; (e.currentTarget as HTMLElement).style.color = '#D4952A'; }}
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>

            <div className="p-5" style={{ background: 'rgba(212,149,42,0.05)', border: '1px solid rgba(212,149,42,0.18)', borderRadius: '4px' }}>
              <div className="text-xs tracking-wider uppercase mb-1" style={{ fontFamily: F, color: '#D4952A' }}>
                Validar Certificado
              </div>
              <p className="text-xs" style={{ fontFamily: F, color: 'rgba(255,255,255,0.88)' }}>
                Acesse nossa plataforma para verificar a autenticidade de um certificado emitido pela Only Plenuss.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 py-16 text-center"
                style={{ background: 'linear-gradient(160deg, #0F1026 0%, #0B0C1C 100%)', border: '1px solid rgba(212,149,42,0.25)', borderRadius: '6px' }}>
                <div className="w-14 h-14 flex items-center justify-center rounded-full"
                  style={{ background: 'rgba(212,149,42,0.1)', border: '1px solid rgba(212,149,42,0.3)' }}>
                  <PaperPlaneTilt size={24} color="#D4952A" />
                </div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.5rem', color: '#FFFFFF', fontWeight: 600 }}>
                  Mensagem enviada!
                </h3>
                <p className="text-sm max-w-xs" style={{ fontFamily: F, color: 'rgba(255,255,255,0.88)' }}>
                  Obrigado pelo contato. Nossa equipe retornará em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }}
                className="p-8 flex flex-col gap-5"
                style={{ background: 'linear-gradient(160deg, #0F1026 0%, #0B0C1C 100%)', border: '1px solid rgba(212,149,42,0.12)', borderRadius: '6px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Seu Nome *</label>
                    <input name="nome" required value={form.nome} onChange={handleChange} placeholder="Nome completo" style={fieldStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(212,149,42,0.5)') }
                      onBlur={e => (e.target.style.borderColor = 'rgba(212,149,42,0.15)')} />
                  </div>
                  <div>
                    <label style={labelStyle}>E-mail *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="seu@email.com" style={fieldStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(212,149,42,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(212,149,42,0.15)')} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Telefone</label>
                    <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(11) 99999-9999" style={fieldStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(212,149,42,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(212,149,42,0.15)')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Assunto *</label>
                    <select name="assunto" required value={form.assunto} onChange={handleChange} style={{ ...fieldStyle, cursor: 'pointer' }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(212,149,42,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(212,149,42,0.15)')}>
                      <option value="" style={{ background: '#0F1026' }}>Selecione...</option>
                      <option value="cursos" style={{ background: '#0F1026' }}>Informações sobre cursos</option>
                      <option value="corporativo" style={{ background: '#0F1026' }}>Plano corporativo</option>
                      <option value="certificado" style={{ background: '#0F1026' }}>Validar certificado</option>
                      <option value="parceria" style={{ background: '#0F1026' }}>Parceria / Instrutor</option>
                      <option value="outro" style={{ background: '#0F1026' }}>Outro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Sua Dúvida</label>
                  <textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder="Descreva sua dúvida ou necessidade..." rows={5}
                    style={{ ...fieldStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(212,149,42,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(212,149,42,0.15)')} />
                </div>
                <button type="submit"
                  className="flex items-center justify-center gap-3 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-200"
                  style={{ fontFamily: F, background: G, color: '#07080E', borderRadius: '4px', border: 'none', cursor: 'pointer', boxShadow: '0 0 24px rgba(212,149,42,0.3)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = GH; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 36px rgba(212,149,42,0.45)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = G; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(212,149,42,0.3)'; }}>
                  <PaperPlaneTilt size={16} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
