import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ArrowUpRight, Wrench, ClipboardList, Headset, Plug, Map, ShieldCheck } from "lucide-react";

export default function ServicesRouteWrapper() {
  return <ServicesPage />;
}

const services = [
  { icon: Map, t: "Site survey & design", b: "Free on-site assessment. CAD layouts, traffic flow modelling and BOQ within 48 hours." },
  { icon: ClipboardList, t: "Supply & specification", b: "Single-vendor supply across all three product lines, brand-matched finishes." },
  { icon: Wrench, t: "Installation & commissioning", b: "In-house crews, civils to power-on. We don't sub-contract the work that matters." },
  { icon: Plug, t: "Integration", b: "Wiegand, OSDP, Modbus, MQTT and REST integrations with your existing stack." },
  { icon: Headset, t: "24/7 support & AMC", b: "Tiered AMC plans with 4-hour and 12-hour on-site response SLAs." },
  { icon: ShieldCheck, t: "Compliance & audit", b: "GDPR-ready data handling, ISO 27001 cloud, full audit trail of every event." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title={
          <>
            One vendor. <em className="text-primary not-italic">One SLA.</em>
            <br /> One number to call.
          </>
        }
        subtitle="From the first survey to the last spare part — Miturtle is accountable for the lifecycle, not just the box you bought."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, t, b }, i) => (
            <article
              key={t}
              className="glass rounded-2xl p-7 hover-lift"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.08}s both` }}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-2xl leading-tight">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--surface)]/40 border-y border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Process</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1] text-balance max-w-3xl">
            How a Miturtle deployment actually runs.
          </h2>

          <ol className="mt-14 grid md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              ["01", "Survey", "We walk the site, map traffic flow, photograph constraints."],
              ["02", "Specify", "CAD layout, BOQ, finish samples — all within 48 hours."],
              ["03", "Install", "In-house crew. Civils, power, mechanical, commissioning."],
              ["04", "Support", "AMC, telemetry, spares and 24/7 response."],
            ].map(([k, t, b]) => (
              <li key={k} className="bg-[color:var(--surface)]/60 p-8">
                <p className="font-display text-primary text-xl">{k}</p>
                <h3 className="mt-3 font-display text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
            >
              Start with a survey <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
