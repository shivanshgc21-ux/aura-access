import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Helix Automation" },
      {
        name: "description",
        content:
          "Helix Automation engineers premium boom barriers, gate motors and access control. Innovate · Integrate · Inspire.",
      },
      { property: "og:title", content: "About — Helix Automation" },
      { property: "og:description", content: "Our story, mission and engineering principles." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About · Est. 2014"
        title={
          <>
            Engineering quiet,
            <br />
            <em className="text-primary not-italic">precise</em> infrastructure.
          </>
        }
        subtitle="Helix Automation builds traffic automation hardware that disappears into the architecture — and a service operation that doesn't disappear when you need it."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Our principles</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1] text-balance">
            Three commitments we make on every project.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6">
          {[
            ["Innovate", "Mechanical, electronic and software design under one roof. No off-the-shelf compromise."],
            ["Integrate", "Open protocols (OSDP, Modbus, MQTT, REST) so our hardware fits your stack — not the other way around."],
            ["Inspire", "Architectural finishes, near-silent operation and dashboards that field teams actually use."],
          ].map(([t, b]) => (
            <div key={t} className="glass rounded-2xl p-7">
              <h3 className="font-display text-3xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--surface)]/40 border-y border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">By the numbers</p>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              ["2,800+", "Sites deployed"],
              ["18", "Cities served"],
              ["99.97%", "Measured uptime"],
              ["48 hr", "Median quote turnaround"],
            ].map(([n, l]) => (
              <div key={l} className="bg-[color:var(--surface)]/60 p-8">
                <p className="font-display text-5xl">{n}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="glass-strong rounded-3xl p-10 sm:p-14 flex flex-col lg:flex-row gap-8 items-center justify-between">
          <h2 className="font-display text-4xl sm:text-5xl leading-[1] max-w-2xl text-balance">
            Want the full company deck and product catalogue?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
          >
            Request it <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
