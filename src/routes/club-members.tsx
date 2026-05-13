import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/club-members")({
  head: () => ({
    meta: [
      { title: "Club Members — Matwa Group" },
      { name: "description", content: "Curated deal flow vetted through actual working relationships, not pitch decks." },
      { property: "og:title", content: "Club Members — Matwa Group" },
      { property: "og:description", content: "Deal flow you can trust." },
    ],
  }),
  component: ClubPage,
});

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l-2 border-gold pl-6 py-2">
      <h3 className="font-serif text-xl text-navy mb-2">{title}</h3>
      <p className="text-navy/70 leading-relaxed">{body}</p>
    </div>
  );
}

function ClubPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav transparentOnTop={false} />
      <main className="pt-32">
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-5">For Club Members</p>
              <h1 className="font-serif text-5xl md:text-6xl text-navy leading-tight mb-6">
                Deal flow you can trust.
              </h1>
              <p className="text-lg text-navy/75 leading-relaxed max-w-2xl">
                Every company we bring to club members has been vetted the hard way — through an
                actual working relationship, not a pitch deck. You see fewer deals. Better ones.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-10">
            <Reveal><Pillar title="Curated, not crowdsourced" body="Members access deals reserved for the club, not listed publicly." /></Reveal>
            <Reveal delay={100}><Pillar title="Operational due diligence built in" body="We've already embedded with the founder. You get our real read, not a deck summary." /></Reveal>
            <Reveal delay={200}>
              <Link to="/contact" className="inline-block mt-6 bg-gold text-navy-deep px-8 py-3.5 font-medium hover:bg-gold/90 transition-colors">
                Apply to join →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
