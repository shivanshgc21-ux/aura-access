import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { Mail, Phone, MapPin, Check, ArrowRight } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Helix Automation" },
      {
        name: "description",
        content:
          "Request a site survey, datasheet or quote. We respond within one business day.",
      },
      { property: "og:title", content: "Contact — Helix Automation" },
      { property: "og:description", content: "Request a survey or quote." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Invalid email").max(200),
  company: z.string().trim().max(120).optional(),
  phone: z.string().trim().max(40).optional(),
  interest: z.string().max(60),
  message: z.string().trim().min(10, "Tell us a bit more").max(1500),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk about <em className="text-primary not-italic">your site.</em>
          </>
        }
        subtitle="Surveys are complimentary across India and the Gulf. Most quotes land in 48 hours."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-4 space-y-6">
          {[
            { Icon: MapPin, t: "Visit", b: "Tower B, Industrial Park\nSector 18, Gurugram 122015" },
            { Icon: Phone, t: "Call", b: "+91 99999 99999\nMon–Sat · 09:00 – 19:00 IST" },
            { Icon: Mail, t: "Write", b: "hello@helix-automation.com\nsupport@helix-automation.com" },
          ].map(({ Icon, t, b }) => (
            <div key={t} className="glass rounded-2xl p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">{b}</p>
            </div>
          ))}
        </aside>

        <div className="lg:col-span-8">
          <div className="glass-strong rounded-3xl p-8 sm:p-10 shadow-elevated">
            {sent ? (
              <div className="py-10 text-center animate-[fade-up_0.5s_ease-out_both]">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 ring-1 ring-primary/50">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-3xl">Message received.</h3>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  A specialist will reach out within one business day. For urgent
                  service, call +91 99999 99999.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5" noValidate>
                <Field label="Name" name="name" error={errors.name} required />
                <Field label="Email" name="email" type="email" error={errors.email} required />
                <Field label="Company" name="company" error={errors.company} />
                <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">
                    Product interest
                  </label>
                  <select
                    name="interest"
                    defaultValue="Boom Barrier"
                    className="mt-2 w-full rounded-lg bg-[color:var(--surface)]/80 border border-white/10 px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                  >
                    {["Boom Barrier", "Sliding Gate Motor", "Access Control", "Multiple / Not sure"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your site, traffic volume and timeline."
                    className="mt-2 w-full rounded-lg bg-[color:var(--surface)]/80 border border-white/10 px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>
                <div className="sm:col-span-2 flex items-center justify-between flex-wrap gap-4 pt-2">
                  <p className="text-xs text-muted-foreground">
                    We respond within 1 business day · No spam, ever.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-elevated transition-shadow"
                  >
                    Send message <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-lg bg-[color:var(--surface)]/80 border border-white/10 px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
