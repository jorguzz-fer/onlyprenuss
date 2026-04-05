import { motion } from "framer-motion";
import {
  CheckCircle2,
  Heart,
  Tag,
  Film,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/components/layout/PageLayout";

const steps = [
  { number: "1", text: "Ative sua assinatura pelo app ou site" },
  { number: "2", text: "Escolha o atendimento que precisa" },
  { number: "3", text: "Use quando quiser — online ou presencial" },
];

const services = [
  {
    icon: Heart,
    title: "WOW+ Med",
    description: "Médicos 24h, especialistas online e consultas presenciais com desconto.",
    link: "/servicos#med",
  },
  {
    icon: Tag,
    title: "WOW+ Clube",
    description: "Cashback e descontos em mais de 10 mil lojas parceiras.",
    link: "/servicos#clube",
  },
  {
    icon: Film,
    title: "WOW+ Cine",
    description: "Filmes e séries para toda a família, direto no seu app.",
    link: "/servicos#cine",
  },
];

const planFeatures = [
  "Médico 24h online",
  "Clínico geral e Pediatria",
  "Mais de 15 especialidades",
  "Receitas e atestados médicos",
  "Descontos em consultas presenciais",
  "Descontos em exames e medicamentos",
];

const reasons = [
  "Atendimento médico 24h",
  "Rede nacional de clínicas",
  "Descontos em exames e medicamentos",
  "Benefícios para toda a família",
  "Sem burocracia",
  "100% digital",
];

const faqs = [
  {
    question: "Como funciona a telemedicina do WOW+ Med?",
    answer:
      "Nosso serviço de telemedicina está disponível 24 horas por dia, 7 dias por semana. Você pode acessar consultas médicas online diretamente pelo app, com profissionais qualificados prontos para atender você e sua família.",
  },
  {
    question: "Posso incluir minha família no plano?",
    answer:
      "Sim! O plano familiar inclui o cônjuge e todos os filhos até 21 anos. Todos terão acesso a todos os benefícios da plataforma.",
  },
  {
    question: "Como funciona o cashback do WOW+ Clube?",
    answer:
      "Com o WOW+ Clube, você recebe cashback automático em compras realizadas em mais de 10 mil estabelecimentos parceiros em todo o Brasil. O valor é creditado diretamente na sua conta.",
  },
  {
    question: "A WOW+ é plano de saúde?",
    answer:
      "Não. A WOW+ é uma plataforma de serviços e benefícios em saúde que oferece acesso a telemedicina, descontos em consultas, exames e medicamentos por meio de parceiros e rede credenciada.",
  },
  {
    question: "Como faço para contratar?",
    answer:
      "A contratação é 100% digital. Basta acessar nosso app ou site, escolher o plano ideal e fazer seu cadastro. Em poucos minutos você já estará protegido.",
  },
];

const ParaVoce = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                Para Você
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground mt-4 leading-tight">
                Saúde e bem-estar para{" "}
                <span className="text-gradient">você e sua família</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl">
                Tenha acesso a médicos 24h, descontos exclusivos e benefícios
                que cabem no seu bolso. Tudo 100% digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://app.wowmais.com.br/"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
                >
                  Assine Agora
                  <ArrowUpRight className="w-[20px] h-[20px]" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511999999999"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-secondary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/5 transition-colors"
                >
                  <MessageCircle className="w-[20px] h-[20px]" />
                  Tire suas dúvidas
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/5.webp"
                  alt="Família saudável"
                  className="w-full aspect-[4/3] object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Como funciona
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Simples assim, <span className="text-gradient">de verdade.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <p className="font-sans text-lg font-medium text-foreground">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Inclusos */}
      <section className="py-24 bg-warm-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Tudo incluso
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Serviços que fazem a <span className="text-gradient">diferença</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.a
                key={service.title}
                href={service.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon
                    className="w-[30px] h-[30px] text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-sans text-base leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-primary font-sans text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Saiba mais →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Plano PF */}
      <section className="py-24 bg-navy">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                Plano Pessoa Física
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mt-3">
                WOW+ Saúde
              </h2>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-4">
                Plano de saúde digital acessível para você e toda sua família.
              </p>
              <div className="mt-6 mb-2">
                <span className="font-sans text-xl text-secondary-foreground top-[-1rem] relative">
                  R$
                </span>
                <span className="font-display text-6xl font-bold tracking-tight text-primary">
                  49,90
                </span>
                <span className="font-sans text-base font-medium ml-1 text-secondary-foreground/60">
                  /mês
                </span>
              </div>
              <div className="text-sm font-semibold font-sans mb-8 py-2 px-4 rounded-full inline-block bg-primary/20 text-primary">
                Famílias que querem acesso rápido a médicos
              </div>

              <ul className="space-y-3 mb-8">
                {planFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-sans text-base text-secondary-foreground/80"
                  >
                    <CheckCircle2
                      className="w-[20px] h-[20px] text-primary flex-shrink-0 mt-0.5"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-navy-light rounded-xl border border-secondary-foreground/10 text-sm font-sans flex items-start gap-3 mb-8">
                <div className="text-orange shrink-0 mt-0.5">❤</div>
                <p className="leading-relaxed text-secondary-foreground/80">
                  <strong className="block text-orange mb-1">
                    Plano Familiar Incluído!
                  </strong>
                  Estende todos os benefícios para seu cônjuge e todos os filhos
                  até 21 anos.
                </p>
              </div>

              <a
                href="https://app.wowmais.com.br/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
              >
                Assinar Plano
                <ArrowUpRight className="w-[20px] h-[20px]" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/3.webp"
                  alt="Família usando WOW+"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange font-sans text-sm font-semibold uppercase tracking-widest">
              Diferencial
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 leading-tight">
              Por que escolher a WOW+?
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-4 max-w-2xl mx-auto">
              Ter saúde de qualidade nunca foi tão simples, rápido e econômico.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-navy-light/50 border border-secondary-foreground/10 px-6 py-4 rounded-xl backdrop-blur-sm"
              >
                <CheckCircle2
                  className="w-[24px] h-[24px] text-orange flex-shrink-0"
                />
                <span className="font-sans text-base md:text-lg font-medium">
                  {reason}
                </span>
              </motion.div>
            ))}
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
              Dúvidas Frequentes
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Perguntas Frequentes
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
            <div className="text-primary text-4xl mb-6">❤</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground max-w-3xl mx-auto leading-tight">
              Comece a cuidar do que mais importa hoje mesmo
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Cadastre-se e tenha acesso imediato a todos os benefícios WOW
              Mais.
            </p>
            <a
              href="https://app.wowmais.com.br/"
              className="inline-block mt-8 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
            >
              Começar Agora
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ParaVoce;
