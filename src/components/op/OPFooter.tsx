import { InstagramLogo, LinkedinLogo, Envelope, Phone } from '@phosphor-icons/react';

const G = 'linear-gradient(135deg, #C9851C 0%, #F0C040 55%, #D4952A 100%)';
const F = "'Montserrat', sans-serif";

const navLinks = [
  { label: 'Cursos', href: '#cursos' },
  { label: 'Instrutores', href: '#instrutores' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function OPFooter() {
  return (
    <footer style={{ background: '#040508', borderTop: '1px solid rgba(212,149,42,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.35rem', fontWeight: 800, background: G, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.01em' }}>
                ONLY PLENUS$
              </div>
              <div className="text-[10px] tracking-[0.28em] uppercase mt-0.5"
                style={{ fontFamily: F, color: 'rgba(212,149,42,0.4)' }}>
                Consultoria
              </div>
            </div>
            <p className="text-xs leading-relaxed"
              style={{ fontFamily: F, color: 'rgba(255,255,255,0.95)', fontWeight: 300, maxWidth: 240 }}>
              Treinamento corporativo certificado para conformidade normativa e
              excelência em gestão de pessoas.
            </p>
            <div className="flex items-center gap-2">
              {[InstagramLogo, LinkedinLogo].map((Icon, i) => (
                <button key={i} className="w-8 h-8 flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(212,149,42,0.07)', border: '1px solid rgba(212,149,42,0.15)', borderRadius: '3px', color: 'rgba(212,149,42,0.5)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#D4952A'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.4)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(212,149,42,0.5)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,149,42,0.15)'; }}>
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: F, color: 'rgba(212,149,42,0.5)' }}>
              Links Úteis
            </div>
            <nav className="flex flex-col gap-3">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={e => handleNav(e, link.href)}
                  className="text-xs transition-colors duration-200"
                  style={{ fontFamily: F, color: 'rgba(255,255,255,0.85)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(212,149,42,0.8)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'}>
                  {link.label}
                </a>
              ))}
              <a href="#" className="text-xs transition-colors duration-200"
                style={{ fontFamily: F, color: 'rgba(212,149,42,0.5)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#D4952A'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(212,149,42,0.5)'}>
                ✓ Validar Certificado
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: F, color: 'rgba(212,149,42,0.5)' }}>
              Contato
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: Envelope, value: 'consultoria.onlyplenuss@gmail.com' },
                { icon: Phone, value: '(11) 94733-5278' },
              ].map(({ icon: Icon, value }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon size={13} color="rgba(212,149,42,0.5)" />
                  <span className="text-xs" style={{ fontFamily: F, color: 'rgba(255,255,255,0.85)' }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(212,149,42,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px]" style={{ fontFamily: F, color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} Only Plenuss — Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-4">
            {['Política de Privacidade', 'Termos de Uso'].map((item, i) => (
              <a key={i} href="#" className="text-[11px] transition-colors duration-200"
                style={{ fontFamily: F, color: 'rgba(255,255,255,0.2)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(212,149,42,0.5)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.2)'}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
