import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Términos de Servicio — CVL Bot" },
      { name: "description", content: "Términos de Servicio de CVL, el bot de Discord de seguridad y moderación." },
      { property: "og:title", content: "Términos de Servicio — CVL Bot" },
      { property: "og:description", content: "Lee los Términos de Servicio de CVL antes de invitar el bot a tu servidor." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return <LegalPage title="TÉRMINOS DE SERVICIO" updated="Última actualización: 6 de julio de 2026">
    <Section title="1. Aceptación de los términos">
      <p>Al invitar, usar o interactuar con el bot <strong className="text-primary">CVL</strong> ("el Bot") en un servidor de Discord, aceptas cumplir estos Términos de Servicio. Si no estás de acuerdo con alguna parte, no utilices el Bot.</p>
    </Section>
    <Section title="2. Uso del servicio">
      <p>CVL se ofrece "tal cual" para proporcionar funciones de seguridad y moderación en servidores de Discord. Te comprometes a:</p>
      <ul>
        <li>No utilizar el Bot para actividades ilegales, abusivas o que violen las <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Condiciones de Servicio de Discord</a>.</li>
        <li>No intentar explotar, vulnerar, revertir o interrumpir el funcionamiento del Bot.</li>
        <li>No usar el Bot para acosar, difamar o dañar a otros usuarios.</li>
      </ul>
    </Section>
    <Section title="3. Disponibilidad">
      <p>Hacemos lo posible por mantener el Bot disponible 24/7, pero no garantizamos un servicio ininterrumpido. Podemos suspender, modificar o descontinuar funciones en cualquier momento sin previo aviso.</p>
    </Section>
    <Section title="4. Responsabilidad del administrador">
      <p>Como propietario o administrador del servidor eres responsable de la correcta configuración del Bot y de las acciones que se ejecuten a través de él en tu comunidad.</p>
    </Section>
    <Section title="5. Limitación de responsabilidad">
      <p>CVL y su equipo no serán responsables por daños directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del Bot, incluyendo pero no limitado a pérdida de datos, sanciones de Discord o interrupciones del servicio.</p>
    </Section>
    <Section title="6. Cambios en los términos">
      <p>Podemos actualizar estos términos en cualquier momento. Los cambios entran en vigor al publicarse en esta página. El uso continuado del Bot implica la aceptación de los términos actualizados.</p>
    </Section>
    <Section title="7. Contacto">
      <p>Si tienes preguntas sobre estos términos, contáctanos en nuestro <a href="https://discord.gg/a8YgjbwyMs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">servidor de soporte oficial</a>.</p>
    </Section>
  </LegalPage>;
}

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-muted-foreground hover:text-primary transition-colors mb-8">
          <ChevronLeft className="w-4 h-4" /> VOLVER AL INICIO
        </Link>
        <p className="text-xs font-bold tracking-[0.3em] text-primary mb-3">LEGAL</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-wide">{title}</h1>
        <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
        <p className="mt-6 text-sm text-muted-foreground">{updated}</p>
        <div className="mt-10 space-y-8 legal-content">{children}</div>
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold tracking-wider text-foreground mb-3">{title}</h2>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
        {children}
      </div>
    </section>
  );
}
