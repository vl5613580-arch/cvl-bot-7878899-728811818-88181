import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "./terms";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — CVL Bot" },
      { name: "description", content: "Política de Privacidad de CVL, el bot de Discord de seguridad y moderación." },
      { property: "og:title", content: "Política de Privacidad — CVL Bot" },
      { property: "og:description", content: "Cómo CVL recopila, usa y protege los datos de tu servidor de Discord." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalPage title="POLÍTICA DE PRIVACIDAD" updated="Última actualización: 6 de julio de 2026">
    <Section title="1. Introducción">
      <p>Esta Política de Privacidad describe cómo el bot <strong className="text-primary">CVL</strong> recopila, almacena y utiliza la información necesaria para ofrecer sus funciones de seguridad y moderación en Discord.</p>
    </Section>
    <Section title="2. Información que recopilamos">
      <ul>
        <li><strong>IDs de Discord:</strong> ID del servidor, canales, roles y usuarios para aplicar las funciones del bot.</li>
        <li><strong>Configuración del servidor:</strong> ajustes de moderación, antinuke, antispam, canales de logs, etc.</li>
        <li><strong>Registros de moderación:</strong> historial de sanciones (bans, kicks, mutes) para funciones de auditoría.</li>
        <li><strong>Contenido de mensajes:</strong> únicamente el necesario para detectar spam, enlaces maliciosos o comandos, y no se almacena de forma permanente salvo indicación explícita.</li>
      </ul>
    </Section>
    <Section title="3. Cómo usamos los datos">
      <ul>
        <li>Proporcionar y mejorar las funciones del Bot.</li>
        <li>Aplicar reglas de moderación configuradas por el servidor.</li>
        <li>Prevenir abuso, fraude y actividades maliciosas.</li>
        <li>Depuración y diagnóstico de errores.</li>
      </ul>
    </Section>
    <Section title="4. Compartición de datos">
      <p>No vendemos ni compartimos tus datos con terceros. Los datos se procesan únicamente por el equipo de CVL para el funcionamiento del servicio.</p>
    </Section>
    <Section title="5. Retención de datos">
      <p>Conservamos la configuración del servidor mientras el Bot permanezca en él. Si expulsas al Bot, los datos asociados a tu servidor se eliminan en un plazo razonable, salvo aquellos que debamos conservar por motivos legales.</p>
    </Section>
    <Section title="6. Seguridad">
      <p>Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, alteración o destrucción. Sin embargo, ningún sistema es 100% seguro.</p>
    </Section>
    <Section title="7. Tus derechos">
      <p>Puedes solicitar la eliminación de los datos asociados a tu servidor en cualquier momento contactándonos en el <a href="https://discord.gg/a8YgjbwyMs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">servidor de soporte</a>.</p>
    </Section>
    <Section title="8. Cambios en la política">
      <p>Podemos actualizar esta política ocasionalmente. Publicaremos cualquier cambio en esta página con la fecha de actualización correspondiente.</p>
    </Section>
    <Section title="9. Contacto">
      <p>Para cualquier consulta sobre privacidad, escríbenos en nuestro <a href="https://discord.gg/a8YgjbwyMs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">servidor de soporte oficial</a>.</p>
    </Section>
  </LegalPage>;
}
