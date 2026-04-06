import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Heart,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Headset,
  MessageCircle,
} from "lucide-react";

const logo = "/logo/logo-light.png";

const footerSections = [
  {
    title: "Como Funciona",
    links: [
      { label: "O que é a WOW+", href: "/institucional" },
      { label: "Como funciona a assinatura", href: "/para-voce" },
      { label: "O que está incluso no plano", href: "/para-voce" },
      { label: "Diferença: não é plano de saúde", href: "/para-voce" },
      { label: "Como usar os serviços", href: "/servicos" },
    ],
  },
  {
    title: "Planos e Assinatura",
    links: [
      { label: "Individual", href: "/para-voce" },
      { label: "Familiar", href: "/para-voce" },
      { label: "Empresarial", href: "/para-empresas#plano" },
      { label: "Preços e benefícios", href: "/para-voce" },
      { label: "Como contratar", href: "/para-voce" },
      { label: "Formas de pagamento", href: "/para-voce" },
      { label: "Cashback WOW+", href: "/servicos#clube" },
    ],
  },
  {
    title: "Nossos Serviços",
    links: [
      { label: "WOW+ Med (Saúde)", href: "/servicos#med" },
      { label: "WOW+ Clube", href: "/servicos#clube" },
      { label: "WOW+ Cine", href: "/servicos#cine" },
    ],
  },
  {
    title: "Ganhe com a WOW+",
    links: [
      { label: "Seja um consultor", href: "/consultor" },
      { label: "Renda recorrente", href: "/consultor" },
      { label: "Plano de carreira", href: "/consultor" },
      { label: "Treinamentos (10 Passos WOW+)", href: "/consultor" },
      { label: "Área do consultor", href: "https://app.wowmais.com.br/" },
    ],
  },
  {
    title: "Atendimento e Suporte",
    links: [
      { label: "Fale com um consultor", href: "https://api.whatsapp.com/send?phone=5511978369030" },
      { label: "Central de atendimento 24h", href: "tel:08001234567" },
      { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=5511978369030" },
      { label: "Área do cliente", href: "https://app.wowmais.com.br/" },
      { label: "Abrir chamado", href: "/contato" },
    ],
  },
  {
    title: "Conteúdo & Educação",
    links: [
      { label: "Blog WOW+", href: "/blog" },
      { label: "Dicas de saúde", href: "/blog" },
      { label: "Qualidade de vida", href: "/blog" },
      { label: "Educação financeira", href: "/blog" },
      { label: "NR-1 e saúde mental", href: "/nr1" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Sobre a WOW+", href: "/institucional" },
      { label: "Nossa missão", href: "/institucional" },
      { label: "Tecnologia & inovação", href: "/institucional" },
      { label: "Onde estamos", href: "/institucional" },
      { label: "Parceiros e rede", href: "/institucional" },
    ],
  },
  {
    title: "Legal & Segurança",
    links: [
      { label: "Termos de uso", href: "/legal" },
      { label: "Política de privacidade (LGPD)", href: "/legal" },
      { label: "Contrato do cliente", href: "/legal" },
      { label: "Contrato do consultor", href: "/legal" },
      { label: "Código de conduta", href: "/legal" },
      { label: "Segurança de dados", href: "/legal" },
    ],
  },
  {
    title: "Empresas & Parcerias",
    links: [
      { label: "Soluções para empresas", href: "/para-empresas" },
      { label: "Benefício corporativo", href: "/para-empresas" },
      { label: "NR-1 — Adequação", href: "/nr1" },
      { label: "Seja parceiro WOW+", href: "/para-empresas" },
      { label: "Indique empresas", href: "/contato" },
    ],
  },
];

const quickLinks = [
  { label: "Login", href: "https://app.wowmais.com.br/" },
  { label: "Ativar plano", href: "https://app.wowmais.com.br/" },
  { label: "Baixar app", href: "https://app.wowmais.com.br/" },
  { label: "Segunda via boleto", href: "https://app.wowmais.com.br/" },
  { label: "Atualizar cadastro", href: "https://app.wowmais.com.br/" },
];

const socialLinks = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* ── CTA Banner ── */}
      <div className="relative bg-gradient-orange py-16 lg:py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Cuide do que mais importa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Saúde, assistência e vantagens para você e toda sua família.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-dark px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
            >
              Conheça os planos
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5511978369030"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Fale conosco
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Quick Links Bar ── */}
      <div className="bg-navy-dark border-b border-white/5">
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            <span className="font-sans text-xs text-white/30 uppercase tracking-widest mr-2">
              Acesso rápido
            </span>
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-white/60 hover:text-primary transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-primary/40"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="bg-navy relative">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 pt-16 lg:pt-20 pb-12">
          {/* Top row: Logo + Contact + Social */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-4">
              <img
                src={logo}
                alt="WOW Mais"
                className="w-[200px] mb-6"
              />
              <p className="font-sans text-sm text-white/50 leading-relaxed max-w-sm mb-8">
                A WOW+ é uma plataforma de serviços e benefícios em saúde que
                democratiza o acesso a cuidados médicos, assistência e
                vantagens exclusivas para toda a família.
              </p>
              {/* Social */}
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Cards */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Phone,
                  title: "Telefone",
                  info: "0800 123 4567",
                  sub: "Seg a Sex, 8h às 20h",
                },
                {
                  icon: Headset,
                  title: "Suporte 24h",
                  info: "WhatsApp",
                  sub: "Atendimento imediato",
                },
                {
                  icon: MapPin,
                  title: "Localização",
                  info: "Osasco, SP",
                  sub: "Brasil",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-[22px] h-[22px] text-primary" />
                  </div>
                  <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-1">
                    {card.title}
                  </p>
                  <p className="font-display text-base font-semibold text-white mb-0.5">
                    {card.info}
                  </p>
                  <p className="font-sans text-xs text-white/40">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          {/* ── Links Grid: Desktop ── */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-x-8 gap-y-10 mb-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="font-sans text-[13px] text-white/45 hover:text-primary transition-colors duration-200 leading-relaxed inline-block"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="font-sans text-[13px] text-white/45 hover:text-primary transition-colors duration-200 leading-relaxed inline-block"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Links Accordion: Mobile ── */}
          <div className="lg:hidden mb-12 space-y-0">
            {footerSections.map((section) => (
              <div
                key={section.title}
                className="border-b border-white/[0.06]"
              >
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {section.title}
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-white/40 transition-transform duration-300 ${
                      expandedSection === section.title ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSection === section.title ? "auto" : 0,
                    opacity: expandedSection === section.title ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="pb-4 pl-4 space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        {link.href.startsWith("/") ? (
                          <Link
                            to={link.href}
                            className="font-sans text-[13px] text-white/45 hover:text-primary transition-colors"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="font-sans text-[13px] text-white/45 hover:text-primary transition-colors"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* ── Bottom Bar ── */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Disclaimer */}
            <p className="font-sans text-[11px] text-white/25 leading-relaxed max-w-3xl text-center lg:text-left">
              A WOW+ é uma plataforma de serviços e benefícios em saúde, que
              oferece acesso a telemedicina, descontos em consultas, exames e
              medicamentos por meio de parceiros e rede credenciada.{" "}
              <strong className="text-white/40">
                A WOW+ não é plano de saúde.
              </strong>
            </p>

            {/* Copyright */}
            <div className="flex flex-col items-center lg:items-end gap-1 shrink-0">
              <p className="font-sans text-xs text-white/30 flex items-center gap-1.5">
                © {new Date().getFullYear()} WOW Mais. Todos os direitos
                reservados.
              </p>
              <p className="font-sans text-[11px] text-white/20 flex items-center gap-1">
                Feito com{" "}
                <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> no
                Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
