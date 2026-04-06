import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CurrencyDollar,
  Users,
  TrendUp,
  GraduationCap,
  Rocket,
  ChartLineUp,
  WhatsappLogo,
  CheckCircle,
  Lightning,
  Devices,
  HandHeart,
  Star,
  Play,
  Trophy,
} from "@phosphor-icons/react";
import PageLayout from "@/components/layout/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511978369030";

const benefits = [
  {
    icon: CurrencyDollar,
    title: "Renda Recorrente e Escalavel",
    description:
      "Construa uma renda previsivel que cresce mes a mes. Cada assinatura ativa gera comissao recorrente — enquanto o cliente permanecer, voce ganha.",
  },
  {
    icon: Lightning,
    title: "Flexibilidade e Autonomia",
    description:
      "Trabalhe no seu ritmo, no seu horario. Concilie com outras atividades e construa seu negocio de onde estiver, usando apenas o celular.",
  },
  {
    icon: Rocket,
    title: "Modelo Simples e Acessivel",
    description:
      "Sem investimento inicial, sem estoque, sem complicacao. Um modelo de negocio facil de entender e com treinamento completo para comecar.",
  },
  {
    icon: Devices,
    title: "Ferramentas Digitais Exclusivas",
    description:
      "Aplicativo intuitivo, materiais de marketing prontos, links personalizados e painel de acompanhamento dos seus resultados em tempo real.",
  },
  {
    icon: Star,
    title: "Produtos de Alta Atracao",
    description:
      "Telemedicina, descontos em medicamentos, cashback e beneficios exclusivos. Produtos que se vendem sozinhos pelo valor que entregam.",
  },
  {
    icon: HandHeart,
    title: "Comunidade de Sucesso",
    description:
      "Faca parte de uma rede de empreendedores conectados. Treinamentos regulares, mentorias com lideres e suporte dedicado para seu crescimento.",
  },
];

const steps = [
  {
    number: "01",
    title: "Cadastre-se",
    description: "Faca seu cadastro como consultor WOW+ de forma 100% digital e gratuita. Sem burocracia.",
  },
  {
    number: "02",
    title: "Treine-se",
    description: "Acesse o metodo 10 Passos WOW+ e os treinamentos exclusivos. Prepare-se para vender com confianca.",
  },
  {
    number: "03",
    title: "Compartilhe",
    description: "Apresente a WOW+ para pessoas que precisam de saude acessivel. Use suas redes e contatos.",
  },
  {
    number: "04",
    title: "Ganhe",
    description: "Receba comissoes recorrentes a cada assinatura ativa. Quanto mais compartilhar, mais ganha.",
  },
];

const careerLevels = [
  {
    level: "Consultor",
    description: "Comece sua jornada",
    earnings: "Comissoes diretas",
    icon: "🚀",
  },
  {
    level: "Consultor Senior",
    description: "Primeiras metas alcancadas",
    earnings: "Comissoes + bonus",
    icon: "⭐",
  },
  {
    level: "Coordenador",
    description: "Lideranca de equipe",
    earnings: "Comissoes + equipe",
    icon: "👥",
  },
  {
    level: "Gerente",
    description: "Gestao de resultados",
    earnings: "Ganhos multiplicados",
    icon: "📊",
  },
  {
    level: "Diretor",
    description: "Topo da lideranca",
    earnings: "Ganhos ilimitados",
    icon: "🏆",
  },
];

const faqs = [
  {
    question: "O que e a WOW Mais?",
    answer:
      "A WOW Mais e uma plataforma de servicos digitais que oferece telemedicina, telepsicologia, descontos em medicamentos e acesso a mais de 19 especialidades medicas, proporcionando conveniencia e cuidado em qualquer lugar.",
  },
  {
    question: "Preciso investir algum dinheiro para comecar?",
    answer:
      "Nao! O cadastro como consultor e 100% gratuito. Voce nao precisa de estoque, loja ou investimento inicial. Tudo o que precisa e seu celular e vontade de crescer.",
  },
  {
    question: "Como funciona a renda recorrente?",
    answer:
      "Cada cliente que assinar um plano WOW+ atraves do seu link gera uma comissao mensal recorrente. Enquanto o cliente permanecer ativo, voce continua ganhando. Quanto mais clientes, maior sua renda — e ela nao para de crescer.",
  },
  {
    question: "Quais servicos de saude a WOW+ oferece?",
    answer:
      "Consultas medicas online (telemedicina) em mais de 19 especialidades, telepsicologia, descontos de ate 70% em medicamentos, acesso a exames com desconto, cashback e beneficios exclusivos.",
  },
  {
    question: "A WOW+ oferece planos para empresas e familias?",
    answer:
      "Sim! Temos planos especiais para empresas e familias, com beneficios personalizados e cobertura completa de saude e economia. Como consultor, voce pode oferecer ambos.",
  },
  {
    question: "Como posso obter descontos em medicamentos?",
    answer:
      "Os assinantes acessam descontos de ate 70% em medicamentos nas principais redes de farmacias do Brasil, incluindo Drogasil, Pague Menos e muitas outras — sao mais de 19 mil farmacias credenciadas.",
  },
  {
    question: "Existe suporte para consultores?",
    answer:
      "Sim! Oferecemos treinamentos semanais, mentorias com lideres, materiais de marketing prontos, scripts de vendas e uma comunidade exclusiva no WhatsApp. Voce nunca esta sozinho.",
  },
  {
    question: "Como faco para me cadastrar?",
    answer:
      "Clique no botao 'Quero comecar' nesta pagina ou entre em contato pelo WhatsApp. Um consultor sênior vai te orientar no cadastro e dar todo o suporte para voce comecar.",
  },
];

