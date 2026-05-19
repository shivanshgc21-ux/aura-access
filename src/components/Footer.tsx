import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[color:var(--surface)]/40 mt-32">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/30">
              <span className="block h-3 w-3 rounded-sm bg-primary" />
            </span>
            <span className="font-display text-2xl">Miturtle</span>
          </Link>
          <p className="mt-5 text-sm text-muted-foreground max-w-md text-pretty">
            Premium traffic automation and access control systems engineered for
            corporate campuses, hotels, parking infrastructure, and high-security
            facilities.
          </p>
          <p className="mt-6 font-display text-lg text-foreground/90">
            Innovate <span className="text-primary">·</span> Integrate{" "}
            <span className="text-primary">·</span> Inspire
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/products", "Products"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-primary" />
              Tower B, Industrial Park · Sector 18 · Gurugram
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+919999999999" className="hover:text-foreground">
                +91 99999 99999
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <a
                href="mailto:hello@miturtle.com"
                className="hover:text-foreground"
              >
                hello@miturtle.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Miturtle. All rights reserved.</p>
          <p>Engineered in India · Deployed worldwide</p>
        </div>
      </div>
    </footer>
  );
}
