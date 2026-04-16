import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';

const G = 'linear-gradient(135deg, #C9851C 0%, #F0C040 55%, #D4952A 100%)';
const F = "'Montserrat', sans-serif";

const faqs = [
  { pergunta: 'Os certificados emitidos pela Only Plenuss são reconhecidos legalmente?', resposta: 'Sim. Nossos certificados de capacitação são emitidos de acordo com as exigências da NR-01 e da CLT, sendo válidos para comprovação em auditorias do Ministério do Trabalho e fiscalizações da Inspeção do Trabalho.' },
  { pergunta: 'Como funciona o acesso aos cursos?', resposta: 'Após o cadastro e a matrícula, você tem acesso imediato à plataforma online. Os conteúdos são disponibilizados em módulos progressivos, podendo ser acessados por computador, tablet ou celular — sem restrição de horário.' },
  { pergunta: 'Posso matricular toda a minha equipe de uma vez?', resposta: 'Sim. Oferecemos planos corporativos para grupos de colaboradores. Entre em contato conosco para receber uma proposta personalizada com condições especiais para contratações em volume.' },
  { pergunta: 'Qual a validade dos certificados de capacitação NR-01?', resposta: 'Conforme a legislação vigente, os treinamentos de NR-01 devem ser reciclados periodicamente. A periodicidade exata pode variar conforme o setor e o grau de risco da atividade. Nossa equipe orienta cada empresa sobre os prazos específicos.' },
  { pergunta: 'Existe suporte durante o aprendizado?', resposta: 'Sim. Nossos alunos contam com suporte via e-mail e WhatsApp para dúvidas sobre o conteúdo e a plataforma. Além disso, cada curso possui fórum de discussão com acompanhamento dos instrutores.' },
  { pergunta: 'Os cursos estão disponíveis em outros idiomas?', resposta: 'Nossa plataforma oferece suporte a três idiomas: Português, Inglês e Espanhol. Alguns cursos já estão disponíveis nas três versões, e estamos expandindo continuamente o catálogo multilíngue.' },
];

export default function OPFAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      ref={ref}
      style={{ background: '#0B0C18', borderTop: '1px solid rgba(212,149,42,0.12)' }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span style={{ display: 'block', width: 24, height: 1, background: G }} />
            <span className="text-[11px] tracking-[0.3em] uppercase"
              style={{ fontFamily: F, color: '#D4952A' }}>
              Dúvidas Frequentes
            </span>
            <span style={{ display: 'block', width: 24, height: 1, background: G }} />
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2,
          }}>
            Perguntas{' '}
            <em style={{ fontStyle: 'italic', background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              frequentes
            </em>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                background: open === i ? 'linear-gradient(160deg, #141530 0%, #0F102A 100%)' : 'linear-gradient(160deg, #0F1026 0%, #0B0C1C 100%)',
                border: open === i ? '1px solid rgba(212,149,42,0.4)' : '1px solid rgba(212,149,42,0.1)',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left"
              >
                <span className="font-semibold text-sm pr-4"
                  style={{ fontFamily: F, color: open === i ? '#FFFFFF' : 'rgba(255,255,255,0.95)' }}>
                  {faq.pergunta}
                </span>
                <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-sm transition-all duration-200"
                  style={{
                    background: open === i ? G : 'rgba(212,149,42,0.1)',
                    border: '1px solid rgba(212,149,42,0.3)',
                  }}>
                  {open === i
                    ? <Minus size={13} color="#07080E" weight="bold" />
                    : <Plus size={13} color="#D4952A" weight="bold" />
                  }
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-7 pb-6 text-sm leading-relaxed"
                      style={{
                        fontFamily: F, color: 'rgba(255,255,255,0.92)', fontWeight: 400,
                        borderTop: '1px solid rgba(212,149,42,0.1)', paddingTop: 16,
                      }}>
                      {faq.resposta}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm mb-4" style={{ fontFamily: F, color: 'rgba(255,255,255,0.95)' }}>
            Ainda tem dúvidas?
          </p>
          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-opacity duration-200 hover:opacity-70"
            style={{ fontFamily: F, color: '#D4952A' }}
          >
            Fale conosco →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
