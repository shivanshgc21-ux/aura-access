import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ArrowUpRight, Check } from "lucide-react";
import boomImg from "@/assets/product-boom-barrier.jpg";
import gateImg from "@/assets/product-sliding-gate.jpg";
import accessImg from "@/assets/product-access-control.jpg";
import heroImg from "@/assets/hero-boom-barrier.jpg";

export default function ProductsRouteWrapper() {
  return <ProductsPage />;
}

const products = [
  {
    id: "boom-barrier",
    tag: "01 — Boom Barrier",
    name: "Sentinel B-Series",
    img: boomImg,
    body: "High-cycle automatic boom barriers for corporate, parking and toll-plaza lanes. Powder-coated IP55 cabinets, brushless DC drive, soft start/stop.",
    specs: [
      ["Arm length", "Up to 6 m"],
      ["Opening time", "0.9 – 3.0 s"],
      ["Duty cycle", "Continuous, 5M cycles"],
      ["Protection", "IP55 / IK10"],
      ["Detection", "Loop, IR, radar, LPR"],
      ["Power", "230 V AC · 100 W"],
    ],
    uses: ["Office parking", "Toll plazas", "Gated residences", "Hospitality drive-ups"],
  },
  {
    id: "sliding-gate",
    tag: "02 — Sliding Gate Motor",
    name: "Miturtle SG-2200",
    img: gateImg,
    body: "Heavy-duty sliding gate operators for industrial perimeters and logistics yards. Encoder feedback, anti-crush, battery backup.",
    specs: [
      ["Gate weight", "Up to 2,200 kg"],
      ["Speed", "10 – 18 m/min"],
      ["Drive", "BLDC + helical reducer"],
      ["Safety", "Anti-crush, photocell, mag-loop"],
      ["Backup", "Optional 12 V / 7 Ah UPS"],
      ["Protocols", "Wiegand, RS-485, dry contact"],
    ],
    uses: ["Industrial perimeters", "Warehousing", "Data centres", "Compound gates"],
  },
  {
    id: "access-control",
    tag: "03 — Access Control",
    name: "Veridian Reader",
    img: accessImg,
    body: "Dual RFID + capacitive fingerprint readers with optional face recognition. Cloud or on-prem panels, full audit trail, REST API.",
    specs: [
      ["Credentials", "RFID 13.56 MHz, PIN, fingerprint, face"],
      ["Capacity", "20k users · 200k events"],
      ["Connectivity", "PoE · Wi-Fi · 4G"],
      ["Integrations", "OSDP, Wiegand, REST, MQTT"],
      ["Compliance", "ISO 27001 cloud · GDPR-ready"],
      ["Modes", "Standalone or networked"],
    ],
    uses: ["Smart offices", "Co-working", "Server rooms", "Mixed-use towers"],
  },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Three pillars. <em className="text-primary not-italic">One control plane.</em>
          </>
        }
        subtitle="Every product talks to Miturtle Live — our unified telemetry and audit dashboard. Specify them individually, or as a stack."
        bgImage={heroImg}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-28">
        {products.map((p, i) => (
          <article key={p.id} id={p.id} className="grid lg:grid-cols-12 gap-10 items-center">
            <div
              className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""} relative rounded-3xl overflow-hidden glass shadow-elevated`}
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="text-xs uppercase tracking-[0.22em] text-primary">{p.tag}</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-[1] text-balance">{p.name}</h2>
              <p className="mt-5 text-muted-foreground text-pretty">{p.body}</p>

              <dl className="mt-8 grid grid-cols-2 gap-px bg-white/5 rounded-xl overflow-hidden">
                {p.specs.map(([k, v]) => (
                  <div key={k} className="bg-[color:var(--surface)]/60 p-4">
                    <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</dt>
                    <dd className="mt-1 font-display text-lg">{v}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2">
                {p.uses.map((u) => (
                  <li key={u} className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
                    <Check className="h-3 w-3 text-primary" /> {u}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/15 ring-1 ring-primary/40 px-5 py-2.5 text-sm hover:bg-primary/25 transition-colors"
              >
                Request a datasheet <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
