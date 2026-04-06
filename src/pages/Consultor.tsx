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
} from "@phosphor-icons/react";
import PageLayout from "@/components/layout/PageLayout";

const steps = [
  {
    number: "1",
    title: "Cadastre-se",
    description: "Faca seu cadastro como consultor WOW+ de forma 100% digital.",
  },
  {
    number: "2",
    title: "Treine",
    description:
      "Acesse nossos treinamentos exclusivos e o metodo 10 Passos WOW+.",
  },
  {
    number: "3",
    title: "Compartilhe",
    description:
      "Apresente a WOW+ para pessoas que precisam de saude acessivel.",
  },
  {
    number: "4",
    title: "Ganhe",
    description:
      "Receba comissoes recorrentes a cada assinatura ativa na sua rede.",
  },
];

const benefits = [
  {
    icon: CurrencyDollar,
    title: "Renda Recorrente",
    description:
      "Ganhe comissoes todos os meses enquanto seus clientes permanecerem ativos. Sua renda cresce sem limite.",
  },
  {
    icon: ChartLineUp,
    title: "Plano de Carreira",
    description:
      "Evolua de consultor a lider com nosso plano de carreira estruturado. Quanto mais cresce, mais ganha.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos Exclusivos",
    description:
      "Acesse o metodo 10 Passos WOW+ e treinamentos semanais para se tornar um especialista em vendas.",
  },
  {
    icon: Users,
    title: "Equipe e Suporte",
    description:
      "Conte com suporte dedicado, materiais de marketing e uma comunidade ativa de consultores.",
  },
  {
    icon: Rocket,
    title: "Comece sem investimento",
    description:
      "Nao precisa de estoque, loja ou investimento inicial. Tudo o que voce precisa e seu celular.",
  },
  {
    icon: TrendUp,
    title: "Mercado em Crescimento",
    description:
      "O mercado de saude digital nao para de crescer. Posicione-se agora e aproveite essa oportunidade.",
  },
];

const careerLevels = [
  { level: "Consultor", description: "Comece sua jornada", color: "bg-orange/20 text-orange" },
  { level: "Consultor Senior", description: "Primeiras metas alcancadas", color: "bg-orange/30 text-orange" },
  { level: "Coordenador", description: "Lideranca de equipe", color: "bg-orange/40 text-orange-dark" },
  { level: "Gerente", description: "Gestao de resultados", color: "bg-orange/50 text-orange-dark" },
  { level: "Diretor", description: "Topo da lideranca", color: "bg-primary text-primary-foreground" },
];

const testimonials = [
  {
    name: "Ana Paula",
    role: "Consultora Senior",
    text: "Em 6 meses como consultora WOW+, consegui uma renda extra que transformou minha vida financeira. O suporte da equipe e incrivel!",
  },
  {
    name: "Carlos Eduardo",
    role: "Coordenador",
    text: "O plano de carreira da WOW+ me motivou a crescer. Hoje tenho uma equipe e ganhos que nunca imaginei ser possivel.",
  },
  {
    name: "Fernanda Lima",
    role: "Consultora",
    text: "Comecei sem experiencia em vendas e os treinamentos me prepararam completamente. Hoje ajudo familias a terem saude acessivel.",
  },
];

const Consultor = () => {
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
                Ganhe com a WOW+
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground mt-4 leading-tight">
                Transforme saude em{" "}
                <span className="text-gradient">renda recorrente</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl">
                Seja um consultor WOW+ e construa uma fonte de renda ajudando
                familias a terem acesso a saude de qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://app.wowmais.com.br/"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
                >
                  Quero ser consultor
                  <ArrowUpRight size={20} />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511999999999"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-secondary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/5 transition-colors"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Saiba mais
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
                  alt="Consultor WOW+"
                  className="w-full aspect-[4/3] object-cover"
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
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-2xl font-bold mx-auto mb-6">
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
              Por que ser consultor
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Vantagens de ser{" "}
              <span className="text-gradient">WOW+</span>
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
              Cresça com a{" "}
              <span className="text-gradient">WOW+</span>
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-4 max-w-2xl mx-auto">
              Um plano de carreira estruturado para voce evoluir e multiplicar
              seus ganhos.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-4xl mx-auto">
            {careerLevels.map((item, i) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 bg-navy-light border border-secondary-foreground/10 rounded-2xl p-6 text-center flex flex-col justify-center"
              >
                <div
                  className={`inline-block mx-auto px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider mb-3 ${item.color}`}
                >
                  Nivel {i + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-secondary-foreground">
                  {item.level}
                </h3>
                <p className="font-sans text-xs text-secondary-foreground/50 mt-1">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Depoimentos
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Quem ja e <span className="text-gradient">consultor</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border"
              >
                <div className="text-primary text-3xl mb-4">"</div>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
                  {t.text}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-display text-base font-bold text-foreground">
                    {t.name}
                  </p>
                  <p className="font-sans text-sm text-primary font-medium">
                    {t.role}
                  </p>
                </div>
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
              Comece a ganhar com a WOW+ hoje
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Cadastre-se gratuitamente e de o primeiro passo para sua
              independencia financeira.
            </p>
            <a
              href="https://app.wowmais.com.br/"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
            >
              Quero ser consultor
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Consultor;
