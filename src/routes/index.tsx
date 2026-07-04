import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield,
  Gavel,
  Settings2,
  BarChart3,
  Zap,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Ban,
  Lock,
  ShieldAlert,
  Trash2,
  UserMinus,
  Sliders,
} from "lucide-react";
import heroImage from "@/assets/hero-cvl.png.asset.json";

const CLIENT_ID = "1520827628699910184";
const INVITE_URL = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=bot+applications.commands&permissions=8`;
const SUPPORT_URL = "https://discord.gg/a8YgjbwyMs";

export const Route = createFileRoute("/")({
  component: Index,
});

function DiscordIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.164.294-.355.69-.487 1.003a18.27 18.27 0 0 0-5.487 0A9.6 9.6 0 0 0 10.09 3 19.74 19.74 0 0 0 6.33 4.369C2.68 9.847 1.7 15.19 2.19 20.46a19.9 19.9 0 0 0 6.036 3.06c.487-.66.921-1.362 1.294-2.099a12.87 12.87 0 0 1-2.037-.98c.171-.126.339-.257.5-.39 3.927 1.82 8.18 1.82 12.062 0 .164.133.331.264.5.39-.65.386-1.333.717-2.038.98.373.737.807 1.44 1.293 2.099a19.87 19.87 0 0 0 6.037-3.06c.573-6.114-.983-11.41-4.026-16.09zM9.68 16.797c-1.183 0-2.156-1.084-2.156-2.418s.953-2.42 2.156-2.42c1.211 0 2.176 1.096 2.156 2.42 0 1.334-.953 2.418-2.156 2.418zm7.974 0c-1.184 0-2.156-1.084-2.156-2.418s.953-2.42 2.156-2.42c1.21 0 2.175 1.096 2.156 2.42 0 1.334-.945 2.418-2.156 2.418z" />
    </svg>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#inicio", label: "INICIO" },
    { href: "#funciones", label: "FUNCIONES" },
    { href: "#comandos", label: "COMANDOS" },
    { href: "#soporte", label: "SOPORTE" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="font-display text-2xl font-bold tracking-widest flex items-center gap-1">
          <span className="text-foreground">C</span>
          <span className="text-primary text-glow-red">V</span>
          <span className="text-foreground">L</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-4 py-2 text-xs font-bold tracking-wider hover:bg-secondary hover:border-primary/50 transition-all"
        >
          <DiscordIcon className="w-4 h-4" />
          INVITAR AL BOT
        </a>
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95">
          <div className="px-4 py-4 flex flex-col gap-4 text-sm font-semibold tracking-wider">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-xs font-bold tracking-wider text-primary-foreground"
            >
              <DiscordIcon className="w-4 h-4" />
              INVITAR AL BOT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-16 overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 70% 40%, oklch(0.55 0.25 25 / 0.25), transparent 60%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 grid lg:grid-cols-1 gap-12 items-center">
        <div className="max-w-xl">
          <p className="text-xs font-bold tracking-[0.3em] text-primary mb-4">DISCORD BOT</p>
          <h1 className="font-display font-bold leading-[0.85] tracking-tight text-[clamp(4rem,14vw,10rem)]">
            <span className="text-foreground">C</span>
            <span className="text-primary text-glow-red">V</span>
            <span className="text-foreground">L</span>
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent max-w-[80px]" />
            <p className="font-display text-sm sm:text-base font-semibold tracking-widest">
              BOT DE <span className="text-primary">SEGURIDAD</span> Y{" "}
              <span className="text-primary">MODERACIÓN</span>
            </p>
          </div>
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            Protege tu servidor, mantén el orden y ofrece la mejor experiencia a tu comunidad.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-md bg-gradient-to-r from-primary to-primary/80 px-5 py-4 font-bold tracking-wider text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all"
            >
              <span className="flex items-center gap-3">
                <DiscordIcon className="w-5 h-5" />
                INVITAR AL BOT
              </span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-md border border-border bg-card/60 px-5 py-4 font-bold tracking-wider hover:border-primary/50 hover:bg-card transition-all"
            >
              <span className="flex items-center gap-3">
                <DiscordIcon className="w-5 h-5" />
                SERVIDOR DE SOPORTE
              </span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      <a
        href="#funciones"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
        aria-label="Scroll"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
      <div className="absolute bottom-0 inset-x-0 h-24 circuit-lines opacity-60" aria-hidden />
    </section>
  );
}

const features = [
  {
    icon: Shield,
    title: "SEGURIDAD AVANZADA",
    desc: "Protección completa contra raids, spam, exploits y enlaces maliciosos.",
  },
  {
    icon: Gavel,
    title: "MODERACIÓN PROFESIONAL",
    desc: "Herramientas completas para mantener el orden en tu servidor.",
  },
  {
    icon: Settings2,
    title: "CONTROL TOTAL",
    desc: "Configura cada aspecto del bot con comandos simples y paneles intuitivos.",
  },
  {
    icon: BarChart3,
    title: "REGISTROS DETALLADOS",
    desc: "Mantén un registro de toda la actividad importante en tu servidor.",
  },
  {
    icon: Zap,
    title: "RENDIMIENTO ÓPTIMO",
    desc: "Ligero, rápido y siempre disponible para tu comunidad.",
  },
];

function Features() {
  return (
    <section id="funciones" className="relative py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] text-primary mb-3">FUNCIONES PRINCIPALES</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-wide">
            TODO LO QUE NECESITAS
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-glow transition-all">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-sm font-bold tracking-wider mb-3">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="mt-5 h-0.5 w-8 bg-primary rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const commands = [
  { name: "/ban", icon: Ban, desc: "Banea permanentemente a un usuario del servidor." },
  { name: "/kick", icon: UserMinus, desc: "Expulsa a un usuario del servidor." },
  { name: "/lock", icon: Lock, desc: "Bloquea un canal e impide que los miembros envíen mensajes." },
  { name: "/purge", icon: Trash2, desc: "Elimina en masa mensajes de un canal de forma rápida." },
  { name: "/antinuke", icon: ShieldAlert, desc: "Protege el servidor contra intentos de destrucción y ataques." },
  { name: "/antispam", icon: ShieldAlert, desc: "Detecta y frena spam automáticamente en todos los canales." },
  { name: "/antiwebhook", icon: ShieldAlert, desc: "Bloquea webhooks maliciosos y controla su creación." },
  { name: "/antibot", icon: ShieldAlert, desc: "Impide que bots no autorizados se unan al servidor." },
  { name: "/config", icon: Sliders, desc: "Configura cada módulo del bot desde un panel centralizado." },
];

function Commands() {
  return (
    <section id="comandos" className="relative py-24 border-t border-border/40 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] text-primary mb-3">COMANDOS</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-wide">
            PODER EN CADA <span className="text-primary text-glow-red">SLASH</span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-sm">
            Comandos rápidos, precisos y hechos para administradores serios.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {commands.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.name}
                className="group flex items-start gap-4 rounded-lg border border-border bg-card p-5 hover:border-primary/60 hover:bg-card/80 transition-all"
              >
                <div className="shrink-0 w-11 h-11 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <code className="font-mono text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {c.name}
                  </code>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Support() {
  return (
    <section id="soporte" className="relative py-24 border-t border-border/40 overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{ background: "radial-gradient(circle at center, oklch(0.55 0.25 25 / 0.2), transparent 60%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold tracking-[0.3em] text-primary mb-3">SOPORTE 24/7</p>
        <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-wide">
          ¿LISTO PARA <span className="text-primary text-glow-red">EMPEZAR</span>?
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Únete al servidor de soporte para reportar bugs, sugerir funciones o pedir ayuda con la configuración de CVL.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-md bg-gradient-to-r from-primary to-primary/80 px-8 py-4 font-bold tracking-wider text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all"
          >
            <DiscordIcon className="w-5 h-5" />
            AÑADIR CVL A MI SERVIDOR
          </a>
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-md border border-border bg-card/60 px-8 py-4 font-bold tracking-wider hover:border-primary/50 hover:bg-card transition-all"
          >
            <DiscordIcon className="w-5 h-5" />
            UNIRME AL SOPORTE
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="font-display text-lg tracking-widest">
          <span>C</span>
          <span className="text-primary">V</span>
          <span>L</span>
        </div>
        <p>© {new Date().getFullYear()} CVL Bot · Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Invitar
          </a>
          <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Soporte
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Commands />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
