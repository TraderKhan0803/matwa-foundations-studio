import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l-2 border-gold pl-5 py-1">
      <h4 className="font-serif text-lg text-navy mb-1">{title}</h4>
      <p className="text-sm text-navy/70 leading-relaxed">{body}</p>
    </div>
  );
}

export function SplitSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* For Founders */}
      <div className="bg-cream px-6 lg:px-16 py-20 lg:py-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-5">For Founders</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-6">
            Your first unfair advantage.
          </h2>
          <p className="text-navy/75 leading-relaxed mb-10 max-w-lg">
            We don't lead with a term sheet. We lead with developers, designers, and operators
            embedded in your business. If we like what we see — and you like working with us —
            we invest.
          </p>
          <div className="space-y-6 max-w-lg">
            <Pillar title="Technology Services" body="Development, design, digital marketing, UX, market entry." />
            <Pillar title="Operational Embedding" body="We work inside your business, not as advisors from the outside." />
            <Pillar title="Investment" body="Capital from a team that already knows your numbers." />
          </div>
          <Link to="/contact" className="inline-block mt-10 text-navy font-medium border-b-2 border-gold pb-1 hover:text-gold transition-colors">
            Work with us →
          </Link>
        </Reveal>
      </div>

      {/* For Club Members */}
      <div className="bg-white border-l border-border px-6 lg:px-16 py-20 lg:py-28">
        <Reveal delay={120}>
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-5">For Club Members</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-6">
            Deal flow you can trust.
          </h2>
          <p className="text-navy/75 leading-relaxed mb-10 max-w-lg">
            Every company we bring to club members has been vetted the hard way — through an
            actual working relationship, not a pitch deck. You see fewer deals. Better ones.
          </p>
          <div className="space-y-6 max-w-lg">
            <Pillar title="Curated, not crowdsourced" body="Members access deals reserved for the club, not listed publicly." />
            <Pillar title="Operational due diligence built in" body="We've already embedded with the founder. You get our real read, not a deck summary." />
          </div>
          <Link to="/contact" className="inline-block mt-10 text-navy font-medium border-b-2 border-gold pb-1 hover:text-gold transition-colors">
            Apply to join →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
