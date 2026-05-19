import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-boom-barrier.jpg";
import boomImg from "@/assets/product-boom-barrier.jpg";
import gateImg from "@/assets/product-sliding-gate.jpg";
import accessImg from "@/assets/product-access-control.jpg";
import parkingImg from "@/assets/gallery-parking.jpg";
import bioImg from "@/assets/gallery-biometric.jpg";
import slidingImg from "@/assets/gallery-sliding-gate.jpg";
import hotelImg from "@/assets/gallery-boom-hotel.jpg";

export default function GalleryRouteWrapper() {
  return <GalleryPage />;
}

const items = [
  { img: heroImg, t: "Corporate parking · Bengaluru", c: "Boom Barrier" },
  { img: hotelImg, t: "5-star hotel driveway · Dubai", c: "Boom Barrier" },
  { img: parkingImg, t: "Surface parking · Hyderabad", c: "Boom Barrier" },
  { img: slidingImg, t: "Logistics yard · Pune", c: "Sliding Gate Motor" },
  { img: gateImg, t: "Industrial perimeter · Chennai", c: "Sliding Gate Motor" },
  { img: bioImg, t: "Smart office · Gurugram", c: "Access Control" },
  { img: accessImg, t: "Corporate HQ · Mumbai", c: "Access Control" },
  { img: boomImg, t: "Toll plaza · NH-48", c: "Boom Barrier" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Selected <em className="text-primary not-italic">installations.</em>
          </>
        }
        subtitle="A small sample of deployments across India and the Gulf — parking, hospitality, industrial and smart-office environments."
        bgImage={heroImg}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl glass hover-lift ${
                i % 5 === 0 ? "sm:col-span-2 lg:row-span-2" : ""
              }`}
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.06}s both` }}
            >
              <img
                src={it.img}
                alt={it.t}
                loading="lazy"
                width={1280}
                height={960}
                className={`w-full h-full object-cover ${
                  i % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
                } group-hover:scale-105 transition-transform duration-700`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                <p className="text-[10px] uppercase tracking-widest text-primary">{it.c}</p>
                <p className="mt-1 font-display text-xl">{it.t}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