const Consultor = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 rounded-r-full blur-3xl" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-1.5 rounded-full font-sans text-sm font-semibold mb-6">
                <Trophy size={16} weight="fill" />
                Oportunidade de Negocios
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground leading-tight">
                Como iniciar seu negocio com a{" "}
                <span className="text-gradient">WOW+</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl leading-relaxed">
                Transforme saude em renda recorrente. Seja um consultor WOW+ e
                construa sua independencia financeira ajudando familias a terem
                acesso a saude de qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://app.wowmais.com.br/"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
                >
                  Quero comecar
                  <ArrowUpRight size={20} />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-secondary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/5 transition-colors"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Falar com um consultor
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
                  src="/images/12.jpg"
                  alt="Oportunidade de negocios WOW+"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Assista e entenda
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Conheca a <span className="text-gradient">oportunidade</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg mt-4 max-w-2xl mx-auto">
              Veja como funciona o modelo de negocios WOW+ e como voce pode
              comecar a ganhar.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-card-hover bg-navy aspect-video flex items-center justify-center group cursor-pointer"
          >
            <img
              src="/images/4.jpg"
              alt="Video sobre oportunidade WOW+"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
            />
            <div className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-orange group-hover:scale-110 transition-transform">
              <Play size={36} weight="fill" className="text-primary-foreground ml-1" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 bg-warm-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Vantagens
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Vantagens de iniciar seu negocio{" "}
              <span className="text-gradient">com a WOW+</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <benefit.icon
                    size={28}
                    weight="duotone"
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground font-sans text-base leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
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
              Como Funciona
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              4 passos para <span className="text-gradient">comecar</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-display text-xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30" />
                )}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://app.wowmais.com.br/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
            >
              Quero comecar
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Plano de Carreira */}
      <section className="py-24 bg-navy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Plano de carreira
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mt-3">
              Cresca com a{" "}
              <span className="text-gradient">WOW+</span>
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-4 max-w-2xl mx-auto">
              Um plano de carreira estruturado para voce evoluir e multiplicar
              seus ganhos. Quanto mais cresce, mais ganha.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-5xl mx-auto">
            {careerLevels.map((item, i) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex-1 rounded-2xl p-6 text-center flex flex-col justify-center border transition-all duration-300 hover:-translate-y-1 ${
                  i === careerLevels.length - 1
                    ? "bg-primary/20 border-primary/40"
                    : "bg-navy-light border-secondary-foreground/10"
                }`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-sans text-xs text-primary font-bold uppercase tracking-wider mb-2">
                  Nivel {i + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-secondary-foreground">
                  {item.level}
                </h3>
                <p className="font-sans text-xs text-secondary-foreground/50 mt-1">
                  {item.description}
                </p>
                <p className="font-sans text-xs text-primary font-semibold mt-2">
                  {item.earnings}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Passos */}
      <section className="py-24 bg-warm-gray">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                Treinamento Exclusivo
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
                Metodo{" "}
                <span className="text-gradient">10 Passos WOW+</span>
              </h2>
              <p className="text-muted-foreground font-sans text-lg mt-6 leading-relaxed">
                Nosso metodo exclusivo de treinamento prepara voce para
                apresentar a WOW+ com confianca, construir sua rede e alcancar
                resultados reais desde o primeiro mes.
              </p>
              <ul className="space-y-3 mt-8">
                {[
                  "Treinamento 100% online e gratuito",
                  "Materiais de apoio e scripts prontos",
                  "Mentorias semanais com lideres",
                  "Comunidade exclusiva de consultores",
                  "Certificado de conclusao",
                  "Suporte dedicado da equipe",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-sans text-base text-foreground/80"
                  >
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/14.jpg"
                  alt="Treinamento WOW+"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
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
              Respostas que vao{" "}
              <span className="text-gradient">te ajudar</span>
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

      {/* CTA Final */}
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
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground max-w-3xl mx-auto leading-tight">
              Comece a ganhar com a WOW+ hoje
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Cadastre-se gratuitamente e de o primeiro passo para sua
              independencia financeira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="https://app.wowmais.com.br/"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
              >
                Quero comecar
                <ArrowUpRight size={20} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-secondary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                <WhatsappLogo size={24} weight="fill" />
                Falar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Consultor;
