import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/founders")({
  head: () => ({
    meta: [
      { title: "For Founders — Matwa Group" },
      { name: "description", content: "We don't lead with a term sheet. We lead with developers, designers, and operators embedded in your business." },
      { property: "og:title", content: "For Founders — Matwa Group" },
      { property: "og:description", content: "Your first unfair advantage." },
    ],
  }),
  component: FoundersPage,
});

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l-2 border-gold pl-6 py-2">
      <h3 className="font-serif text-xl text-navy mb-2">{title}</h3>
      <p className="text-navy/70 leading-relaxed">{body}</p>
    </div>
  );
}

function FoundersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav transparentOnTop={false} />
      <main className="pt-32">
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-5">For Founders</p>
              <h1 className="font-serif text-5xl md:text-6xl text-navy leading-tight mb-6">
                Your first unfair advantage.
              </h1>
              <p className="text-lg text-navy/75 leading-relaxed max-w-2xl">
                We don't lead with a term sheet. We lead with developers, designers, and operators
                embedded in your business. If we like what we see — and you like working with us —
                we invest.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-10">
            <Reveal><Pillar title="Technology Services" body="Development, design, digital marketing, UX, market entry — delivered by a senior team that builds product, not pitch decks." /></Reveal>
            <Reveal delay={100}><Pillar title="Operational Embedding" body="We work inside your business, not as advisors from the outside. Real seats. Real deliverables. Real accountability." /></Reveal>
            <Reveal delay={200}><Pillar title="Investment" body="Capital from a team that already knows your numbers, your customers, and the texture of your operation." /></Reveal>
            <Reveal delay={300}>
              <Link to="/contact" className="inline-block mt-6 bg-gold text-navy-deep px-8 py-3.5 font-medium hover:bg-gold/90 transition-colors">
                Work with us →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
