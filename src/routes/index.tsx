import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Zap,
  Activity,
  Clock,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-boom-barrier.jpg";
import boomImg from "@/assets/product-boom-barrier.jpg";
import gateImg from "@/assets/product-sliding-gate.jpg";
import accessImg from "@/assets/product-access-control.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miturtle — Premium Traffic & Access Automation" },
      {
        name: "description",
        content:
          "Engineered boom barriers, sliding gate motors and access control systems. Innovate · Integrate · Inspire.",
      },
      { property: "og:title", content: "Miturtle" },
      {
        property: "og:description",
        content: "Luxury industrial traffic automation systems.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <Intro />
      <Solutions />
      <ProductHighlights />
      <WhyUs />
      <Testimonials />
      <ContactBanner />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden -mt-24 pt-24">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Automatic boom barrier at a corporate entrance"
          className="h-full w-full object-cover opacity-55"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-32 sm:pt-28 sm:pb-40">
        <div className="flex items-center gap-3 animate-[fade-up_0.5s_ease-out_both]">
          <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <p className="eyebrow">Traffic Automation · Est. 2014</p>
        </div>

        <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.92] text-balance max-w-5xl animate-[fade-up_0.7s_ease-out_both]">
          The quiet precision <br />
          of <em className="text-primary not-italic font-display">controlled access</em>.
        </h1>

        <p className="mt-7 max-w-xl text-lg text-muted-foreground text-pretty animate-[fade-up_0.9s_ease-out_both]">
          Boom barriers, sliding gate motors and access control — engineered for
          corporate campuses, hotels and high-security infrastructure.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 animate-[fade-up_1.1s_ease-out_both]">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-elevated transition-all"
          >
            Explore products
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm hover:bg-white/10 transition-colors"
          >
            Request a site survey
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden glass animate-[fade-up_1.3s_ease-out_both]">
          {[
            ["12+", "Years engineering"],
            ["2.8K", "Installations"],
            ["99.97%", "Uptime SLA"],
            ["24/7", "Field support"],
          ].map(([n, l]) => (
            <div key={l} className="px-5 py-6 bg-[color:var(--surface)]/60">
              <p className="font-display text-3xl sm:text-4xl">{n}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Innovate", "·", "Integrate", "·", "Inspire",
    "·", "Parking management", "·", "Toll plazas",
    "·", "Smart offices", "·", "Hospitality", "·", "Logistics hubs",
  ];
  return (
    <section className="border-y border-white/5 py-5 overflow-hidden">
      <div className="flex gap-10 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className={`text-sm ${t === "·" ? "text-primary" : "text-muted-foreground"}`}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <p className="eyebrow">About Miturtle</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1] text-balance">
          A quieter way to <em className="text-primary not-italic">move people</em> and vehicles.
        </h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground text-pretty">
        <p className="text-lg leading-relaxed">
          Miturtle designs and deploys traffic automation hardware that
          disappears into the architecture. From the discreet hum of a high-cycle
          boom barrier to the precision of a biometric reader, every surface is
          considered.
        </p>
        <p>
          We work with developers, facility managers and security integrators across
          India and the Gulf — handling specification, on-site installation and
          24/7 lifecycle support from a single point of accountability.
        </p>
        <div className="pt-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
          >
            Read the full story <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const items = [
    {
      icon: Activity,
      title: "Parking & toll lanes",
      body: "High-cycle boom barriers paired with loop detectors and LPR for queue-free entry.",
    },
    {
      icon: ShieldCheck,
      title: "Perimeter security",
      body: "Heavy-duty sliding gate motors for industrial and logistics perimeters.",
    },
    {
      icon: Cpu,
      title: "Smart office access",
      body: "RFID, fingerprint and face-recognition readers integrated with attendance.",
    },
    {
      icon: Zap,
      title: "Hospitality drive-up",
      body: "Silent barriers and brand-finished housings for hotels and resorts.",
    },
  ];
  return (
    <section className="bg-[color:var(--surface)]/40 border-y border-white/5 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Solutions</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1] text-balance">
              Traffic automation, tuned to the space it serves.
            </h2>
          </div>
          <Link to="/services" className="text-sm text-primary inline-flex items-center gap-2">
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, body }, i) => (
            <article
              key={title}
              className="glass rounded-2xl p-6 hover-lift"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.08}s both` }}
            >
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-5 font-display text-2xl leading-tight">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductHighlights() {
  const products = [
    {
      img: boomImg,
      tag: "01 / Boom barrier",
      title: "Sentinel B-Series",
      body: "Up to 6 m arm, 0.9s rise, IP55 cabinet. Parking, toll and corporate lanes.",
    },
    {
      img: gateImg,
      tag: "02 / Sliding gate motor",
      title: "Miturtle SG-2200",
      body: "Up to 2,200 kg gate load. Soft start, encoder feedback, anti-crush.",
    },
    {
      img: accessImg,
      tag: "03 / Access control",
      title: "Veridian Reader",
      body: "Dual RFID + capacitive fingerprint, cloud or on-prem panels.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
        <div>
          <p className="eyebrow">Product highlights</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1] text-balance max-w-2xl">
            Three pillars. One control plane.
          </h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <Link
            to="/products"
            key={p.title}
            className="group glass rounded-3xl overflow-hidden hover-lift block"
            style={{ animation: `fade-up 0.6s ease-out ${i * 0.1}s both` }}
          >
            <div className="aspect-[4/3] overflow-hidden bg-black/40">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-primary">{p.tag}</p>
              <h3 className="mt-3 font-display text-3xl leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm">
                Specifications
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { k: "01", t: "In-house engineering", b: "Mechanicals, firmware and field-software built under one roof." },
    { k: "02", t: "Lifecycle accountability", b: "Single SLA covering supply, install and 24/7 service." },
    { k: "03", t: "Architectural finish", b: "Cabinet finishes color-matched to your brand or facade." },
    { k: "04", t: "Open integrations", b: "Wiegand, OSDP, Modbus, MQTT, REST — your stack, our hardware." },
    { k: "05", t: "High-cycle hardware", b: "Barriers tested to 5M cycles, motors to 1M operations." },
    { k: "06", t: "Real-time visibility", b: "Miturtle Live dashboard — telemetry, alarms, audit trail." },
  ];
  return (
    <section className="bg-[color:var(--surface)]/40 border-y border-white/5 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Miturtle</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1] text-balance">
            Specified by people who actually run the building.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {items.map((i) => (
            <div key={i.k} className="bg-[color:var(--surface)]/60 p-8 hover:bg-[color:var(--surface)]/90 transition-colors">
              <p className="font-display text-primary text-xl">{i.k}</p>
              <h3 className="mt-3 font-display text-2xl">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
      {
      q: "The barriers have run flawlessly across two monsoons. Miturtle's commissioning crew was the most disciplined we've worked with.",
      a: "Facilities Director · Class-A office tower, Bengaluru",
    },
    {
      q: "We replaced three vendors with Miturtle. One number to call, one dashboard, one SLA. That's the value.",
      a: "Head of Security · Hospitality group, UAE",
    },
    {
      q: "Their integration team plugged into our existing access stack in two days. No drama.",
      a: "CTO · Industrial logistics operator",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
      <div className="flex items-center gap-3 mb-4">
        <Clock className="h-4 w-4 text-primary" />
        <p className="eyebrow !mb-0">In service since 2014</p>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl leading-[1] text-balance max-w-3xl">
        What our clients say after the dust settles.
      </h2>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <figure
            key={i}
            className="glass rounded-2xl p-7 flex flex-col gap-5"
            style={{ animation: `fade-up 0.6s ease-out ${i * 0.1}s both` }}
          >
            <Quote className="h-5 w-5 text-primary" />
            <blockquote className="font-display text-xl leading-snug text-pretty">
              "{q.q}"
            </blockquote>
            <figcaption className="text-xs uppercase tracking-widest text-muted-foreground mt-auto">
              {q.a}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ContactBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
      <div className="relative overflow-hidden rounded-3xl glass-strong shadow-elevated p-10 sm:p-16">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Innovate · Integrate · Inspire</p>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-[0.95] text-balance">
              Tell us about your site. We'll come measure it.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl">
              On-site surveys are complimentary across India and the Gulf. Most quotes
              land in 48 hours.
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end gap-3 flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
            >
              Book a survey <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm hover:bg-white/10"
            >
              +91 99999 99999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
