import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grain">
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
