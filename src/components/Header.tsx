import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
const logoDark = "/logo/logo-dark.png";
const logoLight = "/logo/logo-light.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Para Empresa", href: "/para-empresas" },
  { label: "Para Você", href: "/para-voce" },
  { label: "Contato", href: "/contato" },
  { label: "Blog", href: "/blog" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar - only visible when NOT scrolled */}
      <div
        className={`bg-navy text-secondary-foreground py-2 text-sm hidden lg:block transition-all duration-300 ${
          scrolled ? "opacity-0 h-0 overflow-hidden py-0" : "opacity-100"
        }`}
      >
        <div className="container flex justify-center items-center">
          <span className="flex items-center gap-2">
            <span className="text-orange">❤</span> O que mais Importa?
          </span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-0"
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "container max-w-6xl mx-auto bg-navy/30 backdrop-blur-xl rounded-full shadow-lg border border-secondary-foreground/10"
              : "bg-background"
          }`}
        >
          <div
            className={`flex items-center justify-between ${
              scrolled
                ? "px-4 lg:px-6 h-16 lg:h-20"
                : "container h-20 lg:h-24"
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src={scrolled ? logoLight : logoDark}
                alt="WOW Mais"
                className={`transition-all duration-300 ${
                  scrolled ? "w-[150px] lg:w-[180px]" : "w-[180px] lg:w-[250px]"
                }`}
              />
              {scrolled && (
                <div className="hidden lg:block w-px h-8 bg-secondary-foreground/20 ml-6" />
              )}
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                >
                  <Link
                    to={item.href}
                    className={`px-3 py-2 font-sans text-sm font-medium transition-colors flex items-center gap-1 ${
                      scrolled
                        ? "text-secondary-foreground/80 hover:text-primary-foreground"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* CTA / Phone */}
            <div className="hidden lg:flex items-center gap-4">
              {scrolled ? (
                <a
                  href="tel:+5511978369030"
                  className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-orange">
                    <Phone className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <span className="font-sans text-sm font-semibold">
                    Entrar
                  </span>
                </a>
              ) : (
                <a
                  href="https://app.wowmais.com.br/"
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-sans text-sm font-semibold hover:bg-orange-dark transition-colors shadow-orange"
                >
                  Entrar
                </a>
              )}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 ${
                scrolled ? "text-secondary-foreground" : "text-foreground"
              }`}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`lg:hidden overflow-hidden ${
                scrolled
                  ? "mx-4 mt-2 rounded-2xl bg-navy/95 backdrop-blur-xl border border-secondary-foreground/10"
                  : "bg-card border-t border-border"
              }`}
            >
              <nav className="px-6 py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`py-3 font-sans text-base font-medium flex items-center justify-between border-b ${
                        scrolled
                          ? "text-secondary-foreground/80 hover:text-primary-foreground border-secondary-foreground/10"
                          : "text-foreground hover:text-primary border-border/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
                <a
                  href="https://app.wowmais.com.br/"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-sans text-sm font-semibold text-center mt-4"
                >
                  Entrar
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
