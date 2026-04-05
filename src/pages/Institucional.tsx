import { motion } from "framer-motion";
import {
  Heart,
  Eye,
  Star,
  Lightbulb,
  Globe,
  CheckCircle,
  ArrowUpRight,
} from "@phosphor-icons/react";
import PageLayout from "@/components/layout/PageLayout";

const values = [
  {
    icon: Heart,
    title: "Missão",
    description:
      "Democratizar o acesso a cuidados médicos, assistência e vantagens exclusivas, proporcionando saúde de qualidade e economia para todas as famílias brasileiras.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser a maior plataforma de saúde e benefícios do Brasil, reconhecida pela acessibilidade, inovação tecnológica e impacto positivo na vida das pessoas.",
  },
  {
    icon: Star,
    title: "Valores",
    description:
      "Acessibilidade, transparência, inovação, cuidado com as pessoas e compromisso com a qualidade em cada serviço que oferecemos.",
  },
];

const techFeatures = [
  "Plataforma 100% digital e mobile-first",
  "Telemedicina com tecnologia de ponta",
  "App intuitivo para toda a família",
  "Segurança de dados e conformidade LGPD",
  "Integração com rede nacional de parceiros",
  "Atendimento automatizado + humano 24h",
];

const stats = [
  { value: "10k+", label: "Estabelecimentos Parceiros" },
  { value: "24h", label: "Atendimento Disponível" },
  { value: "100%", label: "Digital e Acessível" },
  { value: "500+", label: "Famílias Atendidas" },
];

const Institucional = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                Institucional
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground mt-4 leading-tight">
                Conheça a{" "}
                <span className="text-gradient">WOW Mais</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl">
                Uma plataforma criada para democratizar o acesso à saúde e
                benefícios para todas as famílias brasileiras. Conheça nossa
                história, missão e valores.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/12.jpg"
                  alt="Equipe WOW Mais"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                Quem Somos
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
                Saúde acessível{" "}
                <span className="text-gradient">de verdade.</span>
              </h2>
              <p className="text-muted-foreground font-sans text-lg mt-6 leading-relaxed">
                A WOW+ é uma plataforma de serviços e benefícios em saúde que
                democratiza o acesso a cuidados médicos, assistência e
                vantagens exclusivas para toda a família.
              </p>
              <p className="text-muted-foreground font-sans text-lg mt-4 leading-relaxed">
                Nascemos com o propósito de transformar a forma como as famílias
                brasileiras cuidam da saúde — sem burocracia, sem filas e com
                preços acessíveis. Nossa plataforma conecta você a uma rede
                completa de médicos, especialistas, clínicas e laboratórios em
                todo o Brasil.
              </p>
              <p className="text-muted-foreground font-sans text-lg mt-4 leading-relaxed">
                Através da tecnologia, tornamos possível que qualquer pessoa
                tenha acesso a atendimento médico de qualidade, de onde
                estiver, a qualquer hora.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/5.webp"
                  alt="Sobre a WOW+"
                  className="w-full aspect-[4/5] md:aspect-[3/4] object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-warm-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Nosso Propósito
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Missão, Visão e{" "}
              <span className="text-gradient">Valores</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mb-6 mx-auto">
                  <item.icon
                    size={32}
                    weight="duotone"
                    className="text-primary"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
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

      {/* Tecnologia & Inovação */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/14.jpg"
                  alt="Tecnologia WOW+"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb
                  size={28}
                  weight="duotone"
                  className="text-primary"
                />
                <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                  Tecnologia & Inovação
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Tecnologia a serviço da sua{" "}
                <span className="text-gradient">saúde</span>
              </h2>
              <p className="text-muted-foreground font-sans text-lg mt-6 leading-relaxed">
                Nossa plataforma foi construída com as mais modernas tecnologias
                para oferecer uma experiência simples, segura e eficiente. Do
                agendamento à consulta, tudo acontece na palma da sua mão.
              </p>

              <ul className="space-y-3 mt-8">
                {techFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 font-sans text-base text-foreground/80"
                  >
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-24 bg-navy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Nossos Números
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mt-3">
              Impacto que{" "}
              <span className="text-gradient">cresce</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-light border border-secondary-foreground/10 rounded-2xl p-8 text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="font-sans text-sm text-secondary-foreground/60 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onde Estamos */}
      <section className="py-24 bg-warm-gray">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe
                  size={28}
                  weight="duotone"
                  className="text-primary"
                />
                <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                  Onde Estamos
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Presença{" "}
                <span className="text-gradient">nacional</span>
              </h2>
              <p className="text-muted-foreground font-sans text-lg mt-6 leading-relaxed">
                Com sede em Osasco, SP, a WOW+ está presente em diversas regiões
                do Brasil através da nossa rede de parceiros, clínicas e
                laboratórios credenciados.
              </p>
              <p className="text-muted-foreground font-sans text-lg mt-4 leading-relaxed">
                Nossa telemedicina permite que você consulte médicos de qualquer
                lugar do país, 24 horas por dia. Já a rede presencial está em
                constante expansão para atender você cada vez mais perto.
              </p>

              <div className="mt-8 p-5 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                <p className="font-sans text-base font-medium text-foreground/90">
                  Mais acesso. Mais conveniência. Mais cuidado para sua família.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/9.jpg"
                  alt="Presença nacional WOW+"
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
            <div className="text-primary text-4xl mb-6">❤</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground max-w-3xl mx-auto leading-tight">
              Faça parte dessa transformação
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Junte-se a milhares de famílias que já cuidam da saúde com a WOW+.
            </p>
            <a
              href="https://app.wowmais.com.br/"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
            >
              Começar Agora
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Institucional;
