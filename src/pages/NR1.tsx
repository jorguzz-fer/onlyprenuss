import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Brain,
  Buildings,
  Scales,
  Warning,
  CheckCircle,
  WhatsappLogo,
  FileText,
  Heartbeat,
} from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/components/layout/PageLayout";

const whatChanged = [
  {
    icon: Brain,
    title: "Saude Mental Obrigatoria",
    description:
      "Empresas devem incluir riscos psicossociais no Programa de Gerenciamento de Riscos (PGR), como estresse, assedio e burnout.",
  },
  {
    icon: Scales,
    title: "Responsabilidade do Empregador",
    description:
      "O empregador passa a ser responsavel por identificar, avaliar e controlar fatores que afetam a saude mental dos colaboradores.",
  },
  {
    icon: Warning,
    title: "Fiscalizacao e Multas",
    description:
      "A partir de maio de 2026, o MTE pode autuar empresas que nao estejam em conformidade com as novas exigencias da NR-1.",
  },
  {
    icon: FileText,
    title: "Documentacao Exigida",
    description:
      "As empresas precisam documentar acoes de prevencao, planos de acao e evidencias de acompanhamento da saude mental.",
  },
];

const howWowHelps = [
  "Telemedicina 24h com suporte psicologico",
  "Programa de acompanhamento de saude mental",
  "Relatorios de utilizacao para RH",
  "Palestras e conteudos sobre qualidade de vida",
  "Atendimento emergencial para crises",
  "Canal de apoio confidencial para colaboradores",
  "Treinamento para liderancas sobre saude mental",
  "Conformidade documentada para fiscalizacao",
];

const faqs = [
  {
    question: "O que e a NR-1?",
    answer:
      "A NR-1 (Norma Regulamentadora 1) estabelece disposicoes gerais sobre seguranca e saude no trabalho. Com as atualizacoes recentes, passou a incluir a obrigatoriedade de gestao de riscos psicossociais, como estresse, assedio e burnout.",
  },
  {
    question: "Quando as novas regras entram em vigor?",
    answer:
      "As novas exigencias da NR-1 relacionadas a saude mental entraram em vigor em maio de 2025, com periodo de adequacao. A partir de 2026, a fiscalizacao sera intensificada pelo MTE.",
  },
  {
    question: "Quais empresas precisam se adequar?",
    answer:
      "Todas as empresas com empregados regidos pela CLT precisam se adequar as exigencias da NR-1, independentemente do porte ou segmento de atuacao.",
  },
  {
    question: "O que acontece se minha empresa nao se adequar?",
    answer:
      "A empresa pode sofrer autuacoes, multas e interdicoes por parte do Ministerio do Trabalho. Alem disso, fica exposta a acoes trabalhistas e danos a reputacao.",
  },
  {
    question: "Como a WOW+ ajuda na adequacao?",
    answer:
      "A WOW+ oferece solucoes completas de saude mental para empresas, incluindo telemedicina com psicologos, programas de bem-estar, relatorios para RH e documentacao de conformidade. Tudo integrado em uma unica plataforma.",
  },
];

const NR1 = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                NR-1 &middot; Saude Mental no Trabalho
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground mt-4 leading-tight">
                Sua empresa esta pronta para a{" "}
                <span className="text-gradient">nova NR-1?</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl">
                A NR-1 agora exige que empresas gerenciem riscos psicossociais.
                Entenda o que muda e como a WOW+ pode ajudar sua empresa a se
                adequar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="/para-empresas"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
                >
                  Solucao para empresas
                  <ArrowUpRight size={20} />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511999999999"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-secondary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/5 transition-colors"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Fale com consultor
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover bg-navy-light p-12 border border-secondary-foreground/10">
                <div className="text-center">
                  <ShieldCheck
                    size={80}
                    weight="duotone"
                    className="text-primary mx-auto mb-6"
                  />
                  <h3 className="font-display text-2xl font-bold text-secondary-foreground mb-3">
                    NR-1 Atualizada
                  </h3>
                  <p className="font-sans text-secondary-foreground/60 text-sm leading-relaxed">
                    Riscos psicossociais agora fazem parte do PGR. Empresas que
                    nao se adequarem estao sujeitas a fiscalizacao e multas.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-2 text-orange font-sans text-sm font-bold">
                    <Warning size={18} weight="fill" />
                    Fiscalizacao intensificada em 2026
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O que mudou */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              O que mudou
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Principais mudancas da{" "}
              <span className="text-gradient">NR-1</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg mt-4 max-w-2xl mx-auto">
              A atualizacao da NR-1 traz novas responsabilidades para
              empregadores em relacao a saude mental dos colaboradores.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatChanged.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <item.icon
                    size={28}
                    weight="duotone"
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-sans text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como a WOW+ ajuda */}
      <section className="py-24 bg-navy">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                Solucao WOW+
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mt-3">
                Como a WOW+ ajuda sua empresa a se{" "}
                <span className="text-gradient">adequar</span>
              </h2>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-4">
                Nossa plataforma oferece tudo que sua empresa precisa para
                cumprir as exigencias da NR-1 e cuidar da saude mental da
                equipe.
              </p>

              <ul className="space-y-3 mt-8">
                {howWowHelps.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 font-sans text-base text-secondary-foreground/80"
                  >
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <a
                href="/para-empresas"
                className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
              >
                Ver planos empresariais
                <ArrowUpRight size={20} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Heartbeat, value: "24h", label: "Suporte psicologico" },
                { icon: Buildings, value: "100%", label: "Digital e escalavel" },
                { icon: FileText, value: "PGR", label: "Documentacao pronta" },
                { icon: ShieldCheck, value: "NR-1", label: "Conformidade total" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-navy-light border border-secondary-foreground/10 rounded-2xl p-6 text-center"
                >
                  <stat.icon
                    size={32}
                    weight="duotone"
                    className="text-primary mx-auto mb-3"
                  />
                  <div className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs text-secondary-foreground/50 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Duvidas Frequentes
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Perguntas sobre a{" "}
              <span className="text-gradient">NR-1</span>
            </h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="font-sans text-base font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary text-4xl mb-6">&#10084;</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground max-w-3xl mx-auto leading-tight">
              Adeque sua empresa a NR-1 com a WOW+
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Proteja seus colaboradores e evite multas. Fale com nosso time
              especializado.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
            >
              <WhatsappLogo size={24} weight="fill" />
              Falar com especialista
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NR1;
