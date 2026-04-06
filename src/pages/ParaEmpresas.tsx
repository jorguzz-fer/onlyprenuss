import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  Users,
  TrendingUp,
  ShieldCheck,
  Heart,
  Tag,
  Film,
  Building2,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

const benefits = [
  {
    icon: Users,
    title: "Retenção de Talentos",
    description:
      "Ofereça um benefício diferenciado que valoriza seus colaboradores e reduz o turnover da empresa.",
  },
  {
    icon: TrendingUp,
    title: "Redução de Custos",
    description:
      "Planos a partir de R$19/mês por colaborador. Muito mais acessível que planos de saúde tradicionais.",
  },
  {
    icon: ShieldCheck,
    title: "Bem-estar da Equipe",
    description:
      "Colaboradores com acesso a saúde produzem mais e faltam menos. Cuide de quem faz sua empresa crescer.",
  },
  {
    icon: Building2,
    title: "Gestão Simplificada",
    description:
      "Plataforma 100% digital para gerenciar os benefícios da equipe. Sem burocracia, sem papelada.",
  },
];

const steps = [
  {
    number: "1",
    title: "Fale com um consultor",
    description: "Entre em contato e conheça as soluções para sua empresa.",
  },
  {
    number: "2",
    title: "Escolha o plano ideal",
    description:
      "Selecione o pacote de benefícios que melhor atende suas necessidades.",
  },
  {
    number: "3",
    title: "Ative para a equipe",
    description:
      "Em poucos minutos todos os colaboradores já têm acesso aos benefícios.",
  },
];

const includedServices = [
  {
    icon: Heart,
    title: "WOW+ Med",
    description: "Telemedicina 24h e consultas presenciais com desconto.",
  },
  {
    icon: Tag,
    title: "WOW+ Clube",
    description: "Cashback e descontos exclusivos em milhares de lojas.",
  },
  {
    icon: Film,
    title: "WOW+ Cine",
    description: "Entretenimento para os colaboradores e suas famílias.",
  },
];

const planFeatures = [
  "Descontos em mais de 10 mil lojas",
  "Cashback em compras",
  "Ofertas exclusivas",
  "Descontos em restaurantes, eletrônicos, roupas, etc.",
  "Descontos em medicamentos",
  "Conversão de cashback em benefícios e viagens",
];

const ParaEmpresas = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                Para Empresas
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground mt-4 leading-tight">
                Benefícios que sua equipe{" "}
                <span className="text-gradient">merece</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl">
                Ofereça saúde, bem-estar e economia para seus colaboradores com
                planos acessíveis e gestão 100% digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://api.whatsapp.com/send?phone=5511978369030&text=Olá! Gostaria de conhecer os planos empresariais WOW+"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
                >
                  Fale com um Consultor
                  <ArrowUpRight className="w-[20px] h-[20px]" />
                </a>
                <a
                  href="#plano"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-secondary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/5 transition-colors"
                >
                  Ver Plano Empresarial
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
                  src="/images/10.jpg"
                  alt="Equipe empresarial"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios Corporativos */}
      <section className="py-24">
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
              Por que oferecer a{" "}
              <span className="text-gradient">WOW+ para sua equipe?</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                  <benefit.icon
                    className="w-[30px] h-[30px] text-primary"
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-warm-gray">
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
              Ativar é <span className="text-gradient">rápido e simples</span>
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
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-muted-foreground text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Inclusos */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Serviços inclusos
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Tudo que sua equipe <span className="text-gradient">precisa</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {includedServices.map((service, i) => (
              <motion.a
                key={service.title}
                href={`/servicos#${service.title.split(" ")[1]?.toLowerCase() || ""}`}
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

      {/* Plano PJ */}
      <section id="plano" className="py-24 bg-navy">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                Plano Empresarial
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mt-3">
                WOW+ Saúde — Pessoa Jurídica
              </h2>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-4">
                Plano de benefícios e economia para cada colaborador.
              </p>
              <div className="mt-6 mb-2">
                <span className="font-sans text-xl text-secondary-foreground top-[-1rem] relative">
                  R$
                </span>
                <span className="font-display text-6xl font-bold tracking-tight text-primary">
                  19
                </span>
                <span className="font-sans text-base font-medium ml-1 text-secondary-foreground/60">
                  /mês por colaborador
                </span>
              </div>
              <div className="text-sm font-semibold font-sans mb-8 py-2 px-4 rounded-full inline-block bg-primary/20 text-primary">
                Ideal para quem quer economizar no dia a dia
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

              <a
                href="https://api.whatsapp.com/send?phone=5511978369030&text=Olá! Gostaria de conhecer os planos empresariais WOW+"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
              >
                <MessageCircle className="w-[20px] h-[20px]" />
                Fale com um Consultor
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
                  src="/images/11.jpg"
                  alt="Equipe empresarial"
                  className="w-full aspect-[3/4] object-cover"
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
            <div className="text-primary text-4xl mb-6">❤</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground max-w-3xl mx-auto leading-tight">
              Cuide de quem faz sua empresa crescer
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Fale com nosso time e descubra como a WOW+ pode transformar os
              benefícios da sua empresa.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5511978369030&text=Olá! Gostaria de conhecer os planos empresariais WOW+"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
            >
              <MessageCircle className="w-[20px] h-[20px]" />
              Fale com um Consultor
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ParaEmpresas;
