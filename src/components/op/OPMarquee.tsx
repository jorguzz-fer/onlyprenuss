const items = [
  'NR-01 Certificada',
  'Saúde Mental no Trabalho',
  'Conformidade Legal',
  'Treinamento Corporativo',
  'Instrutores Especialistas',
  'Certificação Reconhecida',
  'Plataforma 100% Online',
  'Acesso Vitalício',
];

export default function OPMarquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        background: 'linear-gradient(135deg, #C9851C 0%, #F0C040 40%, #E8A83C 70%, #C9851C 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(0,0,0,0.2)',
      }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #C9851C, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #C9851C, transparent)' }} />

      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: 'marquee 35s linear infinite' }}
      >
        {repeated.map((item, i) => (
          <div key={i} className="inline-flex items-center flex-shrink-0">
            <span
              className="text-[11px] font-bold tracking-[0.22em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#07080E' }}
            >
              {item}
            </span>
            <span
              className="mx-6 text-[8px]"
              style={{ color: 'rgba(7,8,14,0.4)' }}
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
